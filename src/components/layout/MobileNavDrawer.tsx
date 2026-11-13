"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NavLinkChild } from "@/types/siteConfig";

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  services: NavLinkChild[];
  serviceIcons?: Record<string, React.ReactNode>;
}

export function MobileNavDrawer({
  isOpen,
  onClose,
  pathname,
  services,
  serviceIcons = {},
}: MobileNavDrawerProps) {
  const [servicesExpanded, setServicesExpanded] = useState(() => pathname.startsWith("/services"));

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setServicesExpanded(true);
    }
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-x-0 top-16 sm:top-20 bottom-0 h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] z-40 md:hidden bg-brand-bg/98 backdrop-blur-xl border-t border-brand-border overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top-2 duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="flex flex-col min-h-full justify-between p-4 sm:p-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col space-y-1.5 pt-1">
          <Link
            href="/"
            onClick={onClose}
            className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 active:scale-[0.99] min-h-[44px] ${
              pathname === "/"
                ? "bg-brand-elevated text-brand-cyan font-semibold"
                : "text-brand-text hover:bg-brand-elevated"
            }`}
          >
            Home
          </Link>

          <div className="border-t border-b border-brand-border py-2 my-1">
            <button
              type="button"
              onClick={() => setServicesExpanded((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium text-brand-text hover:bg-brand-elevated transition-colors min-h-[44px]"
              aria-expanded={servicesExpanded}
            >
              <div className="flex items-center gap-2">
                <span className={pathname.startsWith("/services") ? "text-brand-cyan font-semibold" : ""}>
                  Services
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-brand-elevated text-brand-muted border border-brand-border">
                  {services.length}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-brand-muted transition-transform duration-200 ${
                  servicesExpanded ? "rotate-180 text-brand-cyan" : ""
                }`}
              />
            </button>

            {servicesExpanded && (
              <div className="space-y-1 mt-1 pl-2 animate-in fade-in slide-in-from-top-1 duration-150">
                <Link
                  href="/services"
                  onClick={onClose}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 min-h-[44px] ${
                    pathname === "/services"
                      ? "bg-brand-elevated text-brand-cyan font-semibold"
                      : "text-brand-cyan hover:bg-brand-elevated"
                  }`}
                >
                  <span>All Services Overview</span>
                  <ArrowRight className="w-4 h-4 text-brand-cyan" />
                </Link>

                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 min-h-[44px] active:scale-[0.99] ${
                      pathname === item.href
                        ? "bg-brand-elevated text-brand-cyan font-semibold"
                        : "text-brand-muted hover:text-brand-text hover:bg-brand-elevated"
                    }`}
                  >
                    <div className="p-1 rounded-md bg-brand-card border border-brand-border text-brand-cyan shrink-0">
                      {serviceIcons[item.name] || <Code2 className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="truncate font-medium">{item.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/work"
            onClick={onClose}
            className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 active:scale-[0.99] min-h-[44px] ${
              pathname === "/work"
                ? "bg-brand-elevated text-brand-cyan font-semibold"
                : "text-brand-text hover:bg-brand-elevated"
            }`}
          >
            Work
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 active:scale-[0.99] min-h-[44px] ${
              pathname === "/about"
                ? "bg-brand-elevated text-brand-cyan font-semibold"
                : "text-brand-text hover:bg-brand-elevated"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 active:scale-[0.99] min-h-[44px] ${
              pathname === "/contact"
                ? "bg-brand-elevated text-brand-cyan font-semibold"
                : "text-brand-text hover:bg-brand-elevated"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="pt-6 pb-2 border-t border-brand-border mt-4">
          <Button
            href="/contact"
            size="lg"
            variant="primary"
            className="w-full justify-center shadow-lg shadow-cyan-500/10"
            onClick={onClose}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
