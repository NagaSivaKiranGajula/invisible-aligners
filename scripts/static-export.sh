#!/usr/bin/env bash
# Full static export of the site for any private server.
# Requires: bun install already done.
#   bash scripts/static-export.sh
# Writes:  app/dist-static/  (index.html per route + assets)

set -euo pipefail
cd "$(dirname "$0")/.."

bun install >/dev/null 2>&1 || true   # relink node_modules/.bin between environment resets

PORT="${PORT:-3011}"
OUT="${OUT:-dist-static}"

rm -rf dist/client  # force a fresh bundle per variant build
echo ">> building client bundle..."
bun run build >/dev/null

echo ">> starting dev server on port ${PORT}..."
bun run dev -- --port "$PORT" --host 127.0.0.1 >/tmp/static-export-vite.log 2>&1 &
PID=$!
trap 'kill "$PID" 2>/dev/null || true' EXIT

for _ in $(seq 1 60); do
  if curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

mkdir -p "$OUT"

ROUTES="/ /product /experience-centers /experience-centers/chennai-express-avenue /find-a-provider /dentists /about /contact /robots.txt /sitemap.xml"

for route in $ROUTES; do
  if [ "$route" = "/robots.txt" ] || [ "$route" = "/sitemap.xml" ]; then
    file="$OUT${route}"
    mkdir -p "$(dirname "$file")"
    curl -sf "http://127.0.0.1:${PORT}${route}" > "$file" \
      || echo "WARN: failed to fetch ${route}"
    continue
  fi
  file="$OUT${route%/}/index.html"
  mkdir -p "$(dirname "$file")"
  curl -sf "http://127.0.0.1:${PORT}${route}" > "$file" \
    || echo "WARN: failed to fetch ${route}"
done

echo ">> copying built assets and public files..."
[ -d dist/client ] && cp -r dist/client/. "$OUT"/
[ -d public ] && cp -r public/. "$OUT"/

echo ">> static export ready in ${OUT}"
du -sh "$OUT"