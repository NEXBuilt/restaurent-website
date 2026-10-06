import { Instagram, Facebook, Youtube } from "lucide-react";
import { restaurantConfig as r } from "@/config/restaurant";
import { waLink } from "@/lib/utils";
export default function Footer() {
  const soc = [{ I: Instagram, h: r.social.instagram, n: "Instagram" }, { I: Facebook, h: r.social.facebook, n: "Facebook" }, { I: Youtube, h: r.social.youtube, n: "YouTube" }].filter((s) => s.h);
  return (
    <footer className="bg-ink pb-28 pt-16 text-secondary lg:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4">
        <div><p className="font-display text-3xl tracking-[0.2em]">{r.name}</p><p className="mt-2 text-sm uppercase tracking-wider text-secondary/70">{r.tagline}</p></div>
        <nav aria-label="Footer"><ul className="space-y-2">{["menu", "about", "gallery", "reviews", "location"].map((l) => <li key={l}><a className="capitalize hover:text-accent" href={`#${l}`}>{l}</a></li>)}</ul></nav>
        <div className="space-y-2 text-sm"><p>{r.address}</p><a className="block" href={`tel:${r.phone}`}>{r.phone}</a><a className="block" href={waLink()}>WhatsApp us</a></div>
        <div className="text-sm"><ul>{r.hours.map(([d, t]) => <li key={d}>{d}: {t}</li>)}</ul>
          <div className="mt-4 flex gap-3">{soc.map(({ I, h, n }) => <a key={n} href={h} aria-label={n} target="_blank" rel="noopener noreferrer"><I size={20} /></a>)}</div></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-2 px-5 text-xs text-secondary/60">
        <p>© {new Date().getFullYear()} {r.name}. All rights reserved.</p>
        {r.developerCredit.label && <a href={r.developerCredit.url}>{r.developerCredit.label}</a>}
      </div>
    </footer>
  );
}
