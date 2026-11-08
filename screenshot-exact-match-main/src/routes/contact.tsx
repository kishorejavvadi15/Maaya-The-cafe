import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Navigation } from "lucide-react";
import exterior from "@/assets/cafe-exterior.jpg";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { InstagramBand } from "@/components/InstagramBand";
import { MapEmbed } from "@/components/MapEmbed";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Maayaa The Cafe" },
      { name: "description", content: "Call 9110747029 or visit us on Medak Highway Road, Gandimaismma, Hyderabad. Open daily 10 AM – 11 PM." },
      { property: "og:title", content: "Contact & Location — Maayaa The Cafe" },
      { property: "og:description", content: "Find Maayaa The Cafe on Medak Highway Road, Hyderabad. Open daily 10 AM – 11 PM." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Visit Us" image={exterior} />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.3fr]">
        <div className="section-dark p-8 md:p-12">
          <h2 className="font-script text-5xl text-gold">Maayaa The Cafe</h2>
          <div className="gold-rule my-6" />
          <ul className="space-y-6 text-cream/85">
            <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-gold" /><div><p className="eyebrow">Phone</p><a href={SITE.phoneHref} className="font-display text-2xl text-cream hover:text-gold">{SITE.phone}</a></div></li>
            <li className="flex gap-4"><Clock className="mt-1 h-5 w-5 shrink-0 text-gold" /><div><p className="eyebrow">Opening Hours</p><p className="font-display text-xl">{SITE.hours}, every day</p></div></li>
            <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" /><div><p className="eyebrow">Address</p><p className="leading-relaxed">{SITE.address}</p></div></li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={SITE.phoneHref} className="btn-gold"><Phone className="h-4 w-4" /> Call Now</a>
            <a href={SITE.directions} target="_blank" rel="noreferrer" className="btn-outline-gold"><Navigation className="h-4 w-4" /> Get Directions</a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="btn-outline-gold"><Instagram className="h-4 w-4" /> Instagram</a>
          </div>
        </div>
        <div className="min-h-[420px] overflow-hidden border border-gold/40 bg-secondary">
          <MapEmbed />
        </div>
      </section>
      <InstagramBand />
    </>
  );
}
