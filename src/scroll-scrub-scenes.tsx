/**
 * Scene data for the scroll-scrub journey — single-shot film.
 *
 * ONE continuous film (scene-01.mp4) scrubbed by scroll, with one hero
 * chapter card reading over it. The story beats after the journey are the
 * HTML sections composed in src/routes/index.tsx.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";
import { Link } from "@tanstack/react-router";

/** Brand tokens for the journey layer (deep lagoon palette, design brief). */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#FFFFFF",
  background: "#0a0a0a",
  ink: "#F7F7F5",
  muted: "#9d9d9d",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "Straighten your smile, discreetly. Clear, biodegradable aligners, planned by dentists and invisible to everyone but you.",
    clip: "/assets/world/scene-01.mp4",
    id: "journey",
    kicker: "Invisible Aligners",
    label: "The journey",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    scroll: 5,
    tags: ["5.0 on Google", "71 reviews", "BPA-free"],
    title: "Your smile, grown in plain sight",
    actions: (
      <Link to="/contact" className="cta-smile" aria-label="Book a consultation">
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
    ),
  },
];