"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { restaurantConfig as r, images } from "@/config/restaurant";
import SectionHeading from "./SectionHeading";

function Count({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) { ref.current.textContent = `${to}${suffix}`; return; }
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`; } });
    return () => c.stop();
  }, [inView, to, suffix, reduce]);
  return <span ref={ref}>{to}{suffix}</span>;
}

export default function Story() {
  const box = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: box, offset: ["start end", "end start"] });
  const back = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);
  const front = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div ref={box} className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <motion.div style={{ y: back }} className="absolute -inset-10"><Image src={images.story} alt="The AURA dining room" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></motion.div>
          <motion.div style={{ y: front }} className="absolute bottom-4 right-4 rounded-2xl bg-bg/90 p-4 text-primary shadow-xl backdrop-blur"><p className="font-display text-xl">Since 2010</p></motion.div>
        </div>
        <div>
          <SectionHeading title="From our kitchen to your table" />
          <p className="max-w-xl text-lg leading-relaxed text-ink/80">{r.story}</p>
          <dl className="mt-10 grid grid-cols-3 gap-4">
            {r.stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-4xl text-primary md:text-5xl"><Count to={s.value} suffix={s.suffix} /></dd>
                <dt className="mt-1 text-sm text-ink/70">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
