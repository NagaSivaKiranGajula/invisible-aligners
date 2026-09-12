#!/usr/bin/env bash
# Build all three colour variants as static exports.
#   bash scripts/build-variants.sh
# Produces: dist-static-mono, dist-static-lagoon, dist-static-slate
# Each is a complete installable site with .htaccess for GoDaddy.
# Requirements: bun install done, media fetched (bash scripts/fetch-public-assets.sh).
#
# The palette patcher is state-independent (regex token swap), so the three
# variants can build sequentially without any git juggling.

set -euo pipefail
cd "$(dirname "$0")/.."

bun install >/dev/null 2>&1 || true   # relink node_modules/.bin between environment resets

for name in mono lagoon slate; do
  echo "=== variant: ${name} ==="
  python3 - "$name" <<'PY'
import re, sys

name = sys.argv[1]

STYLES = {
  "mono":  {"lagoon-950": "000000", "lagoon-900": "0a0a0a", "lagoon-800": "161616", "lagoon-700": "222222", "line-ink": "2e2e2e", "bone": "f7f7f5", "fog": "9d9d9d", "mint": "ffffff", "mint-bright": "e6e6e6"},
  "lagoon": {"lagoon-950": "05100f", "lagoon-900": "0b2320", "lagoon-800": "0f2f2a", "lagoon-700": "16403a", "line-ink": "23473f", "bone": "edf2e9", "fog": "a6bcb3", "mint": "7fd8b8", "mint-bright": "a5e6cc"},
  "slate": {"lagoon-950": "070d1a", "lagoon-900": "0b1322", "lagoon-800": "101a30", "lagoon-700": "182645", "line-ink": "243452", "bone": "f2f5fb", "fog": "a9b4c9", "mint": "8fb8e8", "mint-bright": "b3d2f2"},
}
SCENES = {
  "mono":  {"accent": "FFFFFF", "background": "0a0a0a", "ink": "F7F7F5", "muted": "9d9d9d"},
  "lagoon": {"accent": "7FD8B8", "background": "0B2320", "ink": "EDF2E9", "muted": "A6BCB3"},
  "slate": {"accent": "8FB8E8", "background": "0B1322", "ink": "F2F5FB", "muted": "A9B4C9"},
}
ROOT = {"mono": "0a0a0a", "lagoon": "0B2320", "slate": "0B1322"}
MF_BG = {"mono": "000000", "lagoon": "05100f", "slate": "070d1a"}
MF_THEME = {"mono": "0a0a0a", "lagoon": "0B2320", "slate": "0B1322"}

def patch(path, regex, repl, flags=0):
    t = open(path, encoding="utf-8").read()
    t2 = re.sub(regex, repl, t, flags=flags)
    if t2 == t:
        print("WARN no change:", path, regex)
    open(path, "w", encoding="utf-8").write(t2)

# 1. styles.css token block (each --color-* line, regardless of current value)
for token, value in STYLES[name].items():
    patch("src/styles.css",
          rf"(^\s*--color-{token}:\s*)#[0-9a-fA-F]{{6}};",
          rf"\g<1>#{value};",
          flags=re.M)

# 2. scroll-scrub film stage theme
for key, value in SCENES[name].items():
    patch("src/scroll-scrub-scenes.tsx",
          rf'({key}:\s*"#)[0-9a-fA-F]+(",)',
          rf"\g<1>{value}\g<2>")

# 3. browser theme color in __root (string-trick literal)
patch("src/routes/__root.tsx",
      r'#\$\{"[0-9a-fA-F]{6}"\}',
      '#${"' + ROOT[name] + '"}')

# 4. PWA manifest colors
patch("public/site.webmanifest",
      r'("background_color":\s*"#)[0-9a-fA-F]{6}(")',
      r"\g<1>" + MF_BG[name] + r"\g<2>")
patch("public/site.webmanifest",
      r'("theme_color":\s*"#)[0-9a-fA-F]{6}(")',
      r"\g<1>" + MF_THEME[name] + r"\g<2>")

print(f"patched src for {name}")
PY

  rm -rf "dist-static-${name}"
  OUT="dist-static-${name}" bash scripts/static-export.sh
  cp htaccess.example "dist-static-${name}/.htaccess"
done

echo "=== variants complete ==="
du -sh dist-static-mono dist-static-lagoon dist-static-slate
git checkout -- src/styles.css src/scroll-scrub-scenes.tsx src/routes/__root.tsx public/site.webmanifest 2>/dev/null || true
echo "canonical mono source restored"
