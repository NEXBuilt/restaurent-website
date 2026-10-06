import { MessageCircle, Phone, Minus, Plus } from "lucide-react";
import { restaurantConfig as r, menu } from "@/config/restaurant";
import { Cart, cartItems, inr, waLink } from "@/lib/utils";
import Reveal from "./Reveal";

export default function DirectOrder({ cart, onChange }: { cart: Cart; onChange: (id: string, d: number) => void }) {
  const items = cartItems(cart, menu);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <section id="order" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <h2 className="font-display text-4xl text-primary md:text-6xl">Order direct. Enjoy more.</h2>
          <p className="mt-3 max-w-md text-lg text-ink/70">Skip the extra steps. Order directly from {r.name}.</p>
          <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm" aria-live="polite">
            {items.length === 0 ? <p className="text-ink/70">Your order is empty. Add dishes from the menu above.</p> : (
              <ul className="divide-y divide-ink/10">
                {items.map((i) => (
                  <li key={i.id} className="flex items-center justify-between gap-3 py-3">
                    <span>{i.name} <span className="text-ink/60">{inr(i.price)}</span></span>
                    <span className="flex items-center gap-2">
                      <button aria-label={`Remove one ${i.name}`} onClick={() => onChange(i.id, -1)} className="grid size-10 place-items-center rounded-full border border-ink/20"><Minus size={14} /></button>
                      <span className="w-5 text-center">{i.qty}</span>
                      <button aria-label={`Add one ${i.name}`} onClick={() => onChange(i.id, 1)} className="grid size-10 place-items-center rounded-full border border-ink/20"><Plus size={14} /></button>
                    </span>
                  </li>
                ))}
                <li className="flex justify-between pt-3 font-semibold"><span>Total</span><span>{inr(total)}</span></li>
              </ul>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waLink(items)} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><MessageCircle size={18} />ORDER ON WHATSAPP</a>
            <a href={`tel:${r.phone}`} className="btn border border-primary text-primary"><Phone size={18} />CALL RESTAURANT</a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="self-start rounded-3xl bg-primary p-8 text-secondary">
          <h3 className="font-display text-3xl">Order direct</h3>
          <p className="mt-3 text-secondary/85">{r.directOfferText}</p>
          <a href={r.links.ordering || waLink(items)} className="btn btn-gold mt-6">ORDER DIRECT</a>
        </Reveal>
      </div>
    </section>
  );
}
