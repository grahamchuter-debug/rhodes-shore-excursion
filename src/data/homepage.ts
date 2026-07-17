import type { ExperienceCard, FAQ, VisitorType } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { experiencePaths } from "./experiences";

export const homepageTagline = "Find the best version of your day in Rhodes";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Rhodes for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a realistic Rhodes Old Town, Lindos or coast day with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Rhodes",
    shortLabel: "First visit",
    description:
      "Compare Lindos and the medieval Old Town before choosing the experience that best fits your first visit.",
    href: "/rhodes-old-town-or-lindos/",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Walk into Rhodes Old Town for the Palace of the Grand Master, the Street of the Knights and the harbour at your own pace.",
    href: "/can-you-walk-from-rhodes-cruise-port/",
    cta: "Explore independently",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and budget for a tailored Rhodes plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

/**
 * Homepage experience cards — mirrors the four core experience pillars in
 * `experiences.ts` so the two stay in sync without duplicating copy.
 */
export const experienceCards: ExperienceCard[] = experiencePaths;

export const coreSections: HomeSection[] = [
  {
    slug: "shore-excursions",
    number: "01",
    title: "Shore Excursions",
    description: "Old Town walking tours, Lindos excursions, coastal half-days and private touring — matched to cruise-port timings.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "cruise-port-guide",
    number: "02",
    title: "Rhodes Cruise Port Guide",
    description: "Berths, walking routes, taxis, city access and practical return-to-ship planning.",
    href: "/rhodes-cruise-port-guide/",
    cta: "Read the port guide",
  },
  {
    slug: "compare",
    number: "03",
    title: "Compare Your Options",
    description: "Old Town or Lindos? Independent or guided? Clear comparisons without overselling.",
    href: "/compare",
    cta: "Compare day trips",
  },
  {
    slug: "independent",
    number: "04",
    title: "Explore Independently",
    description: "A walkable Old Town itinerary with transport, food and return-buffer advice.",
    href: "/can-you-walk-from-rhodes-cruise-port/",
    cta: "Plan a DIY day",
  },
  {
    slug: "ship-schedules",
    number: "05",
    title: "Ship Schedules",
    description: "Check published Rhodes arrivals and departures before committing to a Lindos day.",
    href: "/rhodes-cruise-schedule/",
    cta: "View schedules",
  },
  {
    slug: "faq",
    number: "06",
    title: "Rhodes FAQs",
    description: "Honest answers on port access, Lindos logistics, walking distances and timing.",
    href: "/faq",
    cta: "Read the FAQs",
  },
  {
    slug: "signature",
    number: "07",
    title: "Rhodes Signature Experience",
    description: "A future Lindos and Old Town small-group flagship, currently in preparation.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
  },
  {
    slug: "wow-collection",
    number: "08",
    title: "The Wow Collection",
    description: "Future exclusive small-group Rhodes experiences designed around cruise passengers.",
    href: "/wow-collection",
    cta: "Discover the collection",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I walk from Rhodes cruise port to the Old Town?",
      answer:
        "Often yes. Depending on your berth, the medieval Old Town's Marine Gate area is typically a walk of around 15–20 minutes from the port. Confirm your exact berth and any port shuttle on arrival, as Rhodes' cruise operations can vary by call and by season.",
    },
    {
      question: "How far is Lindos from the Rhodes cruise port?",
      answer:
        "Lindos is roughly 47–50 km south of Rhodes Town, on the island's east coast. The road journey usually takes about 50–60 minutes each way by coach or taxi, longer in heavy summer traffic. It is not a walking distance and needs organised transport.",
    },
    {
      question: "Is Rhodes Old Town enough for a short cruise call?",
      answer:
        "Yes for many passengers. The Old Town's Street of the Knights, Palace of the Grand Master and surrounding lanes sit close to the port and can fill a satisfying two-to-four-hour visit without the road time that Lindos requires.",
    },
    {
      question: "Should first-time visitors choose Lindos or the Old Town?",
      answer:
        "If you only have time or energy for one, choose Lindos for the single most photographed view in the Aegean on a long call, or the Old Town for a lower-risk, walkable day when your call is shorter or you would rather explore independently.",
    },
    {
      question: "How early should I return to the ship in Rhodes?",
      answer:
        "Aim to reach the terminal 60–90 minutes before all-aboard for an Old Town day. Allow more margin when returning from Lindos or the coast, since the coastal road can be busy and Rhodes frequently receives several ships in port on the same day.",
    },
  ];
}
