import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
// Page metadata (browser <title>/favicon + social og: tags) committed into the
// repo and read at BUILD time — no runtime fetch.
import appMetaJson from "../app-meta.json";
import { SiteHeader } from "../components/site/site-header";
import { SiteFooter } from "../components/site/site-footer";
import { SiteMotion } from "../components/site/site-motion";


const DEFAULT_TITLE = "Invisible Aligners";
const DEFAULT_DESCRIPTION =
  "Straighten your smile, discreetly. USA-designed, biodegradable clear aligners planned by dentists at our Chennai studio.";

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
  marketplace_cover_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;

const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];

function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value;
  try {
    const u = new URL(value);
    const isAppHost = APP_HOST_ZONES.some(
      (zone) => u.hostname === zone || u.hostname.endsWith(`.${zone}`),
    );
    if (isAppHost) return u.pathname + u.search;
    return value;
  } catch {
    return value;
  }
}

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = toOwnAssetUrl(meta.og_image_url);
  const favicon = toOwnAssetUrl(meta.favicon_url);
  const ogVideo = toOwnAssetUrl(meta.og_video_url);

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: `#${"0a0a0a"}` },
      {
        name: "twitter:card",
        content: ogImage ? "summary_large_image" : "summary",
      },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { name: "twitter:image", content: ogImage },
          ]
        : []),
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      ...(favicon ? [{ rel: "icon", href: favicon }] : []),
      { rel: "icon", type: "image/x-icon", href: "/assets/branding/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/branding/favicon-16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/branding/favicon-32.png" },
      { rel: "apple-touch-icon", href: "/assets/branding/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  };
}

function NotFoundComponent() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-lagoon-950 px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display-2">This page drifted out of alignment</h1>
      <p className="prose-site">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="cta-mono" aria-label="Back to the home page">
        <span className="readout-text">cd ~/home</span>
        <span className="cursor-block" aria-hidden="true" />
      </Link>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-lagoon-950 px-6 text-center">
      <p className="eyebrow">Error</p>
      <h1 className="display-2">This page did not load</h1>
      <p className="prose-site">Something went wrong on our end. Try refreshing, or head back home.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="cta-chip"
        >
          <span className="chip-dot" aria-hidden="true" />
          Try again
        </button>
        <Link to="/" className="cta-mono" aria-label="Back to the home page">
          <span className="readout-text">cd ~/home</span>
          <span className="cursor-block" aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <head>
        {/* Brand fonts: Satoshi (Fontshare) + JetBrains Mono (Google) */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
        <HeadContent />
      </head>
      <body className="bg-lagoon-950 text-bone">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteMotion />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  );
}