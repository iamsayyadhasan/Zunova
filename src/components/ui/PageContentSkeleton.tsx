import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

interface PageContentSkeletonProps {
  className?: string;
}

export function PageContentSkeleton({ className = "" }: PageContentSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 ${className}`}
    >
      <span className="sr-only">Loading page content...</span>

      {/* Hero Skeleton */}
      <div className="max-w-3xl space-y-4">
        <Skeleton variant="rounded" className="w-32 h-6" />
        <Skeleton variant="text" className="w-full h-12" />
        <Skeleton variant="text" className="w-3/4 h-6" />
      </div>

      {/* Main Content Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <Skeleton variant="rounded" className="w-full h-64" />
        <Skeleton variant="rounded" className="w-full h-64" />
      </div>

      {/* Footer / CTA placeholder */}
      <Skeleton variant="rounded" className="w-full h-32" />
    </div>
  );
}

