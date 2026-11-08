import { Instagram } from "lucide-react";
import { SITE } from "@/lib/site";
import cappuccino from "@/assets/cappuccino.jpg";
import shakes from "@/assets/shakes.jpg";
import mojitos from "@/assets/mojitos.jpg";
import pasta from "@/assets/pasta.jpg";

export function InstagramBand() {
  const pics = [cappuccino, shakes, mojitos, pasta];
  return (
    <section className="section-dark px-5 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="eyebrow">@maayaa.thecafe</p>
        <h2 className="mt-3 font-script text-5xl text-gold md:text-6xl">Follow the Maayaa Moments</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {pics.map((p, i) => (
            <a key={i} href={SITE.instagram} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden">
              <img src={p} alt="Maayaa moment on Instagram" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 grid place-items-center bg-espresso/0 opacity-0 transition group-hover:bg-espresso/50 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-cream" />
              </span>
            </a>
          ))}
        </div>
        <a href={SITE.instagram} target="_blank" rel="noreferrer" className="btn-gold mt-10">
          <Instagram className="h-4 w-4" /> Follow on Instagram
        </a>
      </div>
    </section>
  );
}
