import { Link } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";

import { NAV, SITE } from "@/lib/site-data";
import { BrandLockup } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t hairline bg-lagoon-950">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLockup />
          <p className="prose-site mt-5 text-[0.95rem]">
            Clear aligners grown from plant-based material, planned by dentists
            at our Chennai experience center.
          </p>
          <p className="mono-label mt-6 flex items-center gap-2 text-mint">
            <Star className="h-3.5 w-3.5 fill-mint" aria-hidden="true" />
            {SITE.rating}, {SITE.reviews}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Explore</p>
          <ul className="space-y-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-[0.95rem] text-fog hover:text-mint">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Visit</p>
          <address className="not-italic">
            <p className="flex items-start gap-2 text-[0.95rem] leading-relaxed text-fog">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <span>
                {SITE.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p className="mt-4 flex items-center gap-2 text-[0.95rem] text-fog">
              <Clock className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              {SITE.hoursLine}
            </p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-mono mt-4"
            >
              <span className="readout-text">open in maps</span>
              <span className="cursor-block" aria-hidden="true" />
            </a>
          </address>
        </div>

        <div>
          <p className="eyebrow mb-5">Talk to us</p>
          <div className="space-y-3 text-[0.95rem] text-fog">
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-mint">
              <Phone className="h-4 w-4 text-mint" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-mint"
            >
              <MessageCircle className="h-4 w-4 text-mint" aria-hidden="true" />
              WhatsApp us
            </a>
            <p className="mono-label pt-2">{SITE.payments}</p>
          </div>
          <Link to="/contact" className="cta-block mt-6" aria-label="Book a consultation">
            <span className="block-fill" aria-hidden="true" />
            <span className="block-label">Book a consultation</span>
          </Link>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="shell flex flex-col gap-2 py-6 text-[0.8rem] text-fog md:flex-row md:items-center md:justify-between">
          <p>© 2026 Invisible Aligners. All rights reserved.</p>
          <p className="mono-label">{SITE.webDomain}</p>
        </div>
      </div>
    </footer>
  );
}