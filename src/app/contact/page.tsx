import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Logo } from "@/components/ui/Logo";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us & Project Inquiry",
  description:
    "Discuss your technical project with Zunova Tech. Submit an inquiry for custom software, business dashboards, workflow automation, or mobile app engineering.",
};

export default function ContactPage() {
  const whatsappHref = siteConfig.socials.whatsapp.number
    ? `https://wa.me/${siteConfig.socials.whatsapp.number.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        siteConfig.socials.whatsapp.defaultMessage
      )}`
    : null;

  return (
    <div className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Expectations */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Badge variant="cyan" size="sm">
                Initiate Project Discussion
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
                Let&apos;s talk about your{" "}
                <span className="bg-gradient-to-r from-brand-cyan to-brand-accent bg-clip-text text-transparent">
                  operational goals
                </span>
              </h1>
              <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                Tell us what your business is trying to improve. Whether you need to replace clumsy manual workflows, engineer a dashboard, or build web/mobile applications, we provide direct technical assessment without pushy sales pressure.
              </p>
            </div>

            {/* Direct Details Box */}
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-4 shadow-sm">
              <Logo variant="compact" size="sm" className="mb-1" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-text">
                Direct Contact Channels
              </h2>

              <div className="flex items-center gap-3 text-sm text-brand-text">
                <div className="w-8 h-8 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-center text-brand-cyan shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-brand-muted block">Direct Technical Inbox</span>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="font-mono text-brand-cyan hover:underline text-xs sm:text-sm"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              {whatsappHref && (
                <div className="flex items-center gap-3 text-sm text-brand-text pt-2 border-t border-brand-border">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-muted block">WhatsApp Direct</span>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-emerald-600 dark:text-emerald-400 hover:underline text-xs sm:text-sm"
                    >
                      {siteConfig.socials.whatsapp.displayNumber || "Open WhatsApp Chat"}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 text-sm text-brand-text pt-2 border-t border-brand-border">
                <div className="w-8 h-8 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-center text-brand-cyan shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-brand-muted block">Response Cadence</span>
                  <span className="text-xs text-brand-muted">
                    Typically within 1–2 business days with initial technical feedback.
                  </span>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-text">
                What to Expect Next
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 text-brand-muted">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>We review your requirements and identify potential architectural routes.</span>
                </div>
                <div className="flex items-start gap-2.5 text-brand-muted">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>We schedule a direct, technical discovery call with no salespeople.</span>
                </div>
                <div className="flex items-start gap-2.5 text-brand-muted">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>You receive a concise, written scope proposal with defined milestones.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
