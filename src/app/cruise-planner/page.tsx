import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { RhodesCruisePlanner } from "@/components/RhodesCruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Rhodes cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored recommendations.";

export const metadata = buildMetadata({
  title: "Rhodes Cruise Planner — Port Day Itinerary",
  description,
  path,
  keywords: ["Rhodes cruise planner", "Rhodes cruise day plan", "Rhodes port day itinerary", "Lindos planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Rhodes Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Rhodes Cruise Planner", description, path })]} />
      <PageHero
        title="Rhodes Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for the Old Town, Lindos, the coast and private touring."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <RhodesCruisePlanner />
        </div>
      </section>
    </>
  );
}
