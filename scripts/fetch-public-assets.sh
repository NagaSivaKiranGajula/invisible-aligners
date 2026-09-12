#!/usr/bin/env bash
# Re-download every media asset from the live site into app/public.
# Usage: bash scripts/fetch-public-assets.sh
set -euo pipefail
ORIGIN="${ORIGIN:-https://invisibledental.higgsfield.app}"
cd "$(dirname "$0")/.."
while read -r path; do
  [ -z "$path" ] && continue
  dest="public${path}"
  mkdir -p "$(dirname "$dest")"
  if [ ! -f "$dest" ]; then curl -sf "${ORIGIN}${path}" -o "$dest" || echo "WARN: ${path}"; fi
done <<LIST
/assets/branding/apple-touch-icon.png
/assets/branding/cover.png
/assets/branding/favicon-16.png
/assets/branding/favicon-32.png
/assets/branding/favicon.ico
/assets/branding/icon-192.png
/assets/branding/icon-512.png
/assets/branding/maskable-512.png
/assets/branding/og.png
/assets/clinic-reception.png
/assets/landing/template-preview.svg
/assets/people/dentist-woman.png
/assets/people/smile-portrait.png
/assets/people/testimonial-man.png
/assets/people/testimonial-woman.png
/assets/product/lifestyle-hands.png
/assets/product/tray-leaf.png
/assets/product/tray-macro.png
/assets/world/scene-01-mobile.mp4
/assets/world/scene-01-mobile-poster.png
/assets/world/scene-01.mp4
/assets/world/scene-01-poster.png
/presets/cover.png
/presets/explain.png
/presets/how-product-works.png
/presets/hyper-motion.png
/site.webmanifest
LIST
echo "Assets restored into public/ (skips existing files)."
