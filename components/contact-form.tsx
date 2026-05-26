"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      contactMethod: (
        form.querySelector('input[name="contactMethod"]:checked') as HTMLInputElement | null
      )?.value ?? "any",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("server error");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Naam <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            placeholder="Jan De Smet"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            E-mail <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            placeholder="jan@voorbeeld.be"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
          Telefoonnummer
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
          placeholder="+32 4xx xx xx xx"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Bericht <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
          placeholder="Beschrijf je project kort: wat wil je laten doen, waar, en wanneer?"
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium mb-3">
          Hoe neem ik het best contact met je op?
        </legend>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { value: "phone", label: "Telefoon" },
            { value: "email", label: "E-mail" },
            { value: "whatsapp", label: "WhatsApp" },
            { value: "any", label: "Wat het snelst is" },
          ].map(({ value, label }) => (
            <label
              key={value}
              className="relative flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2.5 cursor-pointer hover:border-accent/60 transition has-[:checked]:border-accent has-[:checked]:bg-accent/5"
            >
              <input
                type="radio"
                name="contactMethod"
                value={value}
                defaultChecked={value === "any"}
                className="accent-accent"
              />
              <span className="text-sm">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {state === "success" && (
        <div
          role="status"
          className="rounded-lg bg-accent/10 border border-accent/30 px-4 py-3 text-sm font-medium text-foreground"
        >
          Bericht ontvangen — ik neem zo snel mogelijk contact met je op.
        </div>
      )}

      {state === "error" && (
        <div
          role="alert"
          className="rounded-lg bg-destructive/10 border border-destructive/30 px-4 py-3 text-sm text-destructive"
        >
          Er ging iets mis. Probeer opnieuw of bel me rechtstreeks.
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/85 disabled:opacity-60 disabled:cursor-not-allowed transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        {state === "submitting" ? "Verzenden…" : "Verstuur bericht"}
      </button>
    </form>
  );
}
