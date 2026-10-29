import React from "react";
import { SkeletonProps } from "@/types";

export function Skeleton({
  variant = "rounded",
  animate = true,
  className = "",
  width,
  height,
  style,
  ...props
}: SkeletonProps) {
  const variantStyles = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
    rounded: "rounded-xl",
  };

  const animationClass = animate ? "animate-shimmer" : "";

  return (
    <div
      aria-hidden="true"
      className={`bg-brand-elevated/80 border border-brand-border/40 ${variantStyles[variant]} ${animationClass} ${className}`}
      style={{
        width,
        height,
        ...style,
      }}
      {...props}
    />
  );
}

