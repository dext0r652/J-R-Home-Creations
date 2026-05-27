import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Wij zijn J&R Home Creation — aannemer uit Schelle, actief in de regio Antwerpen sinds 2008. Verbouwingen, aanbouwen en nieuwbouw met oog voor kwaliteit.",
  alternates: { canonical: "https://jrhomecreation.be/over-ons" },
  openGraph: {
    title: "Over ons | J&R Home Creation",
    description:
      "Wij zijn J&R Home Creation — aannemer uit Schelle, actief in de regio Antwerpen sinds 2008.",
    url: "https://jrhomecreation.be/over-ons",
  },
};

const stats = [
  { value: "18", label: "jaar ervaring", Icon: Clock },
  { value: "3", label: "kerndiensten", Icon: Wrench },
  { value: "1", label: "aanspreekpunt", Icon: CheckCircle2 },
];

export default function OverOnsPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="w-12 h-1.5 bg-accent rounded-full mb-6" aria-hidden="true" />
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-6">
              Jerry Callé.{" "}
              <span className="text-accent">Aannemer.</span>
            </h1>
            <p className="text-primary-foreground/75 text-lg sm:text-xl leading-relaxed">
              Sinds 2008 realiseren wij verbouwingen, aanbouwen en nieuwbouw in
              de regio Antwerpen. Geen onderaannemers, geen tussenpersonen —
              persoonlijk contact van begin tot einde.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS RIBBON ────────────────────────────────────────────── */}
      <section className="bg-secondary border-y border-border" aria-label="Kerncijfers">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 divide-x divide-border">
            {stats.map(({ value, label, Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2 px-4 text-center">
                <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="font-display font-bold text-4xl sm:text-5xl">{value}</span>
                <span className="text-muted-foreground text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24" aria-labelledby="verhaal-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Copy */}
            <div>
              <div className="w-10 h-1 bg-accent rounded-full mb-4" aria-hidden="true" />
              <h2
                id="verhaal-heading"
                className="font-display font-bold text-4xl sm:text-5xl mb-8"
              >
                Waarom wij dit doen
              </h2>
              {/* HANDOFF: vervang onderstaande plaatshouder door het echte verhaal van Jerry Callé */}
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Bouwen is voor ons geen job — het is een vak. Wij zijn opgegroeid met de
                  overtuiging dat iets goed doen betekent: het juist doen. Geen snelle
                  oplossingen, geen concessies op kwaliteit, geen onduidelijkheid over
                  kosten of planning.
                </p>
                <p>
                  Sinds 2008 werken wij als aannemer in de regio Antwerpen. Wij
                  begeleiden elk project persoonlijk — van de eerste opname tot de
                  oplevering. Dat betekent dat je altijd met ons praat, niet met een
                  projectleider die het werk heeft doorgegeven.
                </p>
                <p>
                  Of het nu gaat om een badkamerrenovatie, een volledige aanbouw, of een
                  nieuwbouw van nul: wij zorgen dat het klopt. Vakkundig, eerlijk, en op
                  tijd.
                </p>
              </div>
            </div>

            {/* Workspace photo */}
            <div className="lg:sticky lg:top-24">
              <div className="relative">
                <div
                  className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-2 border-accent/25 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/photos/CompanyVan.jpg"
                    alt="J&R Home Creation bestelwagens op locatie"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ────────────────────────────────────────────────── */}
      <section className="bg-secondary py-20 sm:py-24" aria-labelledby="aanpak-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="w-10 h-1 bg-accent rounded-full mb-4" aria-hidden="true" />
            <h2
              id="aanpak-heading"
              className="font-display font-bold text-4xl sm:text-5xl"
            >
              Hoe wij werken
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Opname & offerte",
                body: "Wij komen ter plaatse, bekijken het project en bezorgen je een duidelijke offerte — zonder verrassingen achteraf.",
              },
              {
                step: "02",
                title: "Uitvoering",
                body: "Wij voeren het werk zelf uit. Je hebt één aanspreekpunt, één verantwoordelijke, en een vaste planning.",
              },
              {
                step: "03",
                title: "Oplevering",
                body: "We lopen samen door het eindresultaat. Pas als jij tevreden bent, is het project afgesloten.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="font-display font-bold text-5xl text-accent/30 mb-4 leading-none">
                  {step}
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
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
            Vertel ons over je project en wij bezorgen je een eerlijke offerte —
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
