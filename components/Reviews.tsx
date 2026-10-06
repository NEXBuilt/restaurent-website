import { Star } from "lucide-react";
import { restaurantConfig as r } from "@/config/restaurant";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
export default function Reviews() {
  return (
    <section id="reviews" className="bg-primary py-20 text-secondary md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading light title="What our guests say" sub={`${r.rating} / 5 from ${Number(r.reviewCount).toLocaleString()}+ Google Reviews`} />
        <div className="grid gap-5 md:grid-cols-3">
          {r.reviews.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.1}>
              <figure className="h-full rounded-3xl bg-secondary/10 p-6">
                <div className="flex text-accent" role="img" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={18} fill="currentColor" />)}</div>
                <blockquote className="mt-4 text-lg leading-relaxed">“{v.text}”</blockquote>
                <figcaption className="mt-4 text-secondary/75">{v.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <a href={r.links.googleReviews} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-10">VIEW GOOGLE REVIEWS</a>
      </div>
    </section>
  );
}
