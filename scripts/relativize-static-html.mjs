import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve(process.argv[2] ?? "dist-static");

async function listHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

function relativeRootFor(filePath) {
  const relativeDir = path.relative(outDir, path.dirname(filePath));
  if (!relativeDir) return "";

  const depth = relativeDir.split(path.sep).filter(Boolean).length;
  return "../".repeat(depth);
}

for (const filePath of await listHtmlFiles(outDir)) {
  const root = relativeRootFor(filePath);
  const html = await readFile(filePath, "utf8");
  const next = html
    .replaceAll('href="/assets/', `href="${root}assets/`)
    .replaceAll('src="/assets/', `src="${root}assets/`)
    .replaceAll('content="/assets/', `content="${root}assets/`)
    .replaceAll('href="/site.webmanifest"', `href="${root}site.webmanifest"`)
    .replaceAll('href="/robots.txt"', `href="${root}robots.txt"`)
    .replaceAll('href="/sitemap.xml"', `href="${root}sitemap.xml"`);

  if (next !== html) {
    await writeFile(filePath, next);
  }
}
