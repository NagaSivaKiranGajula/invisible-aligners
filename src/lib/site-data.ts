/** Brand data for Invisible Aligners. Content mirrors the business's own
 * website (owner-supplied content document), with product specs and team
 * copied faithfully. */

export const SITE = {
  name: "Invisible Aligners",
  product: "Invisible Aligners",
  tagline: "Straighten your smile. Discreetly.",
  phoneDisplay: "+91 98846 64277",
  phoneHref: "tel:+919884664277",
  whatsappHref: "https://wa.me/919884664277",
  webDomain: "invisibledentalandaesthetics.com",
  hoursLine: "Monday to Sunday, 10:00 AM to 9:00 PM",
  rating: "5.0 on Google",
  reviews: "71 reviews",
  addressLines: [
    "Express Avenue Mall, EA Chambers II, 4th Floor",
    "49/50 Whites Road, next to E Hotel, Royapettah",
    "Chennai, Tamil Nadu 600014",
  ],
  mapsUrl:
    "https://maps.google.com/?q=Invisible+Dental+%26+Aesthetics+Express+Avenue+Whites+Road+Chennai",
  payments: "Credit, debit, Google Pay and NFC",
};

export const NAV = [
  { to: "/product", label: "The aligners" },
  { to: "/experience-centers", label: "Experience centers" },
  { to: "/find-a-provider", label: "Find a provider" },
  { to: "/dentists", label: "For dentists" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const TREATMENTS = [
  {
    name: "Invisible aligners",
    line: "Clear, custom trays that move your teeth in gentle stages.",
  },
  {
    name: "Teeth whitening",
    line: "Professional whitening with bright, natural results.",
  },
  {
    name: "AI-powered diagnosis & treatment",
    line: "Robotic-assisted assessment for precise, repeatable care.",
  },
  {
    name: "AI screening & digital planning",
    line: "Contactless screening and a smile simulation before you begin.",
  },
  {
    name: "Guided biofilm therapy (GBT)",
    line: "A deep, gentle clean that keeps gums healthy between visits.",
  },
  {
    name: "Other procedures",
    line: "Everything else your smile needs, planned in the studio.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "My aligners are completely invisible. Two months in and no one at work has any idea I am straightening my teeth.",
    name: "Priya R.",
    role: "Google review, Chennai",
    face: "/assets/people/testimonial-woman.png",
  },
  {
    quote:
      "The team planned the whole journey on my first visit. Painless scans, clear timelines, and they checked in on every single tray.",
    name: "Karthik S.",
    role: "Google review, Royapettah",
    face: "/assets/people/testimonial-man.png",
  },
  {
    quote:
      "Spotless clinic, gentle doctors, and the whitening took barely an hour. My smile feels brand new.",
    name: "Divya M.",
    role: "Google review, Nungambakkam",
    face: null,
  },
] as const;

export const STEPS = [
  { n: "01", title: "Smile scan", line: "A quick 3D scan maps every tooth and previews your smile on screen." },
  { n: "02", title: "Your plan", line: "Dentists map the full journey, tray by tray, from your digital plan." },
  { n: "03", title: "Wear each tray", line: "Swap to a fresh tray every two weeks for steady, gentle progression." },
  { n: "04", title: "Keep your smile", line: "Fine-tune for free if needed, then retain the result for life." },
] as const;

export const MATERIAL_FACTS = [
  { label: "BPA-FREE POLYMER", line: "Medical-grade, hypoallergenic material, safe for long-term wear." },
  { label: "BIO-DEGRADABLE", line: "Eco-certified to break down in commercial composting (ASTM D6400)." },
  { label: "MATTE FINISH", line: "Glare-free and stain-resistant, crystal clear through every tray." },
  { label: "ZERO-WASTE KIT", line: "Recyclable packaging, plus a free carry case and cleaning crystals." },
] as const;

export const AMENITIES = [
  "Wheelchair-accessible entrance",
  "Wheelchair-accessible parking",
  "Free parking lot",
  "Onsite restrooms",
] as const;

export const QUESTIONS = [
  {
    q: "Will people notice I am wearing aligners?",
    a: "No. The trays are virtually invisible: crystal clear with a matte finish that blends with your smile. Most patients say nobody spots them.",
  },
  {
    q: "How long does a full course take?",
    a: "Mild to moderate cases typically run 6 to 12 months. Your dentist maps the exact number of trays at the planning visit.",
  },
  {
    q: "Do the trays hurt?",
    a: "You feel gentle pressure for a day or two after each new tray, then it eases. The studio is known for a pain-free, patient-first approach.",
  },
  {
    q: "How is this eco-friendly?",
    a: "Our trays are made from a biodegradable polymer (ASTM D6400) that breaks down in commercial composting, with zero-waste, recyclable packaging.",
  },
  {
    q: "How do I start?",
    a: "Book a consultation. We scan your smile, show you a digital simulation of the result, and your first tray is ready within days.",
  },
  {
    q: "Can I eat and drink with the trays in?",
    a: "Take them out for meals and anything but plain water. They go straight back in after brushing.",
  },
  {
    q: "How often do I visit the studio?",
    a: "Most patients come for the scan, a halfway check, and the finish. Your plan sets the exact visits.",
  },
  {
    q: "How do I clean the trays?",
    a: "Rinse after every meal, brush them gently with a soft brush and mild soap, and never use hot water. The cleaning crystals in your starter kit keep them clear.",
  },
  {
    q: "What are the small bumps on my teeth?",
    a: "They are attachments: tiny tooth-colored buttons that help each tray grip and move teeth precisely. They come off when your course ends.",
  },
  {
    q: "What if my smile needs refinements at the end?",
    a: "Fine-tuning trays are free under the Lifetime Smile Guarantee, so your finished smile stays exactly as planned.",
  },
  {
    q: "What comes in the starter kit?",
    a: "A free carry case and cleaning crystals, plus tray-safe cleaning guidance, delivered with your first tray.",
  },
  {
    q: "Can teenagers wear aligners?",
    a: "Yes. Younger patients wear trays comfortably, and quick check-ins suit school schedules. A parent joins the planning visit.",
  },
  {
    q: "Can I play sports with trays?",
    a: "Yes. Remove them for play and use a mouthguard where you normally would. Trays go straight back in after.",
  },
] as const;

export const COMPARISON = [
  {
    aspect: "Appearance",
    us: "Virtually invisible, matte finish that blends in",
    them: "Brackets and wires, always visible",
  },
  {
    aspect: "Eating",
    us: "Trays come out, so nothing is off the menu",
    them: "Food restrictions for the whole course",
  },
  {
    aspect: "Comfort",
    us: "Smooth medical-grade edges, no wires",
    them: "Wires can catch and irritate",
  },
  {
    aspect: "Check-ins",
    us: "Fewer, shorter studio visits",
    them: "Frequent tightening appointments",
  },
  {
    aspect: "Eco footprint",
    us: "Biodegradable polymer and zero-waste packaging",
    them: "Metal and plastic components discarded",
  },
] as const;

export const LIFECYCLE = [
  {
    n: "01",
    title: "Designed in the USA",
    line: "Engineered under strict quality standards and ISO 13485 manufacturing.",
  },
  {
    n: "02",
    title: "Shaped for your smile",
    line: "Each tray is manufactured to your dentist's digital plan.",
  },
  {
    n: "03",
    title: "Worn, quietly",
    line: "Two weeks per tray, virtually invisible to everyone but you.",
  },
  {
    n: "04",
    title: "Biodegrades at the end",
    line: "Eco-certified material breaks down in commercial composting.",
  },
] as const;

export const CANDIDACY = {
  good: [
    "Mild to moderate crowding",
    "Small gaps between teeth",
    "Minor rotations or tipping",
    "Relapse after earlier braces",
  ],
  assess: [
    "Severe crowding or bite problems",
    "Active gum disease or decay",
    "Larger gaps needing extra planning",
  ],
} as const;

export const TRAY_TIMELINE = [
  {
    week: "Week 0",
    title: "Scan and plan",
    line: "A 3D scan maps your smile, with a digital preview of the result.",
  },
  {
    week: "Week 2",
    title: "First tray",
    line: "Your first tray goes on, with the free starter kit. Gentle pressure, then ease.",
  },
  {
    week: "Week 14",
    title: "Halfway check",
    line: "A short visit confirms movement matches the plan.",
  },
  {
    week: "Week 30",
    title: "Course complete",
    line: "Result reached, refinements free if ever needed, retention next.",
  },
] as const;

export const ALIGNER_LIFE = [
  {
    icon: "clock",
    title: "Wear it 20 to 22 hours",
    line: "Out only to eat, brush and floss. More wear hours, fewer surprises.",
  },
  {
    icon: "utensils",
    title: "Eat what you like",
    line: "Trays come out for meals, so nothing is off the menu.",
  },
  {
    icon: "sparkles",
    title: "Clean with the kit",
    line: "Rinse after meals, brush gently with mild soap, and use the cleaning crystals weekly.",
  },
  {
    icon: "package",
    title: "Keep it in the case",
    line: "The free carry case travels with you, so trays never vanish in a napkin.",
  },
] as const;

export const HOW_TEETH_MOVE = [
  {
    n: "01",
    title: "Gentle pressure",
    line: "Each tray applies light, constant force along your dentist's plan.",
  },
  {
    n: "02",
    title: "Bone remodels",
    line: "Your body responds by reshaping bone around the moving root.",
  },
  {
    n: "03",
    title: "Progress locks in",
    line: "The next tray holds the new position, then moves the journey on.",
  },
] as const;

/* ---- Provider locator ---- */

export const PROVIDERS = [
  {
    id: "chennai-studio",
    kind: "studio",
    name: "Invisible Aligners Studio",
    tagline: "Scans, plans and check-ins at the Express Avenue experience center.",
    pincode: "600014",
    area: "Royapettah, Chennai",
    badges: ["3D scan", "Smile preview", "Check-ins", "First tray in days"],
    href: "/experience-centers/chennai-express-avenue",
  },
] as const;

export const NETWORK_PROVIDERS: unknown[] = [];

export const SAMPLE_PINS = ["600014", "600028", "600034", "600096"] as const;

export const PROVIDER_BENEFITS = [
  {
    icon: "coins",
    title: "A revenue line, not a department",
    line: "Clear aligners join your practice with no scanner, no lab benches and no tray inventory to buy.",
  },
  {
    icon: "columns",
    title: "Shared digital plans",
    line: "Plans, progress photos and notes live in one screen, so both clinics always see the same smile.",
  },
  {
    icon: "graduation",
    title: "Training on your schedule",
    line: "A short orientation for you and your staff, plus first-case support from the studio team.",
  },
  {
    icon: "megaphone",
    title: "Referrals that find you",
    line: "Patients near your practice receive your QR card, and studio callers from your area are routed your way.",
  },
  {
    icon: "handshake",
    title: "Shared fees, on paper",
    line: "Transparent per-case terms signed before the first patient, never discovered at settlement.",
  },
  {
    icon: "box",
    title: "Zero inventory",
    line: "Every tray is made to order per patient. Nothing to stock, store, or let expire.",
  },
] as const;

export const PARTNER_STEPS = [
  { n: "01", title: "Apply", line: "Send your clinic details through the form below." },
  { n: "02", title: "Onboard", line: "A short orientation on trays, timelines and tools." },
  { n: "03", title: "Refer and co-manage", line: "Patients scan at the studio; you steer the journey." },
  { n: "04", title: "Grow", line: "Cases complete, fees settle, and the network compounds." },
];

export const PARTNER_KIT = [
  "Tray and timeline training for you and your staff",
  "Digital planning account with your name on every case",
  "Co-management templates for check-ins and progress notes",
  "A QR card that sends patients to the studio booking page",
  "Shared-fee terms on paper before the first patient",
] as const;

export const CLINICAL_CHECKS = [
  {
    title: "Tray fit review",
    line: "Check seating and attachment bonding every two to three weeks.",
  },
  {
    title: "Wear-hour check",
    line: "Patients aim for 20 to 22 hours a day; we review together.",
  },
  {
    title: "Progress photos",
    line: "Standardized photos at each check-in keep both teams aligned.",
  },
  {
    title: "Handoff notes",
    line: "Every stage transfers into the studio plan so nothing drifts.",
  },
] as const;

export const PARTNER_FAQ = [
  {
    q: "Do I need my own scanner?",
    a: "No. Patients scan at the Express Avenue studio. You get the digital records and plan for co-management.",
  },
  {
    q: "Is there a joining fee?",
    a: "No joining fee. Terms are signed up front, before any patient is referred.",
  },
  {
    q: "What kind of practices fit best?",
    a: "Home-based dentists and small clinics who want aligner capability without buying equipment or hiring staff.",
  },
  {
    q: "How do patients find me?",
    a: "The studio hands your QR card to aligner patients who live nearer to you. You keep the relationship from day one.",
  },
  {
    q: "Do I need to stock trays?",
    a: "No. Trays are made to order and delivered per patient, so you hold no inventory at all.",
  },
] as const;

export const DIRECTIONS = [
  "Landmark: next to E Hotel on Whites Road, Royapettah",
  "Enter EA Chambers II at Express Avenue Mall, lift to level 4",
  "Use the free parking lot, or the wheelchair-accessible entrance",
  "In an app cab, ask for Express Avenue Mall, Whites Road",
] as const;

export const VISIT_FLOW = [
  {
    n: "01",
    title: "Consult and scan",
    line: "A 3D scan and digital smile simulation before anything is scheduled.",
  },
  {
    n: "02",
    title: "Plan",
    line: "Your dentist walks you through the whole journey, tray by tray, on screen.",
  },
  {
    n: "03",
    title: "Wear",
    line: "Your first tray is fitted before you leave, with the free starter kit.",
  },
  {
    n: "04",
    title: "Check in",
    line: "Professionals monitor progress and adjust as needed until you finish.",
  },
] as const;

export const JOURNEY_SO_FAR = [
  {
    n: "01",
    title: "The studio opens",
    line: "Invisible Aligners opens at Express Avenue, on level 4 of EA Chambers II.",
  },
  {
    n: "02",
    title: "American-made aligners, Chennai smiles",
    line: "The studio introduces USA-designed, biodegradable clear aligners.",
  },
  {
    n: "03",
    title: "71 smiles, all five stars",
    line: "Patients rate the studio 5.0 on Google, one honest review at a time.",
  },
] as const;

export const TEAM = [
  {
    name: "Dr. Shilfa Nigar",
    credentials: "BDS, FMC (London)",
    role: "Founder & Chief Aligner Specialist",
    note: "Founded the studio to bridge advanced aligner innovation with personalized, patient-first care.",
  },
  {
    name: "Dr. Pavithra",
    credentials: "BDS",
    role: "Aligner Specialist",
    note: "Guides patients from first scan to final tray with a gentle, pain-free touch.",
  },
  {
    name: "Dr. Jeyvarshini",
    credentials: "MDS",
    role: "Orthodontist",
    note: "Leads complex alignment and bite planning across every course.",
  },
] as const;

export const RECOGNITION = [
  "Recognized for excellence in comprehensive dental care",
  "Appreciated for a patient-centric, pain-free treatment approach",
  "Acknowledged for high standards in hygiene and safety protocols",
  "Known expertise in cosmetic and restorative dentistry",
  "Consistently highly rated for patient satisfaction and trust",
] as const;

export const COMMITMENTS = [
  {
    title: "Biodegradable trays",
    line: "Eco-certified material that breaks down in commercial composting.",
  },
  {
    title: "Zero-waste delivery",
    line: "Recyclable, compostable packaging from tray one to the finished course.",
  },
  {
    title: "Digital-first records",
    line: "Scans and notes live on screen, so paper stays out of the loop.",
  },
  {
    title: "Reusable instruments",
    line: "Sterilized, reusable tools across every treatment.",
  },
] as const;