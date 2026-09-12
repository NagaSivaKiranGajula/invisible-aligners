import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Phone, Star } from "lucide-react";

import { SITE, VISIT_FLOW } from "@/lib/site-data";

export const Route = createFileRoute("/experience-centers")({
  head: () => ({
    meta: [
      { title: "Experience centers | Invisible Aligners" },
      {
        name: "description",
        content:
          "Visit our aligner experience center at Express Avenue Mall, Chennai. Scans, consultations and treatment, every day 10 AM to 9 PM.",
      },
    ],
  }),
  component: CentersPage,
});

function PlanVisit() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            Plan your <span className="italic-word">visit</span>
          </h2>
          <p className="prose-site mt-5">
            One trip covers the scan, the plan and the first tray. Book a slot
            and the studio does the rest.
          </p>
        </div>
        <ol data-rise className="mt-12 grid gap-10 md:grid-cols-4">
          {VISIT_FLOW.map((step, index) => (
            <li key={step.n} className="relative">
              <p className="mono-label text-mint">{step.n}</p>
              <h3 className="mt-3 text-lg font-semibold text-bone">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{step.line}</p>
              {index < VISIT_FLOW.length - 1 ? (
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

function CenterFaq() {
  const items = [
    {
      q: "Do I need an appointment?",
      a: "Appointments are recommended so the right clinician and scanner are waiting for you. Walk-ins are welcome when a slot is free.",
    },
    {
      q: "What happens at the first visit?",
      a: "A 3D scan, a dentist-reviewed plan on screen, and your first tray fitted before you leave, about an hour in total.",
    },
    {
      q: "Can I pay by UPI or card?",
      a: "Yes. Credit cards, debit cards, Google Pay and NFC payments are all accepted at the front desk.",
    },
  ];
  return (
    <section className="border-t hairline bg-lagoon-950 py-20">
      <div className="shell max-w-3xl">
        <h2 className="display-2">Before you visit</h2>
        <div className="mt-10 divide-y hairline border-y hairline">
          {items.map((item) => (
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

function CentersPage() {
  return (
    <main>
      <section className="bg-lagoon-950 pt-32 pb-16 md:pb-20">
        <div className="shell max-w-2xl">
          <p className="eyebrow">Experience centers</p>
          <h1 className="display-1 mt-5">
            Planned in Chennai, <span className="italic-word">worn anywhere</span>
          </h1>
          <p className="prose-site mt-6">
            Your scans, planning and check-ins happen at our studio in Express
            Avenue Mall. The trays themselves go where you go.
          </p>
        </div>
      </section>

      <section className="bg-lagoon-950 pb-24">
        <div className="shell">
          <div data-rise className="grid overflow-hidden rounded-2xl border hairline bg-lagoon-900 lg:grid-cols-2">
            <div className="relative min-h-[18rem]">
              <img
                src="/assets/clinic-reception.png"
                alt="Reception of the Invisible Aligners experience center"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <h2 className="display-2">Chennai, Express Avenue</h2>
                <p className="mt-5 flex items-start gap-2 body-sm leading-relaxed text-fog">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                  <span>
                    {SITE.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="mt-4 flex items-center gap-2 body-sm text-fog">
                  <Clock className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                  {SITE.hoursLine}
                </p>
                <p className="mono-label mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-mint">
                  <span className="flex items-center gap-2">
                    <Star className="h-3.5 w-3.5 fill-mint" aria-hidden="true" />
                    {SITE.rating}, {SITE.reviews}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
                    Now open
                  </span>
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  to="/experience-centers/chennai-express-avenue"
                  className="cta-bracket"
                  aria-label="Visit Express Avenue experience center"
                >
                  Visit Express Avenue
                </Link>
                <a href={SITE.phoneHref} className="mono-label flex items-center gap-2 text-fog hover:text-mint">
                  <Phone className="h-3.5 w-3.5 text-mint" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlanVisit />
      <CenterFaq />

      <section className="border-t hairline bg-lagoon-900 py-16">
        <div className="shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="prose-site">
            New cities are being planned. Follow the studio news here first.
          </p>
          <Link to="/contact" className="cta-mono" aria-label="Book a consultation">
            <span className="readout-text">book a consultation</span>
            <span className="cursor-block" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}