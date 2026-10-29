"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { projectsData } from "@/data/projects";
import { DashboardVisual, PipelineVisual, PortalVisual } from "@/components/work/ProjectVisuals";
import { useScrollReveal } from "@/hooks/useGsapAnimation";

export function PortfolioPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, ".portfolio-card", {
    stagger: 0.1,
    duration: 0.65,
    y: 24,
    start: "top 80%",
  });

  const visualMap = {
    dashboard: <DashboardVisual />,
    pipeline: <PipelineVisual />,
    portal: <PortalVisual />,
    mobile: <PortalVisual />,
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative bg-brand-elevated/20 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architectural Blueprints & Prototypes"
          title="Engineered solutions for"
          highlight="complex operations"
          description="A transparent look at concept architectures, internal tooling prototypes, and application starter foundations engineered to demonstrate our approach to real business challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              variant="interactive"
              className="portfolio-card p-6 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="mb-5 transition-transform duration-300 group-hover:scale-[1.01]">
                  {visualMap[project.visualPreviewType]}
                </div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="concept" size="sm">
                    {project.badge}
                  </Badge>
                  <span className="text-[11px] font-mono text-brand-muted">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-brand-muted mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="space-y-3 pt-3 border-t border-brand-border text-xs">
                  <div>
                    <span className="font-semibold text-brand-text block mb-0.5">Problem Explored:</span>
                    <p className="text-brand-muted leading-relaxed line-clamp-2">
                      {project.problemExplored}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-text block mb-0.5">Proposed Solution:</span>
                    <p className="text-brand-muted leading-relaxed line-clamp-2">
                      {project.proposedSolution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono bg-brand-elevated text-brand-cyan px-2 py-0.5 rounded border border-brand-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-brand-border">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:underline transition-colors group/link"
                >
                  <span>Explore Concept Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-xl bg-brand-card border border-brand-border max-w-2xl mx-auto text-center text-xs text-brand-muted shadow-sm">
          <p>
            <strong className="text-brand-text">Transparency Note:</strong> All showcase pieces above are
            unaffiliated concept prototypes engineered by Zunova Tech to demonstrate architectural
            patterns and problem-solving approaches. We do not invent client results or claim
            unauthorized client work.
          </p>
        </div>
      </div>
    </section>
  );
}
