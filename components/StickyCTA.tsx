import { Phone, UtensilsCrossed, MessageCircle } from "lucide-react";
import { restaurantConfig as r } from "@/config/restaurant";
import { waLink } from "@/lib/utils";
export default function StickyCTA() {
  const item = "flex flex-1 min-h-[52px] flex-col items-center justify-center gap-0.5 text-xs font-semibold";
  return (
    <>
      <a href={r.links.ordering || waLink()} className="btn btn-primary fixed bottom-6 right-6 z-40 hidden shadow-xl lg:inline-flex">ORDER NOW</a>
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-accent/30 bg-primary text-secondary lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <a href={`tel:${r.phone}`} className={item}><Phone size={18} />CALL</a>
        <a href="#menu" className={item}><UtensilsCrossed size={18} />MENU</a>
        <a href={r.links.ordering || waLink()} className={`${item} bg-accent text-ink`}><MessageCircle size={18} />ORDER</a>
      </div>
    </>
  );
}
