import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Code2, LayoutDashboard, Workflow, Rocket, Smartphone, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Technical Services & Solutions",
  description:
    "Explore Zunova Tech's core services: Custom Software, Business Dashboards, Workflow Automation, MVP Development, and Mobile Applications (Android & iOS).",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-brand-cyan" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-brand-cyan" />,
    Workflow: <Workflow className="w-6 h-6 text-brand-cyan" />,
    Rocket: <Rocket className="w-6 h-6 text-brand-cyan" />,
    Smartphone: <Smartphone className="w-6 h-6 text-brand-cyan" />,
  };

  return (
    <div className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <Badge variant="cyan" size="sm">
            Core Service Offerings
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text tracking-tight">
            Engineering tailored to{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-accent bg-clip-text text-transparent">
              operational reality
            </span>
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            We build practical, reliable digital products, cloud backends, and mobile apps (Android & iOS) that help businesses, startups, and operational teams run smarter.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-12">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              id={service.slug}
              className="rounded-2xl border border-brand-border bg-brand-card p-6 sm:p-10 transition-all hover:border-[#1A2842] shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0">
                      {iconMap[service.iconName] || <Code2 className="w-6 h-6 text-brand-cyan" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                        0{idx + 1} &bull; Specialization
                      </span>
                      <h2 className="text-2xl font-bold text-brand-text">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-brand-cyan">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <Button
                      href={`/services/${service.slug}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Deep Dive & Deliverables
                    </Button>
                  </div>
                </div>

                {/* Right Details Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-brand-elevated p-5 sm:p-6 rounded-xl border border-brand-border">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-brand-cyan mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>When It Makes Sense</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-brand-text/90">
                      {service.whenItMakesSense.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-brand-cyan mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Core Deliverables</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-brand-text/90">
                      {service.deliverables.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-20 rounded-2xl border border-brand-border bg-brand-card p-8 sm:p-12 text-center shadow-sm">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
              Transparent, Direct Collaboration
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              We operate without intermediate account managers or generic outsourcing layers. When you collaborate with Zunova Tech, you work directly with technical problem solvers focused on your business constraints.
            </p>
            <div className="pt-4">
              <Button href="/contact" size="lg" variant="primary">
                Discuss Your Technical Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
