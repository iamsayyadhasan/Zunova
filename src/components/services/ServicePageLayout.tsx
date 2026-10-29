import React from "react";
import Link from "next/link";
import { ArrowRight, Check, AlertCircle, Sparkles, Layers, ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ServiceItem } from "@/types/services";
import { servicesData } from "@/data/services";

interface ServicePageLayoutProps {
  service: ServiceItem;
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const otherServices = servicesData.filter((s) => s.id !== service.id);

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-muted hover:text-brand-cyan transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="max-w-4xl space-y-6">
          <Badge variant="cyan" size="sm">
            Core Service Specialization
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-xl font-medium text-brand-cyan">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            {service.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Button href="/contact" size="lg" variant="primary">
              Discuss a {service.shortTitle} Project
            </Button>
            <Button href="/work" size="lg" variant="secondary">
              View Related Concepts
            </Button>
          </div>
        </div>

        {/* Split Section: When It Makes Sense & Problems Solved */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-brand-border bg-brand-card p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-brand-cyan" />
              <h2 className="text-xl font-bold text-brand-text">When This Makes Sense</h2>
            </div>
            <p className="text-xs text-brand-muted mb-6">
              Signs your business has outgrown manual workarounds or generic SaaS templates:
            </p>
            <ul className="space-y-3.5">
              {service.whenItMakesSense.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-brand-text/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-card p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold text-brand-text">Common Problems Solved</h2>
            </div>
            <p className="text-xs text-brand-muted mb-6">
              Specific friction points we engineer out of your business operations:
            </p>
            <ul className="space-y-3.5">
              {service.problemsSolved.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-brand-text/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="mt-16 lg:mt-24">
          <div className="max-w-2xl mb-8">
            <Badge variant="accent" size="sm" className="mb-2">
              Tangible Outcomes
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
              Typical Deliverables & Assets
            </h2>
            <p className="text-sm text-brand-muted mt-2">
              Everything built is documented, tested, and handed over with full source code ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-brand-elevated border border-brand-border flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
                <span className="text-sm font-medium text-brand-text leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Process Steps */}
        <div className="mt-16 lg:mt-24">
          <div className="max-w-2xl mb-8">
            <Badge variant="cyan" size="sm" className="mb-2">
              Implementation Timeline
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
              Discovery-to-Launch Lifecycle
            </h2>
            <p className="text-sm text-brand-muted mt-2">
              How we take your requirements from initial audit to production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <Card key={step.step} variant="default" className="p-6">
                <span className="text-2xl font-bold font-mono text-brand-cyan/50 mb-2 block">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-brand-text mb-2">{step.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Architectural Standards */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-elevated border border-brand-border">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-brand-cyan" />
            <h3 className="text-lg font-bold text-brand-text">Technical & Architectural Standards</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-brand-text">
            {service.technicalHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-brand-card p-3 rounded-lg border border-brand-border">
                <span className="text-brand-cyan font-bold">›</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service FAQs (if present) */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mt-16">
            <div className="max-w-2xl mb-8">
              <Badge variant="muted" size="sm" className="mb-2">
                Common Inquiries
              </Badge>
              <h2 className="text-2xl font-bold text-brand-text">
                {service.shortTitle} Questions & Considerations
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-brand-card border border-brand-border">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-brand-text mb-2">{faq.question}</h3>
                      <p className="text-sm text-brand-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Services Navigation */}
        <div className="mt-20 pt-12 border-t border-brand-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-6">
            Other Technical Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.slug}`}
                className="p-4 rounded-xl bg-brand-card border border-brand-border hover:border-[#1A2842] group transition-colors"
              >
                <div className="text-xs text-brand-cyan font-mono mb-1">{other.shortTitle}</div>
                <div className="text-sm font-bold text-brand-text group-hover:text-brand-cyan transition-colors flex items-center justify-between">
                  <span className="line-clamp-1">{other.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Closing Action */}
        <div className="mt-16 text-center rounded-2xl bg-brand-card border border-brand-border p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-3">
            Ready to explore a {service.shortTitle.toLowerCase()} solution?
          </h2>
          <p className="text-sm text-brand-muted max-w-xl mx-auto mb-6">
            Schedule an introductory consultation. We will discuss your current process, examine technical viability, and provide a clear, written proposal.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Request Technical Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
