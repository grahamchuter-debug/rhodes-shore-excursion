import { getHighlightBySlug, getAllHighlightSlugs } from "@/data/highlights";
import type { AttractionPage } from "@/data/types";

/**
 * `/guides/[slug]` only serves attraction "highlight" pages. The substantive
 * GuidePage entries in `@/data/guides` each have their own dedicated
 * root-level route (e.g. `/rhodes-old-town-from-cruise-port/`) so they are
 * intentionally excluded here to avoid serving duplicate content at two URLs.
 */
export type GuideEntry = { kind: "highlight"; page: AttractionPage };

export function getGuideBySlug(slug: string): GuideEntry | undefined {
  const highlight = getHighlightBySlug(slug);
  if (highlight) return { kind: "highlight", page: highlight };
  return undefined;
}

export function getAllGuideSlugs(): string[] {
  return getAllHighlightSlugs();
}
