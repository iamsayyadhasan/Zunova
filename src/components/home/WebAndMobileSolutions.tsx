"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Globe, Smartphone, Apple, Check, ArrowRight, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { webAndMobilePlatforms } from "@/data/solutions";
import { MobileShowcaseVisual } from "@/components/home/MobileShowcaseVisual";
import { useScrollReveal } from "@/hooks/useGsapAnimation";

export function WebAndMobileSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, ".platform-card", {
    stagger: 0.1,
    duration: 0.65,
    y: 24,
    start: "top 80%",
  });

  const platformIcons: Record<string, React.ReactNode> = {
    "web-applications": <Globe className="w-6 h-6 text-brand-cyan" />,
    "android-applications": <Smartphone className="w-6 h-6 text-emerald-500" />,
    "ios-applications": <Apple className="w-6 h-6 text-[#1A2842] dark:text-brand-cyan" />,
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative bg-brand-elevated/40 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Multi-Platform Capabilities"
          title="Web, Android & iOS applications"
          highlight="engineered to work together"
          description="Depending on your operational requirements, we build tailored web applications, dedicated mobile apps, or connected cross-platform ecosystems that share a single secure backend."
        />

        {/* Top Showcase Layout: Cards Grid with Integrated Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Platform Cards (8 cols on lg) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {webAndMobilePlatforms.map((platform) => (
              <Card
                key={platform.id}
                variant="interactive"
                className="platform-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center group-hover:border-brand-cyan/40 transition-colors">
                      {platformIcons[platform.id]}
                    </div>
                    <Badge variant="cyan" size="sm">
                      {platform.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-brand-text mb-1 group-hover:text-brand-cyan transition-colors">
                    {platform.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-cyan mb-3">
                    {platform.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-5">
                    {platform.description}
                  </p>

                  <div className="border-t border-brand-border pt-3 mb-4">
                    <div className="text-xs font-semibold text-brand-text mb-2">
                      Key Strengths:
                    </div>
                    <ul className="space-y-1.5">
                      {platform.capabilities.slice(0, 3).map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-brand-text/90">
                          <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-brand-elevated border border-brand-border text-xs text-brand-muted leading-relaxed">
                  <strong className="text-brand-text block mb-0.5">Ecosystem Role:</strong>
                  {platform.roleInEcosystem}
                </div>
              </Card>
            ))}
          </div>

          {/* Visual Mobile Application Showcase (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center platform-card">
            <div className="text-center mb-4">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider block">
                Dual Platform Architecture
              </span>
              <span className="text-xs text-brand-muted">
                One API &bull; Web, Android & iOS
              </span>
            </div>
            <MobileShowcaseVisual />
          </div>
        </div>

        {/* Integration Callout */}
        <div className="p-6 rounded-2xl bg-brand-card border border-brand-border max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center text-brand-cyan shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-text">Single Unified Backend</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Not every project needs all three platforms. But when your business expands from desktop dashboards to field tablets or customer smartphones, your data remains synchronized without duplicate engineering.
              </p>
            </div>
          </div>
          <Link
            href="/services/mobile-app-development"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:underline shrink-0 group"
          >
            <span>Mobile Development Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
