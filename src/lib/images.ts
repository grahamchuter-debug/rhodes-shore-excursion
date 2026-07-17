export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img("hero-home", "Lindos Acropolis above the Aegean — the view that anchors a Rhodes cruise day"),
  ogDefault: img("og-default", "Rhodes cruise planning — medieval Old Town, Lindos and the Aegean coast"),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Rhodes Shore Excursion",
  },
  port: img("cruise-port", "Rhodes cruise port waterfront — gateway to the Old Town and Lindos"),
} as const;

/**
 * Generic subject buckets. Base filenames are shared with the image pipeline
 * (see scripts/optimize-images.mjs) and are populated by `npm run download:images`.
 * Keys are intentionally generic so data files can reference a semantic bucket
 * (e.g. "historic", "coast", "private") without being tied to one specific site.
 */
export const subjectImages: Record<string, SiteImage> = {
  alhambra: img("alhambra", "Palace of the Grand Master and the Old Town's medieval fortifications, Rhodes"),
  granada: img("granada", "Lindos village and the Acropolis hillside, Rhodes"),
  ronda: img("ronda", "Lindos Acropolis above St Paul's Bay, Rhodes"),
  caminito: img("caminito", "Coastal cliffs and viewpoints along the Rhodes shoreline"),
  mijas: img("mijas", "Whitewashed lanes of a Rhodes hillside village"),
  historic: img("historic", "Street of the Knights in the medieval Old Town of Rhodes"),
  alcazaba: img("alcazaba", "Fortified walls of the Old Town overlooking Rhodes harbour"),
  coast: img("coast", "Rhodes coastline and turquoise bay near the cruise port"),
  "white-villages": img("white-villages", "Hillside village streets and terraces on Rhodes"),
  wine: img("wine", "Rhodian wine and local food culture"),
  walking: img("walking", "Walking the Rhodes Old Town from the cruise terminal"),
  photography: img("photography", "Photography viewpoints at Lindos and the Rhodes coast"),
  private: img("private", "Private Rhodes shore excursion from the cruise port"),
  food: img("food", "Rhodian food culture in the Old Town"),
  family: img("family", "Family exploring Rhodes from a cruise ship"),
  compare: img("compare", "Comparing Rhodes cruise excursion options from the port"),
  port: img("cruise-port", "Rhodes cruise terminal"),
  highlights: img("alhambra", "Rhodes highlights from the cruise port"),
  city: img("historic", "Rhodes Old Town from the cruise port"),
  history: img("alcazaba", "Historic Rhodes monuments and Knights-era heritage"),
  "hero-home": img("hero-home", "Lindos and the Aegean coast — Rhodes cruise gateway hero image"),
  palace: img("alhambra", "Interior of the Palace of the Grand Master, Rhodes Old Town"),
  lindos: img("ronda", "Lindos Acropolis and the village below, Rhodes"),
  "old-town": img("historic", "Medieval lanes of the Rhodes Old Town"),
  scenic: img("photography", "Scenic viewpoint over Rhodes and the Aegean"),
  kayak: img("coast", "Sea kayaking along the Rhodes coastline"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "exclusive-medieval-town-of-rhodes": "palace",
  "best-of-lindos-and-rhodes": "lindos",
  "anthony-quinn-kallithea-traganou-cruise": "coast",
  "rhodes-back-country-adventure": "scenic",
  "lindos-on-your-own": "lindos",
  "sea-kayaking-the-pirates-route": "kayak",
  "butterfly-valley-and-wine-tasting": "wine",
  "medieval-old-town-rhodes-walking-tour": "old-town",
  "a-taste-of-rhodes": "food",
  "rhodes-fishing-boat-trip": "coast",
  "rhodes-city-old-town-segway": "old-town",
  "profitis-ilias-mountain-hike": "scenic",
  "private-ancient-lindos": "lindos",
  "private-ancient-lindos-and-rhodes": "lindos",
  "private-culinary-delights-of-rhodes": "food",
  "private-guide-vehicle-full-day": "private",
  "private-guide-vehicle-half-day": "private",
  "private-lindos-and-beach": "lindos",
  "private-lindos-kallithea-panoramic": "lindos",
  "private-rhodes-city-tour": "old-town",
  "private-rhodes-highlights": "scenic",
  "private-vehicle-full-day": "private",
  "private-vehicle-half-day": "private",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("historic");

const highlightImageKeys: Record<string, string> = {
  "palace-of-the-grand-master": "palace",
  "kamiros-ancient-city": "history",
  "symi-island-boat-trip": "coast",
  "anthony-quinn-bay-rhodes": "coast",
};

const comparisonImageKeys: Record<string, string> = {
  "rhodes-old-town-or-lindos": "compare",
  "can-you-walk-from-rhodes-cruise-port": "walking",
  "best-rhodes-shore-excursions": "compare",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getGuideImage(key: string): SiteImage {
  return pick(key in subjectImages ? key : "historic");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("historic");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("coast");
}

export const guidesHubImage = pick("historic");
