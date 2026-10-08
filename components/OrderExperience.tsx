"use client";
import { useCallback, useState } from "react";
import type { Cart } from "@/lib/utils";
import SignatureDishes from "./SignatureDishes";
import Menu from "./Menu";
import DirectOrder from "./DirectOrder";
export default function OrderExperience() {
  const [cart, setCart] = useState<Cart>({});
  const change = useCallback((id: string, d: number) => setCart((c) => { const n = Math.max(0, (c[id] ?? 0) + d); const next = { ...c }; if (n) next[id] = n; else delete next[id]; return next; }), []);
  const add = useCallback((id: string) => change(id, 1), [change]);
  return <><SignatureDishes onAdd={add} /><Menu onAdd={add} /><DirectOrder cart={cart} onChange={change} /></>;
}
