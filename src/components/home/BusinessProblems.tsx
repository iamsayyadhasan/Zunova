"use client";

import React, { useRef } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { businessProblemsData } from "@/data/businessProblems";
import { useScrollReveal } from "@/hooks/useGsapAnimation";

export function BusinessProblems() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, ".problem-card", {
    stagger: 0.08,
    duration: 0.6,
    y: 20,
    start: "top 80%",
  });

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Operational Friction Points"
          title="Realistic business problems"
          highlight="we engineer solutions for"
          description="Most growing companies don't need speculative technology—they need software that eliminates operational friction, connects disjointed tools, and provides clarity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessProblemsData.map((item) => (
            <Card
              key={item.id}
              variant="interactive"
              className="problem-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-brand-cyan uppercase tracking-wider">
                    Problem {item.number}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-elevated text-brand-muted border border-brand-border">
                    {item.impactArea}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-text mb-3 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-3 rounded-lg bg-brand-elevated border border-brand-border transition-colors group-hover:border-brand-border/80">
                    <div className="flex items-start gap-2 text-brand-muted">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item.frictionPoint}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-brand-elevated border border-brand-border transition-colors group-hover:border-brand-cyan/30">
                    <div className="flex items-start gap-2 text-brand-text/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{item.softwareSolution}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
