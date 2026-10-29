import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy (Starter Notice)",
  description:
    "Privacy Policy starter template for Zunova Tech, explaining data handling principles for inquiries and digital services.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <Badge variant="cyan" size="sm" className="mb-3">
            Starter Policy Template
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            Privacy Policy
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
              This document is a starter template provided for development and baseline disclosure purposes. It outlines our operational approach to data handling. Prior to formal commercial deployment, this policy should be reviewed and customized with qualified legal counsel to ensure compliance with applicable regional privacy regulations (such as GDPR, CCPA, or local data protection frameworks).
            </p>
          </div>
        </div>

        <div className="space-y-8 text-sm text-brand-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">1. Overview</h2>
            <p>
              Zunova Tech (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the information you share with us. This policy explains what information is collected through our website, how it is used, and the choices available to you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">2. Information We Collect</h2>
            <p>
              We only collect information directly submitted by you through our project inquiry form or direct email communications:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-brand-text/90">
              <li>Contact details (such as your full name and business email address)</li>
              <li>Company or organization affiliation (if voluntarily provided)</li>
              <li>Project scope requirements, technical constraints, and estimated budgets</li>
              <li>Any additional context voluntarily included in project inquiries</li>
            </ul>
            <p>
              We do not utilize invasive third-party tracking pixels, cross-site advertising trackers, or sell inquiry records to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">3. How Information Is Used</h2>
            <p>Information submitted through our inquiry channels is strictly used to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-brand-text/90">
              <li>Review technical feasibility and formulate project proposals</li>
              <li>Communicate directly with you regarding your service requests</li>
              <li>Maintain internal business records related to ongoing consulting discussions</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">4. Data Retention & Security</h2>
            <p>
              We apply industry-standard security safeguards to protect project inquiries from unauthorized access, disclosure, or modification. Information is retained only as long as necessary to conduct project discovery or fulfill contracted services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text">5. Inquiries & Requests</h2>
            <p>
              If you have any questions regarding this starter privacy notice, or wish to request the deletion or correction of information you previously submitted, please contact us directly at:
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
