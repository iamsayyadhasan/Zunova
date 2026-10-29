import React from "react";
import Link from "next/link";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappHref = siteConfig.socials.whatsapp.number
    ? `https://wa.me/${siteConfig.socials.whatsapp.number.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        siteConfig.socials.whatsapp.defaultMessage
      )}`
    : null;

  return (
    <footer className="bg-brand-card border-t border-brand-border text-brand-muted text-sm mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="compact" size="lg" />

            <div className="pt-2">
              <p className="text-brand-text font-semibold text-sm">
                {siteConfig.tagline}
              </p>
              <p className="text-xs text-brand-muted max-w-md leading-relaxed mt-1.5">
                Zunova Tech helps businesses and startups build practical software, web applications, business dashboards, workflow automations, and mobile solutions.
              </p>
            </div>

            {/* Direct Inquiries & WhatsApp */}
            <div className="pt-3 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-brand-cyan">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:underline">
                  {siteConfig.contactEmail}
                </a>
              </div>

              {whatsappHref && (
                <div className="flex items-center gap-2 text-emerald-500">
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp: {siteConfig.socials.whatsapp.displayNumber || "Direct Business Channel"}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-text mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services/custom-software" className="hover:text-brand-cyan transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/business-dashboards" className="hover:text-brand-cyan transition-colors">
                  Business Dashboards & Admin Panels
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-automation" className="hover:text-brand-cyan transition-colors">
                  Workflow Automation & Integrations
                </Link>
              </li>
              <li>
                <Link href="/services/mvp-development" className="hover:text-brand-cyan transition-colors">
                  MVP & Startup Product Development
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software" className="hover:text-brand-cyan transition-colors">
                  Website & Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-brand-cyan transition-colors font-medium text-brand-cyan">
                  Android & iOS Application Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-text mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors">
                  About Zunova
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-brand-cyan transition-colors">
                  Work / Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-cyan transition-colors text-xs text-brand-cyan inline-flex items-center gap-1 pt-1">
                  <span>All Services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social Profiles (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-text mb-4">
              Connect
            </h3>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-brand-text font-medium block">Instagram</span>
                {siteConfig.socials.instagram.isConfirmed && siteConfig.socials.instagram.url ? (
                  <a
                    href={siteConfig.socials.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-cyan hover:underline font-mono"
                  >
                    {siteConfig.socials.instagram.handle}
                  </a>
                ) : (
                  <span className="text-brand-muted/70 font-mono text-[11px]">
                    {siteConfig.socials.instagram.handle} (Pending setup)
                  </span>
                )}
              </div>

              <div>
                <span className="text-brand-text font-medium block">LinkedIn</span>
                {siteConfig.socials.linkedin.isConfirmed && siteConfig.socials.linkedin.url ? (
                  <a
                    href={siteConfig.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-cyan hover:underline font-mono"
                  >
                    Zunova Tech
                  </a>
                ) : (
                  <span className="text-brand-muted/70 font-mono text-[11px]">
                    Zunova Tech (Pending setup)
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Zunova Tech. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-cyan transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
