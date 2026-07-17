import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema, itemListSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { getExcursionImage, excursionsHubImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SignatureRhodesFeature } from "@/components/SignatureRhodesFeature";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Rhodes Shore Excursions — Lindos, Old Town & Island Tours",
  description:
    "Browse Rhodes shore excursions to Lindos, the medieval Old Town, beaches, scenic drives and private tours — with cruise-aware guidance.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: [
    "Rhodes shore excursions",
    "Lindos shore excursion",
    "Rhodes cruise excursions",
    "private Rhodes shore excursions",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

const CATEGORY_ORDER = [
  "Best of Rhodes",
  "Lindos excursions",
  "Old Town and history",
  "Scenic island tours",
  "Beach and water experiences",
  "Food and cultural experiences",
  "Private Rhodes tours",
];

export default function ShoreExcursionsPage() {
  const byCategory = CATEGORY_ORDER.map((category) => ({
    category,
    items: excursions.filter((e) => e.category === category),
  })).filter((g) => g.items.length > 0);

  const uncategorised = excursions.filter((e) => !CATEGORY_ORDER.includes(e.category));
  if (uncategorised.length) {
    byCategory.push({ category: "More Rhodes experiences", items: uncategorised });
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Rhodes Shore Excursions",
            description:
              "Cruise-aware Rhodes shore excursions for Lindos, Old Town, beaches and private touring.",
            path: "/shore-excursions",
          }),
          itemListSchema(
            excursions.map((e) => ({
              name: e.title,
              url: `/shore-excursions/${e.slug}/`,
            })),
          ),
        ]}
      />
      <PageHero
        image={excursionsHubImage}
        title="Rhodes Shore Excursions"
        subtitle="Lindos, medieval Rhodes, coastal days and private touring — organised by experience type, not as one undifferentiated list."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 max-w-3xl text-gray-600">
            Not sure where to start? Compare{" "}
            <Link href="/rhodes-old-town-or-lindos/" className="font-semibold text-coastal-700 hover:underline">
              Old Town or Lindos
            </Link>{" "}
            or browse our{" "}
            <Link href="/best-rhodes-shore-excursions/" className="font-semibold text-coastal-700 hover:underline">
              best Rhodes shore excursions
            </Link>{" "}
            guide.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-gray-500">{AFFILIATE_DISCLOSURE_SHORT}</p>
          <div className="mt-8">
            <SignatureRhodesFeature embedded />
          </div>

          {byCategory.map((group) => (
            <div key={group.category} className="mt-14">
              <h2 className="section-title text-2xl">{group.category}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((e) => {
                  const image = getExcursionImage(e.slug);
                  return (
                    <Link
                      key={e.slug}
                      href={`/shore-excursions/${e.slug}/`}
                      className="card-editorial group overflow-hidden"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <ResponsiveImage
                          image={image}
                          role="card"
                          imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent"
                          aria-hidden="true"
                        />
                        {e.featured ? (
                          <span className="absolute left-3 top-3 badge-editors-choice">Featured</span>
                        ) : (
                          <span className="absolute left-3 top-3 pill bg-white/90">{e.groupType ?? e.pace}</span>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                          {e.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                        <p className="mt-3 text-xs font-medium text-coastal-700">
                          {e.duration} · {e.activityLevel ?? e.pace}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
