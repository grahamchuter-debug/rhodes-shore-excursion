import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourRhodes } from "@/components/ChooseYourRhodes";
import { SpiritOfRhodes } from "@/components/SpiritOfRhodes";
import { WowCollectionFeature } from "@/components/WowCollectionFeature";
import { SignatureRhodesFeature } from "@/components/SignatureRhodesFeature";
import { EditorsCollection } from "@/components/EditorsCollection";
import { HonestAdvice } from "@/components/HonestAdvice";
import { ExperienceSelector } from "@/components/ExperienceSelector";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { getHomepageFaqs, homepageTagline } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { RhodesLinks } from "@/components/RhodesLinks";
import { CruiseHeroTrust } from "@/components/CruiseHeroTrust";
import { YourDayAshore } from "@/components/YourDayAshore";
import { TravellerRecommendations } from "@/components/TravellerRecommendations";
import { AFFILIATE_DISCLOSURE_SHORT, SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Rhodes Shore Excursion | Lindos, Old Town & Island Tours",
  description: SITE.description,
  path: "/",
  keywords: [
    "Rhodes shore excursion",
    "Rhodes shore excursions",
    "Lindos shore excursion",
    "Rhodes cruise port",
    "Rhodes Old Town from cruise port",
    "best Rhodes shore excursions",
  ],
});

const SITE_DESCRIPTION =
  "Independent Rhodes shore excursions and cruise-port guidance for Lindos, the medieval Old Town, beaches and island touring — planned around your time ashore.";

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Rhodes Shore Excursion",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100 animate-fade-up">
            Rhodes Shore Excursion
          </p>
          <h1 className="home-hero-heading animate-fade-up-delay">{homepageTagline}</h1>
          <CruiseHeroTrust />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up-delay">
            Walk through a medieval city, discover the whitewashed village of Lindos or explore
            Rhodes through beaches, scenery and island flavours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions/" className="btn-accent">
              Explore Rhodes Excursions
            </Link>
            <Link
              href="/rhodes-cruise-schedule/"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Your Ship Schedule
            </Link>
          </div>
          <p className="mt-6 animate-fade-up-delay-2">
            <Link
              href="/can-you-walk-from-rhodes-cruise-port/"
              className="text-sm font-medium text-white/85 underline-offset-4 hover:underline"
            >
              Can I walk into Rhodes Old Town from the ship?
            </Link>
          </p>
        </div>
      </section>

      <ChooseYourRhodes />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Featured excursions</p>
          <h2 className="section-title mt-2">Rhodes shore excursions worth considering</h2>
          <p className="section-subtitle">
            Independently written guides to live partner excursions — check availability and current
            pricing on the booking page.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-gray-500">{AFFILIATE_DISCLOSURE_SHORT}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((ex) => {
              const image = getExcursionImage(ex.slug);
              return (
                <Link
                  key={ex.slug}
                  href={`/shore-excursions/${ex.slug}/`}
                  className="card-editorial group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {ex.badge ? (
                      <span className="text-xs font-semibold uppercase tracking-wide text-maple-600">
                        {ex.badge.replace(/-/g, " ")}
                      </span>
                    ) : null}
                    <h3 className="mt-1 font-display text-xl font-semibold text-gray-900 group-hover:text-coastal-800">
                      {ex.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{ex.tagline}</p>
                    <p className="mt-4 text-xs font-medium text-gray-500">
                      {ex.duration} · {ex.activityLevel ?? ex.pace}
                      {ex.groupType ? ` · ${ex.groupType}` : ""}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/shore-excursions/" className="btn-primary">
              View all Rhodes excursions
            </Link>
          </div>
        </div>
      </section>

      <TravellerRecommendations />
      <CruisePassengerSnapshot />
      <YourDayAshore />
      <HonestAdvice />
      <SpiritOfRhodes />

      <section className="section-padding bg-coastal-50/40">
        <div className="container-wide max-w-3xl">
          <p className="section-eyebrow">Cruise port overview</p>
          <h2 className="section-title mt-2">Rhodes is unusually walkable — Lindos is not</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Rhodes is one of the Mediterranean&apos;s easiest ports for independent Old Town exploration,
            but the island&apos;s most famous excursion destination, Lindos, requires a much more deliberate
            plan. Start with the port guide, then decide whether your call favours walking the medieval
            city or booking organised transport south.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/rhodes-cruise-port-guide/" className="btn-primary">
              Rhodes cruise port guide
            </Link>
            <Link href="/lindos-from-rhodes-cruise-port/" className="btn-secondary">
              Lindos from the cruise port
            </Link>
            <Link href="/rhodes-old-town-from-cruise-port/" className="btn-secondary">
              Old Town from the ship
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <p className="section-eyebrow">Ship schedules</p>
          <h2 className="section-title mt-2">Check your Rhodes cruise schedule</h2>
          <p className="section-subtitle">
            Use published call windows to judge whether Lindos fits — then confirm times with your cruise
            line before you book.
          </p>
          <Link href="/rhodes-cruise-schedule/" className="btn-accent mt-6 inline-flex">
            View Rhodes cruise schedule
          </Link>
        </div>
      </section>

      <EditorsCollection />
      <SignatureRhodesFeature />
      <WowCollectionFeature />
      <ExperienceSelector />
      <RhodesLinks />
      <FAQSection faqs={faqs} title="Rhodes cruise FAQs" />

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to plan your day in Rhodes?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
            Compare Lindos, Old Town and coastal options — then check live availability with our excursion
            partner.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/shore-excursions/" className="btn-accent">
              Explore Rhodes Excursions
            </Link>
            <Link
              href="/rhodes-old-town-or-lindos/"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Old Town or Lindos?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
