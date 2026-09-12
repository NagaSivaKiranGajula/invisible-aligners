import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Clock,
  Coins,
  Columns,
  GraduationCap,
  Handshake,
  MapPin,
  Megaphone,
  Package,
  Phone,
  Search,
} from "lucide-react";

import {
  PARTNER_STEPS,
  PROVIDER_BENEFITS,
  PROVIDERS,
  SAMPLE_PINS,
  SITE,
} from "@/lib/site-data";

export const Route = createFileRoute("/find-a-provider")({
  head: () => ({
    meta: [
      { title: "Find a provider | Invisible Aligners" },
      {
        name: "description",
        content:
          "Search by postal code to find a dentist who carries Invisible Aligners. The Chennai studio plans every smile; network practices appear as they join.",
      },
    ],
  }),
  component: ProviderLocator,
});

const BENEFIT_ICONS: Record<string, typeof Coins> = {
  coins: Coins,
  columns: Columns,
  graduation: GraduationCap,
  megaphone: Megaphone,
  handshake: Handshake,
  box: Package,
};

function normalize(code: string) {
  return code.trim().replace(/\s+/g, "");
}

function matches(provider: (typeof PROVIDERS)[number], code: string) {
  return (
    provider.pincode === code ||
    provider.pincode.startsWith(code) ||
    (code.length >= 3 && provider.pincode.startsWith(code.slice(0, 3)))
  );
}

function ProviderLocator() {
  const [input, setInput] = useState("");
  const [searched, setSearched] = useState<string | null>(null);

  const code = searched ? normalize(searched) : "";
  const invalid = code.length > 0 && code.length < 3;
  const matched = code.length >= 3 && PROVIDERS.some((p) => matches(p, code));

  return (
    <main>
      <section className="bg-lagoon-950 pt-32 pb-14">
        <div className="shell max-w-2xl">
          <p className="eyebrow">Provider locator</p>
          <h1 className="display-1 mt-5">
            A dentist who carries our trays, <span className="italic-word">near your home</span>
          </h1>
          <p className="prose-site mt-6">
            Enter a postal code to find practices that offer Invisible Aligners
            aligners. Every smile is planned at the Chennai studio; partner
            dentists co-manage the journey closer to you.
          </p>
        </div>
      </section>

      <section className="bg-lagoon-950 pb-24">
        <div className="shell">
          <form
            data-rise
            role="search"
            aria-label="Find a provider by postal code"
            onSubmit={(event) => {
              event.preventDefault();
              setSearched(input);
            }}
          >
            <label className="mono-label block uppercase tracking-[0.16em] text-mint">
              Postal code or PIN
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="e.g. 600014"
                aria-label="Postal code"
                className="w-full rounded-xl border border-line-ink bg-lagoon-900 px-4 py-3.5 font-mono text-lg text-bone outline-none placeholder:text-fog/50 focus:border-mint sm:max-w-xs"
              />
              <button
                type="submit"
                className="cta-chip justify-center"
                aria-label="Search providers by postal code"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                Search
              </button>
            </div>
            {invalid ? (
              <p className="mt-2 font-mono text-sm text-mint-bright">
                Enter a full postal code of at least 3 characters.
              </p>
            ) : null}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="mono-label text-fog">Try:</span>
              {SAMPLE_PINS.map((pin) => (
                <button
                  key={pin}
                  type="button"
                  onClick={() => {
                    setInput(pin);
                    setSearched(pin);
                  }}
                  className="rounded-full border border-line-ink px-3 py-1 font-mono text-xs text-fog transition-colors hover:border-mint hover:text-mint"
                >
                  {pin}
                </button>
              ))}
            </div>
          </form>

          <div
            aria-live="polite"
            className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]"
          >
            <div>
              <div data-rise className="flex flex-wrap items-end justify-between gap-3">
                <h2 className="display-2">
                  {searched
                    ? `${matched ? "Match" : "Nearest match"} for ${code}`
                    : "The planning hub"}
                </h2>
                <p className="mono-label">
                  {matched ? "In your area" : "Plan here, wear anywhere"}
                </p>
              </div>

              <article data-rise className="mt-8 overflow-hidden rounded-2xl border hairline bg-lagoon-900">
                <div className="grid md:grid-cols-[1fr_1.2fr]">
                  <div className="relative min-h-[12rem]">
                    <img
                      src="/assets/clinic-reception.png"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-8">
                    <p className="mono-label uppercase tracking-[0.16em] text-mint">
                      {PROVIDERS[0].kind} · {PROVIDERS[0].area}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-bone">
                      {PROVIDERS[0].name}
                    </h3>
                    <p className="mt-2 body-sm leading-relaxed text-fog">{PROVIDERS[0].tagline}</p>
                    <address className="mt-4 not-italic">
                      <p className="flex items-start gap-2 body-sm text-fog">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                        <span>
                          {SITE.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                      </p>
                      <p className="mt-2 flex items-center gap-2 body-sm text-fog">
                        <Clock className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                        {SITE.hoursLine}
                      </p>
                      <p className="mt-2 flex items-center gap-2 body-sm text-fog">
                        <Phone className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                        {SITE.phoneDisplay}
                      </p>
                    </address>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {PROVIDERS[0].badges.map((badge) => (
                        <li key={badge} className="mono-label flex items-center gap-1.5 rounded-full border border-line-ink px-3 py-1 text-fog">
                          <Check className="h-3 w-3 text-mint" aria-hidden="true" />
                          {badge}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={PROVIDERS[0].href}
                      className="cta-bracket mt-7"
                      aria-label="Visit the Chennai studio"
                    >
                      Visit the studio
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            <aside data-rise className="flex flex-col justify-between rounded-2xl border hairline bg-lagoon-900 p-8">
              <div>
                <p className="mono-label uppercase tracking-[0.16em] text-mint">
                  Partner practices
                </p>
                <h2 className="display-2 mt-3">Growing from Chennai</h2>
                <p className="prose-site mt-4">
                  {searched && !matched
                    ? `No network dentists are listed near ${code} yet. Partner practices appear here as they join, so check back or ask the studio.`
                    : "Network dentists appear here as they join. Until then, every scan and plan happens at the Chennai studio, and your trays travel with you."}
                </p>
              </div>
              <div className="mt-8 flex flex-col items-start gap-4">
                <Link to="/dentists" className="cta-mono" aria-label="Become a partner">
                  <span className="readout-text">are you a dentist? join</span>
                  <span className="cursor-block" aria-hidden="true" />
                </Link>
                <Link to="/contact" className="cta-mono" aria-label="Book a consultation">
                  <span className="readout-text">book a consultation</span>
                  <span className="cursor-block" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-lagoon-900 py-24 md:py-32">
        <div className="shell">
          <div data-rise className="max-w-2xl">
            <p className="eyebrow">For providers</p>
            <h2 className="display-2 mt-4">
              Aligners for your practice, <span className="italic-word">not a new clinic</span>
            </h2>
            <p className="prose-site mt-5">
              The same positioning patients love, offered to dentists who want
              capability without the capital: no scanner, no inventory, no new
              hires.
            </p>
          </div>
          <div data-rise className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline bg-line-ink sm:grid-cols-2 lg:grid-cols-3">
            {PROVIDER_BENEFITS.map((benefit) => {
              const Icon = BENEFIT_ICONS[benefit.icon] ?? Coins;
              return (
                <div key={benefit.title} className="flex gap-5 bg-lagoon-950 p-8">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-mint" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold text-bone">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{benefit.line}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-lagoon-950 py-20 md:py-28">
        <div className="shell">
          <div data-rise className="max-w-2xl">
            <h2 className="display-2">
              Joining takes <span className="italic-word">four steps</span>
            </h2>
            <p className="prose-site mt-5">
              From first message to first patient referral in under a week,
              with the studio holding the equipment.
            </p>
          </div>
          <ol data-rise className="mt-12 grid gap-10 md:grid-cols-4">
            {PARTNER_STEPS.map((step, index) => (
              <li key={step.n} className="relative">
                <p className="mono-label text-mint">{step.n}</p>
                <h3 className="mt-3 text-lg font-semibold text-bone">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{step.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t hairline bg-lagoon-900 py-20">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="display-2">Open a chair in the network</h2>
            <p className="prose-site mt-4">
              Home-based practice or a growing clinic, the locator above is
              where your name lands first.
            </p>
          </div>
          <Link to="/dentists" className="cta-ticket" aria-label="Become a partner dentist">
            <span className="ticket-notch" aria-hidden="true">
              NETWORK
            </span>
            Become a partner
          </Link>
        </div>
      </section>
    </main>
  );
}