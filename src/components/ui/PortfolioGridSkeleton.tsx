import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

interface PortfolioGridSkeletonProps {
  count?: number;
  className?: string;
}

export function PortfolioGridSkeleton({ count = 3, className = "" }: PortfolioGridSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading portfolio items"
      className={`space-y-12 ${className}`}
    >
      <span className="sr-only">Loading portfolio prototypes...</span>

      {/* Filter Tabs Skeleton */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <Skeleton variant="rounded" className="w-16 h-8" />
        <Skeleton variant="rounded" className="w-36 h-8" />
        <Skeleton variant="rounded" className="w-40 h-8" />
        <Skeleton variant="rounded" className="w-32 h-8" />
      </div>

      {/* Project Cards Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-brand-border bg-brand-card p-6 flex flex-col justify-between"
          >
            <div>
              {/* Visual preview placeholder */}
              <Skeleton variant="rounded" className="w-full h-44 mb-5" />

              {/* Badges & Meta */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <Skeleton variant="rounded" className="w-28 h-5" />
                <Skeleton variant="rounded" className="w-20 h-4" />
              </div>

              {/* Title & Description */}
              <Skeleton variant="text" className="w-4/5 h-6 mb-2" />
              <Skeleton variant="text" className="w-full h-4 mb-1" />
              <Skeleton variant="text" className="w-2/3 h-4 mb-4" />

              {/* Problem/Solution Lines */}
              <div className="space-y-3 pt-3 border-t border-brand-border/60">
                <Skeleton variant="text" className="w-1/3 h-4" />
                <Skeleton variant="text" className="w-full h-3" />
                <Skeleton variant="text" className="w-1/3 h-4 mt-2" />
                <Skeleton variant="text" className="w-5/6 h-3" />
              </div>

              {/* Tech Tags */}
              <div className="flex gap-2 pt-4">
                <Skeleton variant="rounded" className="w-16 h-5" />
                <Skeleton variant="rounded" className="w-20 h-5" />
                <Skeleton variant="rounded" className="w-14 h-5" />
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-brand-border/60">
              <Skeleton variant="text" className="w-32 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

