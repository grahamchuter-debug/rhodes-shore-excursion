import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { portGuideContent, portGuideFaqs } from "@/data/port-guide";

const path = "/cruise-port-guide";
const image = siteImages.port;
const description =
  "The complete Rhodes cruise port guide — berths, walking routes to the Old Town, Lindos logistics, taxis, buses and return-to-ship timing.";

export const metadata = buildMetadata({
  title: "Rhodes Cruise Port Guide",
  description,
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["Rhodes cruise port", "Rhodes cruise terminal", "Rhodes port to Old Town", "Rhodes cruise port guide"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Rhodes Cruise Port Guide", path },
];

export default function CruisePortGuidePage() {
  const { terminals, sections } = portGuideContent;

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(portGuideFaqs), articleSchema({ title: "Rhodes Cruise Port Guide", description, path, image: image.src })]} />
      <PhotoHeroBand image={image} eyebrow="Terminal guidance" title="Rhodes Cruise Port Guide" subtitle="Where ships dock, how to walk into the medieval Old Town, taxi access, Lindos logistics and return-to-ship timing — everything for arrival day at Rhodes." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title text-2xl mb-4">Rhodes cruise berths at a glance</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Terminal</th>
                  <th className="px-4 py-3 text-left font-semibold">Quay</th>
                  <th className="px-4 py-3 text-left font-semibold">Used by</th>
                  <th className="px-4 py-3 text-left font-semibold">Old Town access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {terminals.map((t) => (
                  <tr key={t.name}>
                    <td className="px-4 py-3 font-medium text-gray-900">{t.name}</td>
                    <td className="px-4 py-3 text-gray-600">{t.quay}</td>
                    <td className="px-4 py-3 text-gray-600">{t.usedBy}</td>
                    <td className="px-4 py-3 text-gray-600">{t.cityAccess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">Check your cruise line&apos;s daily programme the night before. Berths can change, and coastal-road traffic on the route to Lindos can affect returns from that excursion.</p>

          <div className="prose-body mt-4">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link href="/rhodes-old-town-from-cruise-port/" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Old Town guide</h3><p className="mt-1 text-sm text-gray-600">Walk the medieval city from the port.</p></Link>
            <Link href="/lindos-from-rhodes-cruise-port/" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Lindos guide</h3><p className="mt-1 text-sm text-gray-600">Plan the road journey and the Acropolis climb.</p></Link>
            <Link href="/rhodes-cruise-schedule/" className="nav-card"><h3 className="font-display text-base font-bold text-gray-900">Ship schedules</h3><p className="mt-1 text-sm text-gray-600">See who&apos;s in port before you book.</p></Link>
          </div>

          <div className="mt-12"><FAQSection faqs={portGuideFaqs} title="Rhodes Cruise Port — FAQs" /></div>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
