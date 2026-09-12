/**
 * Provider-facing content for the /dentists page.
 * Illustrative case studies are qualitative scenarios built around the
 * program's standard flow, never named practices or fabricated numbers.
 */

export const DENTIST_BENEFITS = [
  {
    icon: "coins",
    title: "A revenue line, not a department",
    line: "Add aligners without a scanner, a lab bench or a new hire.",
    more: "Patients scan at our studio, while the cases, the calls and the fees still run through your chair.",
  },
  {
    icon: "columns",
    title: "Shared digital plans",
    line: "One screen for plans, photos and progress notes.",
    more: "You see what the studio sees, in real time, so patient questions never get two different answers.",
  },
  {
    icon: "graduation",
    title: "Training on your schedule",
    line: "A short orientation for you and your staff.",
    more: "First-case support from the studio team, plus a shared chat for every checkpoint until you feel fully set.",
  },
  {
    icon: "megaphone",
    title: "Referrals that find you",
    line: "The locator lists your practice as it opens.",
    more: "Your QR card goes to patients near you, and studio callers from your area are routed your way.",
  },
  {
    icon: "handshake",
    title: "Shared fees, on paper",
    line: "Transparent per-case terms, signed up front.",
    more: "Payments settle per completed case stage, on a schedule you approve before any patient is referred.",
  },
  {
    icon: "box",
    title: "Zero inventory",
    line: "Every tray is made to order per patient.",
    more: "Nothing to stock, store or let expire. Your shelf stays exactly as it is.",
  },
] as const;

export const YOU_BRING = [
  "Clinical judgement and the patient relationship",
  "Chair-side check-ins every two to three weeks",
  "Progress photos from your practice",
  "The local trust your patients already have",
] as const;

export const WE_BRING = [
  "Studio scans, dentist-led planning and tray manufacture",
  "Shared plan screens for every case",
  "The recycling loop for finished trays",
  "Patient routing, QR cards and locator listing",
] as const;

export const CASE_STUDIES = [
  {
    n: "01",
    title: "The solo practitioner",
    scenario:
      "A single-chair home practice on a Chennai side street keeps losing orthodontic cases to city clinics.",
    flow: "After one Sunday onboarding, the dentist refers their first patient for a studio scan. The plan returns the same week, and check-ins run from the home chair every two to three weeks.",
    outcome:
      "Aligner check-ins settle into the practice rhythm, and per-stage fees arrive on the agreed schedule.",
  },
  {
    n: "02",
    title: "The growing clinic",
    scenario:
      "A two-chair clinic wants aligners as a service line without financing a scanner or hiring a technician.",
    flow: "Both dentists hold shared plan views, the front desk learns tray timelines in an hour, and the practice appears in the locator at go-live.",
    outcome:
      "Existing patients convert through the QR referral card, and the clinic keeps the care relationship.",
  },
  {
    n: "03",
    title: "The dentist next door",
    scenario:
      "A practice close to Royapettah inherits patients who would rather check in closer to home.",
    flow: "Studio callers from that area are routed to the partner dentist, whose QR card is handed out at plan reviews.",
    outcome:
      "Patients gain local check-ins, and the partner practice gains cases without spending on marketing.",
  },
] as const;

export const SERVICE_OPTIONS = [
  "General dentistry",
  "Orthodontics",
  "Endodontics",
  "Aesthetics and cosmetic",
  "Pediatric dentistry",
  "Other",
] as const;

export const VOLUME_OPTIONS = [
  "Up to 50 patient visits a month",
  "50 to 200 patient visits a month",
  "More than 200 patient visits a month",
] as const;

export const HEAR_OPTIONS = [
  "Google or social media",
  "A colleague",
  "A patient",
  "Studio visit",
  "Other",
] as const;