"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-primary shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / wordmark */}
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-wide text-primary-foreground hover:text-accent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
        >
          {/* HANDOFF: swap for <Image src="/logo.png"> when logo file is provided */}
          J&amp;R Home Creation
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Hoofdnavigatie">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded px-1"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+32495501291"
            className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:bg-accent/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            aria-label="Bel ons: +32 495 50 12 91"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            +32 495 50 12 91
          </a>
        </nav>

        {/* Mobile: phone tap-target + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+32495501291"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent text-accent-foreground hover:bg-accent/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Bel ons"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen
              ? <X className="w-6 h-6" aria-hidden="true" />
              : <Menu className="w-6 h-6" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-50 bg-primary flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigatiemenu"
        >
          <nav className="flex flex-col p-8 gap-1" aria-label="Mobiele navigatie">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display font-bold text-3xl text-primary-foreground py-4 border-b border-primary-foreground/10 hover:text-accent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+32495501291"
              onClick={() => setIsOpen(false)}
              className="mt-8 inline-flex items-center gap-3 min-h-[56px] px-6 py-4 bg-accent text-accent-foreground text-xl font-bold rounded-xl hover:bg-accent/85 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Bel ons: +32 495 50 12 91"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
              +32 495 50 12 91
            </a>
          </nav>
          {/* Tap backdrop to close */}
          <div className="flex-1" onClick={() => setIsOpen(false)} aria-hidden="true" />
        </div>
      )}
    </header>
  );
}
