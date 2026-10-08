import Image from "next/image";
import { Star, ArrowDown } from "lucide-react";
import { restaurantConfig as r, images } from "@/config/restaurant";
import { waLink } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-primary text-secondary">
      <div className="absolute inset-0">
        <Image src={images.hero} alt="Slow-cooked chicken biryani served at AURA" fill priority fetchPriority="high" sizes="100vw" quality={60} className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-black/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-32 md:pb-24">
        <div className="hero-content">
          <h1 className="font-display text-[22vw] leading-[0.85] tracking-tight md:text-[12rem]">{r.name}</h1>
          <p className="mt-4 max-w-xl font-display text-2xl uppercase leading-snug tracking-wide md:text-3xl">Authentic flavour.<br />Modern experience.</p>
          <p className="mt-4 max-w-md text-lg text-secondary/85">Where traditional recipes meet a contemporary dining experience.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="btn btn-gold">VIEW MENU</a>
            <a href={r.links.ordering || waLink()} className="btn btn-ghost">ORDER NOW</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="flex text-accent" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</span>
            <span><strong>{r.rating} / 5</strong> · {Number(r.reviewCount).toLocaleString()}+ Google Reviews</span>
            <span className="text-secondary/75">Trusted by food lovers across Chennai.</span>
          </div>
        </div>
        <a href="#menu" className="absolute bottom-10 right-5 hidden items-center gap-2 text-xs tracking-widest lg:flex">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
      </div>
    </section>
  );
}
