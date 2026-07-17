import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import rhodesSchedule from "./imported-schedules/rhodes.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Rhodes cruise ship schedules?",
    answer:
      "The calls listed here are illustrative samples used to demonstrate how the schedule works — they are not a live feed of confirmed Rhodes port calls. Ship names, dates, times and berths can all change. Always confirm your own call directly with your cruise line before booking excursions or planning your day.",
  },
  {
    question: "Where do cruise ships berth in Rhodes?",
    answer:
      "Most larger ships use the Akandia cruise terminal south of Rhodes Town's old harbour; some smaller vessels use a berth nearer Mandraki harbour. Always check the assigned berth on the day, since Rhodes' cruise operations run under the Municipal Port Fund of South Dodecanese and arrangements can vary by call.",
  },
  {
    question: "Is a Rhodes call long enough for Lindos?",
    answer:
      "A call of around six or more usable hours can usually support a Lindos half-day with a sensible return buffer. Calls shorter than that are better suited to Rhodes Old Town or a nearby coastal stop.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Check whether your berth is at Akandia or nearer Mandraki before estimating walking time",
  "Book Lindos excursions with enough margin for coastal-road traffic in peak season",
  "Expect busier taxi ranks and Old Town lanes on days when several ships are in port",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "rhodes",
    name: "Rhodes",
    country: "Greece",
    seoTitle: "Rhodes Cruise Ship Schedule — Aegean Port Calls",
    metaDescription:
      "Rhodes cruise ship schedule for 2026 and 2027 planning, with illustrative sample arrivals, departures and berths for Rhodes shore excursions.",
    intro:
      "Rhodes is one of the busiest cruise ports in the Aegean, with the medieval Old Town close to the harbour and a full or half-day route to Lindos and its Acropolis.",
    description:
      "The gateway to the Dodecanese — walk into medieval Rhodes or use your port call to reach Lindos and the island's Aegean coastline.",
    scheduleOverview:
      "The entries below are a small, clearly marked illustrative sample and do not represent a verified or complete list of Rhodes port calls. We do not have a live feed of confirmed cruise schedules for Rhodes. Please treat every date, ship and time here as indicative only, and confirm your actual call directly with your cruise line before making any plans or bookings.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  rhodes: rhodesSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
