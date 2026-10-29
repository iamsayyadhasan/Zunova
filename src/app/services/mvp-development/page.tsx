import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "MVP Development & Web Applications",
  description:
    "Launch scoped, production-grade Minimum Viable Products to test assumptions with real customers without accumulating unmaintainable technical debt.",
};

export default function MvpDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "mvp-development");
  if (!service) notFound();

  return <ServicePageLayout service={service} />;
}

