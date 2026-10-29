import React from "react";
import { CardSkeleton } from "@/components/ui/CardSkeleton";
import { Skeleton } from "@/components/ui/Skeleton";

interface ServiceGridSkeletonProps {
  count?: number;
  className?: string;
}

export function ServiceGridSkeleton({ count = 5, className = "" }: ServiceGridSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading services grid"
      className={`space-y-12 ${className}`}
    >
      <span className="sr-only">Loading services...</span>

      {/* Header skeleton */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="flex justify-center">
          <Skeleton variant="rounded" className="w-40 h-6" />
        </div>
        <Skeleton variant="text" className="w-3/4 h-10 mx-auto" />
        <Skeleton variant="text" className="w-1/2 h-5 mx-auto" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {Array.from({ length: count }).map((_, i) => (
          <CardSkeleton key={i} lines={3} />
        ))}
      </div>
    </div>
  );
}

