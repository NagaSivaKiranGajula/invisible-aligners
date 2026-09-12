import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  Check,
  ClipboardCheck,
  Coins,
  Columns,
  GraduationCap,
  Handshake,
  ImageIcon,
  Megaphone,
  Package,
  Plus,
  ScanLine,
  Stethoscope,
} from "lucide-react";

import {
  CASE_STUDIES,
  DENTIST_BENEFITS,
  HEAR_OPTIONS,
  SERVICE_OPTIONS,
  VOLUME_OPTIONS,
  WE_BRING,
  YOU_BRING,
} from "@/lib/dentists-data";
import { CLINICAL_CHECKS, PARTNER_FAQ, PARTNER_KIT, PARTNER_STEPS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/dentists")({
  head: () => ({
    meta: [
      { title: "For dentists | Invisible Aligners" },
      {
        name: "description",
        content:
          "Home-based dentists: refer and co-manage aligner patients with our Chennai studio. No scanner, no inventory, shared fees on paper. Apply online.",
      },
    ],
  }),
  component: DentistsPage,
});

const BENEFIT_ICONS: Record<string, typeof Coins> = {
  coins: Coins,
  columns: Columns,
  graduation: GraduationCap,
  megaphone: Megaphone,
  handshake: Handshake,
  box: Package,
};

const CHECK_ICONS = [ClipboardCheck, CalendarClock, ImageIcon, Stethoscope];

function Benefits() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <p className="eyebrow">What you get</p>
          <h2 className="display-2 mt-4">
            Aligners for your practice, <span className="italic-word">not a new clinic</span>
          </h2>
          <p className="prose-site mt-5">
            No scanner, no lab bench, no new hires. The studio carries the
            equipment; you keep the patients.
          </p>
        </div>
        <div data-rise className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline bg-line-ink sm:grid-cols-2 lg:grid-cols-3">
          {DENTIST_BENEFITS.map((benefit) => {
            const Icon = BENEFIT_ICONS[benefit.icon] ?? Coins;
            return (
              <div key={benefit.title} className="flex gap-5 bg-lagoon-950 p-8">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-mint" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-bone">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{benefit.line}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fog/70">{benefit.more}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhoDoesWhat() {
  return (
    <section className="bg-lagoon-950 py-20 md:py-28">
      <div className="shell grid gap-6 lg:grid-cols-2">
        <div data-rise className="rounded-2xl border hairline bg-lagoon-900 p-8 md:p-10">
          <Stethoscope className="h-6 w-6 text-mint" aria-hidden="true" />
          <h2 className="display-2 mt-4">You bring</h2>
          <ul className="mt-6 space-y-4">
            {YOU_BRING.map((item) => (
              <li key={item} className="flex items-start gap-3 body-sm text-bone">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div data-rise className="rounded-2xl border hairline bg-lagoon-900 p-8 md:p-10">
          <ScanLine className="h-6 w-6 text-mint" aria-hidden="true" />
          <h2 className="display-2 mt-4">We bring</h2>
          <ul className="mt-6 space-y-4">
            {WE_BRING.map((item) => (
              <li key={item} className="flex items-start gap-3 body-sm text-bone">
                <Plus className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <p className="eyebrow">Case studies</p>
          <h2 className="display-2 mt-4">
            Three ways a partnership <span className="italic-word">actually runs</span>
          </h2>
          <p className="prose-site mt-5">
            Illustrative journeys built around the program's standard flow, not
            named practices. Your results depend on your patient base.
          </p>
        </div>
        <div data-rise className="mt-12 grid gap-4 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <article key={study.n} className="flex flex-col rounded-2xl border hairline bg-lagoon-950 p-8">
              <p className="mono-label text-mint">{study.n}</p>
              <h3 className="mt-3 text-xl font-semibold text-bone">{study.title}</h3>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="mono-label uppercase tracking-[0.14em] text-fog">Scenario</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-bone">{study.scenario}</dd>
                </div>
                <div>
                  <dt className="mono-label uppercase tracking-[0.14em] text-fog">How it ran</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-fog">{study.flow}</dd>
                </div>
                <div>
                  <dt className="mono-label uppercase tracking-[0.14em] text-mint">Outcome</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-fog">{study.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClinicalChecklist() {
  return (
    <section className="bg-lagoon-950 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            What your aligner patients <span className="italic-word">need from you</span>
          </h2>
          <p className="prose-site mt-5">
            Light-touch, monthly co-management. The studio backs every
            checkpoint with its plan.
          </p>
        </div>
        <div data-rise className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline bg-line-ink sm:grid-cols-2">
          {CLINICAL_CHECKS.map((check, index) => {
            const Icon = CHECK_ICONS[index] ?? ClipboardCheck;
            return (
              <div key={check.title} className="flex gap-5 bg-lagoon-900 p-8">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-mint" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-bone">{check.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{check.line}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnerKit() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-2">
        <div data-rise>
          <h2 className="display-2">Everything in the partner kit</h2>
          <p className="prose-site mt-5">
            Joining takes a form and an hour of orientation. Everything else is
            handed over ready.
          </p>
        </div>
        <ul data-rise className="divide-y hairline border-y hairline">
          {PARTNER_KIT.map((item) => (
            <li key={item} className="flex items-start gap-3 py-4">
              <Check className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <span className="text-bone">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="border-t hairline bg-lagoon-950 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            Joining takes <span className="italic-word">four steps</span>
          </h2>
          <p className="prose-site mt-5">
            From first message to first patient referral in under a week, with
            the studio holding the equipment.
          </p>
        </div>
        <ol data-rise className="mt-12 grid gap-10 md:grid-cols-4">
          {PARTNER_STEPS.map((step) => (
            <li key={step.n} className="relative">
              <p className="mono-label text-mint">{step.n}</p>
              <h3 className="mt-3 text-lg font-semibold text-bone">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{step.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-20 border-t hairline bg-lagoon-950 py-20 md:py-28">
      <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-rise>
          <h2 className="display-2">Tell us about your practice</h2>
          <p className="prose-site mt-5">
            Send the form and it opens in WhatsApp, pre-filled for the studio
            team. Applications are reviewed within a couple of days.
          </p>
          <div className="mt-8 flex items-center gap-3 body-sm text-fog">
            <ArrowRight className="h-4 w-4 text-mint" aria-hidden="true" />
            WhatsApp enabled · {SITE.phoneDisplay}
          </div>
          <div className="mt-10">
            <div className="divide-y hairline border-y hairline">
              {PARTNER_FAQ.map((item) => (
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
        </div>

        <form
          data-rise
          className="rounded-2xl border hairline bg-lagoon-900 p-8 md:p-10"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const services = (data.getAll("services") as string[]).join(", ");
            const text = [
              `New partner application`,
              `Name: ${data.get("name")}`,
              `Phone: ${data.get("phone")}`,
              `Clinic: ${data.get("clinic")}`,
              `City: ${data.get("city")}`,
              `Postal code: ${data.get("postal")}`,
              `Years in practice: ${data.get("years")}`,
              `Services: ${services || "Not listed"}`,
              `Patient visits: ${data.get("volume")}`,
              `Heard via: ${data.get("hear")}`,
              data.get("message") ? `Notes: ${data.get("message")}` : "",
            ]
              .filter(Boolean)
              .join("\n");
            window.open(
              `https://wa.me/919884664277?text=${encodeURIComponent(text)}`,
              "_blank",
              "noopener",
            );
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">Your name</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-line-ink bg-lagoon-950 px-4 py-3 text-bone outline-none placeholder:text-fog/60 focus:border-mint"
                placeholder="Dr. Ananya Iyer"
              />
            </label>
            <label className="block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">Phone</span>
              <input
                name="phone"
                required
                type="tel"
                autoComplete="tel"
                className="w-full rounded-xl border border-line-ink bg-lagoon-950 px-4 py-3 text-bone outline-none placeholder:text-fog/60 focus:border-mint"
                placeholder="+91 ..."
              />
            </label>
            <label className="block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">Clinic name</span>
              <input
                name="clinic"
                required
                className="w-full rounded-xl border border-line-ink bg-lagoon-950 px-4 py-3 text-bone outline-none placeholder:text-fog/60 focus:border-mint"
                placeholder="Iyer Dental Studio"
              />
            </label>
            <label className="block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">City</span>
              <input
                name="city"
                required
                className="w-full rounded-xl border border-line-ink bg-lagoon-950 px-4 py-3 text-bone outline-none placeholder:text-fog/60 focus:border-mint"
                placeholder="Chennai"
              />
            </label>
            <label className="block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">Postal code (PIN)</span>
              <input
                name="postal"
                required
                inputMode="numeric"
                minLength={6}
                maxLength={6}
                className="w-full rounded-xl border border-line-ink bg-lagoon-950 px-4 py-3 font-mono text-bone outline-none placeholder:text-fog/60 focus:border-mint"
                placeholder="600014"
              />
            </label>
            <label className="block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">Years in practice</span>
              <select
                name="years"
                required
                defaultValue="1-5"
                className="w-full rounded-xl border border-line-ink bg-lagoon-950 px-4 py-3 text-bone outline-none focus:border-mint"
              >
                <option value="0-1">0 to 1</option>
                <option value="1-5">1 to 5</option>
                <option value="5-10">5 to 10</option>
                <option value="10+">10+</option>
              </select>
            </label>
          </div>

          <fieldset className="mt-6">
            <legend className="mono-label uppercase tracking-[0.14em]">Services offered</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {SERVICE_OPTIONS.map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-2.5 text-sm text-fog">
                  <input
                    type="checkbox"
                    name="services"
                    value={option}
                    className="check-mint h-4 w-4"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">Patient visits</span>
              <select
                name="volume"
                required
                defaultValue={VOLUME_OPTIONS[0]}
                className="w-full rounded-xl border border-line-ink bg-lagoon-950 px-4 py-3 text-sm text-bone outline-none focus:border-mint"
              >
                {VOLUME_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">How did you hear about us?</span>
              <select
                name="hear"
                required
                defaultValue={HEAR_OPTIONS[0]}
                className="w-full rounded-xl border border-line-ink bg-lagoon-950 px-4 py-3 text-sm text-bone outline-none focus:border-mint"
              >
                {HEAR_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mono-label mb-2 block uppercase tracking-[0.14em]">Notes (optional)</span>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-xl border border-line-ink bg-lagoon-950 px-4 py-3 text-bone outline-none placeholder:text-fog/60 focus:border-mint"
              placeholder="Tell us about your practice and why you want to carry aligners."
            />
          </label>

          <button type="submit" className="cta-chip mt-7" aria-label="Send application via WhatsApp">
            <span className="chip-dot" aria-hidden="true" />
            Send application
          </button>
          <p className="mono-label mt-4 text-fog">
            Opens WhatsApp with your details pre-filled. Nothing is stored on
            this website.
          </p>
        </form>
      </div>
    </section>
  );
}

function DentistsPage() {
  return (
    <main>
      <section className="bg-lagoon-950 pt-32 pb-20">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">For home-based dentists</p>
            <h1 className="display-1 mt-5 max-w-xl">
              Run your own practice. <span className="italic-word">Carry our trays</span>
            </h1>
            <p className="prose-site mt-6">
              Refer and co-manage aligner patients with our Chennai studio.
              We handle the scans, the planning and the equipment. You keep the
              clinical relationship in your home practice.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a href="#apply" className="cta-ticket" aria-label="Become a partner dentist">
                <span className="ticket-notch" aria-hidden="true">
                  OPEN TO APPLY
                </span>
                Become a partner
              </a>
              <Link to="/contact" className="cta-mono" aria-label="Book a consultation">
                <span className="readout-text">book a consultation</span>
                <span className="cursor-block" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div data-parallax="0.1" className="relative">
            <img
              src="/assets/people/dentist-woman.png"
              alt="A dentist partner in sage-green scrubs"
              className="aspect-[4/3] w-full rounded-2xl border hairline object-cover"
              loading="eager"
              decoding="async"
            />
            <p className="mono-label absolute bottom-4 left-4 rounded-full bg-lagoon-950/80 px-3 py-1.5 backdrop-blur-sm">
              Network dentist · onboarding this month
            </p>
          </div>
        </div>
      </section>

      <Benefits />
      <WhoDoesWhat />
      <CaseStudies />
      <ClinicalChecklist />
      <PartnerKit />
      <StepsSection />
      <ApplySection />

      <section className="border-t hairline bg-lagoon-900 py-20">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="display-2">Your chair is open</h2>
            <p className="prose-site mt-4">
              The form above is the whole application. Apply today, and your
              first patient can scan within the week.
            </p>
          </div>
          <a href="#apply" className="cta-ticket" aria-label="Open the partner application form">
            <span className="ticket-notch" aria-hidden="true">
              NR.071
            </span>
            Become a partner
          </a>
        </div>
      </section>
    </main>
  );
}