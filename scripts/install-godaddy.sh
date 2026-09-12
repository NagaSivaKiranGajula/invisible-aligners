#!/usr/bin/env bash
# Invisible Aligners — installer for a GoDaddy Linux server (VPS or any
# Linux box with SSH). For shared/cPanel hosting, see INSTALL-GODADDY.md
# (you only need the dist-static/ output).
#
# Usage: bash scripts/install-godaddy.sh [destination]
#   default destination: /var/www/invisible-aligners

set -euo pipefail
cd "$(dirname "$0")/.."

DEST="${1:-/var/www/invisible-aligners}"

echo "1/4  Fetching media assets into public/ ..."
bash scripts/fetch-public-assets.sh

echo "2/4  Building the static export ..."
bash scripts/static-export.sh

echo "3/4  Installing into ${DEST} ..."
mkdir -p "$DEST"
cp -r dist-static/. "$DEST"/
cp dist-static/.htaccess "$DEST/." 2>/dev/null || true

echo "4/4  Done."

cat <<NOTE

Now point your server at ${DEST}:

- Apache (shared hosting / cPanel): the .htaccess inside the folder already
  handles every route. Upload the contents of dist-static/ into public_html
  if you are not using this script directly.
- nginx: use the server block in nginx.conf with:
      root ${DEST};
- Then enable HTTPS with a GoDaddy SSL certificate or Let's Encrypt.
NOTE