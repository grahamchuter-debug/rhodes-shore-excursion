import Link from "next/link";

const RHODES_LINKS = [
  {
    title: "Old Town or Lindos?",
    description:
      "Compare Rhodes' two great days ashore — a walkable medieval city versus Lindos' road time and Acropolis climb.",
    href: "/rhodes-old-town-or-lindos/",
  },
  {
    title: "Can you walk from the cruise port?",
    description:
      "Honest guidance on what's realistically walkable near the terminal, and where you need transport instead.",
    href: "/can-you-walk-from-rhodes-cruise-port/",
  },
  {
    title: "Independent Rhodes guide",
    description:
      "Walk the Old Town, Street of the Knights and Palace exterior with a realistic return-to-ship plan.",
    href: "/rhodes-old-town-from-cruise-port/",
  },
  {
    title: "Compare Rhodes excursions",
    description:
      "Choose between the Old Town, Lindos, the coast and private touring with candid trade-offs.",
    href: "/compare",
  },
  {
    title: "Private or coach touring",
    description:
      "Compare private vs coach pacing and short-call realism before you book a Rhodes day.",
    href: "/private-rhodes-shore-excursions/",
  },
  {
    title: "Rhodes cruise schedules",
    description:
      "Check your published port hours before committing to Lindos or a longer coastal excursion.",
    href: "/rhodes-cruise-schedule/",
  },
];

export function RhodesLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Rhodes planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in the Old Town or travel to Lindos.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RHODES_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Rhodes planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
