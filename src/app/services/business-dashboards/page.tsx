import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Business Dashboards & Admin Panels",
  description:
    "Centralize company data, streamline administrative workflows, and obtain role-tailored operational visibility through secure, high-performance dashboards.",
};

export default function BusinessDashboardsPage() {
  const service = servicesData.find((s) => s.slug === "business-dashboards");
  if (!service) notFound();

  return <ServicePageLayout service={service} />;
}

