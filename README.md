# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
Content update:
- Removed top contact bar entirely
- Navbar is now static (non-sticky), no scroll effects
- Removed Prayer Request from nav + hero
- Hero CTA now reads "Watch Latest Service"
- Monthly Verse & Yearly Verse now show Tamil + English side by side
- Watch page redesigned to a single "Latest Sunday Service" embed (paste one YouTube URL in src/data/siteData.js -> latestSermon.youtubeUrl, everything else is automatic)
- Removed Testimonials/stats section from homepage
- Removed all SEO components/meta tags
- Locations page uses Google Maps iframes (unchanged, already matched the requirement)

