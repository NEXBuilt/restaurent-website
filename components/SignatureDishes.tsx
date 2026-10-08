import { menu } from "@/config/restaurant";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import DishCard from "./DishCard";
export default function SignatureDishes({ onAdd }: { onAdd: (id: string) => void }) {
  return <section id="signature" className="mx-auto max-w-7xl px-5 py-20 md:py-28"><SectionHeading title="Signature Dishes" sub="Some favourites deserve the spotlight." /><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{menu.filter((m) => m.popular).slice(0, 4).map((m) => <Reveal key={m.id}><DishCard item={m} onAdd={onAdd} /></Reveal>)}</div></section>;
}
