import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowRight,
  Banknote,
  Car,
  Clock,
  CreditCard,
  MapPin,
  MessageCircle,
  Phone,
  ScanFace,
  Star,
  Stethoscope,
  Waves,
} from "lucide-react";

import { AMENITIES, DIRECTIONS, SITE, TREATMENTS, VISIT_FLOW } from "@/lib/site-data";

export const Route = createFileRoute(
  "/experience-centers/chennai-express-avenue",
)({
  head: () => ({
    meta: [
      {
        title: "Chennai Express Avenue center | Invisible Aligners",
      },
      {
        name: "description",
        content:
          "Our aligner experience center at Express Avenue Mall, EA Chambers II, Whites Road, Chennai. Open daily 10 AM to 9 PM. +91 98846 64277.",
      },
    ],
  }),
  component: ChennaiPage,
});

const PAYMENTS = [
  { icon: CreditCard, label: "Credit and debit cards" },
  { icon: Banknote, label: "Google Pay (UPI)" },
  { icon: ScanFace, label: "NFC mobile payments" },
];

const AMENITY_ICONS = [Accessibility, Accessibility, Car, Waves];

function Gallery() {
  return (
    <section className="border-t hairline bg-lagoon-950 py-20">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            Inside the <span className="italic-word">studio</span>
          </h2>
          <p className="prose-site mt-5">
            High-tech diagnostics, calm corners and treatment stations that
            patients describe as more studio than clinic.
          </p>
        </div>
        <div data-rise className="mt-12 grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border hairline">
            <img
              src="/assets/clinic-reception.png"
              alt="The studio reception with curved mint seating"
              className="h-full min-h-[18rem] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mono-label border-t hairline px-5 py-3 text-fog">
              Reception, level 4, EA Chambers II
            </figcaption>
          </figure>
          <div className="grid gap-4">
            <figure className="overflow-hidden rounded-2xl border hairline">
              <img
                src="/assets/product/tray-macro.png"
                alt="A clear aligner tray on the planning desk"
                className="h-56 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mono-label border-t hairline px-5 py-3 text-fog">
                Tray fitting station
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border hairline">
              <img
                src="/assets/people/smile-portrait.png"
                alt="A patient after her scan"
                className="h-56 w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mono-label border-t hairline px-5 py-3 text-fog">
                Scan and plan, same appointment
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function GettingHere() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20">
      <div className="shell grid gap-12 lg:grid-cols-2">
        <div data-rise>
          <h2 className="display-2">Getting here</h2>
          <p className="prose-site mt-5">
            Royapettah's landmark arcade, four floors up, and the parking is on
            us.
          </p>
        </div>
        <div data-rise>
          <ul className="space-y-4">
            {DIRECTIONS.map((step) => (
              <li key={step} className="flex items-start gap-3 body-sm leading-relaxed text-bone">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                {step}
              </li>
            ))}
          </ul>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-chip mt-8"
            aria-label="Open directions in Google Maps"
          >
            <span className="chip-dot" aria-hidden="true" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

function VisitFlow() {
  return (
    <section className="border-t hairline bg-lagoon-950 py-20">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            A typical <span className="italic-word">studio visit</span>
          </h2>
          <p className="prose-site mt-5">
            About an hour, start to finish, with nothing left vague.
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

function ChennaiPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-lagoon-950 pt-32">
        <div className="absolute inset-0">
          <img
            src="/assets/clinic-reception.png"
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-lagoon-950/75" />
        </div>
        <div className="shell relative pb-16 pt-10 md:pb-20">
          <p className="eyebrow">Experience center · EA Chambers II</p>
          <h1 className="display-1 mt-5 max-w-3xl">Chennai, Express Avenue</h1>
          <p className="mt-5 max-w-xl body-md leading-relaxed text-fog">
            High-tech diagnostics, calm treatment rooms and a team that plans
            your whole smile journey on day one.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="mono-label flex items-center gap-2 text-mint">
              <Star className="h-3.5 w-3.5 fill-mint" aria-hidden="true" />
              {SITE.rating}, {SITE.reviews}
            </p>
            <p className="mono-label flex items-center gap-2 text-fog">
              <Clock className="h-3.5 w-3.5 text-mint" aria-hidden="true" />
              {SITE.hoursLine}
            </p>
            <p className="mono-label flex items-center gap-2 text-fog">
              <Phone className="h-3.5 w-3.5 text-mint" aria-hidden="true" />
              {SITE.phoneDisplay}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-lagoon-950 py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-rise>
            <p className="eyebrow">Find us</p>
            <h2 className="display-2 mt-4">Inside Express Avenue Mall</h2>
            <address className="mt-6 max-w-md not-italic">
              <p className="flex items-start gap-3 body-md leading-relaxed text-bone">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-mint" aria-hidden="true" />
                <span>
                  {SITE.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
            </address>
            <p className="mt-5 max-w-lg body-sm leading-relaxed text-fog">
              Take the lift to the 4th floor of EA Chambers II, next to E Hotel.
              Wheelchair-accessible entrance and parking are available, and the
              parking lot is free.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-chip"
                aria-label="Open directions in Google Maps"
              >
                <span className="chip-dot" aria-hidden="true" />
                Open in Google Maps
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="cta-mono"
              >
                <span className="readout-text">whatsapp the studio</span>
                <span className="cursor-block" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div data-rise className="space-y-4">
            <div className="rounded-2xl border hairline bg-lagoon-900 p-7">
              <p className="mono-label mb-4 uppercase tracking-[0.16em] text-mint">
                Amenities
              </p>
              <ul className="grid gap-3">
                {AMENITIES.map((amenity, index) => {
                  const Icon = AMENITY_ICONS[index] ?? Accessibility;
                  return (
                    <li key={amenity} className="flex items-center gap-3 body-sm text-fog">
                      <Icon className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                      {amenity}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="rounded-2xl border hairline bg-lagoon-900 p-7">
              <p className="mono-label mb-4 uppercase tracking-[0.16em] text-mint">
                Payments
              </p>
              <ul className="grid gap-3">
                {PAYMENTS.map((payment) => (
                  <li key={payment.label} className="flex items-center gap-3 body-sm text-fog">
                    <payment.icon className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                    {payment.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border hairline bg-lagoon-900 p-7">
              <p className="mono-label mb-4 uppercase tracking-[0.16em] text-mint">
                At this center
              </p>
              <ul className="grid gap-3">
                <li className="flex items-center gap-3 body-sm text-fog">
                  <Stethoscope className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                  3D smile scans and treatment planning
                </li>
                <li className="flex items-center gap-3 body-sm text-fog">
                  <Waves className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                  Sedation for anxious visits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <GettingHere />

      <section className="border-t hairline bg-lagoon-900 py-20">
        <div className="shell">
          <div data-rise className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-2 max-w-xl">
              Treatments at this <span className="italic-word">studio</span>
            </h2>
            <p className="mono-label">Appointments recommended</p>
          </div>
          <ul data-rise className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TREATMENTS.map((treatment) => (
              <li key={treatment.name} className="rounded-2xl border hairline bg-lagoon-950 p-6">
                <h3 className="font-semibold text-bone">{treatment.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{treatment.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <VisitFlow />

      <section className="border-t hairline bg-lagoon-950 py-20">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="eyebrow">Plan your visit</p>
            <h2 className="display-2 mt-4">Call ahead, walk in smiling</h2>
            <p className="prose-site mt-4">
              Appointments are recommended. For dental emergencies, call first
              so the team can prepare for you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/contact" className="cta-ticket" aria-label="Book a consultation">
              <span className="ticket-notch" aria-hidden="true">
                BOOK
              </span>
              Book a consultation
            </Link>
            <a
              href={SITE.phoneHref}
              className="mono-label flex items-center gap-2 text-fog hover:text-mint"
            >
              <MessageCircle className="h-4 w-4 text-mint" aria-hidden="true" />
              {SITE.phoneDisplay} · WhatsApp enabled
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Invisible Aligners",
            telephone: "+919884664277",
            url: "https://invisibledentalandaesthetics.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Express Avenue Mall, EA Chambers II, 49/50 Whites Road, Royapettah",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              postalCode: "600014",
              addressCountry: "IN",
            },
            openingHours: "Mo-Su 10:00-21:00",
            paymentAccepted: "Credit Card, Debit Card, Google Pay, NFC",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "71",
            },
          }),
        }}
      />
    </main>
  );
}