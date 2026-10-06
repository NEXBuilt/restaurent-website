import type { Metadata, Viewport } from "next";
import "./globals.css";
import { restaurantConfig as r } from "@/config/restaurant";
import { hexToRgb } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(r.url),
  title: `${r.name} | ${r.tagline}`,
  description: r.description,
  alternates: { canonical: "/" },
  openGraph: { title: `${r.name} | ${r.tagline}`, description: r.description, url: r.url, type: "website", siteName: r.name },
};
export const viewport: Viewport = { themeColor: r.colors.primary, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const c = r.colors;
  const theme = {
    "--primary": hexToRgb(c.primary), "--secondary": hexToRgb(c.secondary), "--accent": hexToRgb(c.accent), "--bg": hexToRgb(c.background), "--text": hexToRgb(c.text),
    "--font-display": "Georgia, 'Times New Roman', serif", "--font-body": "Arial, Helvetica, sans-serif",
  } as React.CSSProperties;
  const schema = {
    "@context": "https://schema.org", "@type": "Restaurant", name: r.name, description: r.description, url: r.url,
    telephone: r.phone, priceRange: r.priceRange, servesCuisine: r.cuisine, image: `${r.url}/og.jpg`, hasMenu: `${r.url}/#menu`,
    address: { "@type": "PostalAddress", streetAddress: r.address }, openingHours: r.openingHoursSpec,
    aggregateRating: { "@type": "AggregateRating", ratingValue: r.rating, reviewCount: r.reviewCount },
  };
  return (
    <html lang="en" style={theme}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
