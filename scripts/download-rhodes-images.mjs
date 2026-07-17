#!/usr/bin/env node
/**
 * Download Rhodes-specific images from Wikimedia Commons (CC-licensed).
 * Filenames keep pipeline-compatible bases used by src/lib/images.ts.
 */
import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA =
  "RhodesShoreExcursion/1.0 (https://rhodesshoreexcursion.com; image setup)";

/** Map output basename → Wikimedia Commons file candidates (first success wins). */
const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Lindos Rhodes.jpg",
    "File:Acropolis of Lindos.jpg",
    "File:Lindos, Rhodes, Greece.jpg",
  ],
  "og-default.jpg": [
    "File:Rhodes Old Town.jpg",
    "File:Medieval City of Rhodes.jpg",
    "File:Rhodes Greece.jpg",
  ],
  "cruise-port.jpg": [
    "File:Rhodes harbour.jpg",
    "File:Mandraki harbour Rhodes.jpg",
    "File:Port of Rhodes.jpg",
  ],
  // Mapped in images.ts as palace / historic medieval subjects
  "alhambra.jpg": [
    "File:Palace of the Grand Master of the Knights of Rhodes.jpg",
    "File:Palace of the Grand Master Rhodes.jpg",
    "File:Grand Master's Palace Rhodes.jpg",
  ],
  "granada.jpg": [
    "File:Lindos village.jpg",
    "File:Lindos Rhodes Greece.jpg",
    "File:Lindos.jpg",
  ],
  "ronda.jpg": [
    "File:Acropolis of Lindos.jpg",
    "File:Lindos Acropolis.jpg",
    "File:Lindos Rhodes.jpg",
  ],
  "caminito.jpg": [
    "File:Anthony Quinn Bay Rhodes.jpg",
    "File:Faliraki Beach Rhodes.jpg",
    "File:Rhodes beach.jpg",
  ],
  "mijas.jpg": [
    "File:Lindos white houses.jpg",
    "File:Lindos streets.jpg",
    "File:Lindos Rhodes Greece.jpg",
  ],
  "historic.jpg": [
    "File:Street of the Knights Rhodes.jpg",
    "File:Ippoton Street Rhodes.jpg",
    "File:Rhodes Old Town street.jpg",
  ],
  "alcazaba.jpg": [
    "File:Walls of Rhodes.jpg",
    "File:Rhodes fortifications.jpg",
    "File:Medieval walls Rhodes.jpg",
  ],
  "food.jpg": [
    "File:Greek salad.jpg",
    "File:Meze Greece.jpg",
    "File:Greek food.jpg",
  ],
  "wine.jpg": [
    "File:Greek wine.jpg",
    "File:Wine tasting.jpg",
  ],
  "coast.jpg": [
    "File:St Paul's Bay Lindos.jpg",
    "File:Anthony Quinn Bay.jpg",
    "File:Rhodes coastline.jpg",
  ],
  "white-villages.jpg": [
    "File:Lindos Rhodes.jpg",
    "File:Lindos village.jpg",
  ],
  "compare.jpg": [
    "File:Rhodes Old Town.jpg",
    "File:Lindos Rhodes.jpg",
  ],
  "family.jpg": [
    "File:Mandraki harbour Rhodes.jpg",
    "File:Rhodes harbour.jpg",
  ],
  "walking.jpg": [
    "File:Street of the Knights Rhodes.jpg",
    "File:Rhodes Old Town street.jpg",
  ],
  "photography.jpg": [
    "File:Acropolis of Lindos.jpg",
    "File:Lindos Rhodes.jpg",
  ],
  "private.jpg": [
    "File:Rhodes Greece countryside.jpg",
    "File:Rhodes island.jpg",
    "File:Rhodes coastline.jpg",
  ],
};

async function commonsUrl(fileTitle) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", fileTitle);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", "2400");
  api.searchParams.set("format", "json");
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  const pages = data?.query?.pages ?? {};
  for (const page of Object.values(pages)) {
    const info = page?.imageinfo?.[0];
    if (info?.thumburl) return info.thumburl;
    if (info?.url) return info.url;
  }
  return null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Download ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  mkdirSync(SOURCE, { recursive: true });

  for (const [outName, candidates] of Object.entries(IMAGE_FILES)) {
    const dest = join(OUT, outName);
    const srcLog = join(SOURCE, outName.replace(/\.jpg$/, ".txt"));
    let ok = false;
    for (const candidate of candidates) {
      try {
        console.log(`Trying ${outName} ← ${candidate}`);
        const url = await commonsUrl(candidate);
        if (!url) {
          console.warn(`  no URL for ${candidate}`);
          continue;
        }
        const bytes = await download(url, dest);
        writeFileSync(
          srcLog,
          `file: ${candidate}\nurl: ${url}\nbytes: ${bytes}\nua: ${UA}\n`,
        );
        console.log(`  OK ${outName} (${bytes} bytes)`);
        ok = true;
        break;
      } catch (err) {
        console.warn(`  fail ${candidate}: ${err.message}`);
      }
    }
    if (!ok) {
      console.error(`FAILED ${outName}`);
    }
  }

  // Ensure logo mark exists (copy SVG if present from public)
  const logo = join(OUT, "logo-mark.svg");
  if (!existsSync(logo)) {
    const fallback = join(import.meta.dirname, "..", "public", "images", "logo-mark.svg");
    if (existsSync(fallback)) copyFileSync(fallback, logo);
  }

  console.log("Done. Run: npm run optimize:images");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
