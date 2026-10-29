import React from "react";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PhilosophySection() {
  return (
    <section className="py-20 lg:py-28 relative bg-brand-bg border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Philosophy Statement */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="cyan" size="sm">
              Our Guiding Philosophy
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
              Technology should make work{" "}
              <span className="bg-gradient-to-r from-brand-cyan to-brand-accent bg-clip-text text-transparent">
                clearer, not harder.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Too much software is bloated with features teams never touch, surrounded by clunky manual
              spreadsheets, and encumbered by steep monthly per-seat licensing.
            </p>

            <p className="text-base text-brand-muted leading-relaxed">
              At Zunova Tech, we reject unnecessary complexity. We focus on mapping your operational reality,
              identifying the exact bottlenecks costing your team time, and engineering software that fits
              how your people naturally work.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline transition-colors"
              >
                <span>Read more about our approach & roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Grounded Commitments */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-border bg-brand-card p-6 sm:p-8 space-y-5 shadow-sm">
              <h3 className="text-lg font-bold text-brand-text border-b border-brand-border pb-3">
                How We Operate
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-text block">Workflow-First Analysis</strong>
                    <span className="text-brand-muted text-xs leading-relaxed">
                      We study your existing daily inputs, handoffs, and customer touchpoints before recommending any code.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-text block">Honest Technical Sizing</strong>
                    <span className="text-brand-muted text-xs leading-relaxed">
                      If an existing tool or simple automation solves your problem faster and cheaper, we say so upfront.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-text block">Clear Handover & Code Ownership</strong>
                    <span className="text-brand-muted text-xs leading-relaxed">
                      You retain 100% intellectual property, clean repositories, and documented deployment scripts.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
