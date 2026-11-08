import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-gold.png";
import { SITE } from "@/lib/site";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Our Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="section-dark sticky top-0 z-50 border-b border-gold/25">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Maayaa The Cafe logo" width={52} height={52} className="h-12 w-12 shrink-0 object-contain" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-script text-3xl text-gold">Maayaa</span>
            <span className="text-[0.6rem] tracking-[0.4em] text-cream/80">THE CAFE</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="text-xs uppercase tracking-[0.22em] text-cream/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={SITE.phoneHref} className="hidden items-center gap-2 text-sm text-gold lg:flex">
          <Phone className="h-4 w-4" /> {SITE.phone}
        </a>
        <button className="text-gold md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-gold/20 px-5 pb-5 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
              className="block border-b border-gold/10 py-3 font-display text-xl text-cream"
              activeProps={{ className: "text-gold" }}>
              {n.label}
            </Link>
          ))}
          <a href={SITE.phoneHref} className="btn-gold mt-5">Call {SITE.phone}</a>
        </nav>
      )}
    </header>
  );
}
