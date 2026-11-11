# Irezumi Tattoo website (React + Vite)

## Run
    npm install
    npm run dev        # local development
    npm run build      # outputs to dist/
    npm run preview    # serve the production build locally

## Edit business details
All facts live in `src/data/businessInfo.js`. The JSON-LD block and `<noscript>` text in `index.html` are static and must be edited to match.

## Deploy (Vercel or Cloudflare Pages)
Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`. No environment variables. Single page with `#` anchors, so no rewrite rules are needed.

## After you have the final HTTPS URL
1. In `index.html` add `<link rel="canonical" href="URL">` and `<meta property="og:url" content="URL">`, and add `"url": "URL"` to the JSON-LD.
2. Add `public/sitemap.xml` listing that URL, and add `Sitemap: URL/sitemap.xml` to `public/robots.txt`.
3. Add and verify the site in Google Search Console, submit the sitemap, then add the URL under "Website" in the Google Business Profile (owner/manager access required). Google decides whether to accept it; nothing here guarantees approval.
4. Test: homepage returns 200 over HTTPS, `tel:` links, directions link, mobile menu, robots.txt, Rich Results Test on the URL.
