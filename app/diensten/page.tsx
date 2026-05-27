import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Verbouwingen, aanbouwen en nieuwbouw in de regio Antwerpen. Ontdek wat Jerry Callé voor jouw project kan betekenen — vakkundig en persoonlijk.",
  alternates: { canonical: "https://jrhomecreation.be/diensten" },
  openGraph: {
    title: "Diensten | J&R Home Creation",
    description:
      "Verbouwingen, aanbouwen en nieuwbouw in de regio Antwerpen. Vakkundig en persoonlijk.",
    url: "https://jrhomecreation.be/diensten",
  },
};

export default function DienstenPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="w-12 h-1.5 bg-accent rounded-full mb-6" aria-hidden="true" />
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-4">
            Wat ik voor je doe
          </h1>
          <p className="text-primary-foreground/70 text-lg sm:text-xl max-w-xl">
            Drie diensten — één aanspreekpunt. Elk project van opname tot
            oplevering persoonlijk begeleid.
          </p>
        </div>
      </section>

      {/* ── SERVICE 1: VERBOUWINGEN ──────────────────────────────────── */}
      <section
        id="verbouwingen"
        className="py-20 sm:py-24 scroll-mt-20"
        aria-labelledby="verbouwingen-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                <Wrench className="w-4 h-4" aria-hidden="true" />
                Dienst 01
              </div>
              <h2
                id="verbouwingen-heading"
                className="font-display font-bold text-4xl sm:text-5xl mb-6"
              >
                Verbouwingen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Van een kleine badkamerrenovatie tot een volledige herinrichting
                van je woning — ik pak het aan zoals het hoort. Zorgvuldig,
                vakkundig, en met respect voor je budget en planning.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ik werk uitsluitend met kwalitatieve materialen en lever elk
                project af zoals ik het zelf zou willen ontvangen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Badkamer- en keukenrenovatie",
                  "Vloer- en wandwerken",
                  "Raamvervanging en schrijnwerkerij",
                  "Elektriciteit en sanitair",
                  "Volledige woonstrenovaties",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Offerte aanvragen
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative">
              <div
                className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-accent/20 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/photos/Verbouwing.jpg"
                  alt="Keukenrenovatie met kookeiland en tuinzicht — afgewerkt project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 2: AANBOUW ──────────────────────────────────────── */}
      <section
        id="aanbouw"
        className="bg-secondary py-20 sm:py-24 scroll-mt-20"
        aria-labelledby="aanbouw-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-2 border-accent/20 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/photos/Aanbouw.jpg"
                  alt="Aanbouw in uitvoering — staalstructuur en terras"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Dienst 02
              </div>
              <h2
                id="aanbouw-heading"
                className="font-display font-bold text-4xl sm:text-5xl mb-6"
              >
                Aanbouw
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Je woning vergroot met een aanbouw die naadloos aansluit op de
                bestaande constructie — architecturaal, bouwtechnisch en
                esthetisch. Ik begeleid het volledige traject, van
                vergunningsaanvraag tot oplevering.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Een aanbouw vraagt om precisie en ervaring. Na 18 jaar weet ik
                waar de valkuilen zitten — en hoe ik ze vermijd.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Veranda's en glazen uitbouwen",
                  "Woon- of slaapkameruitbreiding",
                  "Bijkeuken of wasruimte",
                  "Carport en garage",
                  "Begeleiding bij vergunningen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Offerte aanvragen
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 3: NIEUWBOUW ─────────────────────────────────────── */}
      <section
        id="nieuwbouw"
        className="py-20 sm:py-24 scroll-mt-20"
        aria-labelledby="nieuwbouw-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                Dienst 03
              </div>
              <h2
                id="nieuwbouw-heading"
                className="font-display font-bold text-4xl sm:text-5xl mb-6"
              >
                Nieuwbouw
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Je nieuwbouwproject van A tot Z — begeleid door een ervaren
                aannemer die zelf de handen uit de mouwen steekt. Ik werk nauw
                samen met architecten en studiekantoren, maar het is mij die
                verantwoordelijk blijft.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nieuwbouw is een grote investering. Ik zorg dat elke fase
                correct verloopt: ruwbouw, technieken, afwerking. Zonder
                verrassingen, zonder compromissen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ruwbouw en fundering",
                  "Metselwerk en betonwerken",
                  "Dak- en dakisolatiewerken",
                  "Binnenmuren en technische leidingen",
                  "Volledige afwerking en coördinatie",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Offerte aanvragen
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/photos/Nieuwbouw1.jpg"
                  alt="Nieuwbouw in uitvoering — ruwbouw fase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/photos/Nieuwbouw2.jpg"
                  alt="Nieuwbouw afgewerkt — moderne gevel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="bg-secondary py-20 sm:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="w-10 h-1 bg-accent rounded-full mb-4" aria-hidden="true" />
            <h2
              id="faq-heading"
              className="font-display font-bold text-4xl sm:text-5xl"
            >
              Veelgestelde vragen
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Werk je met onderaannemers?",
                a: "Nee. Ik voer het werk zelf uit. Dat betekent directe controle op kwaliteit en één aanspreekpunt voor jou gedurende het hele project.",
              },
              {
                q: "In welke regio ben je actief?",
                a: "Ik werk hoofdzakelijk in de regio Antwerpen. Twijfel je of jouw gemeente in mijn werkgebied valt? Neem gerust contact op.",
              },
              {
                q: "Hoe vraag ik een offerte aan?",
                a: "Vul het contactformulier in of bel me rechtstreeks. Ik kom ter plaatse voor een opname en bezorg je daarna een gedetailleerde, vrijblijvende offerte.",
              },
              {
                q: "Hoe lang duurt een gemiddeld project?",
                a: "Dat hangt sterk af van de omvang. Een badkamerrenovatie duurt doorgaans 1–2 weken; een volledige verbouwing of aanbouw kan meerdere maanden in beslag nemen. Ik geef je altijd een realistische planning voor de start.",
              },
              {
                q: "Begeleid je ook de vergunningsaanvraag?",
                a: "Ik werk nauw samen met erkende architecten die de vergunningsprocedure begeleiden. Voor projecten waarbij een vergunning verplicht is, verwijs ik je door naar de juiste partner.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold text-base mb-2">{q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
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
