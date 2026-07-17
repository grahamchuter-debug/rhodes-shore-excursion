/**
 * Central cruise-positioning copy for homepage A/B readiness.
 * Swap `message` (or toggle flags) here — do not scatter strings across components.
 *
 * Future Variant B (inactive): "Everything here is built around your time in port."
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message:
    "Cruise-focused planning · Independent excursions · Secure booking · Local destination guidance",
  /** Reserved for a future split test — do not activate. */
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export const cruisePassengerSnapshot = [
  { label: "Cruise destination", value: "Rhodes Town" },
  { label: "Best known for", value: "Medieval Old Town and Lindos" },
  { label: "Best for", value: "History, scenery, beaches and island touring" },
  {
    label: "Old Town access",
    value: "Usually a short walk from the cruise port (exact berth can vary)",
  },
  { label: "Flagship excursion", value: "Lindos and the Acropolis" },
  { label: "Independent option", value: "Rhodes Old Town and Mandraki Harbour" },
  {
    label: "Planning priority",
    value: "Allow sufficient transport and visiting time for Lindos",
  },
  { label: "Currency", value: "Euro" },
] as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food";
}

export const dayAshoreIntro =
  "The essential things cruise passengers should know before exploring Rhodes.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "time-in-port",
    title: "Typical time in port",
    body: "Most cruise calls allow around 7–10 hours ashore, although passengers should always check their own ship schedule and confirm all-aboard time.",
    icon: "clock",
  },
  {
    id: "excursion-length",
    title: "Ideal excursion length",
    body: "Lindos and its Acropolis usually need 4–6 hours including the road; Rhodes Old Town can be explored well in 2–4 hours on foot from the port.",
    icon: "route",
  },
  {
    id: "walking-level",
    title: "Walking level",
    body: "Moderate. The Old Town's cobbled lanes are broadly walkable, while the path up to the Lindos Acropolis is stepped and can be busy and hot by midday.",
    icon: "walk",
  },
  {
    id: "best-early-stop",
    title: "Best early stop",
    body: "Start at Lindos or the Palace of the Grand Master earlier in the day, before the heat builds and coach groups fill the same narrow spaces.",
    icon: "sunrise",
  },
  {
    id: "do-not-miss",
    title: "Do not miss",
    body: "The view from the Lindos Acropolis across the twin bays, and a slow walk along the Street of the Knights in the Old Town.",
    icon: "viewpoint",
  },
  {
    id: "local-flavour",
    title: "Local flavour",
    body: "Make time for a Rhodian lunch, a taste of local wine or melekouni before returning to the ship — the Old Town has options within easy reach of the port.",
    icon: "food",
  },
];

export interface TravellerRecommendation {
  id: string;
  travellerType: string;
  recommendation: string;
  reason: string;
  href: string;
}

/**
 * Traveller type → recommended experience mapping, used to power quick-decision
 * copy on the homepage and cruise planner. Keep aligned with `experiencePaths`
 * in `experiences.ts` and the guide slugs in `guides.ts`.
 */
export const travellerRecommendations: TravellerRecommendation[] = [
  {
    id: "first-time",
    travellerType: "First time in Rhodes",
    recommendation: "Lindos & its Acropolis",
    reason: "The island's single most memorable landmark — a hilltop sanctuary above two beautiful bays.",
    href: "/lindos-from-rhodes-cruise-port/",
  },
  {
    id: "history",
    travellerType: "History and architecture focus",
    recommendation: "Medieval Rhodes Old Town",
    reason: "A UNESCO-listed walled city with the Street of the Knights and the Palace of the Grand Master.",
    href: "/rhodes-old-town-from-cruise-port/",
  },
  {
    id: "short-call",
    travellerType: "Short call or late arrival",
    recommendation: "Rhodes Old Town on foot",
    reason: "Usually a short walk from the port with no road transfer required, so it fits a reduced window.",
    href: "/rhodes-old-town-from-cruise-port/",
  },
  {
    id: "relaxation",
    travellerType: "Beach and relaxation seeker",
    recommendation: "Coast and beaches",
    reason: "Anthony Quinn Bay, Faliraki and Tsambika offer a gentler alternative to a full sightseeing day.",
    href: "/rhodes-beaches-from-the-cruise-port/",
  },
  {
    id: "food-culture",
    travellerType: "Food and culture lover",
    recommendation: "Island flavours and private tours",
    reason: "A tailored route to taste Rhodian food and culture at a pace a coach itinerary rarely allows.",
    href: "/private-rhodes-shore-excursions/",
  },
  {
    id: "independent",
    travellerType: "Prefers independent exploring",
    recommendation: "Walk the Old Town yourself",
    reason: "Rhodes Old Town rewards independent walking; Lindos needs organised transport instead.",
    href: "/can-you-walk-from-rhodes-cruise-port/",
  },
  {
    id: "planner",
    travellerType: "Wants help deciding",
    recommendation: "Use the cruise planner",
    reason: "Tell us your port hours, party and interests for a tailored Rhodes plan.",
    href: "/cruise-planner",
  },
];
