import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van J&R Home Creation.",
  alternates: { canonical: "https://jrhomecreation.be/voorwaarden" },
};

export default function VoorwaardenPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="w-10 h-1 bg-accent rounded-full mb-6" aria-hidden="true" />
      <h1 className="font-display font-bold text-4xl sm:text-5xl mb-10">Algemene voorwaarden</h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">

        <section aria-labelledby="v-partijen-heading">
          <h2 id="v-partijen-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            1. Partijen
          </h2>
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en
            werkzaamheden van J&amp;R Home Creation, vertegenwoordigd door Jerry Callé,
            Provinciale Steenweg 251, 2627 Schelle, BTW BE 0894.930.017 (hierna: &quot;de
            aannemer&quot;), tegenover de opdrachtgever (hierna: &quot;de klant&quot;).
          </p>
        </section>

        <section aria-labelledby="v-offerte-heading">
          <h2 id="v-offerte-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            2. Offertes en totstandkoming
          </h2>
          <p>
            Alle offertes zijn vrijblijvend en geldig gedurende 30 kalenderdagen na dagtekening,
            tenzij anders vermeld. Een overeenkomst komt tot stand door de schriftelijke
            aanvaarding van de offerte door de klant, of door de aanvang van de werkzaamheden met
            instemming van de klant.
          </p>
        </section>

        <section aria-labelledby="v-betaling-heading">
          <h2 id="v-betaling-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            3. Betalingsvoorwaarden
          </h2>
          <p>
            De betalingsmodaliteiten worden vastgelegd in de offerte. Bij gebreke hieraan gelden
            de volgende standaardvoorwaarden:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>
              <strong>50&nbsp;% voorschot</strong> bij ondertekening van de opdrachtbevestiging,
              vóór aanvang van de werkzaamheden.
            </li>
            <li>
              <strong>50&nbsp;% saldo</strong> bij oplevering van het werk, na gezamenlijke
              plaatsinspectie.
            </li>
          </ul>
          <p className="mt-3">
            Facturen zijn betaalbaar binnen 14 kalenderdagen na factuurdatum. Bij laattijdige
            betaling is van rechtswege en zonder ingebrekestelling een verwijlintrest verschuldigd
            van 10&nbsp;% per jaar, evenals een forfaitaire schadevergoeding van 10&nbsp;% op het
            openstaande bedrag (minimum € 50).
          </p>
        </section>

        <section aria-labelledby="v-uitvoering-heading">
          <h2 id="v-uitvoering-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            4. Uitvoering van de werken
          </h2>
          <p>
            De aannemer verbindt er zich toe de overeengekomen werken uit te voeren conform de
            regels van de kunst, de geldende normen en de beschrijving in de offerte. Eventuele
            meerwerken worden schriftelijk overeengekomen vóór uitvoering.
          </p>
          <p className="mt-3">
            Opgegeven uitvoeringstermijnen zijn indicatief, tenzij uitdrukkelijk schriftelijk als
            bindend bepaald. Overmacht of onvoorziene omstandigheden (weersomstandigheden,
            vertraging van leveranciers, wettelijke verplichtingen) kunnen de termijn
            rechtmatig verlengen.
          </p>
        </section>

        <section aria-labelledby="v-klachten-heading">
          <h2 id="v-klachten-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            5. Klachten en oplevering
          </h2>
          <p>
            Zichtbare gebreken dienen te worden gemeld binnen 8 kalenderdagen na de oplevering,
            schriftelijk per e-mail naar{" "}
            <a href="mailto:homecreation@telenet.be" className="text-accent hover:underline">
              homecreation@telenet.be
            </a>
            . Verborgen gebreken dienen te worden gemeld zodra ze worden ontdekt. De garantie op
            uitgevoerde werken bedraagt 10 jaar voor ernstige gebreken die de stabiliteit van het
            gebouw aantasten (art. 1792 BW), en 1 jaar voor overige gebreken, tenzij anders
            overeengekomen.
          </p>
        </section>

        <section aria-labelledby="v-aansprakelijkheid-heading">
          <h2 id="v-aansprakelijkheid-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            6. Aansprakelijkheid
          </h2>
          <p>
            De aansprakelijkheid van de aannemer is beperkt tot het bedrag van de overeenkomst,
            tenzij er sprake is van opzet of grove fout. De aannemer is niet aansprakelijk voor
            indirecte schade, gevolgschade of gederfde winst.
          </p>
        </section>

        <section aria-labelledby="v-geschillen-heading">
          <h2 id="v-geschillen-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            7. Toepasselijk recht en bevoegde rechtbank
          </h2>
          <p>
            Deze overeenkomst wordt beheerst door het Belgisch recht. Bij geschillen is
            uitsluitend de Ondernemingsrechtbank Antwerpen, afdeling Antwerpen bevoegd,
            tenzij dwingende wettelijke bepalingen anders voorschrijven.
          </p>
        </section>

        <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">
          Laatste update: mei 2026
        </p>
      </div>
    </div>
  );
}
