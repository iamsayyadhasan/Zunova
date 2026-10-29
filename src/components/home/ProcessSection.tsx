"use client";

import React, { useRef } from "react";
import { Search, Compass, Hammer, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howWeWorkSteps } from "@/data/principles";
import { useScrollReveal } from "@/hooks/useGsapAnimation";

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, ".process-step", {
    stagger: 0.1,
    duration: 0.65,
    y: 20,
    start: "top 80%",
  });

  const stepIcons = [
    <Search key="1" className="w-5 h-5 text-brand-cyan" />,
    <Compass key="2" className="w-5 h-5 text-brand-cyan" />,
    <Hammer key="3" className="w-5 h-5 text-brand-cyan" />,
    <Rocket key="4" className="w-5 h-5 text-brand-cyan" />,
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Engineering Methodology"
          title="How we deliver"
          highlight="without surprises"
          description="A disciplined, transparent four-phase process designed to minimize uncertainty, validate requirements early, and deliver production-ready software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howWeWorkSteps.map((step, idx) => (
            <div
              key={step.number}
              className="process-step relative rounded-xl border border-brand-border bg-brand-card p-6 flex flex-col justify-between hover:border-[#1A2842] transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-2xl font-bold font-mono text-brand-cyan/40">
                    {step.number}
                  </span>
                </div>

                <div className="text-xs uppercase font-mono tracking-wider text-brand-cyan mb-1 font-semibold">
                  Phase {step.number}: {step.name}
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">{step.description}</p>
              </div>

              {step.deliverables && (
                <div className="pt-4 border-t border-brand-border space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-brand-muted block">Expected Deliverables:</span>
                  {step.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="text-[11px] text-brand-text/90 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-brand-cyan" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
