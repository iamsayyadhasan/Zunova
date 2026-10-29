"use client";

import React, { useRef } from "react";
import { Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { techStackData } from "@/data/techStack";
import { useScrollReveal } from "@/hooks/useGsapAnimation";

export function TechArchitecture() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, ".tech-card", {
    stagger: 0.08,
    duration: 0.6,
    y: 20,
    start: "top 80%",
  });

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Foundation"
          title="Practical architecture &"
          highlight="reliable technologies"
          description="We choose proven, stable, and well-supported ecosystems that prioritize security, maintainability, and clean code ownership over transient industry trends."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackData.map((cat, idx) => (
            <Card
              key={idx}
              variant="interactive"
              className="tech-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan/40 transition-colors">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-brand-text group-hover:text-brand-cyan transition-colors">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed mb-5">
                  {cat.description}
                </p>

                <div className="space-y-2.5">
                  {cat.items.map((tech, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-2.5 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-between text-xs transition-colors hover:border-brand-cyan/30"
                    >
                      <div>
                        <span className="font-semibold text-brand-text block">{tech.name}</span>
                        <span className="text-[11px] text-brand-muted">{tech.role}</span>
                      </div>
                      {tech.status === "planned" ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card text-brand-muted border border-brand-border">
                          Planned
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                          Active
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
