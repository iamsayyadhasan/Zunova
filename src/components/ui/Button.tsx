import React from "react";
import Link from "next/link";
import { ButtonProps } from "@/types";

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  icon,
  iconPosition = "right",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg select-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#1A2842] text-white hover:bg-[#243656] active:bg-[#131E33] shadow-[0_0_20px_rgba(26,40,66,0.35)] hover:shadow-[0_0_25px_rgba(26,40,66,0.55)] hover:-translate-y-0.5 border border-[#2E446B]/60",
    secondary:
      "bg-brand-elevated text-brand-text hover:bg-brand-card hover:border-[#1A2842] border border-brand-border shadow-sm hover:-translate-y-0.5",
    outline:
      "bg-transparent text-brand-cyan hover:bg-brand-cyan/10 border border-brand-cyan/40 hover:border-brand-cyan hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-brand-muted hover:text-brand-text hover:bg-brand-elevated",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${combinedClasses} group`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`${combinedClasses} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${combinedClasses} group`} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
