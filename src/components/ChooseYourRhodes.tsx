"use client";

import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const CHOOSE_CARDS = [
  {
    slug: "medieval-rhodes",
    emoji: "🏰",
    title: "Medieval Rhodes",
    tagline: "The Street of the Knights, the Palace of the Grand Master and centuries of layered history inside the Old Town's walls.",
    highlights: [
      "A UNESCO-listed medieval city, usually a short walk from the port",
      "Street of the Knights and the Palace of the Grand Master",
      "Suleiman Mosque and the Jewish Quarter",
      "Genuinely walkable — independent or guided",
      "The safest choice for shorter port calls",
    ],
    cta: "Explore the Old Town",
    href: "/rhodes-old-town-from-cruise-port/",
    imageKey: "historic",
    wide: true,
  },
  {
    slug: "lindos",
    emoji: "🌊",
    title: "Lindos and its Acropolis",
    tagline: "A hilltop sanctuary above two turquoise bays — one of the most photographed views in the Aegean.",
    highlights: [
      "An ancient temple layered inside Knights-era fortifications",
      "Views over St Paul's Bay and the main Lindos beach",
      "A genuine half-day commitment with a real climb",
      "Best on a long enough call, with organised transport",
      "Our Editor's Choice for the island's defining view",
    ],
    cta: "Discover Lindos",
    href: "/lindos-from-rhodes-cruise-port/",
    imageKey: "photography",
    wide: true,
  },
  {
    slug: "coast",
    emoji: "🏖️",
    title: "Coast & Beaches",
    tagline: "Anthony Quinn Bay, Faliraki and Tsambika — Aegean colour without a full sightseeing itinerary.",
    highlights: [
      "Pine-backed coves and longer sandy stretches",
      "A relaxed half-day alternative to sightseeing",
      "No climb, unlike the Lindos Acropolis",
      "Good for families and mixed-mobility groups",
    ],
    cta: "See the coast",
    href: "/rhodes-beaches-from-the-cruise-port/",
    imageKey: "coast",
    wide: false,
  },
  {
    slug: "food",
    emoji: "🍷",
    title: "Food & Culture",
    tagline: "Pitaroudia, melekouni and Rhodian wine, from Old Town tavernas to a village co-op in the foothills.",
    highlights: [
      "Rhodian cooking and traditional produce",
      "Village life away from the coach routes",
      "Easy timing close to the ship, or a small-group day trip",
      "A different angle on the island than temples or beaches",
    ],
    cta: "Taste Rhodes",
    href: "/shore-excursions/a-taste-of-rhodes",
    imageKey: "food",
    wide: false,
  },
  {
    slug: "historic",
    emoji: "🏛️",
    title: "Ancient Rhodes",
    tagline: "Kamiros' Doric city grid and Filerimos Hill's layered ruins beyond the medieval core.",
    highlights: [
      "Kamiros ancient city on the west coast",
      "Filerimos Hill's temple, basilica and Byzantine church",
      "Quieter archaeology for repeat visitors",
      "Best combined with a private or guided route",
    ],
    cta: "Explore ancient Rhodes",
    href: "/guides/kamiros-ancient-city",
    imageKey: "history",
    wide: false,
  },
  {
    slug: "private",
    emoji: "🚗",
    title: "Private Rhodes",
    tagline: "Your vehicle, your pace and one carefully chosen route through the Old Town, Lindos or the coast.",
    highlights: [
      "Flexible route and walking pace",
      "Useful for families and mixed mobility",
      "Photography and meal stops on request",
      "Cruise-first return planning",
    ],
    cta: "Compare private touring",
    href: "/private-rhodes-shore-excursions/",
    imageKey: "private",
    wide: false,
  },
] as const;

export function ChooseYourRhodes() {
  return (
    <section id="choose" className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Choose Your Rhodes</p>
        <h2 className="section-title mt-2 max-w-3xl">
          How Would You Like to Experience Rhodes?
        </h2>
        <p className="section-subtitle">
          From the medieval Old Town and Lindos&apos; hilltop Acropolis to quiet coves, ancient sites and
          Rhodian food culture, choose the experience that best fits your interests and time ashore.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CHOOSE_CARDS.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages.historic;
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${card.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-5 top-5 text-3xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">
                    &ldquo;{card.tagline}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-maple-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
