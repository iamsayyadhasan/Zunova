"use client";

import React from "react";
import Link from "next/link";
import { Send, AlertTriangle, ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactFormSuccess } from "@/components/contact/ContactFormSuccess";
import { siteConfig } from "@/data/siteConfig";

export function ContactForm() {
  const { formData, errors, isSubmitting, status, handleChange, handleSubmit, resetStatus } =
    useContactForm();

  const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.service || "General"}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.fullName}\nCompany: ${formData.company}\nService: ${formData.service}\n\nProject Overview:\n${formData.description}`
  );
  const fallbackMailto = `mailto:${siteConfig.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="rounded-2xl border border-brand-border bg-brand-card p-6 sm:p-10 shadow-sm">
      {status.type === "success" ? (
        <ContactFormSuccess status={status} onReset={resetStatus} />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_honeypot">Leave empty</label>
            <input
              type="text"
              id="website_honeypot"
              name="website_honeypot"
              value={formData.website_honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status.type === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-300 text-xs sm:text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
              <div>
                <p className="font-semibold">Submission Error</p>
                <p className="mt-0.5">{status.message}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-brand-text mb-2">
                Full Name <span className="text-brand-cyan">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={`w-full px-4 py-3 rounded-lg bg-brand-elevated border text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none transition-colors ${
                  errors.fullName ? "border-red-500 focus:border-red-500" : "border-brand-border focus:border-brand-cyan"
                }`}
                aria-invalid={Boolean(errors.fullName)}
                required
              />
              {errors.fullName && <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-brand-text mb-2">
                Business Email <span className="text-brand-cyan">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={`w-full px-4 py-3 rounded-lg bg-brand-elevated border text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none transition-colors ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-brand-border focus:border-brand-cyan"
                }`}
                aria-invalid={Boolean(errors.email)}
                required
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-brand-text mb-2">
                Company / Organization <span className="text-brand-muted font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc."
                className="w-full px-4 py-3 rounded-lg bg-brand-elevated border border-brand-border text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-cyan transition-colors"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-brand-text mb-2">
                Service Required <span className="text-brand-cyan">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-brand-elevated border text-sm text-brand-text focus:outline-none transition-colors ${
                  errors.service ? "border-red-500 focus:border-red-500" : "border-brand-border focus:border-brand-cyan"
                }`}
                aria-invalid={Boolean(errors.service)}
                required
              >
                <option value="" disabled>Select a category...</option>
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="Business Dashboards">Business Dashboards & Admin Panels</option>
                <option value="Workflow Automation">Workflow Automation & Integrations</option>
                <option value="MVP & Web Applications">Web Applications & MVP Development</option>
                <option value="Mobile Application Development">Mobile Application Development (Android & iOS)</option>
                <option value="Technical Consulting">Technical Consulting / Architecture Review</option>
              </select>
              {errors.service && <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs font-semibold text-brand-text mb-2">
              Estimated Budget Range <span className="text-brand-muted font-normal">(Optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-brand-elevated border border-brand-border text-sm text-brand-text focus:outline-none focus:border-brand-cyan transition-colors"
            >
              <option value="">Select budget tier (if defined)...</option>
              <option value="Under $5,000">Under $5,000 (Targeted automation / MVP audit)</option>
              <option value="$5,000 - $15,000">$5,000 – $15,000 (Internal tool / Business dashboard)</option>
              <option value="$15,000 - $35,000">$15,000 – $35,000 (Custom application / Mobile MVP)</option>
              <option value="$35,000+">$35,000+ (Multi-system integration / Full platform)</option>
              <option value="Flexible">Flexible / Dependent on discovery scope</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-xs font-semibold text-brand-text mb-2">
              Project Description & Goals <span className="text-brand-cyan">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us what problem your team is facing, your current tools or spreadsheets, and what a successful solution looks like..."
              className={`w-full px-4 py-3 rounded-lg bg-brand-elevated border text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none transition-colors ${
                errors.description ? "border-red-500 focus:border-red-500" : "border-brand-border focus:border-brand-cyan"
              }`}
              aria-invalid={Boolean(errors.description)}
              required
            />
            {errors.description && <p className="mt-1.5 text-xs text-red-500">{errors.description}</p>}
          </div>

          <div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacyConsent"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-brand-border bg-brand-elevated text-brand-cyan focus:ring-brand-cyan cursor-pointer"
                required
              />
              <label htmlFor="privacyConsent" className="text-xs text-brand-muted leading-relaxed cursor-pointer">
                I understand that the information submitted will be used solely to respond to this project inquiry in accordance with the{" "}
                <Link href="/privacy" className="text-brand-cyan underline hover:text-brand-text">
                  Privacy Policy starter notice
                </Link>
                . <span className="text-brand-cyan">*</span>
              </label>
            </div>
            {errors.privacyConsent && <p className="mt-1.5 text-xs text-red-500 pl-7">{errors.privacyConsent}</p>}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              icon={isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? "Submitting Inquiry..." : "Submit Project Inquiry"}
            </Button>

            <a
              href={fallbackMailto}
              className="text-xs text-brand-muted hover:text-brand-cyan transition-colors flex items-center justify-center gap-1.5 text-center"
            >
              <span>Or email directly via your mail client</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
