import Reveal from "./Reveal";
export default function SectionHeading({ title, sub, light }: { title: string; sub?: string; light?: boolean }) {
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-14">
      <h2 className={`font-display text-4xl leading-tight md:text-6xl ${light ? "text-secondary" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-lg ${light ? "text-secondary/80" : "text-ink/70"}`}>{sub}</p>}
    </Reveal>
  );
}
