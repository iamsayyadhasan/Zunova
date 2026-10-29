import React from "react";
import { CardProps } from "@/types";

export function Card({
  children,
  variant = "default",
  className = "",
  glow = false,
  ...props
}: CardProps) {
  const baseStyles =
    "relative rounded-xl border transition-all duration-300";

  const variantStyles = {
    default: "bg-brand-card border-brand-border text-brand-text shadow-sm",
    elevated: "bg-brand-elevated border-brand-border text-brand-text shadow-md",
    interactive:
      "bg-brand-card border-brand-border text-brand-text hover:border-[#1A2842] hover:bg-brand-elevated hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-[0.99]",
    subtle: "bg-brand-card/70 border-brand-border text-brand-text backdrop-blur-sm",
  };

  const glowStyle = glow
    ? "before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-b before:from-brand-cyan/20 before:to-transparent before:pointer-events-none before:-z-10"
    : "";

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${glowStyle} ${className}`} {...props}>
      {children}
    </div>
  );
}
