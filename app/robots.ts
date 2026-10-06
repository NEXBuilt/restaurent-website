import type { MetadataRoute } from "next";
import { restaurantConfig as r } from "@/config/restaurant";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: `${r.url}/sitemap.xml` }; }
