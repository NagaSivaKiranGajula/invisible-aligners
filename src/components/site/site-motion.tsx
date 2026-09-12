/**
 * Site-wide motion layer (client-only): Lenis smooth scroll bridged to GSAP
 * ScrollTrigger (autoRaf:false + gsap.ticker), plus transform-only reveals and
 * parallax. Everything honours prefers-reduced-motion and nothing ever waits at
 * opacity:0 for a viewport trigger (screenshot-safe).
 */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function SiteMotion() {
  useEffect(() => {
    let active = true;
    const disposers: Array<() => void> = [];

    void (async () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const { default: LenisClass } = await import("lenis");
      if (!active) return;

      let lenis: Lenis | null = null;
      let raf: ((time: number) => void) | null = null;
      if (!reduce) {
        lenis = new LenisClass({ autoRaf: false });
        lenis.on("scroll", ScrollTrigger.update);
        raf = (time: number) => lenis?.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);
      }

      const ctx = gsap.context(() => {
        // Scroll-linked parallax: transform only.
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "0.2");
          gsap.fromTo(
            el,
            { yPercent: speed * 60 },
            {
              yPercent: speed * -60,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

        if (reduce) return;

        // Entrance: transform-only rise, fires once per element.
        gsap.utils.toArray<HTMLElement>("[data-rise]").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 36 },
            {
              y: 0,
              ease: "power2.out",
              duration: 0.8,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          );
        });
      });

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      disposers.push(() => {
        ctx.revert();
        window.removeEventListener("load", onLoad);
        if (raf) gsap.ticker.remove(raf);
        lenis?.destroy();
      });
    })();

    return () => {
      active = false;
      for (const dispose of disposers) dispose();
    };
  }, []);

  return null;
}