"use client";

import React, { useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/home/HeroVisual";
import { gsap, isReducedMotion } from "@/hooks/useGsapAnimation";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Step 1: Ambient background glow fades in
      if (bgGlowRef.current) {
        tl.fromTo(
          bgGlowRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.2 }
        );
      }

      // Step 2: Eyebrow badge vertical reveal
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.9"
        );
      }

      // Step 3: Main headline line-by-line reveal
      const lines = [headlineLine1Ref.current, headlineLine2Ref.current].filter(Boolean);
      if (lines.length) {
        tl.fromTo(
          lines,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.14, ease: "power3.out" },
          "-=0.4"
        );
      }

      // Step 4: Supporting copy fades upward
      if (copyRef.current) {
        tl.fromTo(
          copyRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
      }

      // Step 5: Primary and secondary CTAs appear with a short stagger
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 14, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        );
      }

      // Step 6: Software dashboard illustration enters with subtle scale and opacity
      if (visualRef.current) {
        tl.fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.95, y: 24 },
          { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power3.out" },
          "-=0.6"
        );
      }

      // Step 7: Trust indicators gently fade in
      if (trustRef.current) {
        tl.fromTo(
          trustRef.current.children,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
          "-=0.4"
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden bg-brand-bg"
    >
      {/* Step 1: Ambient background glow */}
      <div
        ref={bgGlowRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#1A2842]/40 blur-[130px] pointer-events-none rounded-full"
      />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-brand-cyan/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Step 2: Eyebrow */}
            <div ref={eyebrowRef} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-elevated border border-brand-border text-xs text-brand-muted">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span className="font-medium text-brand-text">Technical Solutions for Modern Business</span>
                <span className="text-brand-border">|</span>
                <span className="text-brand-cyan font-mono text-[11px]">Web & Mobile</span>
              </div>
            </div>

            {/* Step 3: Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.1]">
              <span ref={headlineLine1Ref} className="block">
                Turn Complex Business Problems Into
              </span>
              <span
                ref={headlineLine2Ref}
                className="block bg-gradient-to-r from-brand-cyan via-[#70D9FF] to-brand-navy dark:to-[#70D9FF] to-[#1A2842] bg-clip-text text-transparent mt-1"
              >
                Practical Software.
              </span>
            </h1>

            {/* Step 4: Supporting Copy */}
            <p
              ref={copyRef}
              className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Zunova Tech helps businesses and startups build custom software, insightful dashboards, connected workflows, and mobile applications designed around real needs.
            </p>

            {/* Step 5: CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Discuss Your Project
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Step 7: Trust Indicators */}
            <div
              ref={trustRef}
              className="pt-4 border-t border-brand-border flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-brand-muted"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span>Full Codebase Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span>Transparent Scope & Milestones</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span>Production-Grade Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic (Step 6) */}
          <div ref={visualRef} className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

