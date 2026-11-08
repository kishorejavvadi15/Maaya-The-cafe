import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { MENU } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import cappuccino from "@/assets/cappuccino.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Our Menu — Maayaa The Cafe" },
      { name: "description", content: "Full menu and prices: chai, barista coffee, thick shakes, Maggi, fries, pasta, mojitos, sandwiches and combo deals." },
      { property: "og:title", content: "Our Menu — Maayaa The Cafe" },
      { property: "og:description", content: "Chai, coffee, shakes, pasta, sandwiches and combos with prices in ₹." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return MENU.filter((c) => cat === "all" || c.id === cat)
      .map((c) => ({ ...c, items: c.items.filter((i) => !s || i.name.toLowerCase().includes(s)) }))
      .filter((c) => c.items.length > 0);
  }, [q, cat]);

  return (
    <>
      <PageHero eyebrow="Prices in ₹" title="Our Menu" image={cappuccino} />
      <div className="sticky top-[73px] z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4">
          <label className="relative block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the menu…"
              className="w-full border border-input bg-card py-2.5 pl-10 pr-3 text-sm outline-none focus:border-gold" />
          </label>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {[{ id: "all", title: "All" }, ...MENU].map((c) => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`shrink-0 border px-3 py-1.5 text-xs uppercase tracking-wider transition ${cat === c.id ? "border-chocolate bg-chocolate text-cream" : "border-border text-chocolate hover:border-gold"}`}>
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-6xl px-5 py-16">
        {shown.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">No items match “{q}”.</p>
        ) : (
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {shown.map((c) => (
              <div key={c.id} id={c.id} className="scroll-mt-48 break-inside-avoid">
                <h2 className="font-script text-4xl text-chocolate md:text-5xl">{c.title}</h2>
                <div className="gold-rule my-4" />
                <ul className="space-y-3">
                  {c.items.map((i) => (
                    <li key={i.name} className="flex items-end">
                      <span className="font-display text-lg text-foreground">{i.name}</span>
                      <span className="menu-leader" />
                      <span className="font-sans text-base font-medium tabular-nums text-chocolate">₹{i.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
