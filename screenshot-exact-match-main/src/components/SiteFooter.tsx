import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-gold.png";
import { SITE, MENU } from "@/lib/site";
import { NAV } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="bg-chocolate text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4">
        <div>
          <img src={logo} alt="Maayaa The Cafe logo" width={120} height={120} loading="lazy" className="h-28 w-28 object-contain" />
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Handcrafted coffee, comforting chai and signature bites on Medak Highway Road, Hyderabad.
          </p>
        </div>
        <div>
          <h3 className="eyebrow mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-cream/75 hover:text-gold">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
            {MENU.slice(0, 7).map((c) => (
              <li key={c.id}><Link to="/menu" hash={c.id} className="text-cream/75 hover:text-gold">{c.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 text-sm text-cream/80">
          <h3 className="eyebrow">Visit</h3>
          <a href={SITE.phoneHref} className="flex gap-3 hover:text-gold"><Phone className="h-4 w-4 shrink-0 text-gold" />{SITE.phone}</a>
          <p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" />{SITE.address}</p>
          <p className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-gold" />{SITE.hoursShort}, every day</p>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-gold"><Instagram className="h-4 w-4 shrink-0 text-gold" />@maayaa.thecafe</a>
        </div>
      </div>
      <div className="gold-rule" />
      <p className="py-6 text-center text-xs tracking-widest text-cream/60">© 2026 Maayaa The Cafe. All Rights Reserved.</p>
    </footer>
  );
}
