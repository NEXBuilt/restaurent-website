"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { restaurantConfig as r, images } from "@/config/restaurant";
export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-10%", "10%"]);
  return (
    <section ref={ref} className="relative grid min-h-[80svh] place-items-center overflow-hidden text-center text-secondary">
      <motion.div style={{ y }} className="absolute -inset-[12%]"><Image src={images.experience} alt="Guests dining at AURA" fill sizes="100vw" className="object-cover" loading="lazy" /></motion.div>
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative px-5 py-20">
        <h2 className="font-display text-5xl md:text-8xl">More than a meal.</h2>
        <p className="mt-4 text-xl tracking-[0.25em]">DINE. CELEBRATE. ENJOY.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={r.links.bookTable || `tel:${r.phone}`} className="btn btn-gold">BOOK A TABLE</a>
          <a href={r.links.googleMaps} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GET DIRECTIONS</a>
        </div>
      </div>
    </section>
  );
}
