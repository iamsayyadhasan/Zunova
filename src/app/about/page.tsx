import React from "react";
import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { coreValues } from "@/data/principles";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us & Engineering Philosophy",
  description:
    "Learn about Zunova Tech: our mission, working principles, service-first model, and approach to building practical digital solutions.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl space-y-4 mb-16 sm:mb-20">
          <Logo variant="compact" size="lg" className="mb-2" />
          <Badge variant="cyan" size="sm">
            About Zunova Tech
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
            Technology that moves{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-accent bg-clip-text text-transparent">
              business forward.
            </span>
          </h1>
          <p className="text-lg text-brand-muted leading-relaxed">
            {siteConfig.positioning}
          </p>
        </div>

        {/* Narrative Section: Who We Are & Our Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-brand-muted text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight">
              A Service-First Engineering Partner
            </h2>

            <p>
              Zunova Tech was founded on a straightforward observation: businesses often spend too much time fighting rigid software tools, wrestling with disconnected spreadsheets, and paying recurring subscriptions for features they never touch.
            </p>

            <p>
              We approach technical development from the ground up. By starting with client-based technical services, we immerse ourselves in real operational problems—working directly with business owners, operational teams, and startup founders.
            </p>

            <p className="text-brand-text font-medium border-l-2 border-brand-cyan pl-4 py-1 italic">
              &ldquo;Technology should make work clearer, not harder.&rdquo;
            </p>

            <p>
              As we solve recurring friction across operations, reporting, and systems integrations, our long-term vision is to distill these practical solutions into focused software tools and SaaS products based on validated real-world demand.
            </p>
          </div>

          {/* Right Summary Card: Strategic Blueprint */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-border bg-brand-card p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand-text border-b border-brand-border pb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-cyan" />
                <span>Our Strategic Roadmap</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-brand-elevated border border-brand-border">
                  <div className="text-brand-cyan font-mono font-semibold text-xs mb-1">
                    PHASE 1: CLIENT TECHNICAL SERVICES
                  </div>
                  <p className="text-brand-muted leading-relaxed">
                    Build bespoke tools, business dashboards, automations, and mobile apps that resolve core operational bottlenecks for businesses and startups.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-elevated border border-brand-border">
                  <div className="text-brand-cyan font-mono font-semibold text-xs mb-1">
                    PHASE 2: PATTERN IDENTIFICATION
                  </div>
                  <p className="text-brand-muted leading-relaxed">
                    Identify recurring cross-industry workflows, API failure patterns, and reporting needs that require standardized solutions.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-elevated border border-brand-border">
                  <div className="text-brand-text font-mono font-semibold text-xs mb-1">
                    PHASE 3: VALIDATED SAAS PRODUCTS
                  </div>
                  <p className="text-brand-muted leading-relaxed">
                    Develop and release purpose-built SaaS tools backed by validated customer demand and field-tested architectural foundations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Principles Grid */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <Badge variant="accent" size="sm" className="mb-2">
              Our Foundations
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
              What Guides Every Engineering Decision
            </h2>
            <p className="text-sm text-brand-muted mt-2">
              We hold ourselves to disciplined technical and communication standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((val) => (
              <Card key={val.number} variant="interactive" className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-brand-cyan font-mono text-xs mb-2">
                  <span>PRINCIPLE {val.number}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">{val.title}</h3>
                <p className="text-sm font-medium text-brand-cyan mb-3">{val.summary}</p>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{val.detail}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Who We Work With */}
        <div className="mb-20 rounded-2xl border border-brand-border bg-brand-card p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-6">
            Who We Partner With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-brand-elevated border border-brand-border">
              <h3 className="text-base font-bold text-brand-text mb-2">Small & Medium Businesses</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Companies needing to replace chaotic spreadsheet operations with centralized dashboards and automated workflows.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-elevated border border-brand-border">
              <h3 className="text-base font-bold text-brand-text mb-2">Startup Founders</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Founders who need a disciplined, production-ready MVP built quickly without building up crippling technical debt.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-elevated border border-brand-border">
              <h3 className="text-base font-bold text-brand-text mb-2">Technology Teams</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Engineering groups that require dedicated assistance on internal admin panels, API integrations, or background workers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-elevated border border-brand-border">
              <h3 className="text-base font-bold text-brand-text mb-2">Operations Leaders</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Managers seeking to connect isolated SaaS tools into automated, error-monitored pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Action */}
        <div className="rounded-2xl border border-brand-border bg-brand-card p-8 sm:p-12 text-center shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-3">
            Interested in working together?
          </h2>
          <p className="text-sm text-brand-muted max-w-xl mx-auto mb-6">
            We provide upfront, honest technical scoping before any work begins.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
}
