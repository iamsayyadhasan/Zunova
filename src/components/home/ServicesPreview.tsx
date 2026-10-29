"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Code2, LayoutDashboard, Workflow, Rocket, Smartphone, ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { servicesData } from "@/data/services";
import { useScrollReveal } from "@/hooks/useGsapAnimation";

export function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, ".service-card", {
    stagger: 0.08,
    duration: 0.65,
    y: 24,
    start: "top 80%",
  });

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-brand-cyan" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-brand-cyan" />,
    Workflow: <Workflow className="w-6 h-6 text-brand-cyan" />,
    Rocket: <Rocket className="w-6 h-6 text-brand-cyan" />,
    Smartphone: <Smartphone className="w-6 h-6 text-brand-cyan" />,
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Service Categories"
          title="Software engineering tailored to"
          highlight="your operational reality"
          description="From targeted internal workflow automation and business dashboards to production web and mobile applications (Android & iOS), we build tools that remove operational friction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => (
            <Card
              key={service.id}
              variant="interactive"
              className="service-card p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center group-hover:border-brand-cyan/50 group-hover:bg-brand-elevated/80 transition-all duration-300">
                    {iconMap[service.iconName] || <Code2 className="w-6 h-6 text-brand-cyan" />}
                  </div>
                  <span className="text-xs font-mono text-brand-muted uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-brand-cyan mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="border-t border-brand-border pt-4 mb-6">
                  <div className="text-xs font-semibold text-brand-text mb-2.5">
                    Deliverables:
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.slice(0, 3).map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start text-xs text-brand-muted gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-brand-border">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:underline transition-colors"
                >
                  <span>Explore {service.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-cyan transition-colors group"
          >
            <span>View complete service breakdown and comparison</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
