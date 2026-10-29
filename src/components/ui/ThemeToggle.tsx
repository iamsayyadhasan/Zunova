"use client";

import React, { useState, useRef, useEffect } from "react";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { ThemeMode } from "@/types/theme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options: Array<{ mode: ThemeMode; label: string; icon: React.ReactNode }> = [
    { mode: "light", label: "Light", icon: <Sun className="w-3.5 h-3.5" /> },
    { mode: "dark", label: "Dark", icon: <Moon className="w-3.5 h-3.5" /> },
    { mode: "system", label: "System", icon: <Monitor className="w-3.5 h-3.5" /> },
  ];

  const currentIcon =
    resolvedTheme === "dark" ? (
      <Moon className="w-4 h-4 text-brand-cyan transition-transform duration-300 group-hover:rotate-12" />
    ) : (
      <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 group-hover:rotate-45" />
    );

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
        aria-label={`Current theme: ${theme}. Click to change theme`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="group p-2 rounded-lg border border-brand-border bg-brand-elevated text-brand-text hover:border-[#1A2842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan transition-all duration-200 active:scale-95 flex items-center justify-center shadow-sm"
      >
        {currentIcon}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-36 rounded-xl bg-brand-elevated border border-brand-border shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 origin-top-right"
          role="menu"
          aria-orientation="vertical"
        >
          {options.map((opt) => {
            const isSelected = theme === opt.mode;
            return (
              <button
                key={opt.mode}
                type="button"
                onClick={() => {
                  setTheme(opt.mode);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 active:scale-[0.98] ${
                  isSelected
                    ? "bg-[#1A2842]/25 text-brand-cyan font-semibold"
                    : "text-brand-muted hover:text-brand-text hover:bg-brand-card"
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  <span>{opt.icon}</span>
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-cyan" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
