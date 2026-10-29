"use client";

import React, { useRef } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { useScrollReveal } from "@/hooks/useGsapAnimation";

export function ContactCta() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, ".cta-box", {
    duration: 0.7,
    y: 24,
    start: "top 85%",
  });

  const whatsappHref = siteConfig.socials.whatsapp.number
    ? `https://wa.me/${siteConfig.socials.whatsapp.number.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        siteConfig.socials.whatsapp.defaultMessage
      )}`
    : null;

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden bg-brand-bg border-t border-brand-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1A2842]/30 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="cta-box rounded-3xl border border-brand-border bg-brand-card p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden transition-colors">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span>Open for Exploratory Project Discussions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text tracking-tight mb-6">
            Have a problem worth solving?
          </h2>

          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Tell us what your business is trying to improve. Whether you need custom web software, business dashboards, workflow automation, or mobile apps (Android & iOS), let&apos;s explore a practical first step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Let&apos;s Discuss Your Project
            </Button>

            {whatsappHref ? (
              <Button
                href={whatsappHref}
                external
                size="lg"
                variant="secondary"
                icon={<MessageCircle className="w-4 h-4 text-emerald-500" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
            ) : (
              <Button
                href={`mailto:${siteConfig.contactEmail}`}
                size="lg"
                variant="secondary"
                icon={<Mail className="w-4 h-4 text-brand-cyan" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Email Us Directly
              </Button>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-brand-border text-xs text-brand-muted flex flex-wrap items-center justify-center gap-6">
            <span>Direct technical review</span>
            <span>•</span>
            <span>No pushy sales calls</span>
            <span>•</span>
            <span>Clear scope proposals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
