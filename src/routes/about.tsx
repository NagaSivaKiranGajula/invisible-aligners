import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, UserRound } from "lucide-react";

import { COMMITMENTS, JOURNEY_SO_FAR, RECOGNITION, SITE, TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Invisible Aligners" },
      {
        name: "description",
        content:
          "Crafted by expertise, led by excellence. The story of the Chennai studio founded by Dr. Shilfa Nigar: American-designed biodegradable aligners, guided by a patient-first team.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    n: "01",
    title: "Crafted by expertise",
    line: "Every course is planned by a dentist, tray by tray, on a real 3D scan.",
  },
  {
    n: "02",
    title: "Led by excellence",
    line: "American-engineered trays under strict quality standards, ISO 13485 certified.",
  },
  {
    n: "03",
    title: "Virtually invisible",
    line: "Matte, crystal-clear material that disappears into your smile.",
  },
  {
    n: "04",
    title: "Patient first",
    line: "A gentle, pain-free approach, recognized for trust and comfort.",
  },
];

function Team() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">The clinical team</h2>
          <p className="prose-site mt-5">
            Three specialists, one plan: orthodontics and aligner care led by
            expertise at every step.
          </p>
        </div>
        <div data-rise className="mt-12 grid gap-4 md:grid-cols-3">
          {TEAM.map((doctor) => (
            <article key={doctor.name} className="rounded-2xl border hairline bg-lagoon-950 p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-mint/40 bg-lagoon-800 font-mono text-lg text-mint">
                {doctor.name.replace("Dr. ", "").charAt(0)}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-bone">{doctor.name}</h3>
              <p className="mono-label mt-1 uppercase tracking-[0.14em] text-mint">
                {doctor.credentials}
              </p>
              <p className="mt-3 text-sm font-medium text-bone">{doctor.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-fog">{doctor.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-2">
        <div data-rise>
          <h2 className="display-2">Recognition</h2>
          <p className="prose-site mt-5">
            The studio's founder is widely recognized for excellence in dental
            care, combining clinical expertise with a patient-focused approach.
          </p>
        </div>
        <ul data-rise className="divide-y hairline border-y hairline">
          {RECOGNITION.map((item) => (
            <li key={item} className="flex items-start gap-3 py-4">
              <UserRound className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <span className="text-bone">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="bg-lagoon-950 pt-32 pb-20 md:pb-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About the studio</p>
            <h1 className="display-1 mt-5 max-w-xl">
              Crafted by expertise. <span className="italic-word">Led by excellence.</span>
            </h1>
            <p className="prose-site mt-6">
              Invisible Aligners makes confident, beautiful smiles accessible
              through precision-driven, American-manufactured clear aligner
              technology, guided by professional dental expertise.
            </p>
            <p className="prose-site mt-5">
              Founded and owned by Dr. Shilfa Nigar, BDS, FMC (London), a
              dentist known for clinical excellence and a patient-first
              philosophy, the studio was created to bridge advanced orthodontic
              innovation with personalized dental care. One studio, one plan,
              one promise: straighten your smile, discreetly.
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
              src="/assets/clinic-reception.png"
              alt="The studio reception in Express Avenue Mall"
              className="aspect-[4/3] w-full rounded-2xl border hairline object-cover"
              loading="eager"
              decoding="async"
            />
            <p className="mono-label absolute bottom-4 left-4 rounded-full bg-lagoon-950/80 px-3 py-1.5 backdrop-blur-sm">
              Express Avenue · 4th floor, EA Chambers II
            </p>
          </div>
        </div>
      </section>

      <Team />
      <Recognition />
      <Journey />
      <Values />
      <Commitments />

      <section className="border-t hairline bg-lagoon-950 py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div data-rise className="space-y-8">
            <h2 className="display-2 max-w-md">
              A clinic that feels like a <span className="italic-word">studio</span>
            </h2>
            <p className="prose-site">
              Patients describe the same thing in their reviews: a modern,
              welcoming space, professional staff and treatment that is planned,
              not improvised. That is the studio we set out to build.
            </p>
            <p className="prose-site">
              Open Monday to Sunday, 10 AM to 9 PM, with wheelchair access, free
              parking and payment by card, Google Pay or NFC. Appointments are
              recommended; emergencies call ahead.
            </p>
            <figure className="rounded-2xl border hairline bg-lagoon-900 p-8">
              <Quote className="h-5 w-5 text-mint" aria-hidden="true" />
              <blockquote className="mt-4 text-lg leading-relaxed text-bone">
                The team planned the whole journey on my first visit. Painless
                scans, clear timelines, checked in on every single tray.
              </blockquote>
              <figcaption className="mono-label mt-4 text-fog">
                Karthik S. · Google review, Royapettah
              </figcaption>
            </figure>
          </div>
          <div data-rise className="grid content-start gap-4">
            <img
              src="/assets/product/tray-macro.png"
              alt="A clear aligner tray close-up"
              className="w-full rounded-2xl border hairline object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border hairline bg-lagoon-900 p-6">
                <p className="text-4xl font-bold tracking-tighter text-bone">{SITE.rating}</p>
                <p className="mono-label mt-2 uppercase tracking-[0.14em] text-mint">
                  Google rating
                </p>
              </div>
              <div className="rounded-2xl border hairline bg-lagoon-900 p-6">
                <p className="text-4xl font-bold tracking-tighter text-bone">{SITE.reviews}</p>
                <p className="mono-label mt-2 uppercase tracking-[0.14em] text-mint">
                  Patient reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-lagoon-900">
        <Link
          to="/experience-centers/chennai-express-avenue"
          className="group flex items-center justify-between gap-6 px-6 py-14 transition-colors hover:bg-lagoon-800 md:px-14 md:py-20"
          aria-label="Visit Express Avenue experience center"
        >
          <span className="display-2 max-w-2xl">
            Meet the studio <span className="italic-word">in person</span>
          </span>
          <span className="cta-bracket shrink-0">Visit Express Avenue</span>
        </Link>
      </section>
    </main>
  );
}

function Journey() {
  return (
    <section className="border-t hairline bg-lagoon-950 py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-2">
        <div data-rise>
          <h2 className="display-2">The journey so far</h2>
          <p className="prose-site mt-5">
            No grand launch dates, just the milestones patients actually felt.
          </p>
        </div>
        <ol data-rise className="divide-y hairline border-y hairline">
          {JOURNEY_SO_FAR.map((milestone) => (
            <li key={milestone.n} className="grid gap-2 py-6 sm:grid-cols-[3.5rem_1fr]">
              <span className="mono-label pt-1 text-mint">{milestone.n}</span>
              <div>
                <h3 className="text-lg font-semibold text-bone">{milestone.title}</h3>
                <p className="mt-1 body-sm leading-relaxed text-fog">{milestone.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <p className="eyebrow">What we believe</p>
          <h2 className="display-2 mt-4">Four rules the studio runs on</h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline bg-line-ink sm:grid-cols-2">
          {VALUES.map((value) => (
            <div key={value.n} className="flex gap-5 bg-lagoon-950 p-8">
              <span className="mono-label shrink-0 pt-1 text-mint">{value.n}</span>
              <div>
                <h3 className="text-lg font-semibold text-bone">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{value.line}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitments() {
  return (
    <section className="border-t hairline bg-lagoon-900 py-20 md:py-28">
      <div className="shell">
        <div data-rise className="max-w-2xl">
          <h2 className="display-2">
            Sustainability, <span className="italic-word">kept quietly</span>
          </h2>
          <p className="prose-site mt-5">
            We do not greenwash on the packaging. We changed the material, the
            loop and the habits.
          </p>
        </div>
        <div data-rise className="mt-12 grid gap-px overflow-hidden rounded-2xl border hairline bg-line-ink sm:grid-cols-2">
          {COMMITMENTS.map((commitment) => (
            <div key={commitment.title} className="bg-lagoon-950 p-8">
              <h3 className="text-lg font-semibold text-bone">{commitment.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{commitment.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}