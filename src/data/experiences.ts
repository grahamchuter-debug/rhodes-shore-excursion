import type { ExperienceCard } from "./types";

/**
 * The four core experience pillars for Rhodes — see AGENTS.md "Experience pillars".
 * These drive the homepage experience selector and are the canonical entry points
 * into the site's four main content branches. `imageKey` must match an existing
 * key in `subjectImages` (src/lib/images.ts) until Rhodes-specific photography is
 * sourced via `npm run download:images`.
 */
export const experiencePaths: ExperienceCard[] = [
  {
    slug: "medieval-rhodes",
    title: "Medieval Rhodes",
    description:
      "Walk the Street of the Knights, the Palace of the Grand Master and the old-town lanes inside the walls — usually a short distance from the port.",
    href: "/rhodes-old-town-from-cruise-port/",
    cta: "Explore Rhodes Old Town",
    imageKey: "historic",
  },
  {
    slug: "lindos-acropolis",
    title: "Lindos and its Acropolis",
    description:
      "A hilltop sanctuary above two turquoise bays, and one of the most photographed views in the Aegean — reached by organised transport, not on foot.",
    href: "/lindos-from-rhodes-cruise-port/",
    cta: "Discover Lindos",
    imageKey: "photography",
  },
  {
    slug: "coast-and-beaches",
    title: "Coast and Beaches",
    description:
      "Anthony Quinn Bay, Faliraki and Tsambika — a gentler day of Aegean colour for passengers who want sea and shade over sightseeing.",
    href: "/rhodes-beaches-from-the-cruise-port/",
    cta: "See Scenic Rhodes",
    imageKey: "coast",
  },
  {
    slug: "island-flavours-private-tours",
    title: "Island Flavours & Private Tours",
    description:
      "Rhodian food, wine and culture at your own pace, with a private vehicle shaped around your party rather than a fixed coach itinerary.",
    href: "/private-rhodes-shore-excursions/",
    cta: "Find Your Experience",
    imageKey: "private",
  },
];

export function getExperiencePathBySlug(slug: string): ExperienceCard | undefined {
  return experiencePaths.find((p) => p.slug === slug);
}
