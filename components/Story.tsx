import Image from "next/image";
import { restaurantConfig as r, images } from "@/config/restaurant";
import SectionHeading from "./SectionHeading";
export default function Story() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]" style={{ perspective: 1000 }}>
          <Image src={images.story} alt="The AURA dining room" fill sizes="(min-width:1024px) 45vw, 100vw" quality={55} className="object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
          <div className="absolute bottom-4 right-4 rounded-2xl bg-bg/90 p-4 text-primary shadow-xl backdrop-blur"><p className="font-display text-xl">Since 2010</p></div>
        </div>
        <div className="reveal">
          <SectionHeading title="From our kitchen to your table" />
          <p className="max-w-xl text-lg leading-relaxed text-ink/80">{r.story}</p>
          <dl className="mt-10 grid grid-cols-3 gap-4">
            {r.stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-4xl text-primary md:text-5xl">{s.value}{s.suffix}</dd>
                <dt className="mt-1 text-sm text-ink/70">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
