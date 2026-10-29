import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Mobile Application Development (Android & iOS)",
  description:
    "Purpose-built Android and iOS mobile applications engineered for field workflows, employee productivity, and seamless customer experiences with offline sync and push alerts.",
};

export default function MobileAppDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "mobile-app-development");
  if (!service) notFound();

  return <ServicePageLayout service={service} />;
}

