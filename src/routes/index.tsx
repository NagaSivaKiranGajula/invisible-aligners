import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Quote } from "lucide-react";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import {
  COMPARISON,
  LIFECYCLE,
  MATERIAL_FACTS,
  QUESTIONS,
  SITE,
  STEPS,
  TESTIMONIALS,
  TREATMENTS,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: Index,
});

const MARQUEE_ITEMS = [
  "BPA-free",
  "Recyclable",
  "Biodegradable",
  "Invisible",
  "American designed",
  "Lifetime guarantee",
  "Dentist planned",
  "Zero waste",
];

function Marquee() {
  const group = (keyPrefix: string) => (
    <div className="marquee__group" key={keyPrefix}>
      {MARQUEE_ITEMS.map((item, index) => (
        <span
          key={`${keyPrefix}-${index}`}
          className="mono-label uppercase tracking-[0.24em] text-fog"
        >
          <span className="mr-6 inline-block h-1.5 w-1.5 rounded-full bg-mint align-middle" />
          {item}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee border-y hairline bg-lagoon-900 py-4" aria-hidden="true">
      <div className="marquee__track">
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}

function Metrics() {
  const metrics = [
    { value: "5.0", caption: "Google rating" },
    { value: "71", caption: "Patient reviews" },
    { value: "0", caption: "Trays to landfill" },
    { value: "100%", caption: "Plant-based trays" },
  ];
  return (
    <section className="border-b hairline bg-lagoon-950">
      <div className="shell grid grid-cols-2 gap-px lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.caption} className="py-14 pr-8">
            <p className="text-6xl font-bold tracking-tighter text-bone md:text-7xl">
              {m.value}
            </p>
            <p className="mono-label mt-3 uppercase tracking-[0.18em] text-mint">
              {m.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MaterialSection() {
  return (
    <section className="bg-lagoon-950 py-24 md:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        <div data-parallax="0.12" className="relative">
          <img
            src="/assets/product/tray-macro.png"
            alt="Macro shot of a clear aligner tray refracting sea-glass light"
            className="aspect-[4/3] w-full rounded-2xl border hairline object-cover"
            loading="lazy"
            decoding="async"
          />
          <p className="mono-label absolute bottom-4 left-4 rounded-full bg-lagoon-950/80 px-3 py-1.5 backdrop-blur-sm">
            The tray edge, at 40x
          </p>
        </div>
        <div data-rise className="max-w-xl">
          <p className="eyebrow">The material</p>
          <h2 className="display-2 mt-4">
            Grown from plants, <span className="italic-word">not plastic</span>
          </h2>
          <p className="prose-site mt-6">
            Every tray starts as a plant-derived polymer, shaped by a laser-cut
            digital plan. Wear it, then hand it back: finished trays return to
            us for recycling instead of a landfill.
          </p>
          <dl className="mt-9 divide-y hairline border-y hairline">
            {MATERIAL_FACTS.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr]">
                <dt className="mono-label pt-1 uppercase tracking-[0.16em] text-mint">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-relaxed text-fog">{fact.line}</dd>
              </div>
            ))}
          </dl>
          <Link to="/product" className="cta-chip mt-9" aria-label="Explore the aligners">
            <span className="chip-dot" aria-hidden="true" />
            Explore the aligners
          </Link>
        </div>
      </div>
    </section>
  );
}

function Lifecycle() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-24 md:py-32">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            From plant to smile to <span className="italic-word">plant again</span>
          </h2>
          <p className="prose-site mt-5">
            A tray's whole life is designed in advance: grown from renewable
            material, worn quietly, then returned to start the cycle again.
          </p>
        </div>
        <ol data-rise className="mt-14 grid gap-10 md:grid-cols-4">
          {LIFECYCLE.map((step, index) => (
            <li key={step.n} className="relative">
              <p className="mono-label text-mint">{step.n}</p>
              <h3 className="mt-3 text-lg font-semibold text-bone">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{step.line}</p>
              {index < LIFECYCLE.length - 1 ? (
                <ArrowRight
                  className="absolute top-1 hidden h-4 w-4 -translate-x-7 text-mint md:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="border-t hairline bg-lagoon-950 py-24 md:py-32">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <p className="eyebrow">Compare</p>
          <h2 className="display-2 mt-4">
            Aligners, or <span className="italic-word">fixed braces</span>?
          </h2>
          <p className="prose-site mt-5">
            Two ways to straighten teeth. Only one of them disappears when you
            smile.
          </p>
        </div>
        <div data-rise className="mt-12 overflow-hidden rounded-2xl border hairline bg-lagoon-950">
          <div className="hidden grid-cols-[1.1fr_1.25fr_1.25fr] gap-4 px-6 py-4 md:grid">
            <span />
            <span className="mono-label uppercase tracking-[0.16em] text-mint">
              Invisible aligners
            </span>
            <span className="mono-label uppercase tracking-[0.16em] text-fog">
              Metal braces
            </span>
          </div>
          {COMPARISON.map((row) => (
            <div
              key={row.aspect}
              className="grid gap-3 border-t hairline px-6 py-6 md:grid-cols-[1.1fr_1.25fr_1.25fr] md:items-center md:gap-4 md:py-5"
            >
              <p className="mono-label uppercase tracking-[0.14em] text-bone">
                {row.aspect}
              </p>
              <p className="body-sm flex items-start gap-2 text-bone">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                {row.us}
              </p>
              <p className="body-sm pl-6 text-fog md:pl-0">{row.them}</p>
            </div>
          ))}
        </div>
        <p data-rise className="mono-label mt-6 text-fog">
          Every course starts with a consult, where your dentist names the path
          that fits your case.
        </p>
      </div>
    </section>
  );
}

function ProductBento() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-24 md:py-32">
      <div className="shell">
        <div data-rise className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="display-2 max-w-xl">
            From first scan to <span className="italic-word">final smile</span>
          </h2>
          <Link to="/product" className="cta-mono justify-self-start md:justify-self-end">
            <span className="readout-text">how the trays work</span>
            <span className="cursor-block" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <div data-rise className="overflow-hidden rounded-2xl border hairline">
            <img
              src="/assets/product/tray-leaf.png"
              alt="Clear aligner resting beside a green leaf on dark slate"
              className="h-full min-h-[20rem] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div data-rise className="overflow-hidden rounded-2xl border hairline">
            <img
              src="/assets/people/smile-portrait.png"
              alt="Portrait of a patient with a confident smile"
              className="h-full min-h-[20rem] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div data-rise className="overflow-hidden rounded-2xl border hairline">
            <img
              src="/assets/product/lifestyle-hands.png"
              alt="Hands holding the mint-green aligner travel case"
              className="h-full min-h-[18rem] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div data-rise className="rounded-2xl border hairline bg-lagoon-950 p-8">
            <ol className="mt-2 grid gap-6 sm:grid-cols-2">
              {STEPS.map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="mono-label shrink-0 pt-1 text-mint">{step.n}</span>
                  <div>
                    <h3 className="font-semibold text-bone">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fog">{step.line}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section className="bg-lagoon-950 py-24 md:py-32">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <p className="eyebrow">Treatments</p>
          <h2 className="display-2 mt-4">
            One studio, <span className="italic-word">every smile plan</span>
          </h2>
        </div>
        <div data-rise className="mt-12">
          {TREATMENTS.map((treatment, index) => (
            <Link
              key={treatment.name}
              to="/contact"
              className="treat-row group"
              aria-label={`${treatment.name}: ${treatment.line}`}
            >
              <span className="mono-label text-mint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-xl font-semibold text-bone md:text-2xl">
                  {treatment.name}
                </span>
                <span className="mt-1 hidden text-sm text-fog sm:block">{treatment.line}</span>
              </span>
              <ArrowRight className="treat-arrow h-5 w-5 text-fog" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CenterFeature() {
  return (
    <section className="relative overflow-hidden bg-lagoon-950">
      <div className="absolute inset-0">
        <img
          src="/assets/clinic-reception.png"
          alt=""
          data-parallax="0.2"
          className="h-[130%] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-lagoon-950/70" />
      </div>
      <div className="shell relative py-28 md:py-40">
        <div data-rise className="max-w-xl rounded-2xl border hairline bg-lagoon-950/85 p-8 backdrop-blur-md md:p-10">
          <p className="eyebrow">Experience center</p>
          <h2 className="display-2 mt-4">
            A studio for your smile, inside Express Avenue
          </h2>
          <p className="mt-5 flex items-start gap-2 body-sm leading-relaxed text-fog">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
            <span>
              {SITE.addressLines[0]}, Whites Road, Royapettah, Chennai
            </span>
          </p>
          <p className="mono-label mt-3">{SITE.hoursLine}</p>
          <Link
            to="/experience-centers/chennai-express-avenue"
            className="cta-bracket mt-8"
            aria-label="Visit Express Avenue experience center"
          >
            Visit Express Avenue
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-24 md:py-32">
      <div className="shell">
        <div data-rise className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-2 max-w-2xl">
            Smiles we have <span className="italic-word">grown</span>, reviewed
          </h2>
          <p className="mono-label">{SITE.rating} · {SITE.reviews}</p>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className="flex w-[19rem] shrink-0 snap-start flex-col justify-between rounded-2xl border hairline bg-lagoon-950 p-7 md:w-[22rem]"
            >
              <div>
                <Quote className="h-5 w-5 text-mint" aria-hidden="true" />
                <blockquote className="mt-4 body-sm leading-relaxed text-bone">
                  {testimonial.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3">
                {testimonial.face ? (
                  <img
                    src={testimonial.face}
                    alt=""
                    className="h-10 w-10 rounded-full border border-mint/40 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mint/40 bg-lagoon-800 font-mono text-xs text-mint">
                    {testimonial.name.charAt(0)}
                  </span>
                )}
                <span>
                  <span className="block text-sm font-semibold text-bone">
                    {testimonial.name}
                  </span>
                  <span className="mono-label block">{testimonial.role}</span>
                </span>
              </figcaption>
              {index === TESTIMONIALS.length - 1 ? (
                <p className="mono-label mt-3 border-t hairline pt-3 text-fog">
                  Verified Google reviews
                </p>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  return (
    <section className="border-t hairline bg-lagoon-950 py-24 md:py-32">
      <div className="shell max-w-3xl">
        <div data-rise>
          <h2 className="display-2">Questions, answered</h2>
          <p className="prose-site mt-5">
            The things every new patient asks before their first visit.
          </p>
        </div>
        <div data-rise className="mt-10 divide-y hairline border-y hairline">
          {QUESTIONS.slice(0, 5).map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-bone marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="mono-label text-mint transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-xl body-sm leading-relaxed text-fog">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerBand() {
  return (
    <section className="bg-lagoon-950 py-24 md:py-32">
      <div className="shell">
        <div data-rise className="flex flex-col items-start justify-between gap-8 rounded-2xl border hairline bg-lagoon-900 p-10 md:flex-row md:items-center md:p-14">
          <div className="max-w-xl">
            <p className="eyebrow">For dentists</p>
            <h2 className="display-2 mt-4">
              Run a home practice? Carry our trays
            </h2>
            <p className="prose-site mt-4">
              Home-based dentists refer and co-manage aligner patients with our
              Chennai studio. We handle scans and planning, you keep the care.
            </p>
          </div>
          <Link to="/dentists" className="cta-ticket" aria-label="Become a partner dentist">
            <span className="ticket-notch" aria-hidden="true">
              NR.071
            </span>
            Become a partner
          </Link>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      <Marquee />
      <Metrics />
      <MaterialSection />
      <Lifecycle />
      <Compare />
      <ProductBento />
      <Treatments />
      <CenterFeature />
      <Testimonials />
      <HomeFaq />
      <PartnerBand />
    </main>
  );
}