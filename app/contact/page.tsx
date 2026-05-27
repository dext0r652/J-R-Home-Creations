import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met J&R Home Creation. Bel, mail, of stuur een WhatsApp — wij bezorgen je een vrijblijvende offerte.",
  alternates: { canonical: "https://jrhomecreation.be/contact" },
  openGraph: {
    title: "Contact | J&R Home Creation",
    description:
      "Neem contact op voor een vrijblijvende offerte. Bel, mail, of WhatsApp.",
    url: "https://jrhomecreation.be/contact",
  },
};

const channels = [
  {
    label: "Telefoon",
    value: "+32 495 50 12 91",
    href: "tel:+32495501291",
    cta: "Bel nu",
    description: "Bereikbaar op werkdagen",
    IconEl: <Phone className="w-5 h-5" aria-hidden="true" />,
  },
  {
    label: "WhatsApp",
    value: "+32 495 50 12 91",
    href: "https://wa.me/32495501291?text=Hallo%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen.",
    cta: "Start chat",
    description: "Snelle berichten welkom",
    IconEl: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    value: "homecreation@telenet.be",
    href: "mailto:homecreation@telenet.be",
    cta: "Stuur e-mail",
    description: "Antwoord binnen 1 werkdag",
    IconEl: <Mail className="w-5 h-5" aria-hidden="true" />,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="w-12 h-1.5 bg-accent rounded-full mb-6" aria-hidden="true" />
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-4">
            Neem contact op
          </h1>
          <p className="text-primary-foreground/70 text-lg sm:text-xl max-w-lg">
            Kies de manier die het best bij jou past — wij reageren zo snel
            mogelijk.
          </p>
        </div>
      </section>

      {/* ── CHANNEL CHOOSER ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-border" aria-labelledby="kanalen-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="kanalen-heading" className="sr-only">Contactkanalen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {channels.map(({ label, value, href, cta, description, IconEl }) => (
              <div
                key={label}
                className="bg-card rounded-2xl p-8 border border-border flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  {IconEl}
                </div>
                <div>
                  <div className="font-display font-bold text-xl mb-1">{label}</div>
                  <div className="text-sm text-muted-foreground mb-0.5">{value}</div>
                  <div className="text-xs text-muted-foreground/70">{description}</div>
                </div>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-auto inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + ADDRESS ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="formulier-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="w-10 h-1 bg-accent rounded-full mb-4" aria-hidden="true" />
              <h2
                id="formulier-heading"
                className="font-display font-bold text-3xl sm:text-4xl mb-8"
              >
                Of stuur een bericht
              </h2>
              <ContactForm />
            </div>

            {/* Address + map */}
            <aside className="lg:col-span-2">
              <div className="bg-secondary rounded-2xl p-8 border border-border mb-6">
                <h3 className="font-display font-bold text-xl mb-4">Adres</h3>
                <address className="not-italic space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Provinciale Steenweg 251<br />
                      2627 Schelle, België
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <a
                      href="tel:+32495501291"
                      className="hover:text-accent transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
                    >
                      +32 495 50 12 91
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <a
                      href="mailto:homecreation@telenet.be"
                      className="hover:text-accent transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
                    >
                      homecreation@telenet.be
                    </a>
                  </div>
                </address>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border aspect-video">
                <iframe
                  title="Locatie J&R Home Creation, Provinciale Steenweg 251, Schelle"
                  src="https://maps.google.com/maps?q=Provinciale+Steenweg+251,+2627+Schelle,+Belgium&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
