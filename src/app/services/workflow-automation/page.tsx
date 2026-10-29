import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Workflow Automation & Integrations",
  description:
    "Bridge disparate business software, automate manual data entry, and establish reliable event pipelines with built-in retry mechanics and full audit logs.",
};

export default function WorkflowAutomationPage() {
  const service = servicesData.find((s) => s.slug === "workflow-automation");
  if (!service) notFound();

  return <ServicePageLayout service={service} />;
}

