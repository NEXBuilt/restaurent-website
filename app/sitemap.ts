import type { MetadataRoute } from "next";
import { restaurantConfig as r } from "@/config/restaurant";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: r.url, lastModified: new Date() }]; }
