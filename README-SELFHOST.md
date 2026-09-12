# Invisible Aligners — self-hosting guide

Full source of the Invisible Aligners website: React 19 + TanStack Start
(SSR), Tailwind v4, custom black-and-white design system, scroll-scrub
cinematic film, provider locator, dentist partnership funnel and WhatsApp
booking forms.

## What is in this package

- `src/` — all pages and components
- `public/assets/` — the generated imagery, film and favicons
- `scripts/static-export.sh` — one-command static export for any web server
- `nginx.conf` — ready nginx server block for the static export
- `Dockerfile` — containerized hosting (client-rendered mode)

## Quick local run

Requires Bun (https://bun.sh) or Node 20+.

```bash
bun install
bun run dev        # local dev at http://localhost:3000
bun run build      # production build (dist/client)
```

## Option A — private VPS / any web server (recommended)

Export every page to plain HTML and serve it with nginx:

```bash
bash scripts/static-export.sh        # writes dist-static/
```

Then point nginx at `dist-static` (edit the paths in `nginx.conf`), e.g.:

```bash
cp nginx.conf /etc/nginx/sites-available/invisible-aligners
# edit the root path to /srv/invisible-aligners/dist-static
ln -s /etc/nginx/sites-available/invisible-aligners /etc/nginx/sites-enabled/
systemctl reload nginx
```

The export is fully server-rendered with hydration enabled, so the
postal-code locator, accordions and WhatsApp forms keep working; all
generated photos and the film are served same-origin in grayscale.

## Option B — Docker

```bash
docker build -t invisible-aligners .
docker run -p 8080:80 invisible-aligners
# open http://localhost:8080
```

(Serves the built client in SPA mode: first visit loads client-side.)

## Option C — Cloudflare Workers (the current live host)

The live site runs as a single Worker with SSR. Push this repo's `main`
to your Higgsfield website build (the same pipeline used to develop it),
or adapt `wrangler.jsonc` + `app.manifest.json` for your own Cloudflare
account.

## Customizing

- Phone, WhatsApp, address, hours, payments: `src/lib/site-data.ts`
- Brand name, tagline, logo lockup: `src/components/site/logo.tsx`
- Page titles / social card: `src/app-meta.json`
- Treatments, FAQ, team, recognition: `src/lib/site-data.ts`
- Styling tokens (colors, type, CTA garments): `src/styles.css`
- The cinematic film: `public/assets/world/scene-01.mp4` (+ mobile encode
  and posters). Replace the four files to swap the film.
- SEO structured data (Dentist/MedicalClinic JSON-LD) lives in
  `src/routes/experience-centers/chennai-express-avenue.tsx` and
  `src/routes/contact.tsx`.

## Notes

- `scripts/static-export.sh` needs a working `bun install` first.
- `refs/` (design boards) is intentionally not shipped in this package;
  it is not used by the site at runtime.
- The film and imagery render in black and white via CSS; the raw assets
  are the color originals.
## GoDaddy hosting
See INSTALL-GODADDY.md for the shared-hosting (cPanel) upload path and the
VPS installer script.
