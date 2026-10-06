"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/config/restaurant";
import { inr } from "@/lib/utils";

export default function DishCard({ item, onAdd }: { item: MenuItem; onAdd: (id: string) => void }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotY = useTransform(mx, [-0.5, 0.5], [-5, 5]);
  const rotX = useTransform(my, [-0.5, 0.5], [5, -5]);
  const imgX = useTransform(mx, [-0.5, 0.5], [-8, 8]);
  const move = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const b = ref.current.getBoundingClientRect();
    mx.set((e.clientX - b.left) / b.width - 0.5); my.set((e.clientY - b.top) / b.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };
  return (
    <div style={{ perspective: 900 }}>
      <motion.article ref={ref} onPointerMove={move} onPointerLeave={reset} style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        whileHover={reduce ? undefined : { y: -6 }} className="group overflow-hidden rounded-3xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl">
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.div style={{ x: imgX, scale: 1.12 }} className="absolute inset-0">
            <Image src={item.img} alt={`${item.name} at AURA`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </motion.div>
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink shadow" style={{ transform: "translateZ(30px)" }}>POPULAR</span>
        </div>
        <div className="p-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl text-primary">{item.name}</h3>
            <span className="text-lg font-semibold">{inr(item.price)}</span>
          </div>
          <p className="mt-1 text-sm text-ink/70">{item.desc}</p>
          <button onClick={() => onAdd(item.id)} aria-label={`Add ${item.name} to order`} className="btn btn-primary mt-4 w-full lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:focus-visible:opacity-100"><Plus size={16} />ADD TO ORDER</button>
        </div>
      </motion.article>
    </div>
  );
}
