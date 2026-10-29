import React from "react";
import { ServiceGridSkeleton } from "@/components/ui/ServiceGridSkeleton";

export default function ServicesLoading() {
  return (
    <div className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceGridSkeleton count={5} />
      </div>
    </div>
  );
}

