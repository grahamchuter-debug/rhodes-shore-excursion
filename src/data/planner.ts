import { SIGNATURE_EXPERIENCE_PATH, rhodesSignatureExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Old Town explorer",
    description: "A low-risk walking day using the port's proximity to the medieval city and your own return buffer.",
  },
  {
    id: "lindos",
    label: "First-time Lindos visitor",
    description: "A half-day road excursion for passengers with enough port time to enjoy the Acropolis without rushing.",
  },
  {
    id: "coast",
    label: "Coast and beach traveller",
    description: "A relaxed half-day at Anthony Quinn Bay, Faliraki or Tsambika rather than a full sightseeing itinerary.",
  },
  {
    id: "culture",
    label: "Food, culture and private touring",
    description: "A tailored day built around Rhodian food, culture and pace rather than a fixed coach schedule.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "oldtown", label: "Medieval Rhodes Old Town" },
  { id: "lindos", label: "Lindos & the Acropolis" },
  { id: "coast", label: "Coast & beaches" },
  { id: "food", label: "Food & wine" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
  { id: "private", label: "Private touring" },
];

type PlanKey = "independent" | "lindos" | "coast" | "culture";

export const RHODES_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Medieval Rhodes",
    summary:
      "The most flexible choice: walk from the port to the Street of the Knights, the Palace of the Grand Master and the Old Town's quieter lanes.",
    minimumHours: 3,
    links: [
      {
        label: "Rhodes Old Town Guide",
        href: "/rhodes-old-town-from-cruise-port/",
        why: "Walking route, key sights and return-to-ship timing.",
      },
      {
        label: "Old Town Walking Tour",
        href: "/shore-excursions/medieval-old-town-rhodes-walking-tour",
        why: "Guided context without committing to a long road day.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Walk from the port towards the Old Town's Marine Gate, or take a taxi if time or mobility is limited." },
      { time: "Morning", text: "Street of the Knights and the Palace of the Grand Master before the busiest midday hours." },
      { time: "Midday", text: "Old Town lanes, the Archaeological Museum area and lunch near Socratous Street." },
      { time: "Afternoon", text: "Shopping, a quiet café or an easy walk back towards the port with time in hand." },
    ],
  },
  lindos: {
    headline: "Lindos & Acropolis Half-Day",
    summary:
      "The first-time landmark choice when your call is long enough for the road journey and the Acropolis climb.",
    minimumHours: 6,
    links: [
      {
        label: "Lindos & the Acropolis Half-Day",
        href: "/shore-excursions/private-ancient-lindos",
        why: "Cruise-timed transport and a paced Acropolis visit.",
      },
      {
        label: "Old Town or Lindos?",
        href: "/compare/rhodes-old-town-or-lindos",
        why: "Compare travel time, walking demands and what each destination offers.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the organised excursion promptly at the confirmed terminal point." },
      { time: "Morning", text: "Drive to Lindos along the east-coast road; allow around 50–60 minutes each way." },
      { time: "Midday", text: "Acropolis climb and village time, with lunch or a swim if your itinerary allows it." },
      { time: "Afternoon", text: "Return drive to Rhodes Town, timed with a conservative buffer before all-aboard." },
    ],
  },
  coast: {
    headline: "Rhodes Coast & Beaches",
    summary:
      "Choose the coast for Anthony Quinn Bay, Faliraki or Tsambika and a more relaxed open-air day than a full sightseeing itinerary.",
    minimumHours: 4,
    links: [
      {
        label: "Rhodes Beaches & Coast Half-Day",
        href: "/shore-excursions/anthony-quinn-kallithea-traganou-cruise",
        why: "Transfer, swim time and road timing from Rhodes Town.",
      },
      {
        label: "Private Rhodes Shore Excursion",
        href: "/shore-excursions/private-guide-vehicle-full-day",
        why: "Flexible timing and stops for one party.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the transfer and leave Rhodes Town before the midday heat builds." },
      { time: "Morning", text: "Arrive at your chosen bay or beach and settle in for swimming and relaxing." },
      { time: "Midday", text: "Lunch nearby or a packed option, depending on your itinerary." },
      { time: "Afternoon", text: "Return to Rhodes Town with a conservative margin before all-aboard." },
    ],
  },
  culture: {
    headline: "Rhodian Food, Culture & Private Touring",
    summary:
      "For travellers who want Rhodian food and culture at their own pace, or a private route combining several experience pillars.",
    minimumHours: 4,
    links: [
      {
        label: "A Taste of Rhodes",
        href: "/shore-excursions/a-taste-of-rhodes",
        why: "A small-group food and culture visit to a foothill village co-op and kafeneio.",
      },
      {
        label: "Private Rhodes Shore Excursion",
        href: "/shore-excursions/private-guide-vehicle-full-day",
        why: "A custom route shaped around your party and interests.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet your guide or private driver at the agreed terminal point." },
      { time: "Morning", text: "Old Town tastings or the first stop of your private route." },
      { time: "Midday", text: "A relaxed lunch and further stops based on your stated interests." },
      { time: "Afternoon", text: "Final stop and a paced return to the ship with time in hand." },
    ],
  },
};

function usableHours(input: PlannerInput): number {
  if (!input.arrivalTime || !input.departureTime) return 7.5;
  const [arrivalHour, arrivalMinute] = input.arrivalTime.split(":").map(Number);
  const [departureHour, departureMinute] = input.departureTime.split(":").map(Number);
  const elapsed = departureHour * 60 + departureMinute - arrivalHour * 60 - arrivalMinute;
  return Math.max(0, elapsed / 60 - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    interests.includes("independent") ||
    interests.includes("oldtown") ||
    hours < 5
  ) {
    return "independent";
  }
  if ((interests.includes("food") || interests.includes("private")) && input.mobility !== "limited") return "culture";
  if (interests.includes("coast") || input.mobility === "limited") return "coast";
  if (interests.includes("lindos") || interests.includes("photography")) return "lindos";
  return hours >= 6 ? "lindos" : "independent";
}

export function generateRhodesPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = RHODES_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: rhodesSignatureExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future small-group Lindos and Old Town concept — in preparation and not bookable.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend, so consider the Old Town instead.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Rhodes Cruise Port Guide",
        href: "/rhodes-cruise-port-guide/",
        why: "Berth walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Rhodes Ship Schedule",
        href: "/rhodes-cruise-schedule/",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Rhodes options",
        href: "/compare",
        why: "Review honest trade-offs before booking a Lindos day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Rhodes terminal 60–90 minutes before all-aboard; a Lindos excursion needs additional road contingency.",
      },
    ],
  };
}
