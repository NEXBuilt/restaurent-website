"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { restaurantConfig as r } from "@/config/restaurant";
import { waLink } from "@/lib/utils";
const links = ["home", "menu", "about", "gallery", "reviews", "location"];
export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid || open ? "bg-bg/90 text-ink shadow-sm backdrop-blur-md" : "text-secondary"}`}>
      <nav aria-label="Main" className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5">
        <a href="#home" className="font-display text-2xl font-bold tracking-[0.2em]">{r.name}</a>
        <ul className="hidden items-center gap-7 lg:flex">{links.map((l) => <li key={l}><a href={`#${l}`} aria-current={active === l ? "true" : undefined} className="relative py-1 text-sm capitalize">{l}<span className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-accent transition-transform ${active === l ? "scale-x-100" : "scale-x-0"}`} /></a></li>)}</ul>
        <a href={r.links.ordering || waLink()} className="btn btn-gold hidden lg:inline-flex">ORDER NOW</a>
        <button className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <div className={`overflow-hidden bg-primary text-secondary transition-[max-height,opacity] duration-300 lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-1 p-5">{links.map((l) => <li key={l}><a href={`#${l}`} onClick={() => setOpen(false)} className="block py-3 text-lg capitalize">{l}</a></li>)}</ul>
      </div>
    </header>
  );
}
