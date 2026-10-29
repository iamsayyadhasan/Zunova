import { ProjectItem } from "@/types/projects";

export const projectsData: ProjectItem[] = [
  {
    id: "operations-dashboard",
    slug: "operations-dashboard",
    title: "Operations Dashboard",
    badge: "Concept Project",
    category: "Business Dashboards",
    shortDescription: "A unified internal management console designed for distributed logistics, multi-location inventory, and operational triage.",
    problemExplored:
      "Medium-sized operations teams frequently struggle with fragmented data spread across ERP tables, support tickets, and disparate warehouse spreadsheets, leading to delayed decision-making and inventory blind spots.",
    proposedSolution:
      "A responsive, role-tailored dashboard delivering real-time status feeds, inventory variance alerts, and one-click fulfillment actions without requiring operators to touch raw databases.",
    technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS", "PostgreSQL", "Recharts"],
    keyFeatures: [
      "Real-time operational health gauges and throughput tracking",
      "Granular role-based view controls (Dispatch, Warehouse, Executive)",
      "Interactive multi-filter data grid with instant search and CSV export",
      "Audit-logged record modifications to maintain data integrity",
    ],
    architectureOverview:
      "Frontend built with React Server Components for fast data queries, backed by indexed relational queries with sub-second response times and optimistic UI updates for operational actions.",
    visualPreviewType: "dashboard",
  },
  {
    id: "leadflow-workflow-concept",
    slug: "leadflow-workflow-concept",
    title: "LeadFlow Workflow Concept",
    badge: "Concept Project",
    category: "Workflow Automation",
    shortDescription: "An automated multi-channel lead enrichment, qualification, and routing engine with resilient retry queues.",
    problemExplored:
      "Inbound inquiries from web forms and marketing campaigns often sit unassigned for hours, undergo inconsistent manual scoring, and lose momentum due to disconnected CRM and messaging tools.",
    proposedSolution:
      "An automated event-driven pipeline that captures incoming payloads, validates and enriches company profiles, assigns lead scores based on custom business rules, and dispatches instant notifications with contextual customer history.",
    technologies: ["Node.js / TypeScript", "Webhooks", "Redis / BullMQ", "REST APIs", "Structured Logging"],
    keyFeatures: [
      "Idempotent webhook ingestion with payload deduplication",
      "Asynchronous enrichment pipeline resilient to third-party API rate limits",
      "Dynamic routing based on territory, budget, and business size",
      "Comprehensive telemetry dashboard displaying pipeline latency and queue states",
    ],
    architectureOverview:
      "Stateless webhook endpoints ingest payloads into a durable message queue, which workers process with exponential backoff on transient errors and automated alerting for persistent failures.",
    visualPreviewType: "pipeline",
  },
  {
    id: "client-portal-starter",
    slug: "client-portal-starter",
    title: "Client Portal / SaaS Starter",
    badge: "Demo Project",
    category: "Web Applications",
    shortDescription: "A modern modular SaaS foundation featuring authenticated customer spaces, document sharing, and project milestone tracking.",
    problemExplored:
      "Service businesses and early-stage startups often waste months building standard account plumbing, client deliverables access, and invoicing portals from scratch instead of focusing on their core business offering.",
    proposedSolution:
      "A clean, production-ready portal starter with pre-architected user roles, project workspaces, document handoff systems, and activity audit streams.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Edge Middleware", "Accessible UI Tokens"],
    keyFeatures: [
      "Multi-tenant customer workspaces with isolated data contexts",
      "Project deliverable approval workflows with timestamped client sign-offs",
      "Integrated notification stream for updates, remarks, and asset releases",
      "Fully accessible, mobile-first design adhering to WCAG 2.1 AA standards",
    ],
    architectureOverview:
      "Modular Next.js architecture separating public marketing from authenticated tenant sub-routes, secured by edge session validation and role verification guards.",
    visualPreviewType: "portal",
  },
];
