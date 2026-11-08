import { createFileRoute, Link } from "@tanstack/react-router";
import exterior from "@/assets/cafe-exterior.jpg";
import logo from "@/assets/logo-gold.png";
import interior from "@/assets/interior.jpg";
import barista from "@/assets/barista.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import shakes from "@/assets/shakes.jpg";
import pasta from "@/assets/pasta.jpg";
import maggi from "@/assets/maggi.jpg";
import { InstagramBand } from "@/components/InstagramBand";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maayaa The Cafe | Cafe in Gandimaisamma, Hyderabad" },
      {
        name: "description",
        content:
          "Visit Maayaa The Cafe in Gandimaisamma, Hyderabad. Enjoy handcrafted coffee, chai, refreshing drinks, thick shakes, pasta and delicious snacks.",
      },
      { property: "og:title", content: "Maayaa The Cafe" },
      {
        property: "og:description",
        content:
          "Where Every Sip Feels Special. Visit Maayaa The Cafe in Hyderabad.",
      },
    ],
  }),
  component: Home,
});

const SIGNATURES = [
  { img: cappuccino, name: "Magic Rose Latte", price: 169 },
  { img: shakes, name: "Love at First Sip Shake", price: 219 },
  { img: pasta, name: "Magic Pink Pasta", price: 209 },
  { img: maggi, name: "Maayaa Special Maggi", price: 139 },
];

function Home() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <img src={exterior} alt="Maayaa The Cafe exterior at dusk" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[88vh] max-w-4xl flex-col items-center justify-center px-5 py-20 text-center text-cream">
          <img src={logo} alt="Maayaa The Cafe" width={140} height={140} className="h-32 w-32 object-contain" />
          <h1 className="mt-8 font-display text-5xl font-medium leading-tight md:text-7xl">
            Where Every Sip <span className="font-script text-gold">Feels Special.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/85 md:text-lg">
            Experience the perfect blend of coffee, flavours and unforgettable moments at Maayaa The Cafe.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/menu" className="btn-gold">Explore Our Menu</Link>
            <Link to="/contact" className="btn-outline-gold">Visit Us</Link>
          </div>
          <p className="mt-12 text-xs uppercase tracking-[0.3em] text-cream/70">Open every day · {SITE.hours}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div className="relative">
          <img src={interior} alt="Inside Maayaa The Cafe" loading="lazy" width={1536} height={1024} className="aspect-[4/3] w-full object-cover" />
          <img src={barista} alt="Barista pouring latte art" loading="lazy" width={1024} height={1280} className="absolute -bottom-10 -right-4 hidden w-2/5 border-8 border-cream object-cover shadow-xl md:block" />
        </div>
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 text-4xl font-medium text-chocolate md:text-5xl">A place to pause, sip and stay a little longer</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Welcome to Maayaa The Cafe, your place to relax, refresh and enjoy unforgettable flavours. From refreshing beverages and handcrafted coffee to delicious snacks and signature specials, every experience is made to bring people together.
          </p>
          <Link to="/about" className="mt-8 inline-block border-b border-gold pb-1 text-sm uppercase tracking-[0.2em] text-chocolate hover:text-gold">Read more</Link>
        </div>
      </section>

      <section className="bg-secondary px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-chocolate">Signature Specials</p>
              <h2 className="mt-3 text-4xl font-medium text-chocolate md:text-5xl">Made only at Maayaa</h2>
            </div>
            <Link to="/menu" className="btn-gold">Full Menu</Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SIGNATURES.map((s) => (
              <article key={s.name} className="group bg-card">
                <div className="overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-baseline justify-between gap-3 p-5">
                  <h3 className="text-xl text-chocolate">{s.name}</h3>
                  <span className="shrink-0 font-display text-xl text-gold">₹{s.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InstagramBand />
    </>
  );
}
