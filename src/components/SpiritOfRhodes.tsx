import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function SpiritOfRhodes() {
  const image = subjectImages.ronda;

  return (
    <section className="section-padding bg-gradient-to-b from-coastal-50 via-white to-white border-b border-coastal-100">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">The island revealed</p>
            <h2 className="section-title mt-2 max-w-xl">Spirit of Rhodes</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              Rhodes blends a medieval Knights&apos; city, an ancient hilltop sanctuary, Aegean coastline
              and one of Greece&apos;s most layered food cultures — Byzantine, Ottoman and Italian history
              all visible within the same walk.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A cruise day could mean walking the cobbled Street of the Knights, standing above St
              Paul&apos;s Bay at the Lindos Acropolis, swimming at Anthony Quinn Bay or tasting pitaroudia
              and melekouni in the Old Town.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Every route reveals another side of the island.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { emoji: "🏰", label: "Medieval Old Town" },
                { emoji: "🌊", label: "Lindos & the Acropolis" },
                { emoji: "🏖️", label: "Aegean coastline" },
              ].map((item) => (
                <div key={item.label} className="card-feature text-center">
                  <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
                  <p className="mt-2 text-sm font-semibold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <ResponsiveImage
              image={image}
              role="card"
              imgClassName="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-coastal-900/30 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
