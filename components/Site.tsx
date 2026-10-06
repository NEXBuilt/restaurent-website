"use client";
import { useCallback, useState } from "react";
import type { Cart } from "@/lib/utils";
import Navbar from "./Navbar"; import Hero from "./Hero"; import StickyCTA from "./StickyCTA";
import SignatureDishes from "./SignatureDishes"; import Menu from "./Menu"; import DirectOrder from "./DirectOrder";
import Story from "./Story"; import Experience from "./Experience"; import Gallery from "./Gallery";
import Reviews from "./Reviews"; import Location from "./Location"; import Footer from "./Footer";

export default function Site() {
  const [cart, setCart] = useState<Cart>({});
  const change = useCallback((id: string, d: number) => setCart((c) => {
    const n = Math.max(0, (c[id] ?? 0) + d);
    const next = { ...c };
    if (n) next[id] = n; else delete next[id];
    return next;
  }), []);
  const add = useCallback((id: string) => change(id, 1), [change]);
  return (
    <>
      <Navbar />
      <main>
        <Hero /><SignatureDishes onAdd={add} /><Menu onAdd={add} /><DirectOrder cart={cart} onChange={change} />
        <Story /><Experience /><Gallery /><Reviews /><Location />
      </main>
      <Footer /><StickyCTA />
    </>
  );
}
