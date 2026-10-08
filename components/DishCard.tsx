"use client";
import Image from "next/image";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/config/restaurant";
import { inr } from "@/lib/utils";

export default function DishCard({ item, onAdd }: { item: MenuItem; onAdd: (id: string) => void }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-md transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl [transform:perspective(900px)_translateZ(0)] hover:[transform:perspective(900px)_rotateX(1deg)_rotateY(-1deg)_translateY(-4px)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image src={item.img} alt={`${item.name} at AURA`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" quality={60} className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink shadow">POPULAR</span>
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl text-primary">{item.name}</h3>
          <span className="text-lg font-semibold">{inr(item.price)}</span>
        </div>
        <p className="mt-1 text-sm text-ink/70">{item.desc}</p>
        <button onClick={() => onAdd(item.id)} aria-label={`Add ${item.name} to order`} className="btn btn-primary mt-4 w-full lg:translate-y-2 lg:opacity-0 lg:transition-all lg:duration-200 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:focus-visible:opacity-100"><Plus size={16} />ADD TO ORDER</button>
      </div>
    </article>
  );
}
