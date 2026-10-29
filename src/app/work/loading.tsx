import React from "react";
import { PortfolioGridSkeleton } from "@/components/ui/PortfolioGridSkeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export default function WorkLoading() {
  return (
    <div className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="flex justify-center">
            <Skeleton variant="rounded" className="w-52 h-6" />
          </div>
          <Skeleton variant="text" className="w-4/5 h-12 mx-auto" />
          <Skeleton variant="text" className="w-3/5 h-5 mx-auto" />
        </div>

        {/* Portfolio Skeleton Grid */}
        <PortfolioGridSkeleton count={3} />
      </div>
    </div>
  );
}

