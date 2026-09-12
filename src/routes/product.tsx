import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, Minus, Package, ShieldCheck, Sparkles, UtensilsCrossed } from "lucide-react";

import {
  ALIGNER_LIFE,
  CANDIDACY,
  HOW_TEETH_MOVE,
  MATERIAL_FACTS,
  QUESTIONS,
  STEPS,
  TRAY_TIMELINE,
} from "@/lib/site-data";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "The aligners | Invisible Aligners" },
      {
        name: "description",
        content:
          "USA-designed, biodegradable, BPA-free clear aligners. Digitally planned, virtually invisible, with a Lifetime Smile Guarantee.",
      },
    ],
  }),
  component: ProductPage,
});

const SPECS = [
  { label: "MATERIAL", value: "Medical-grade, hypoallergenic polymer" },
  { label: "CHEMISTRY", value: "BPA-free and safe for long-term wear" },
  { label: "ORIGIN", value: "Designed and manufactured in the USA, ISO 13485 certified" },
  { label: "FINISH", value: "Matte, glare-free and stain-resistant" },
  { label: "CYCLE", value: "One tray roughly every 14 days" },
  { label: "PLAN", value: "Digitally planned from a 3D scan, with a smile preview" },
  { label: "STARTER KIT", value: "Free carry case and cleaning crystals with every first tray" },
  { label: "GUARANTEE", value: "Lifetime Smile Guarantee with free refinement aligners" },
  { label: "AFTER USE", value: "Biodegradable, compostable material (ASTM D6400)" },
];

const LIFE_ICONS: Record<string, typeof Clock> = {
  clock: Clock,
  utensils: UtensilsCrossed,
  sparkles: Sparkles,
  package: Package,
};

function Candidacy() {
  return (
    <section className="border-y hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-2">
        <div data-rise>
          <h2 className="display-2">Is this course for you?</h2>
          <p className="prose-site mt-5">
            Most mild to moderate cases travel beautifully through trays. A
            consult settles the rest.
          </p>
        </div>
        <div data-rise className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border hairline bg-lagoon-950 p-7">
            <p className="mono-label uppercase tracking-[0.16em] text-mint">
              Usually a good fit
            </p>
            <ul className="mt-5 space-y-3">
              {CANDIDACY.good.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-bone">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border hairline bg-lagoon-950 p-7">
            <p className="mono-label uppercase tracking-[0.16em] text-fog">
              Best assessed at a consult
            </p>
            <ul className="mt-5 space-y-3">
              {CANDIDACY.assess.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-fog">
                  <Minus className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowTeethMove() {
  return (
    <section className="bg-lagoon-950 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            How trays <span className="italic-word">move teeth</span>
          </h2>
          <p className="prose-site mt-5">
            Digitally planned, gently applied: the same biology orthodontics
            has always used, now without the metal.
          </p>
        </div>
        <ol data-rise className="mt-12 grid gap-10 md:grid-cols-3">
          {HOW_TEETH_MOVE.map((step) => (
            <li key={step.n} className="rounded-2xl border hairline bg-lagoon-900 p-8">
              <p className="mono-label text-mint">{step.n}</p>
              <h3 className="mt-4 text-lg font-semibold text-bone">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{step.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SpecSheet() {
  return (
    <section className="border-t hairline bg-lagoon-950 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="display-2 max-w-xl">
            The spec sheet, <span className="italic-word">read clean</span>
          </h2>
          <p className="mono-label">Invisible Aligners · Edition 01</p>
        </div>
        <dl data-rise className="mt-10 border-t hairline">
          {SPECS.map((spec) => (
            <div
              key={spec.label}
              className="grid gap-1 border-b hairline py-5 sm:grid-cols-[12rem_1fr] sm:items-baseline"
            >
              <dt className="mono-label uppercase tracking-[0.16em] text-mint">
                {spec.label}
              </dt>
              <dd className="text-bone">{spec.value}</dd>
            </div>
          ))}
        </dl>
        <div data-rise className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MATERIAL_FACTS.map((fact) => (
            <div key={fact.label} className="rounded-2xl border hairline bg-lagoon-900 p-6">
              <p className="mono-label uppercase tracking-[0.14em] text-mint">{fact.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-fog">{fact.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            A typical <span className="italic-word">course</span>, week by week
          </h2>
          <p className="prose-site mt-5">
            Every smile is mapped before it moves, with a digital preview of
            the result. This is what a mild to moderate case feels like; your
            plan names your exact weeks.
          </p>
        </div>
        <ol data-rise className="mt-12 grid gap-10 md:grid-cols-4">
          {TRAY_TIMELINE.map((point) => (
            <li key={point.week} className="relative border-t-2 border-mint/40 pt-5">
              <p className="mono-label uppercase tracking-[0.16em] text-mint">{point.week}</p>
              <h3 className="mt-3 text-lg font-semibold text-bone">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{point.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LifeWithAligners() {
  return (
    <section className="border-t hairline bg-lagoon-950 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            Life with <span className="italic-word">aligners</span>
          </h2>
          <p className="prose-site mt-5">
            The whole routine fits in a pocket. Four habits, and the case
            pretty much runs itself.
          </p>
        </div>
        <div data-rise className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline bg-line-ink sm:grid-cols-2 lg:grid-cols-4">
          {ALIGNER_LIFE.map((habit) => {
            const Icon = LIFE_ICONS[habit.icon] ?? Clock;
            return (
              <div key={habit.title} className="bg-lagoon-900 p-8">
                <Icon className="h-6 w-6 text-mint" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-bone">{habit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{habit.line}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-16">
      <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="display-2">Lifetime smile guarantee</h2>
          <p className="prose-site mt-4">
            If your smile ever needs fine-tuning, refinement aligners are free.
            That is the promise behind every course, in writing.
          </p>
        </div>
        <div className="mono-label flex items-center gap-3 text-mint">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          Free refinements, for life
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t hairline bg-lagoon-950 py-24">
      <div className="shell max-w-3xl">
        <p className="eyebrow">Questions</p>
        <h2 className="display-2 mt-4">Asked before the first scan</h2>
        <div className="mt-10 divide-y hairline border-y hairline">
          {QUESTIONS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-bone marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="mono-label text-mint transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-xl body-sm leading-relaxed text-fog">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPage() {
  return (
    <main>
      <section className="bg-lagoon-950 pt-32 pb-20 md:pb-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The aligners</p>
            <h1 className="display-1 mt-5 max-w-xl">
              Straighten your smile. <span className="italic-word">Discreetly.</span>
            </h1>
            <p className="prose-site mt-6">
              Every tray is designed and manufactured in the USA from
              biodegradable, BPA-free polymer, laser-fit to a dentist-planned
              course. Straightening your teeth has never been this quiet.
            </p>
            <Link to="/contact" className="cta-smile mt-9" aria-label="Book a consultation">
              Book a consultation
              <svg width="26" height="14" viewBox="0 0 26 14" aria-hidden="true">
                <path className="smile-arc" d="M1 7 C 8 -2, 18 -2, 25 7" />
                <path
                  d="M18 2 L 25 7 L 18 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div data-parallax="0.1" className="relative">
            <img
              src="/assets/product/tray-leaf.png"
              alt="Clear aligner resting beside a green leaf on dark slate"
              className="aspect-[4/3] w-full rounded-2xl border hairline object-cover"
              loading="eager"
              decoding="async"
            />
            <p className="mono-label absolute bottom-4 left-4 rounded-full bg-lagoon-950/80 px-3 py-1.5 backdrop-blur-sm">
              Designed in the USA
            </p>
          </div>
        </div>
      </section>

      <Candidacy />
      <HowTeethMove />
      <SpecSheet />
      <Timeline />
      <LifeWithAligners />
      <Guarantee />

      <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
        <div className="shell">
          <div data-rise className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="display-2 mt-4">
              Scan to smile in <span className="italic-word">four steps</span>
            </h2>
          </div>
          <ol data-rise className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline bg-line-ink sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.n} className="bg-lagoon-900 p-8">
                <p className="mono-label text-mint">{step.n}</p>
                <h3 className="mt-4 text-lg font-semibold text-bone">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{step.line}</p>
              </li>
            ))}
          </ol>
          <div data-rise className="mt-14">
            <img
              src="/assets/product/tray-macro.png"
              alt="Macro shot of a clear aligner tray refracting light"
              className="max-h-[24rem] w-full rounded-2xl border hairline object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <Faq />

      <section className="border-t hairline bg-lagoon-900">
        <Link
          to="/contact"
          className="group flex items-center justify-between gap-6 px-6 py-14 transition-colors hover:bg-lagoon-800 md:px-14 md:py-20"
          aria-label="Book a consultation"
        >
          <span className="display-2 max-w-2xl">
            Ready to see your <span className="italic-word">plan</span>?
          </span>
          <span className="cta-smile shrink-0">
            Book a consultation
            <svg width="26" height="14" viewBox="0 0 26 14" aria-hidden="true">
              <path className="smile-arc" d="M1 7 C 8 -2, 18 -2, 25 7" />
              <path
                d="M18 2 L 25 7 L 18 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </section>
    </main>
  );
}