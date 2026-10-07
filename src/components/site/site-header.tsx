import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { NAV, SITE } from "@/lib/site-data";
import { BrandLockup } from "./logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-colors duration-300 ${
        isLight
          ? "border-b hairline bg-lagoon-950/95 backdrop-blur-md"
          : scrolled || open
            ? "border-b hairline bg-lagoon-950/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-lagoon-950/85 via-lagoon-950/40 to-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="EcoAligners home" onClick={() => setOpen(false)}>
          <BrandLockup compact />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-active={pathname === item.to || pathname.startsWith(`${item.to}/`)}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-bone transition-colors hover:text-mint"
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            title={`Switch to ${isLight ? "dark" : "light"} mode`}
            onClick={() => setTheme(isLight ? "dark" : "light")}
          >
            {isLight ? (
              <Moon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Sun className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <a
            href={SITE.phoneHref}
            className="mono-label hidden items-center gap-1.5 text-bone hover:text-mint md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-mint" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-px w-5 bg-bone transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-bone transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t hairline bg-lagoon-950/95 backdrop-blur-md lg:hidden">
          <ul className="shell flex flex-col py-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-medium text-bone hover:text-mint"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-t hairline pt-3 pb-2">
              <a href={SITE.phoneHref} className="mono-label flex items-center gap-2 text-fog">
                <Phone className="h-3.5 w-3.5 text-mint" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}