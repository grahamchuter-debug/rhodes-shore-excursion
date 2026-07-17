import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipScheduleHubView } from "@/components/ShipScheduleHubView";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getSchedulePortBySlug } from "@/data/schedules";
import { notFound } from "next/navigation";

const path = "/rhodes-cruise-schedule";

export const metadata = buildMetadata({
  title: "Rhodes Cruise Schedule — Ship Arrivals & Port Calls",
  description:
    "Rhodes cruise schedule planning for 2026 and 2027. Use published call windows to decide between Old Town, Lindos and coastal excursions — then confirm with your cruise line.",
  path,
  keywords: [
    "Rhodes cruise schedule",
    "Rhodes cruise ship schedule",
    "Rhodes port calls",
    "Rhodes cruise arrivals",
  ],
});

export default function RhodesCruiseSchedulePage() {
  const port = getSchedulePortBySlug("rhodes");
  if (!port) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Rhodes Cruise Schedule", path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: port.seoTitle,
            description: port.intro,
            path,
          }),
          ...(port.faqs ? [faqSchema(port.faqs)] : []),
        ]}
      />
      <PageHero
        title="Rhodes Cruise Schedule"
        subtitle="Plan your day ashore around published call windows — then confirm arrival, departure and all-aboard times with your cruise line."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-4 max-w-3xl text-sm text-gray-600">
            Schedules can change. Berths may vary between Akandia and harbour-side positions. Use this
            page to move toward excursion recommendations, Old Town guidance and Lindos planning — not
            as a substitute for your cruise line&apos;s final programme.
          </p>
          <div className="mt-8">
            <ShipScheduleHubView port={port} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/shore-excursions/" className="btn-primary">
              Explore Rhodes excursions
            </Link>
            <Link href="/lindos-from-rhodes-cruise-port/" className="btn-secondary">
              Lindos planning
            </Link>
            <Link href="/rhodes-cruise-port-guide/" className="btn-secondary">
              Port guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
