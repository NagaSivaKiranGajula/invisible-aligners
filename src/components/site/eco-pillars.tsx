import { Droplet, Leaf, Recycle, RefreshCw } from "lucide-react";

import { ECO_PILLARS, SUSTAINABILITY } from "@/lib/site-data";

const ICONS: Record<string, typeof Droplet> = {
  solvent: Droplet,
  recycle: Recycle,
  reuse: RefreshCw,
  compost: Leaf,
};

export function EcoPillars({ variant = "full" }: { variant?: "full" | "line" }) {
  if (variant === "line") {
    return (
      <section className="border-t hairline bg-lagoon-950 py-10">
        <div className="shell">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl border hairline bg-lagoon-900 px-7 py-6">
            <p className="mono-label uppercase tracking-[0.16em] text-mint">
              Every tray, eco by design
            </p>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {ECO_PILLARS.map((pillar) => {
                const Icon = ICONS[pillar.icon] ?? Leaf;
                return (
                  <li key={pillar.title} className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                    <span className="body-sm text-bone">{pillar.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <p className="eyebrow">Eco by design</p>
          <h2 className="display-2 mt-4">
            Eco-solvent. Recyclable. <span className="italic-word">Reusable.</span>
          </h2>
          <p className="prose-site mt-5">
            EcoAligners are made to be given back. Eco-solvent processing keeps
            harsh chemistry out of the material, finished trays are recycled and
            the recovered polymer is reused in new production, so a straighter
            smile does not cost the planet.
          </p>
        </div>

        <div data-rise className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline bg-line-ink sm:grid-cols-2 lg:grid-cols-4">
          {ECO_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon] ?? Leaf;
            return (
              <div key={pillar.title} className="bg-lagoon-950 p-8">
                <Icon className="h-6 w-6 text-mint" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-bone">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{pillar.line}</p>
              </div>
            );
          })}
        </div>

        <div data-rise className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border hairline bg-lagoon-950 p-6">
            <p className="text-3xl font-bold tracking-tighter text-bone">
              {SUSTAINABILITY.trayCount}
            </p>
            <p className="mono-label mt-2 uppercase tracking-[0.14em] text-mint">
              {SUSTAINABILITY.trayLabel}
            </p>
          </div>
          <div className="rounded-2xl border hairline bg-lagoon-950 p-6">
            <p className="text-3xl font-bold tracking-tighter text-bone">
              {SUSTAINABILITY.creditCount}
            </p>
            <p className="mono-label mt-2 uppercase tracking-[0.14em] text-mint">
              {SUSTAINABILITY.creditLabel}
            </p>
          </div>
          <div className="rounded-2xl border hairline bg-lagoon-950 p-6">
            <p className="mono-label uppercase tracking-[0.14em] text-mint">
              Zero-waste loop
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fog">
              {SUSTAINABILITY.recycleLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}