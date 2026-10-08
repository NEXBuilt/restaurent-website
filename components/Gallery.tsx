import Image from "next/image";
import { images } from "@/config/restaurant";
import SectionHeading from "./SectionHeading";
const spans = ["row-span-2", "", "", "row-span-2", "", "col-span-2 sm:col-span-1"];
export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <SectionHeading title="Gallery" sub="A look at the plates, the room and the people." />
      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 md:gap-4">
        {images.gallery.map((src, i) => (
          <figure key={i} className={`reveal group relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl [transform:perspective(900px)_translateZ(0)] hover:[transform:perspective(900px)_rotateX(2deg)_rotateY(-2deg)_translateY(-4px)] ${spans[i]}`}>
            <Image src={src} alt={`AURA gallery photo ${i + 1}`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 33vw, 50vw" quality={55} className="object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
