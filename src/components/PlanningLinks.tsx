import Link from "next/link";

const LINKS = [
  { href: "/rhodes-cruise-port-guide/", label: "Rhodes Cruise Port Guide" },
  { href: "/cruise-planner", label: "Rhodes Cruise Planner" },
  { href: "/rhodes-cruise-schedule/", label: "Ship Schedules" },
  { href: "/compare", label: "Compare Rhodes" },
  { href: "/wow-collection", label: "The Wow Collection" },
];

export function PlanningLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="btn-secondary text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
