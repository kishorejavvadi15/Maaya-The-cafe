import { createFileRoute } from "@tanstack/react-router";
import interior from "@/assets/interior.jpg";
import barista from "@/assets/barista.jpg";
import sandwich from "@/assets/sandwich-fries.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Maayaa The Cafe" },
      { name: "description", content: "The story of Maayaa The Cafe: handcrafted coffee, fresh food and a warm place to gather in Hyderabad." },
      { property: "og:title", content: "About Us — Maayaa The Cafe" },
      { property: "og:description", content: "Handcrafted coffee, fresh food and a warm place to gather in Hyderabad." },
    ],
  }),
  component: About,
});

const POINTS = [
  ["Premium café atmosphere", "Warm light, soft seating and a calm corner on a busy highway."],
  ["Delicious beverages", "From Irani chai to iced Spanish lattes and thick shakes."],
  ["Freshly prepared food", "Sandwiches, pasta, Maggi and fries made to order."],
  ["Signature creations", "Magic Rose Latte, Midnight Mocha and more, only at Maayaa."],
  ["Time with your people", "A comfortable place for friends and family to linger."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Our Story" image={interior} />
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <p className="font-display text-2xl leading-relaxed text-chocolate md:text-3xl">
          “Welcome to Maayaa The Cafe, your place to relax, refresh and enjoy unforgettable flavours. From refreshing beverages and handcrafted coffee to delicious snacks and signature specials, every experience is made to bring people together.”
        </p>
        <div className="gold-rule mx-auto mt-12 w-40" />
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-[1fr_1.1fr]">
        <div className="grid grid-cols-2 gap-4">
          <img src={barista} alt="Coffee being prepared" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
          <img src={sandwich} alt="Grilled sandwich and fries" loading="lazy" width={1024} height={1024} className="mt-12 aspect-[4/5] w-full object-cover" />
        </div>
        <ol className="divide-y divide-border self-center">
          {POINTS.map(([t, d], i) => (
            <li key={t} className="flex gap-6 py-6">
              <span className="font-display text-3xl text-gold">0{i + 1}</span>
              <div>
                <h3 className="text-2xl text-chocolate">{t}</h3>
                <p className="mt-1 text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
