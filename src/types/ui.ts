import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "interactive" | "subtle";
  className?: string;
  glow?: boolean;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "cyan" | "muted" | "concept" | "border";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded";
  animate?: boolean;
  className?: string;
  width?: string | number;
  height?: string | number;
}

