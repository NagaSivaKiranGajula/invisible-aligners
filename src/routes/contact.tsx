import { createFileRoute } from "@tanstack/react-router";
import {
  Accessibility,
  Car,
  Clock,
  CreditCard,
  MapPin,
  MessageCircle,
  Phone,
  Siren,
  Waves,
} from "lucide-react";

import { AMENITIES, DIRECTIONS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Invisible Aligners" },
      {
        name: "description",
        content:
          "Book a consultation at our Chennai studio. Call +91 98846 64277, WhatsApp us, or visit Express Avenue Mall, Whites Road. Open daily 10 AM to 9 PM.",
      },
    ],
  }),
  component: ContactPage,
});

const INFO_CARDS = [
  {
    title: "Visit",
    icon: MapPin,
    lines: [...SITE.addressLines, SITE.hoursLine],
    href: SITE.mapsUrl,
    hrefLabel: "Open in Google Maps",
  },
  {
    title: "Call or WhatsApp",
    icon: Phone,
    lines: [SITE.phoneDisplay, "WhatsApp enabled for new patients"],
    href: SITE.whatsappHref,
    hrefLabel: "Message on WhatsApp",
  },
  {
    title: "Payments",
    icon: CreditCard,
    lines: [SITE.payments, "All major payment methods welcome"],
    href: null,
    hrefLabel: "",
  },
  {
    title: "Facilities",
    icon: Accessibility,
    lines: [
      ...AMENITIES,
      "High-tech diagnostic equipment",
      "Sedation dentistry available",
    ],
    href: null,
    hrefLabel: "",
  },
];

function GettingHere() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20">
      <div className="shell grid gap-12 lg:grid-cols-2">
        <div data-rise>
          <h2 className="display-2">Finding the studio</h2>
          <p className="prose-site mt-5">
            Four floors above Royapettah's most famous arcade, and the parking
            lot is free.
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

function ContactFaq() {
  const items = [
    {
      q: "How fast will you reply?",
      a: "During studio hours, usually the same day. WhatsApp gets the quickest answer.",
    },
    {
      q: "Can I pay in installments?",
      a: "Ask at the front desk about payment plans for aligner courses. Cards, Google Pay and NFC are all accepted.",
    },
    {
      q: "What if I have a dental emergency?",
      a: "Call before you come so the team can prepare. Emergency care is available within studio hours.",
    },
  ];
  return (
    <section className="border-t hairline bg-lagoon-950 py-20">
      <div className="shell max-w-3xl">
        <h2 className="display-2">Good to know</h2>
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

function ContactPage() {
  return (
    <main>
      <section className="bg-lagoon-950 pt-32 pb-16 md:pb-20">
        <div className="shell max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="display-1 mt-5">
            Book a <span className="italic-word">consultation</span>
          </h1>
          <p className="prose-site mt-6">
            Appointments are recommended: it means the right scans, the right
            clinician and no waiting. For emergencies, call first so we can
            prepare.
          </p>
        </div>
      </section>

      <section className="bg-lagoon-950 pb-20">
        <div className="shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_CARDS.map((card) => (
            <div key={card.title} data-rise className="flex flex-col rounded-2xl border hairline bg-lagoon-900 p-7">
              <card.icon className="h-5 w-5 text-mint" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold text-bone">{card.title}</h2>
              <div className="mt-3 space-y-1.5 body-sm leading-relaxed text-fog">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              {card.href ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-mono mt-5"
                >
                  <span className="readout-text">{card.hrefLabel}</span>
                  <span className="cursor-block" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <GettingHere />

      <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-rise>
            <p className="eyebrow">Start the conversation</p>
            <h2 className="display-2 mt-4">Tell us about your smile</h2>
            <p className="prose-site mt-5">
              Fill the form and it opens in WhatsApp, pre-filled for the studio
              team. We reply during studio hours, every day.
            </p>
            <ul className="mt-8 space-y-3 body-sm text-fog">
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                {SITE.hoursLine}
              </li>
              <li className="flex items-center gap-3">
                <Car className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                Free parking · Wheelchair-accessible entrance
              </li>
              <li className="flex items-center gap-3">
                <Siren className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                Emergency dental care available
              </li>
              <li className="flex items-center gap-3">
                <Waves className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                Sedation for anxious patients
              </li>
            </ul>
          </div>

          <form
            data-rise
            className="rounded-2xl border hairline bg-lagoon-950 p-8 md:p-10"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const text = [
                `New consultation request`,
                `Name: ${data.get("name")}`,
                `Phone: ${data.get("phone")}`,
                `Interest: ${data.get("interest")}`,
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
                  className="w-full rounded-xl border border-line-ink bg-lagoon-900 px-4 py-3 text-bone outline-none placeholder:text-fog/60 focus:border-mint"
                  placeholder="Ananya Iyer"
                />
              </label>
              <label className="block">
                <span className="mono-label mb-2 block uppercase tracking-[0.14em]">Phone</span>
                <input
                  name="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-line-ink bg-lagoon-900 px-4 py-3 text-bone outline-none placeholder:text-fog/60 focus:border-mint"
                  placeholder="+91 ..."
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">I am interested in</span>
              <select
                name="interest"
                required
                defaultValue="Clear aligners"
                className="w-full rounded-xl border border-line-ink bg-lagoon-900 px-4 py-3 text-bone outline-none focus:border-mint"
              >
                <option>Clear aligners</option>
                <option>Teeth whitening</option>
                <option>Cosmetic dentistry</option>
                <option>Sedation dentistry</option>
                <option>Emergency dental care</option>
                <option>Dentist partnership</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="mono-label mb-2 block uppercase tracking-[0.14em]">Message (optional)</span>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-line-ink bg-lagoon-900 px-4 py-3 text-bone outline-none placeholder:text-fog/60 focus:border-mint"
                placeholder="Anything the team should know before your visit."
              />
            </label>
            <button type="submit" className="cta-chip mt-7" aria-label="Send message via WhatsApp">
              <span className="chip-dot" aria-hidden="true" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <ContactFaq />

      <section className="border-t hairline bg-lagoon-950 py-20">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="display-2">Prefer to talk?</h2>
            <p className="prose-site mt-4">
              One call, and the team can confirm slots, answer treatment
              questions and book your first scan.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={SITE.phoneHref}
              className="cta-chip"
              aria-label="Call Invisible Aligners"
            >
              <span className="chip-dot" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <p className="mono-label flex items-center gap-2 text-fog">
              <MessageCircle className="h-4 w-4 text-mint" aria-hidden="true" />
              {SITE.webDomain}
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
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
          }),
        }}
      />
    </main>
  );
}