"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered safely once on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export interface ScrollRevealOptions {
  trigger?: HTMLElement | string | null;
  start?: string;
  stagger?: number;
  duration?: number;
  y?: number;
  opacity?: number;
  ease?: string;
  delay?: number;
}

/**
 * Custom hook to cleanly trigger scroll reveals on elements using GSAP ScrollTrigger.
 * Automatically handles GSAP context cleanup and respects prefers-reduced-motion.
 */
export function useScrollReveal(
  containerRef: React.RefObject<HTMLElement | null>,
  selector: string,
  options: ScrollRevealOptions = {}
) {
  const {
    start = "top 85%",
    stagger = 0.12,
    duration = 0.7,
    y = 30,
    ease = "power2.out",
    delay = 0,
  } = options;

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof window === "undefined") return;

    if (isReducedMotion()) {
      // Keep everything fully visible without animation
      const items = el.querySelectorAll(selector);
      items.forEach((item) => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll(selector);
      if (!targets.length) return;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease,
          delay,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [containerRef, selector, start, stagger, duration, y, ease, delay]);
}

export { gsap, ScrollTrigger };
