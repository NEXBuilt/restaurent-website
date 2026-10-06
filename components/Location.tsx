import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { restaurantConfig as r } from "@/config/restaurant";
import { waLink } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
export default function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <SectionHeading title="Find us" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 text-lg">
          <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-accent" />{r.address}</p>
          <div className="flex gap-3"><Clock className="mt-1 shrink-0 text-accent" /><ul>{r.hours.map(([d, t]) => <li key={d}>{d}: {t}</li>)}</ul></div>
          <p className="flex gap-3"><Phone className="shrink-0 text-accent" /><a href={`tel:${r.phone}`}>{r.phone}</a></p>
          <div className="flex flex-wrap gap-3">
            <a href={r.links.googleMaps} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GET DIRECTIONS</a>
            <a href={`tel:${r.phone}`} className="btn border border-primary text-primary">CALL</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn border border-primary text-primary"><MessageCircle size={16} />WHATSAPP</a>
          </div>
        </div>
        {r.links.mapEmbed ? <iframe title={`${r.name} on Google Maps`} src={r.links.mapEmbed} loading="lazy" className="h-80 w-full rounded-3xl border-0 lg:h-full" /> : <div className="grid h-80 place-items-center rounded-3xl bg-secondary p-4 text-center text-ink/60">Set links.mapEmbed in config/restaurant.ts to show the map.</div>}
      </div>
    </section>
  );
}
