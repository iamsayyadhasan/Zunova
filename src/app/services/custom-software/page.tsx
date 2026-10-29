import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "Tailored internal tools, client portals, and bespoke business software engineered to solve your core operational bottlenecks without off-the-shelf compromises.",
};

export default function CustomSoftwarePage() {
  const service = servicesData.find((s) => s.slug === "custom-software");
  if (!service) notFound();

  return <ServicePageLayout service={service} />;
}

