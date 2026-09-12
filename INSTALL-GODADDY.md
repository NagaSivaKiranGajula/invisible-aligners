# Install on GoDaddy Linux hosting

The site is a fully static, installable website. It does not need PHP, a
database, or a Node runtime on the server: every page is prerendered to
plain HTML with hydration enabled, so the locator search, accordions and
WhatsApp forms keep working.

Two GoDaddy Linux products, two install paths.

---

## Path A — GoDaddy shared hosting (cPanel)

This is the simplest. You build the static export once on your own
computer (or a VPS), then upload the result to GoDaddy.

1. On your computer (Bun installed):

   ```bash
   bun install
   bash scripts/fetch-public-assets.sh     # restores all media from the live site
   bash scripts/static-export.sh           # creates dist-static/
   ```

2. In GoDaddy cPanel open **File Manager** and go to `public_html`.

3. Upload the `dist-static` folder (Site can be zipped: upload the zip and
   use Extract in File Manager).

4. The included `.htaccess` automatically routes every page
   (`/product`, `/dentists`, `/contact` and the rest) to the right
   prerendered HTML, so no extra setup is needed.

5. Add an SSL certificate in cPanel (GoDaddy SSL or AutoSSL) so the site
   runs on https.

That is the whole install. Point your domain to the hosting and it works.

---

## Path B — GoDaddy Linux VPS / Dedicated

With SSH access, one script does everything:

```bash
cd /var/www
tar -xzf invisible-aligners-code.tar.gz
cd app
bash scripts/install-godaddy.sh          # fetches media, runs the export,
                                         # installs to /var/www/invisible-aligners
```

Then:

- **Apache**: the installed folder already contains `.htaccess`.
  `chown -R www-data:www-data /var/www/invisible-aligners` and enable the
  site; the folder works with the default vhost (or set your vhost
  DocumentRoot to it).
- **nginx**: copy `nginx.conf` to `/etc/nginx/sites-available/invisible-aligners`,
  edit `root` to `/var/www/invisible-aligners`, symlink it into
  `sites-enabled`, then `systemctl reload nginx`.
- Add HTTPS with a GoDaddy certificate or Let's Encrypt.

---

## What you get server-side

```
dist-static/
  index.html                      # home (prerendered)
  product/index.html              # the aligners
  experience-centers/index.html
  experience-centers/chennai-express-avenue/index.html
  find-a-provider/index.html
  dentists/index.html
  about/index.html
  contact/index.html
  robots.txt  sitemap.xml
  assets/                         # film, photos, icons, favicons
  .htaccess                       # Apache routing + caching
```

## Updating the site later

Rebuild locally (`fetch-public-assets.sh` + `static-export.sh`) and
re-upload the changed files to `public_html` (or re-run
`install-godaddy.sh` on the VPS).

## Notes

- Shared hosting serves the static site as-is; no PHP or Node is used at
  runtime.
- The film and imagery load grayscale on the site via CSS; the raw asset
  files are the color originals.
- All editable content lives in `app/src` (see README-SELFHOST.md for the
  exact files).