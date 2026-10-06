import { restaurantConfig as r, MenuItem } from "@/config/restaurant";
export const hexToRgb = (h: string) => { const n = parseInt(h.replace("#", ""), 16); return `${n >> 16} ${(n >> 8) & 255} ${n & 255}`; };
export const inr = (n: number) => `₹${n}`;
export function waLink(items: { name: string; qty: number }[] = []) {
  const list = items.map((i) => (i.qty > 1 ? `${i.qty} x ${i.name}` : i.name));
  const body = list.length
    ? `Hi ${r.name}, I'd like to order ${list.length > 1 ? list.slice(0, -1).join(", ") + " and " + list[list.length - 1] : list[0]}.`
    : `Hi ${r.name}, I'd like to place an order.`;
  return `https://wa.me/${r.whatsapp}?text=${encodeURIComponent(body)}`;
}
export type Cart = Record<string, number>;
export const cartItems = (cart: Cart, menu: MenuItem[]) => menu.filter((m) => cart[m.id]).map((m) => ({ id: m.id, name: m.name, qty: cart[m.id], price: m.price }));
