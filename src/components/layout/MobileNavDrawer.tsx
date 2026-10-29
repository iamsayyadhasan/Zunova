"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { NavLinkChild } from "@/types/siteConfig";

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  services: NavLinkChild[];
}

export function MobileNavDrawer({
  isOpen,
  onClose,
  pathname,
  services,
}: MobileNavDrawerProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 top-16 bg-brand-bg/95 backdrop-blur-md z-40 md:hidden flex flex-col justify-between p-4 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="flex flex-col space-y-2 pt-2">
        <Link
          href="/"
          onClick={onClose}
          className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 active:scale-[0.99] ${
            pathname === "/" ? "bg-brand-elevated text-brand-cyan" : "text-brand-text hover:bg-brand-elevated"
          }`}
        >
          Home
        </Link>

        <div className="border-t border-b border-brand-border py-2">
          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-muted font-mono">
            Services
          </div>
          <Link
            href="/services"
            onClick={onClose}
            className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
              pathname === "/services" ? "text-brand-cyan font-semibold" : "text-brand-text hover:bg-brand-elevated"
            }`}
          >
            All Services Overview
          </Link>
          {services.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`block px-4 py-2 pl-6 rounded-lg text-sm transition-all duration-150 ${
                pathname === item.href ? "text-brand-cyan font-semibold" : "text-brand-muted hover:text-brand-text hover:bg-brand-elevated"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href="/work"
          onClick={onClose}
          className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 active:scale-[0.99] ${
            pathname === "/work" ? "bg-brand-elevated text-brand-cyan" : "text-brand-text hover:bg-brand-elevated"
          }`}
        >
          Work
        </Link>

        <Link
          href="/about"
          onClick={onClose}
          className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 active:scale-[0.99] ${
            pathname === "/about" ? "bg-brand-elevated text-brand-cyan" : "text-brand-text hover:bg-brand-elevated"
          }`}
        >
          About
        </Link>

        <Link
          href="/contact"
          onClick={onClose}
          className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 active:scale-[0.99] ${
            pathname === "/contact" ? "bg-brand-elevated text-brand-cyan" : "text-brand-text hover:bg-brand-elevated"
          }`}
        >
          Contact
        </Link>
      </div>

      <div className="pt-6 pb-6 border-t border-brand-border">
        <Button
          href="/contact"
          size="lg"
          variant="primary"
          className="w-full justify-center"
          onClick={onClose}
        >
          Discuss Your Project
        </Button>
      </div>
    </div>
  );
}
