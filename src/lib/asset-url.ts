export function assetUrl(path: string) {
  const cleanPath = path.replace(/^\/+/, "");

  if (typeof document === "undefined") {
    return `/${cleanPath}`;
  }

  const script = document.querySelector<HTMLScriptElement>(
    'script[type="module"][src*="assets/"]'
  );

  if (!script?.src) {
    return cleanPath;
  }

  const assetPath = cleanPath.startsWith("assets/")
    ? cleanPath.slice("assets/".length)
    : cleanPath;

  return new URL(assetPath, new URL("./", script.src)).toString();
}
