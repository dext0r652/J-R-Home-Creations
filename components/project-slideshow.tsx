"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/Projects/driveway.jpg", alt: "Afgewerkte oprit en gevel" },
  { src: "/Projects/Bathroom.jpg", alt: "Badkamerrenovatie met microcement wanden" },
  { src: "/Projects/demolition.jpg", alt: "Sloopwerk als onderdeel van een totaalverbouwing" },
  { src: "/Projects/cementing.jpg", alt: "Fundering en betonwerken" },
  { src: "/Projects/Woodenwall1.0.jpg", alt: "Houten gevelbekleding — afgewerkt project" },
  { src: "/Projects/Woodenwall1.1.jpg", alt: "Houten gevelbekleding — detail" },
  { src: "/Projects/Plumbing1.1.jpg", alt: "Leidingwerken op locatie" },
  { src: "/Projects/Plumbing1.2.jpg", alt: "Riolering en technieken" },
  { src: "/Projects/Floormesh.jpg", alt: "Vloerwapening voor betonvloer" },
];

export function ProjectSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-secondary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Projectfoto's slideshow"
    >
      {/* Slides */}
      {slides.map(({ src, alt }, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dark gradient overlay at bottom for dots legibility */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Prev button */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/30 text-white hover:bg-black/50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Vorige foto"
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/30 text-white hover:bg-black/50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Volgende foto"
      >
        <ChevronRight className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Selecteer foto">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Foto ${i + 1}`}
            onClick={() => { setCurrent(i); setPaused(true); }}
            className={`w-2 h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
