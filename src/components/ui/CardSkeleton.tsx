import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

interface CardSkeletonProps {
  className?: string;
  lines?: number;
}

export function CardSkeleton({ className = "", lines = 3 }: CardSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading card content"
      className={`rounded-xl border border-brand-border bg-brand-card p-6 flex flex-col justify-between ${className}`}
    >
      <span className="sr-only">Loading content...</span>
      <div>
        <div className="flex items-center justify-between mb-4">
          <Skeleton variant="rounded" className="w-12 h-12" />
          <Skeleton variant="rounded" className="w-16 h-5" />
        </div>

        <Skeleton variant="text" className="w-3/4 h-6 mb-2" />
        <Skeleton variant="text" className="w-1/2 h-4 mb-4" />

        <div className="space-y-2 mb-6">
          {Array.from({ length: lines }).map((_, i) => (
            <Skeleton
              key={i}
              variant="text"
              className={`h-3.5 ${i === lines - 1 ? "w-4/5" : "w-full"}`}
            />
          ))}
        </div>

        <div className="border-t border-brand-border/60 pt-4 space-y-2 mb-6">
          <Skeleton variant="text" className="w-1/3 h-4 mb-2" />
          <Skeleton variant="text" className="w-full h-3" />
          <Skeleton variant="text" className="w-5/6 h-3" />
        </div>
      </div>

      <div className="pt-2 border-t border-brand-border/60">
        <Skeleton variant="text" className="w-28 h-4" />
      </div>
    </div>
  );
}

