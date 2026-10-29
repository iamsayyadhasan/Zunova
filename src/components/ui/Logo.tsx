import React from "react";
import Link from "next/link";
import Image from "next/image";

export type LogoVariant = "compact" | "full" | "mark";
export type LogoSize = "sm" | "md" | "lg" | "xl";

export interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  size?: LogoSize;
  href?: string;
  priority?: boolean;
}

const DIMENSIONS: Record<LogoSize, { px: number; textSize: string; gap: string }> = {
  sm: { px: 32, textSize: "text-base", gap: "gap-2" },
  md: { px: 40, textSize: "text-lg", gap: "gap-2.5" },
  lg: { px: 56, textSize: "text-xl", gap: "gap-3" },
  xl: { px: 80, textSize: "text-2xl", gap: "gap-3.5" },
};

export function LogoMark({
  size = "md",
  className = "",
  priority = false,
}: {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}) {
  const { px } = DIMENSIONS[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-[#070B14] p-0.5 shadow-md shadow-cyan-500/10 border border-brand-cyan/30 ${className}`}
      style={{ width: px, height: px }}
    >
      <Image
        src="/images/brand/zunova-logo.png"
        alt="Zunova Tech official brand mark"
        width={px * 2}
        height={px * 2}
        priority={priority}
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
}

export function Logo({
  className = "",
  variant = "compact",
  size = "md",
  href = "/",
  priority = false,
}: LogoProps) {
  const { px, textSize, gap } = DIMENSIONS[size];

  // Full variant: standalone circular emblem with optional contained surface
  if (variant === "full") {
    const fullContent = (
      <div className={`inline-flex flex-col items-center group ${className}`}>
        <div
          className="relative rounded-full overflow-hidden bg-[#070B14] p-1 shadow-xl shadow-cyan-500/15 border border-brand-cyan/40 transition-transform duration-300 group-hover:scale-105"
          style={{ width: px * 1.5, height: px * 1.5 }}
        >
          <Image
            src="/images/brand/zunova-logo.png"
            alt="Zunova Tech official brand logo"
            width={px * 3}
            height={px * 3}
            priority={priority}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      </div>
    );

    if (href) {
      return (
        <Link href={href} aria-label="Zunova Tech Home" className="focus-visible:rounded-full">
          {fullContent}
        </Link>
      );
    }
    return fullContent;
  }

  // Mark-only variant
  if (variant === "mark") {
    const markContent = <LogoMark size={size} className={className} priority={priority} />;
    if (href) {
      return (
        <Link href={href} aria-label="Zunova Tech Home" className="focus-visible:rounded-full">
          {markContent}
        </Link>
      );
    }
    return markContent;
  }

  // Compact variant (default for Navbar): official circular badge + horizontal brand name
  const compactContent = (
    <span className={`inline-flex items-center ${gap} font-bold tracking-tight text-brand-text group select-none ${className}`}>
      <LogoMark
        size={size}
        priority={priority}
        className="transition-transform duration-200 group-hover:scale-105"
      />
      <span className={`font-semibold tracking-tight ${textSize} leading-none`}>
        <span className="text-brand-text">Zunova</span>
        <span className="text-brand-cyan ml-1 font-light tracking-wide">Tech</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Zunova Tech Home" className="focus-visible:rounded-md inline-block">
        {compactContent}
      </Link>
    );
  }

  return compactContent;
}
