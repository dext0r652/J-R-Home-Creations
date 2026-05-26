import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van J&R Home Creation — hoe wij omgaan met uw persoonsgegevens.",
  alternates: { canonical: "https://jrhomecreation.be/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="w-10 h-1 bg-accent rounded-full mb-6" aria-hidden="true" />
      <h1 className="font-display font-bold text-4xl sm:text-5xl mb-10">Privacybeleid</h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">

        <section aria-labelledby="verantwoordelijke-heading">
          <h2 id="verantwoordelijke-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            1. Verantwoordelijke voor de verwerking
          </h2>
          <p>
            J&amp;R Home Creation<br />
            Zaakvoerder: Jerry Callé<br />
            Provinciale Steenweg 251, 2627 Schelle, België<br />
            BTW: BE 0894.930.017<br />
            E-mail:{" "}
            <a href="mailto:homecreation@telenet.be" className="text-accent hover:underline">
              homecreation@telenet.be
            </a>
            <br />
            Telefoon:{" "}
            <a href="tel:+32495501291" className="text-accent hover:underline">
              +32 495 50 12 91
            </a>
          </p>
        </section>

        <section aria-labelledby="gegevens-heading">
          <h2 id="gegevens-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            2. Welke gegevens verwerken wij?
          </h2>
          <p>
            Wij verwerken uitsluitend persoonsgegevens die u vrijwillig aan ons bezorgt via het
            contactformulier op deze website of rechtstreeks via telefoon of e-mail:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Naam</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer (optioneel)</li>
            <li>Inhoud van uw bericht of offertevraag</li>
          </ul>
        </section>

        <section aria-labelledby="doel-heading">
          <h2 id="doel-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            3. Doeleinden van de verwerking
          </h2>
          <p>Uw gegevens worden uitsluitend gebruikt voor:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Het beantwoorden van uw contactaanvraag of offertevraag</li>
            <li>De uitvoering van een overeenkomst (opdrachtbevestiging, facturatie)</li>
            <li>Het nakomen van wettelijke verplichtingen</li>
          </ul>
          <p className="mt-3">
            Uw gegevens worden nooit doorgegeven aan derden voor marketingdoeleinden, en nooit
            verkocht.
          </p>
        </section>

        <section aria-labelledby="bewaartermijn-heading">
          <h2 id="bewaartermijn-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            4. Bewaartermijn
          </h2>
          <p>
            Contactformuliergegevens worden bewaard zolang dit noodzakelijk is voor de afhandeling
            van uw aanvraag. Boekhoudkundige gegevens worden conform de Belgische wetgeving
            bewaard gedurende 7 jaar.
          </p>
        </section>

        <section aria-labelledby="rechten-heading">
          <h2 id="rechten-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            5. Uw rechten
          </h2>
          <p>
            Op grond van de Algemene Verordening Gegevensbescherming (AVG / GDPR) heeft u recht op:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Inzage in uw persoonsgegevens</li>
            <li>Correctie van onjuiste gegevens</li>
            <li>Verwijdering van uw gegevens (recht op vergetelheid)</li>
            <li>Beperking van de verwerking</li>
            <li>Overdraagbaarheid van gegevens</li>
            <li>Bezwaar tegen de verwerking</li>
          </ul>
          <p className="mt-3">
            Om een van deze rechten uit te oefenen, kunt u contact opnemen via{" "}
            <a href="mailto:homecreation@telenet.be" className="text-accent hover:underline">
              homecreation@telenet.be
            </a>
            . Wij reageren binnen 30 dagen.
          </p>
        </section>

        <section aria-labelledby="klacht-heading">
          <h2 id="klacht-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            6. Klacht indienen
          </h2>
          <p>
            U heeft het recht een klacht in te dienen bij de Gegevensbeschermingsautoriteit (GBA):
          </p>
          <p className="mt-2">
            Gegevensbeschermingsautoriteit<br />
            Drukpersstraat 35, 1000 Brussel<br />
            Tel.: +32 2 274 48 00<br />
            E-mail:{" "}
            <a href="mailto:contact@apd-gba.be" className="text-accent hover:underline">
              contact@apd-gba.be
            </a>
          </p>
        </section>

        <section aria-labelledby="cookies-heading">
          <h2 id="cookies-heading" className="font-display font-bold text-2xl text-foreground mb-3">
            7. Cookies
          </h2>
          <p>
            Deze website maakt geen gebruik van tracking- of analytische cookies. Er worden enkel
            technisch noodzakelijke cookies gebruikt voor de basisfunctionaliteit van de site.
          </p>
        </section>

        <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">
          Laatste update: mei 2026
        </p>
      </div>
    </div>
  );
}
