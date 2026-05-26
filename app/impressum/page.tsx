import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Wettelijke vermeldingen van J&R Home Creation.",
  alternates: { canonical: "https://jrhomecreation.be/impressum" },
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="w-10 h-1 bg-accent rounded-full mb-6" aria-hidden="true" />
      <h1 className="font-display font-bold text-4xl sm:text-5xl mb-10">Impressum</h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">

        <section aria-labelledby="imp-bedrijf-heading">
          <h2 id="imp-bedrijf-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            Ondernemingsgegevens
          </h2>
          <dl className="space-y-2 text-sm">
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <dt className="font-medium text-foreground">Handelsnaam</dt>
              <dd>J&amp;R Home Creation</dd>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <dt className="font-medium text-foreground">Zaakvoerder</dt>
              <dd>Jerry Callé</dd>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <dt className="font-medium text-foreground">Rechtsvorm</dt>
              <dd>Eenmanszaak</dd>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <dt className="font-medium text-foreground">Opgericht</dt>
              <dd>2008</dd>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <dt className="font-medium text-foreground">BTW-nummer</dt>
              <dd>BE 0894.930.017</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="imp-adres-heading">
          <h2 id="imp-adres-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            Maatschappelijke zetel
          </h2>
          <address className="not-italic text-sm">
            Provinciale Steenweg 251<br />
            2627 Schelle<br />
            België
          </address>
        </section>

        <section aria-labelledby="imp-contact-heading">
          <h2 id="imp-contact-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            Contactgegevens
          </h2>
          <dl className="space-y-2 text-sm">
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <dt className="font-medium text-foreground">Telefoon</dt>
              <dd>
                <a href="tel:+32495501291" className="text-accent hover:underline">
                  +32 495 50 12 91
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <dt className="font-medium text-foreground">E-mail</dt>
              <dd>
                <a href="mailto:homecreation@telenet.be" className="text-accent hover:underline">
                  homecreation@telenet.be
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2">
              <dt className="font-medium text-foreground">Website</dt>
              <dd>jrhomecreation.be</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="imp-hosting-heading">
          <h2 id="imp-hosting-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            Hosting &amp; technische realisatie
          </h2>
          <p className="text-sm">
            Deze website wordt gehost op{" "}
            <strong>Vercel Inc.</strong>, 340 Pine Street Suite 701, San Francisco, CA 94104, VS.
          </p>
          <p className="text-sm mt-2">
            Technische realisatie door{" "}
            <a
              href="https://novindigital.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Novin Digital
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="imp-geschillen-heading">
          <h2 id="imp-geschillen-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            Bevoegde rechter bij geschillen
          </h2>
          <p className="text-sm">
            Ondernemingsrechtbank Antwerpen, afdeling Antwerpen<br />
            Bolivarplaats 20 bus 1, 2000 Antwerpen
          </p>
          <p className="text-sm mt-3">
            Voor buitengerechtelijke geschillenbeslechting kunt u ook terecht bij de{" "}
            <strong>Consumentenombudsdienst</strong> (
            <a
              href="https://www.consumentenombudsdienst.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              consumentenombudsdienst.be
            </a>
            ).
          </p>
        </section>

        <section aria-labelledby="imp-ip-heading">
          <h2 id="imp-ip-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            Intellectuele eigendom
          </h2>
          <p className="text-sm">
            Alle inhoud van deze website — teksten, afbeeldingen, logo&apos;s en grafische
            elementen — is eigendom van J&amp;R Home Creation of haar rechtmatige eigenaars, en is
            beschermd door auteursrecht. Overname zonder schriftelijke toestemming is niet
            toegestaan.
          </p>
        </section>

        <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">
          Laatste update: mei 2026
        </p>
      </div>
    </div>
  );
}
