import React from "react";
import { BadgeProps } from "@/types";

export function Badge({
  children,
  variant = "accent",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1 font-mono tracking-tight",
    md: "text-xs px-3 py-1 gap-1.5 font-medium",
  };

  const variantStyles = {
    accent: "bg-[#1A2842]/20 text-brand-text border border-[#1A2842]/50",
    cyan: "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/25",
    muted: "bg-brand-elevated text-brand-muted border border-brand-border",
    concept: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30 font-mono uppercase tracking-wider text-[10px]",
    border: "bg-transparent text-brand-text border border-brand-border",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
