const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const restaurantConfig = {
  name: "AURA",
  tagline: "Authentic Flavour. Modern Experience.",
  description: "Where traditional recipes meet a contemporary dining experience. Biryani, kebabs and South Indian classics in Chennai.",
  url: "https://example.com",
  phone: "+914400000000",
  whatsapp: "914400000000",
  address: "12, Anna Salai, Chennai, Tamil Nadu 600002",
  hours: [["Mon – Fri", "11:00 AM – 11:00 PM"], ["Sat – Sun", "11:00 AM – 12:00 AM"]],
  openingHoursSpec: ["Mo-Fr 11:00-23:00", "Sa-Su 11:00-24:00"],
  priceRange: "₹₹", cuisine: ["Indian", "South Indian", "Biryani"],
  rating: "4.8", reviewCount: "2500",
  colors: { primary: "#6B1D2E", secondary: "#F5ECDC", accent: "#B8964A", background: "#FAF7F2", text: "#242121" },
  social: { instagram: "https://instagram.com/", facebook: "https://facebook.com/", youtube: "" },
  links: { googleMaps: "https://maps.google.com/?q=Anna+Salai+Chennai", googleReviews: "https://google.com/maps", ordering: "", mapEmbed: "", bookTable: "" },
  directOfferText: "Get special offers when ordering directly with us.", // add a % here only if real
  developerCredit: { label: "Built by NEXBuild", url: "https://nexbuild.example" },
  stats: [{ value: 15, suffix: "+", label: "Years of experience" }, { value: 50, suffix: "K+", label: "Happy customers" }, { value: 30, suffix: "+", label: "Signature dishes" }],
  story: "AURA began as a family kitchen with one rule: never rush the masala. Today we still slow-cook every biryani in sealed handis, grind spices in-house and plate with a modern eye, so a recipe your grandmother would recognise arrives looking like it belongs in 2026.",
  reviews: [
    { name: "Priya S.", text: "Absolutely loved the food and atmosphere. The biryani is the best in the city." },
    { name: "Karthik R.", text: "Mutton Kothu was perfectly spiced and the service was warm and quick." },
    { name: "Meera N.", text: "Ordered directly on WhatsApp, food arrived hot and exactly as promised." },
  ],
};

export const images = {
  hero: u("photo-1563379091339-03b21ab4a4f8", 1800),
  story: u("photo-1517248135467-4c7edcad34c4", 1000),
  experience: u("photo-1414235077428-338989a2e8c0", 1800),
  gallery: [u("photo-1563379091339-03b21ab4a4f8", 800), u("photo-1414235077428-338989a2e8c0", 800), u("photo-1517248135467-4c7edcad34c4", 800), u("photo-1567188040759-fb8a883dc6d8", 800), u("photo-1555939594-58d7cb561ad1", 800), u("photo-1504674900247-0877df9cc836", 800)],
};

export type Category = "STARTERS" | "BIRYANI" | "MAIN COURSE" | "VEGETARIAN" | "SEAFOOD" | "DESSERTS" | "DRINKS";
export interface MenuItem { id: string; name: string; desc: string; price: number; cat: Category; veg: boolean; popular?: boolean; spicy?: boolean; img: string }

export const categories = ["POPULAR", "STARTERS", "BIRYANI", "MAIN COURSE", "VEGETARIAN", "SEAFOOD", "DESSERTS", "DRINKS"] as const;
const img = images.gallery;
export const menu: MenuItem[] = [
  { id: "chicken-biryani", name: "Chicken Biryani", desc: "Seeraga samba rice, slow-dum chicken, caramelised onion.", price: 280, cat: "BIRYANI", veg: false, popular: true, spicy: true, img: img[0] },
  { id: "mutton-kothu", name: "Mutton Kothu", desc: "Minced mutton, flaky parotta, pepper and curry leaf.", price: 320, cat: "MAIN COURSE", veg: false, popular: true, spicy: true, img: img[1] },
  { id: "paneer-tikka", name: "Paneer Tikka", desc: "Charred cottage cheese in smoked yoghurt marinade.", price: 260, cat: "STARTERS", veg: true, popular: true, img: img[3] },
  { id: "prawn-65", name: "Prawn 65", desc: "Crisp prawns tossed with curry leaf and red chilli.", price: 350, cat: "SEAFOOD", veg: false, popular: true, spicy: true, img: img[4] },
  { id: "mutton-biryani", name: "Mutton Biryani", desc: "Tender mutton layered with saffron rice.", price: 360, cat: "BIRYANI", veg: false, spicy: true, img: img[0] },
  { id: "veg-biryani", name: "Veg Dum Biryani", desc: "Garden vegetables, mint and fried onions.", price: 220, cat: "BIRYANI", veg: true, img: img[0] },
  { id: "chicken-65", name: "Chicken 65", desc: "The Chennai classic, crisp and fiery.", price: 240, cat: "STARTERS", veg: false, spicy: true, img: img[5] },
  { id: "butter-chicken", name: "Butter Chicken", desc: "Tandoori chicken in silky tomato-butter gravy.", price: 300, cat: "MAIN COURSE", veg: false, img: img[1] },
  { id: "paneer-butter", name: "Paneer Butter Masala", desc: "Soft paneer in rich cashew tomato gravy.", price: 250, cat: "VEGETARIAN", veg: true, img: img[3] },
  { id: "dal-makhani", name: "Dal Makhani", desc: "Black lentils simmered overnight.", price: 210, cat: "VEGETARIAN", veg: true, img: img[2] },
  { id: "fish-fry", name: "Masala Fish Fry", desc: "Seer fish in coastal spice crust.", price: 380, cat: "SEAFOOD", veg: false, spicy: true, img: img[4] },
  { id: "gulab-jamun", name: "Gulab Jamun", desc: "Warm milk dumplings in cardamom syrup.", price: 120, cat: "DESSERTS", veg: true, img: img[5] },
  { id: "payasam", name: "Seasonal Payasam", desc: "Slow-cooked milk pudding with cashew.", price: 140, cat: "DESSERTS", veg: true, img: img[5] },
  { id: "filter-coffee", name: "Filter Coffee", desc: "Chicory-blend decoction, frothed the old way.", price: 80, cat: "DRINKS", veg: true, img: img[2] },
  { id: "rose-lassi", name: "Rose Lassi", desc: "Chilled yoghurt, rose and pistachio.", price: 110, cat: "DRINKS", veg: true, img: img[2] },
];
