import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Wrench } from "lucide-react";
import { ProjectSlideshow } from "@/components/project-slideshow";

export const metadata: Metadata = {
  // Homepage inherits title.default — "J&R Home Creation" — no per-page title needed
  description:
    "Verbouwingen, aanbouwen en nieuwbouw in de regio Antwerpen. Ik ben Jerry Callé, eenmanszaak aannemer actief depuis 2008. Vakkundig en zonder compromis.",
  alternates: { canonical: "https://jrhomecreation.be/" },
  openGraph: {
    title: "J&R Home Creation",
    description:
      "Verbouwingen, aanbouwen en nieuwbouw in de regio Antwerpen. Vakkundig en zonder compromis.",
    url: "https://jrhomecreation.be/",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    title: "J&R Home Creation",
    description: "Verbouwingen, aanbouwen en nieuwbouw in de regio Antwerpen.",
  },
};

const services = [
  {
    slug: "verbouwingen",
    title: "Verbouwingen",
    description: "Van badkamer tot volledige renovatie — zorgvuldig en vakkundig uitgevoerd.",
    Icon: Wrench,
  },
  {
    slug: "aanbouw",
    title: "Aanbouw",
    description: "Vergroot je woning met een kwalitatieve aanbouw die naadloos aansluit.",
    Icon: CheckCircle2,
  },
  {
    slug: "nieuwbouw",
    title: "Nieuwbouw",
    description: "Je nieuwbouwproject van A tot Z begeleid door een ervaren aannemer.",
    Icon: MapPin,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "J&R Home Creation",
  image: "https://jrhomecreation.be/og-image.png",
  url: "https://jrhomecreation.be",
  telephone: "+32495501291",
  email: "homecreation@telenet.be",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Provinciale Steenweg 251",
    addressLocality: "Schelle",
    addressRegion: "Antwerpen",
    postalCode: "2627",
    addressCountry: "BE",
  },
  sameAs: ["https://www.facebook.com/p/JR-Home-Creation-100063583448383/"],
  priceRange: "€€",
  vatID: "BE0894930017",
  founder: { "@type": "Person", name: "Jerry Callé" },
  foundingDate: "2008",
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD — GeneralContractor schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text column */}
            <div>
              <div className="w-12 h-1.5 bg-accent rounded-full mb-6" aria-hidden="true" />
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-6">
                Eenmalig gebouwd.{" "}
                <span className="text-accent">Vakkundig gedaan.</span>
              </h1>
              <p className="text-primary-foreground/75 text-lg sm:text-xl leading-relaxed max-w-md mb-8">
                Verbouwingen, aanbouwen en nieuwbouw in de regio Antwerpen —
                vakkundig en zonder compromis op kwaliteit.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3 bg-accent text-accent-foreground font-semibold text-lg rounded-lg hover:bg-accent/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Vraag een offerte
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>

            {/* Photo column */}
            <div className="relative">
              <div
                className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-accent/40 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl bg-white p-10 sm:p-14 aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="J&R Home Creation"
                  width={420}
                  height={140}
                  className="w-full max-w-xs sm:max-w-sm object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST RIBBON ─────────────────────────────────────────── */}
      <section className="bg-secondary border-y border-border" aria-label="Vertrouwenssignalen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span><strong>18 jaar</strong> ervaring</span>
            </li>
            <li className="hidden sm:block text-border" aria-hidden="true">|</li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span>Regio <strong>Antwerpen</strong></span>
            </li>
            <li className="hidden sm:block text-border" aria-hidden="true">|</li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span><strong>Persoonlijke</strong> service</span>
            </li>
            <li className="hidden sm:block text-border" aria-hidden="true">|</li>
            <li className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span>Verbouwingen · Aanbouw · Nieuwbouw</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── 3. SERVICES ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24" aria-labelledby="diensten-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="w-10 h-1 bg-accent rounded-full mb-4" aria-hidden="true" />
            <h2
              id="diensten-heading"
              className="font-display font-bold text-4xl sm:text-5xl"
            >
              Wat ik voor je doe
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map(({ slug, title, description, Icon }) => (
              <div
                key={slug}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <Link
                  href={`/diensten#${slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  aria-label={`Meer weten over ${title}`}
                >
                  Meer weten
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROJECT SLIDESHOW ────────────────────────────────────── */}
      <section className="bg-secondary py-20 sm:py-24" aria-labelledby="projecten-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="w-10 h-1 bg-accent rounded-full mb-4" aria-hidden="true" />
            <h2
              id="projecten-heading"
              className="font-display font-bold text-4xl sm:text-5xl"
            >
              Onze projecten
            </h2>
          </div>
          <ProjectSlideshow />
        </div>
      </section>

      {/* ── 5. FINAL CTA ─────────────────────────────────────────────── */}
      <section
        className="bg-primary text-primary-foreground py-20 sm:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-6" aria-hidden="true" />
          <h2
            id="cta-heading"
            className="font-display font-bold text-4xl sm:text-5xl mb-4"
          >
            Klaar om te starten?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-md mx-auto mb-8">
            Vertel me over je project en ik bezorg je een eerlijke offerte —
            zonder verplichtingen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3 bg-accent text-accent-foreground font-semibold text-lg rounded-lg hover:bg-accent/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Vraag een offerte
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
