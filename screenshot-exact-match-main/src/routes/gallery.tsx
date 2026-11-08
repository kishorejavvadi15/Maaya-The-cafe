import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import exterior from "@/assets/cafe-exterior.jpg";
import interior from "@/assets/interior.jpg";
import barista from "@/assets/barista.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import shakes from "@/assets/shakes.jpg";
import maggi from "@/assets/maggi.jpg";
import pasta from "@/assets/pasta.jpg";
import sandwich from "@/assets/sandwich-fries.jpg";
import mojitos from "@/assets/mojitos.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Maayaa The Cafe" },
      { name: "description", content: "Photos of Maayaa The Cafe: our café, coffee, shakes, Maggi, pasta, sandwiches, fries and mojitos." },
      { property: "og:title", content: "Gallery — Maayaa The Cafe" },
      { property: "og:description", content: "A look inside Maayaa The Cafe and our favourite plates." },
    ],
  }),
  component: Gallery,
});

const PHOTOS = [
  { src: exterior, alt: "Café exterior", span: "md:col-span-2 md:row-span-2" },
  { src: interior, alt: "Café interior", span: "md:col-span-2" },
  { src: barista, alt: "Coffee preparation", span: "md:row-span-2" },
  { src: cappuccino, alt: "Cappuccino with latte art", span: "" },
  { src: shakes, alt: "Thick shakes", span: "" },
  { src: maggi, alt: "Maayaa Special Maggi", span: "" },
  { src: pasta, alt: "Pink sauce pasta", span: "md:col-span-2" },
  { src: sandwich, alt: "Sandwich and fries", span: "" },
  { src: mojitos, alt: "Refreshing mojitos", span: "" },
];

function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % PHOTOS.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + PHOTOS.length) % PHOTOS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  const current = idx !== null ? PHOTOS[idx] : undefined;
  return (
    <>
      <PageHero eyebrow="Gallery" title="Maayaa Moments" image={interior} />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <button key={p.alt} onClick={() => setIdx(i)} className={`group relative overflow-hidden ${p.span}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 to-transparent p-4 text-left text-sm tracking-wider text-cream opacity-0 transition group-hover:opacity-100">{p.alt}</span>
            </button>
          ))}
        </div>
      </section>
      {idx !== null && current && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/95 p-4" onClick={() => setIdx(null)} role="dialog" aria-label={current.alt}>
          <button className="absolute right-5 top-5 text-cream" aria-label="Close"><X className="h-8 w-8" /></button>
          <button className="absolute left-3 text-gold" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + PHOTOS.length) % PHOTOS.length); }}><ChevronLeft className="h-10 w-10" /></button>
          <img src={current.src} alt={current.alt} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-3 text-gold" aria-label="Next" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % PHOTOS.length); }}><ChevronRight className="h-10 w-10" /></button>
        </div>
      )}
    </>
  );
}
