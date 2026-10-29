"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Code2, LayoutDashboard, Workflow, Rocket, Smartphone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";
import { siteConfig } from "@/data/siteConfig";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "Custom Software Development": <Code2 className="w-4 h-4 text-brand-cyan" />,
  "Business Dashboards & Admin Panels": <LayoutDashboard className="w-4 h-4 text-brand-cyan" />,
  "Workflow Automation & Integrations": <Workflow className="w-4 h-4 text-brand-cyan" />,
  "MVP & Startup Product Development": <Rocket className="w-4 h-4 text-brand-cyan" />,
  "Mobile Application Development": <Smartphone className="w-4 h-4 text-brand-cyan" />,
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const services = siteConfig.navLinks.find((l) => l.name === "Services")?.children || [];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "bg-brand-bg/95 backdrop-blur-md border-brand-border shadow-md py-0"
          : "bg-brand-bg/85 backdrop-blur-sm border-brand-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 transition-all duration-300">
          <div className="flex-shrink-0">
            <Logo variant="compact" size="md" priority />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            <Link
              href="/"
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group ${
                pathname === "/" ? "text-brand-cyan font-semibold" : "text-brand-muted hover:text-brand-text hover:bg-brand-elevated/70"
              }`}
            >
              <span>Home</span>
              {pathname === "/" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-accent rounded-full" />
              )}
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={(e) => { if (e.key === "Escape") setServicesOpen(false); }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname.startsWith("/services") ? "text-brand-cyan font-semibold" : "text-brand-muted hover:text-brand-text hover:bg-brand-elevated/70"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-brand-cyan" : ""}`} />
                {pathname.startsWith("/services") && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-accent rounded-full" />
                )}
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-80 rounded-xl bg-brand-elevated border border-brand-border shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150 origin-top-left"
                  role="menu"
                >
                  <div className="px-3 py-2 border-b border-brand-border mb-1">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs font-semibold text-brand-cyan hover:underline flex items-center justify-between group"
                    >
                      <span>All Services Overview</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-brand-card transition-all duration-150 active:scale-[0.99]"
                      role="menuitem"
                    >
                      <div className="mt-0.5 p-1.5 rounded-md bg-brand-card border border-brand-border group-hover:border-brand-cyan/40 group-hover:bg-brand-elevated transition-colors">
                        {SERVICE_ICONS[item.name] || <Code2 className="w-4 h-4 text-brand-cyan" />}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-brand-text group-hover:text-brand-cyan transition-colors">
                          {item.name}
                        </div>
                        <p className="text-xs text-brand-muted line-clamp-1 mt-0.5">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/work"
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group ${
                pathname === "/work" ? "text-brand-cyan font-semibold" : "text-brand-muted hover:text-brand-text hover:bg-brand-elevated/70"
              }`}
            >
              <span>Work</span>
              {pathname === "/work" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-accent rounded-full" />
              )}
            </Link>

            <Link
              href="/about"
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group ${
                pathname === "/about" ? "text-brand-cyan font-semibold" : "text-brand-muted hover:text-brand-text hover:bg-brand-elevated/70"
              }`}
            >
              <span>About</span>
              {pathname === "/about" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-accent rounded-full" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group ${
                pathname === "/contact" ? "text-brand-cyan font-semibold" : "text-brand-muted hover:text-brand-text hover:bg-brand-elevated/70"
              }`}
            >
              <span>Contact</span>
              {pathname === "/contact" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-accent rounded-full" />
              )}
            </Link>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button href="/contact" size="sm" variant="primary">
              Discuss Your Project
            </Button>
          </div>

          {/* Mobile Right */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-muted hover:text-brand-text hover:bg-brand-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan active:scale-95 transition-all duration-150"
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileNavDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pathname={pathname}
        services={services}
      />
    </header>
  );
}
