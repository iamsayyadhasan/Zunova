import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service (Starter Template)",
  description:
    "Terms of Service starter template for Zunova Tech, governing website usage, concept prototypes, and professional service inquiries.",
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <Badge variant="cyan" size="sm" className="mb-3">
            Starter Legal Template
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-brand-muted mt-2 font-mono">
            Document Version: 1.0 (Starter Draft)
          </p>
        </div>

        {/* Legal Starter Notice */}
        <div className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5 text-xs sm:text-sm text-amber-800 dark:text-amber-200">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-amber-700 dark:text-amber-300 block">Starter Template Notice:</strong>
            <p className="leading-relaxed">
              This document is a starter template provided for development and baseline terms disclosure. It describes general terms for website browsing and inquiry submissions. Definitive terms for custom software development, milestone payments, code ownership, warranties, and service level agreements (SLAs) are governed exclusively by formal bilateral Master Services Agreements (MSAs) or Statements of Work (SOWs) executed between Zunova Tech and the respective client.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-sm text-brand-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website operated by Zunova Tech, you agree to comply with and be bound by these baseline terms. If you do not agree with any part of these terms, you should refrain from using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">2. Concept Prototypes & Architectural Demos</h2>
            <p>
              Projects displayed on this website labeled as &ldquo;Concept Project&rdquo; or &ldquo;Demo Project&rdquo; are technical architectural demonstrations developed independently by Zunova Tech to illustrate engineering capabilities. They do not constitute endorsements by or formal relationships with any unaffiliated trademarks or entities referenced for conceptual illustration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">3. Intellectual Property</h2>
            <p>
              All original visual assets, brand marks, written content, and code layouts present on this public website are the intellectual property of Zunova Tech. In contracted client engagements, intellectual property ownership of bespoke software deliverables is explicitly transferred to the client upon full milestone settlement, as detailed in our formal project agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">4. Disclaimer of Warranties</h2>
            <p>
              This website and its informational contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied. Zunova Tech does not guarantee that the site will operate uninterrupted or free of transient errors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">5. Governing Agreements for Client Work</h2>
            <p>
              All technical consulting, custom development, dashboard engineering, automation, and mobile application services are provided strictly under mutually signed Statements of Work that supersede website content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">6. Inquiries</h2>
            <p>
              For legal questions, formal master service inquiries, or terms clarification, please write to:
            </p>
            <div className="p-4 rounded-lg bg-brand-card border border-brand-border text-xs font-mono text-brand-cyan">
              {siteConfig.contactEmail}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
