"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/config/restaurant";
import SectionHeading from "./SectionHeading";
const spans = ["row-span-2", "", "", "row-span-2", "", "col-span-2 sm:col-span-1"];
export default function Gallery() {
  const reduce = useReducedMotion();
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <SectionHeading title="Gallery" sub="A look at the plates, the room and the people." />
      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 md:gap-4">
        {images.gallery.map((src, i) => (
          <motion.figure key={i} initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
            whileHover={reduce ? undefined : { y: -6, scale: 1.02, rotateX: 3, rotateY: i % 2 === 0 ? -3 : 3, z: 16 }} style={{ transformPerspective: 900, transformStyle: "preserve-3d" }} className={`group relative overflow-hidden rounded-2xl shadow-md transition-shadow duration-500 hover:shadow-2xl ${spans[i]}`}>
            <Image src={src} alt={`AURA gallery photo ${i + 1}`} fill sizes="(min-width:640px) 33vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
