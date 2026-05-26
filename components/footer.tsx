import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-2xl mb-3 text-primary-foreground">
              J&amp;R Home Creation
            </div>
            <p className="text-primary-foreground/65 text-sm leading-relaxed max-w-xs">
              Verbouwingen, aanbouwen en nieuwbouw in de regio Antwerpen.
              Vakkundig en persoonlijk, actief depuis 2008.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="tel:+32495501291"
                  className="inline-flex items-center gap-2 min-h-[44px] hover:text-accent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  aria-label="Bel ons"
                >
                  <Phone className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                  +32 495 50 12 91
                </a>
              </li>
              <li>
                <a
                  href="mailto:homecreation@telenet.be"
                  className="inline-flex items-center gap-2 min-h-[44px] hover:text-accent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  <Mail className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                  homecreation@telenet.be
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 shrink-0 text-accent mt-0.5" aria-hidden="true" />
                <span>
                  Provinciale Steenweg 251<br />
                  2627 Schelle, België
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Navigatie</h3>
            <ul className="space-y-1 text-sm">
              {[
                { href: "/over-ons", label: "Over ons" },
                { href: "/diensten", label: "Diensten" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center min-h-[44px] text-primary-foreground/75 hover:text-accent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row: copyright, legal, Facebook */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-primary-foreground/50">
            <span>© {year} J&amp;R Home Creation</span>
            <span aria-hidden="true">·</span>
            <span>BTW: BE 0894.930.017</span>
            <span aria-hidden="true">·</span>
            <Link href="/privacy" className="hover:text-primary-foreground/80 transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded">
              Privacybeleid
            </Link>
            <Link href="/voorwaarden" className="hover:text-primary-foreground/80 transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded">
              Voorwaarden
            </Link>
            <Link href="/impressum" className="hover:text-primary-foreground/80 transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded">
              Impressum
            </Link>
          </div>
          <a
            href="https://www.facebook.com/p/JR-Home-Creation-100063583448383/?locale=nl_BE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary-foreground/10 text-primary-foreground/50 hover:text-accent hover:bg-primary-foreground/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="J&R Home Creation op Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        {/* Novin Digital credit — mandatory on every page */}
        <div className="mt-6 pt-4 border-t border-primary-foreground/10 text-center">
          <a
            href="https://novindigital.be"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website by Novin Digital"
            className="inline-flex items-center gap-2 text-xs text-primary-foreground/35 hover:text-primary-foreground/60 transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
          >
            <span>Website by</span>
            <Image
              src="/novin-digital.png"
              alt="Novin Digital"
              width={80}
              height={27}
              className="h-5 w-auto opacity-60"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
