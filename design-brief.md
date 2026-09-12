# Design brief — Invisible Dental & Aesthetics

Brand: Invisible Dental Aligners / Invisible Dental & Aesthetics, Chennai, India.
Product: clear invisible aligners made from eco-friendly (plant-based) material,
plus whitening, cosmetic, sedation and emergency dentistry. Real business data:
Express Avenue Mall, EA Chambers-II, 4th Floor, 49/50 Whites Rd, Royapettah,
Chennai 600014; +91 98846 64277; invisibledentalandaesthetics.com; Mon-Sun
10:00-21:00; 5.0 on Google from 71 reviews; wheelchair-accessible; cards/UPI/
NFC/WhatsApp accepted.

## Design read
For image-conscious young professionals and families in Chennai who want
straighter teeth without visible brackets and without plastic guilt. Register:
serene, botanical-fresh, quietly premium, cinematic dark. This is the same
feeling as a modern eco studio: clinical precision, living materials, soft
light.

## Concept spine
LIVING SYSTEM / GARDEN: the aligner is grown, not manufactured. Plant polymers,
light through clear material, slow growth, the smile as something cultivated.
Page language: "Your smile, grown in plain sight." Motifs: leaf shadows, soft
botanical light through glass, thin mono scan-lines (digital precision) living
alongside organic forms.

## Delivery tier
cinema (Lenis + GSAP bridge, scroll-scrub film as Tier-1, scroll chapters,
parallax layers on content sections).

## Animation mode: animated-website
User picked "Animated (cinematic scroll)" at intake.

### Journey shape
single-shot. ONE continuous ~15s 16:9 film, generated in one call, scrubbed
end to end. One subject seen ever more closely: the aligner, then the smile.

### Journey
Film beats (one unbroken slow orbital push-in, no cuts):
1. Establishing: a crystal-clear aligner emerges from darkness on a wet
   dark-green glass surface, a soft botanical leaf shadow playing across it.
2. Orbit + macro push-in: a light sweep travels across the transparent polymer,
   the material edge refracting like water.
3. The aligner lifts gently, refracting a mint highlight.
4. Resolve: shallow depth-of-field close-up of a young Indian woman's quiet,
   confident smile, deep teal-green background blur.

Chapters over the film: ONE hero chapter card in the scrub (kicker "Invisible
Dental Aligners"; title "Your smile, grown in plain sight"; body "Clear, custom
aligners made from plant-based polymer, planned by dentists and invisible to
everyone but you."; tags "5.0 on Google", "71 reviews", "BPA-free"; booking
CTA). The remaining story beats are the HTML sections that follow the journey.

World grammar (one byte-identical preamble across all media):
Deep lagoon ground #0B2320, sea-glass mint accent #7FD8B8; wet glass surfaces;
single soft key light upper-left; gentle botanical leaf shadows; shallow depth
of field; slow constant motion; locked exposure; no on-screen text or logos.

Mobile framing: subject center-safe; mobile encode capped at 720p.

Delivery budget: desktop clip <=32 MiB, mobile clip <=16 MiB.

How the journey enacts the spine: the camera treats the aligner like a specimen
in a greenhouse, slowly revealing its clarity until the human smile blooms at
the final frame. Scroll is growth.

## Locked palette (one accent, page-wide, all sections dark)
- `--lagoon-950` #05100F  deepest ground
- `--lagoon-900` #0B2320  page ground
- `--lagoon-800` #0F2F2A  panel surface
- `--lagoon-700` #16403A  raised / hover surface
- `--line-ink`  #23473F  hairlines
- `--bone`      #EDF2E9  primary text
- `--fog`       #A6BCB3  secondary text
- `--mint`      #7FD8B8  SINGLE accent (sea-glass mint)
- `--mint-bright` #A5E6CC accent hover / highlight
Defense: sea-glass mint is literally the color of light through the tray edge;
deep lagoon keeps the film dark and legible and echoes botanicals. Hits no
banned family: not graphite + ember orange, not near-black + neon cyan (mint is
a desaturated pastel, ground is green-ink not neutral black), not beige +
brass, no AI purple.

## Locked type
Satoshi (Fontshare) for display and body; JetBrains Mono (Google) for kickers,
metrics captions, rail labels. Grotesk = clean clinical modern; mono = the
precision-instrument texture that pairs with scan-line motifs.

## Section plan (home page, in order)
1. Journey (cinema) — full-bleed sticky scrub film, left-aligned chapter copy, nav overlay.
2. Marquee band — scrolling brand strip: BPA-free / recyclable / plant-based / invisible / Express Avenue, Chennai.
3. Metrics strip — oversized numerals with mono captions (5.0 rating, 71 reviews, 11 hours open daily, 1 center today).
4. Material feature — asymmetric split, image left macro; "Grown from plants" eco story; chip-flip CTA.
5. Tray lifecycle — four-stage process strip: grown, shaped, worn, recycled.
6. Compare — aligners vs metal braces spec table (qualitative rows only).
7. Product showcase — bento of the aligner universe (scan, tray, smile).
8. Treatments — hairline list rows, hover shear; 5 services.
9. Experience center — full-bleed image-as-canvas with parallax, corner-bracket CTA.
10. Testimonials — horizontal scroll wall, real review quotes.
11. FAQ — accordion (first five questions), no eyebrow.
12. Partner band — ticket-tear banner CTA to /dentists.
13. Contact + footer — dense dark; framed-block booking CTA.

## Eyebrow budget
Home has 13 sections -> ceil(13/3) = 5: hero, material, compare, experience center, partner. All expanded subpages stay inside their own budgets. Other mono labels are captions/rail labels, not eyebrows.

## Expanded page sections
/product: candidacy (good fit vs assessed at consult), spec sheet, typical-course timeline, four steps, 7-question FAQ.
/experience-centers: center card, plan-your-visit strip, pre-visit FAQ.
/experience-centers/chennai-express-avenue: find us + amenities/payments, studio gallery, getting here, treatments, typical visit flow.
/dentists: partnership perks, joining steps, clinical checklist, partner kit, 5-question FAQ + application form.
/about: story hero, journey-so-far milestones, values, sustainability commitments, patient quote, studio close-up.
/contact: info cards, finding the studio, WhatsApp form, good-to-know FAQ, call band.

## Asset plan (all generated; palette-locked; "no text, no logos")
- Film (scroll-scrub, 1 video) + storyboard (1 image, 6-panel).
- Reference boards: 7 (hero/journey, marquee+metrics, material, product bento, treatments, location, testimonials+partner) -> refs/.
- Hero visual: the film; posters cover chapter imagery.
- Section plates: 2 deep autonomous gradients / leaf light plates.
- Product universe: aligner tray macro; tray on leaf-glass; smile portrait (Indian woman); lifestyle hands with case.
- Clinic: reception interior; treatment room with modern diagnostic equipment.
- People: dentist portrait (Indian woman dentist, green scrubs); second dentist/partner portrait (Indian man, home-clinic setup).
- Testimonial faces: 2 portraits.
- Icon sheet: 1 sheet of 8 glyphs (aligner, leaf, scan, sparkle, shield, clock, pin, chat), sliced + background-removed.
- Logo: 1 monogram mark (leaf-tooth, no text), background-removed; wordmark in HTML type.
- OG / launch cover / favicon: via generate_app_branding pipeline (route photo, scene with smiling patient + aligner, deep lagoon palette).
- Head kit: favicon.ico/png sizes, apple-touch-icon, 192/512 + maskable, site.webmanifest, theme-color.

## CTA inventory (bespoke chrome; each its own garment)
1. Hero (film): oversized text link, smile-arc underline draws in on hover, "Book a consultation".
2. Material section: material-chip that flips like a sample swatch, "Explore the aligners".
3. Product bento: mono readout that types/decodes the label on hover, "How the trays work".
4. Treatments rows: entire row shears grade on hover (rows are the hit area), "See treatments".
5. Experience center: corner-bracket viewfinder target closing on hover, "Visit Express Avenue".
6. Partner band: ticket with perforation tear on hover, "Become a partner".
7. Footer: framed block that fills with clipped text swap, "Book a consultation".
8. Nav: hairline slide links; phone + WhatsApp as mono links.
Rationed garments: drawing underline (hero, once), framed block (footer, once), flood fill (0 uses).

## Second-read moment
One full-bleed macro crop of the aligner edge catching mint light, placed inside the material section.

## Pages
- / home (section plan above)
- /product  the aligners: material story, how it works (scan -> plan -> tray -> smile), facts table, FAQ
- /experience-centers  centers index (Chennai Express Avenue)
- /experience-centers/chennai-express-avenue  full location page: address, hours, amenities, payments, WhatsApp, map link
- /dentists  home-based dentist collaboration: program, steps, application via WhatsApp
- /about  brand story + clinic studio + values
- /contact  full contact hub + form (WhatsApp prefill)

## Business facts used (real)
5.0/5 from 71 Google reviews; Mon-Sun 10:00-21:00; address above; +91 98846 64277; WhatsApp enabled; wheelchair-accessible entrance + parking; onsite restrooms; free parking; cards, debit, Google Pay, NFC; Express Avenue / EA Chambers-II / next to E Hotel; modern high-tech diagnostic equipment. Product facts (invented but plausible, labeled as product specs): plant-based thermoplastic polymer, BPA-free, recyclable, ~14-day tray cycles. No invented social-proof stats.

## Anti-convergence ledger
First website build in this session: no previous palette/type/garments to differ from. Garment audit: drawing underline x1, framed block x1, flood-fill x0, mono decode, chip flip, shear row, corner bracket, ticket tear.