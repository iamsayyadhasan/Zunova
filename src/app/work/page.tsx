import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { WorkPortfolio } from "@/components/work/WorkPortfolio";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Work & Concept Prototypes",
  description:
    "Explore Zunova Tech's technical prototypes, concept architectures, and internal tooling blueprints designed for business operations and workflow automation.",
};

export default function WorkPage() {
  return (
    <div className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <Badge variant="cyan" size="sm">
            Selected Concepts & Prototypes
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text tracking-tight">
            Architectural blueprints built for{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-accent bg-clip-text text-transparent">
              real operational challenges
            </span>
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            We build focused prototypes to test architectural patterns, validate operational workflows, and showcase how custom software streamlines complex business logic.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-elevated border border-brand-border text-xs text-brand-muted">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>
              All showcase pieces below are unaffiliated concept prototypes engineered by Zunova Tech.
            </span>
          </div>
        </div>

        {/* Portfolio Showcase */}
        <WorkPortfolio />

        {/* Project Call to Action */}
        <div className="mt-20 rounded-2xl border border-brand-border bg-brand-card p-8 sm:p-12 text-center shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-3">
            Have a custom operational requirement?
          </h2>
          <p className="text-sm text-brand-muted max-w-xl mx-auto mb-6">
            We can design a tailored prototype or production roadmap suited to your exact business constraints and data sources.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Request an Architecture Review
          </Button>
        </div>
      </div>
    </div>
  );
}
