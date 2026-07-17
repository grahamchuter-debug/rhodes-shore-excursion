import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/rhodes-signature-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

/**
 * Future flagship concept only. Architecture lives here so the product can go live later
 * without a data-model change — see FUTURE_SIGNATURE_TOUR.md at the project root.
 * Do not present this as a bookable product anywhere in the UI while comingSoon is true.
 */
export const rhodesSignatureExperience = {
  slug: "rhodes-signature-experience",
  title: "Rhodes Signature: Lindos, Old Town and Aegean Views",
  seoTitle: "Rhodes Signature Experience — Future Small-Group Lindos & Old Town Day",
  metaDescription:
    "Preview a future small-group Rhodes signature day combining Lindos, medieval Old Town and Aegean viewpoints — designed around cruise timings. Not currently bookable.",
  tagline:
    "A future small-group day linking Lindos, the medieval Old Town and the island's finest coastal viewpoints — built around your ship, not a generic coach circuit.",
  overview:
    "Rhodes Signature is a product concept in preparation. The proposed experience would take a small number of guests to Lindos for the Acropolis and village, then back into Rhodes Old Town for the Street of the Knights and Palace of the Grand Master, with a coastal viewpoint stop along the way and a locally sourced lunch. It does not currently exist as a bookable excursion, and no dates, guest limits or prices are final.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Small-group by design",
      description: "A proposed intimate group size intended to avoid coach-tour queues at the Acropolis steps and the Palace gate.",
    },
    {
      emoji: "🏛️",
      title: "Lindos Acropolis included",
      description: "The Temple of Athena Lindia and the Knights' fortifications above the village would anchor the day.",
    },
    {
      emoji: "🏰",
      title: "Medieval Old Town in depth",
      description: "Street of the Knights, the Palace of the Grand Master and quieter old-town lanes beyond the main thoroughfare.",
    },
    {
      emoji: "🌊",
      title: "Aegean viewpoint stops",
      description: "A coastal pause planned for photography and orientation, chosen for light and sea conditions rather than a fixed brochure stop.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Rhodian lunch proposed as part of the day, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible routing",
      description: "Sequencing designed to adapt to ship time, heat, crowding at Lindos and the interests of each small group.",
    },
    {
      emoji: "🚢",
      title: "Cruise-first timing",
      description: "The future operating plan will be built backwards from all-aboard with a conservative return margin for the Lindos road.",
    },
    {
      emoji: "📸",
      title: "Two landscapes, one day",
      description: "Medieval stone and Aegean coastline in a single itinerary, rather than choosing one and skipping the other.",
    },
  ] satisfies SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Rhodes Signature now?",
      answer:
        "No. The experience is in preparation and is not currently available to book. This page describes the intended concept only.",
    },
    {
      question: "What would the future experience include?",
      answer:
        "The current concept includes a small group size, Lindos and its Acropolis, medieval Old Town, a coastal viewpoint stop, a local lunch and cruise-timed routing. Details may change before launch.",
    },
    {
      question: "Why combine Lindos and the Old Town in one day?",
      answer:
        "They are the island's two defining landscapes — a coastal hilltop sanctuary and a walled medieval city — and pairing them thoughtfully, with sensible timing, would let a long call cover both without treating either as an afterthought.",
    },
    {
      question: "What should I book in the meantime?",
      answer:
        "Use our current shore-excursion guides and editorial picks to compare bookable Old Town, Lindos, coastal and private-touring options for your call.",
    },
  ] satisfies FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: rhodesSignatureExperience.title,
    description:
      "A future small-group Lindos, Old Town and Aegean-viewpoint day. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}
