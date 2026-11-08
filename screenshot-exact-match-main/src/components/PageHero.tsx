export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="hero-scrim absolute inset-0 -z-10" />
      <div className="mx-auto max-w-5xl px-5 py-24 text-center md:py-32">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-script text-6xl text-gold md:text-8xl">{title}</h1>
      </div>
    </section>
  );
}
