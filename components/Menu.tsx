"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { categories, menu } from "@/config/restaurant";
import { inr } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

type Filter = "Veg" | "Non-Veg" | "Popular" | "Spicy";
const filters: Filter[] = ["Veg", "Non-Veg", "Popular", "Spicy"];

export default function Menu({ onAdd }: { onAdd: (id: string) => void }) {
  const reduce = useReducedMotion();
  const [cat, setCat] = useState<string>("POPULAR");
  const [q, setQ] = useState("");
  const [f, setF] = useState<Filter[]>([]);
  const items = useMemo(() => menu.filter((m) => {
    if (q) { if (!`${m.name} ${m.desc}`.toLowerCase().includes(q.toLowerCase())) return false; }
    else if (cat === "POPULAR" ? !m.popular : m.cat !== cat) return false;
    return f.every((x) => (x === "Veg" ? m.veg : x === "Non-Veg" ? !m.veg : x === "Popular" ? m.popular : m.spicy));
  }), [cat, q, f]);
  const toggle = (x: Filter) => setF((p) => (p.includes(x) ? p.filter((y) => y !== x) : [...p, x]));
  return (
    <section id="menu" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading title="The Menu" sub="Tap a category, search, or filter. Add dishes and send your order on WhatsApp." />
        <div role="tablist" aria-label="Menu categories" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-3">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={`min-h-[44px] shrink-0 rounded-full px-5 text-sm font-semibold transition ${cat === c ? "bg-primary text-secondary" : "bg-white text-ink hover:bg-primary/10"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
          <label className="relative flex-1 md:max-w-sm">
            <span className="sr-only">Search the menu</span>
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/50" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes" className="h-12 w-full rounded-full border border-ink/15 bg-white pl-11 pr-4" />
          </label>
          <div className="flex flex-wrap gap-2">
            {filters.map((x) => <button key={x} aria-pressed={f.includes(x)} onClick={() => toggle(x)} className={`min-h-[40px] rounded-full border px-4 text-sm transition ${f.includes(x) ? "border-accent bg-accent text-ink" : "border-ink/20 bg-white"}`}>{x}</button>)}
          </div>
        </div>
        <motion.ul layout className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((m) => (
              <motion.li layout key={m.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} whileHover={reduce ? undefined : { y: -5, rotateX: 2, rotateY: -1 }} style={{ transformPerspective: 900, transformStyle: "preserve-3d" }} transition={{ duration: 0.3 }} className="flex gap-4 rounded-2xl bg-white p-3 shadow-sm hover:shadow-xl">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-xl sm:size-28"><Image src={m.img} alt={m.name} fill sizes="112px" className="object-cover" loading="lazy" /></div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start gap-2">
                    <span role="img" aria-label={m.veg ? "Vegetarian" : "Non-vegetarian"} className={`mt-1 grid size-3.5 shrink-0 place-items-center border-2 ${m.veg ? "border-green-600" : "border-red-600"}`}><span className={`block size-1.5 rounded-full ${m.veg ? "bg-green-600" : "bg-red-600"}`} /></span>
                    <h3 className="font-semibold leading-tight">{m.name}</h3>
                    {m.popular && <span className="rounded bg-accent/25 px-1.5 text-[10px] font-bold">POPULAR</span>}
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-ink/65">{m.desc}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="font-semibold text-primary">{inr(m.price)}</span>
                    <button onClick={() => onAdd(m.id)} aria-label={`Add ${m.name} to order`} className="grid size-11 place-items-center rounded-full bg-primary text-secondary transition active:scale-90"><Plus size={18} /></button>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        {items.length === 0 && <p className="mt-10 text-center text-ink/70">No dishes match. Clear a filter or try another search.</p>}
      </div>
    </section>
  );
}
