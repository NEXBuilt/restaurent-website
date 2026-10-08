# NEXBuild AURA Restaurant Template
`npm install && npm run dev`

Customise per client in **config/restaurant.ts** (name, phone, WhatsApp, colours, menu, images, links, SEO data). Replace the placeholder Unsplash photos with the client's own.

## Performance optimization

This version is optimized for Lighthouse mobile without changing the visual direction:
- Removed Framer Motion from the page-wide client bundle and replaced non-essential effects with CSS/native browser APIs.
- Converted the page shell and content sections back to Server Components where possible.
- Isolated cart/menu interactivity in `OrderExperience`.
- Optimized the hero as the only priority image and reduced image quality/sizes for below-the-fold media.
- Added WebP output through Next Image.
- Preserved the 3D-style card/gallery hover effects with CSS.

Run `npm install`, then `npm run build` and `npm start` for a production test before deploying.
