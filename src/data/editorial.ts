import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Rhodes cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "The medieval Old Town, the Palace of the Grand Master and the Street of the Knights." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Independent", description: "A realistic self-guided Old Town day within easy reach of the ship." },
  { id: "best-coastal", label: "Best Coastal Experience", shortLabel: "Coastal", description: "Anthony Quinn Bay, Faliraki, Tsambika and the island's turquoise coves." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "The Lindos Acropolis above two bays, and the island's finest coastal viewpoints." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Lindos and Old Town small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Flexible Old Town and coast options with manageable travel and walking." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "The Lindos Acropolis, medieval lanes and Aegean coastal light." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Pitaroudia, melekouni, tavernas and Rhodian wine in the Old Town." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Quieter corners of the Old Town and coast beyond the standard coach route." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Old Town highlights for calls without enough usable time to reach Lindos." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Medieval Rhodes Old Town Walking Tour — the Street of the Knights and Palace of the Grand Master on a carefully timed, low-risk excursion.",
    href: "/shore-excursions/medieval-old-town-rhodes-walking-tour",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "🏛️",
    label: "Best First-Time Tour",
    description: "Lindos & the Acropolis for first-time visitors with a long enough port call for the road journey and the climb.",
    href: "/shore-excursions/private-ancient-lindos",
    cta: "Discover Lindos",
  },
  {
    id: "coastal",
    emoji: "🏖️",
    label: "Best Coastal Half-Day",
    description: "Rhodes Beaches & Coast — Anthony Quinn Bay, Faliraki or Tsambika for a gentler day of Aegean colour.",
    href: "/shore-excursions/anthony-quinn-kallithea-traganou-cruise",
    cta: "See the coast",
  },
  {
    id: "food-wine",
    emoji: "🍷",
    label: "Best Food & Wine",
    description: "A Taste of Rhodes — a small-group visit to a foothill village co-op, a traditional kafeneio and a home-style lunch away from the coach routes.",
    href: "/shore-excursions/a-taste-of-rhodes",
    cta: "Taste Rhodes",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Private Tour",
    description: "Private Rhodes Shore Excursion — a route built around your party's pace, mobility and priorities for the day.",
    href: "/shore-excursions/private-guide-vehicle-full-day",
    cta: "View private tour",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Lindos — the Acropolis above St Paul's Bay provides the single most photographed view in the Aegean.",
    href: "/lindos-from-rhodes-cruise-port/",
    cta: "Photograph Lindos",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Rhodes Old Town or a coastal half-day keeps road time sensible and allows mixed-age families to set an easier pace.",
    href: "/rhodes-old-town-or-lindos/",
    cta: "Compare family days",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Best Independent Day",
    description: "Independent Rhodes Old Town — the Palace of the Grand Master, Street of the Knights and harbour with a generous ship buffer.",
    href: "/can-you-walk-from-rhodes-cruise-port/",
    cta: "Use the DIY guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Rhodes Signature Experience",
    description: "Rhodes Signature: Lindos, Old Town and Aegean Views — a future small-group day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
