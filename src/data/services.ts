import { ServiceItem } from "@/types/services";

export const servicesData: ServiceItem[] = [
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    tagline: "Purpose-built business tools engineered for your exact operational workflow.",
    description:
      "When off-the-shelf software falls short, creates clunky workarounds, or charges extortionate seat fees, custom software delivers tools that align directly with your operational reality.",
    iconName: "Code2",
    deliverables: [
      "Custom internal operations software",
      "Customer and vendor portals",
      "Specialized calculation and estimation tools",
      "Secure REST and GraphQL APIs",
      "System integration adaptors",
      "Clean source code with developer documentation",
    ],
    whenItMakesSense: [
      "Your team spends hours bridging gaps between mismatched commercial tools.",
      "Off-the-shelf software imposes rigid processes that hurt operational efficiency.",
      "Proprietary workflow logic gives your business a distinct competitive advantage.",
      "Per-user subscription licensing becomes cost-prohibitive at scale.",
    ],
    problemsSolved: [
      "Fragmented data silos across separate department spreadsheets.",
      "Manual data re-entry resulting in human errors and billing discrepancies.",
      "Inability to enforce company-specific compliance, approval, and audit trails.",
      "High software licensing costs for features 90% of your staff never touch.",
    ],
    processSteps: [
      { step: "01", title: "Operational Discovery", desc: "We map out existing bottlenecks, data handoffs, and team responsibilities." },
      { step: "02", title: "Architecture & Spec", desc: "We define clean data models, system boundaries, and an incremental release roadmap." },
      { step: "03", title: "Iterative Construction", desc: "We build in small, reviewable increments with continuous test validation." },
      { step: "04", title: "Deployment & Handover", desc: "We hand over deployment pipelines, documentation, and maintainable codebases." },
    ],
    technicalHighlights: [
      "Type-safe TypeScript across frontend and backend services",
      "Reliable relational schemas with strict data constraints",
      "Auditable action logging and role-based permissions",
      "Independent cloud deployment with minimal vendor lock-in",
    ],
    faqs: [
      {
        question: "How do we know if custom software is genuinely needed over commercial SaaS?",
        answer: "If commercial software forces your team into repetitive manual workarounds, charges excessive per-seat fees, or cannot integrate with your core operational systems, custom software frequently provides a higher return on investment and complete operational ownership.",
      },
      {
        question: "Who owns the code upon completion?",
        answer: "You do. Full source code ownership, intellectual property rights, and documentation are transferred to your business upon milestone completion.",
      },
    ],
  },
  {
    id: "business-dashboards",
    slug: "business-dashboards",
    title: "Business Dashboards & Admin Panels",
    shortTitle: "Business Dashboards",
    tagline: "Centralized visibility, actionable reporting, and robust internal operational control.",
    description:
      "Transform disorganized databases and spreadsheets into clean, role-tailored dashboards that empower your team to monitor performance, manage records, and act quickly.",
    iconName: "LayoutDashboard",
    deliverables: [
      "Executive and departmental reporting dashboards",
      "Role-based administrative control panels",
      "Data visualization with trend analytics and alerts",
      "Exportable reporting (CSV, PDF, scheduled digests)",
      "Secure user authentication and permission tiers",
      "Direct integration with active databases and third-party APIs",
    ],
    whenItMakesSense: [
      "Leadership lacks real-time insight into daily sales, fulfillment, or pipeline health.",
      "Support and operations staff need a secure interface to manage client accounts without raw database access.",
      "Weekly reporting requires hours of manual spreadsheet collation.",
      "Different team members need customized views based on their specific clearance or function.",
    ],
    problemsSolved: [
      "Blind spots in key operational performance indicators (KPIs).",
      "Accidental data corruption from staff editing raw production databases.",
      "Delayed business decisions caused by stale, weekly-compiled spreadsheets.",
      "Lack of granular access controls for sensitive financial or customer records.",
    ],
    processSteps: [
      { step: "01", title: "Metric & Role Mapping", desc: "We identify key metrics, user roles, and the underlying data sources." },
      { step: "02", title: "Information Hierarchy", desc: "We design focused layouts prioritizing actionable signals over cluttered charts." },
      { step: "03", title: "Query & UI Engineering", desc: "We implement optimized database queries, caching, and responsive interfaces." },
      { step: "04", title: "Security & Verification", desc: "We rigorously verify permissions, audit trails, and data segregation before rollout." },
    ],
    technicalHighlights: [
      "Responsive charting and data grids with filtering, sorting, and pagination",
      "Strict role-based access control (RBAC) and session validation",
      "Sub-second query caching for high-volume operational metrics",
      "Seamless exports and integration with existing data stores",
    ],
    faqs: [
      {
        question: "Can dashboards connect directly to our existing SQL database?",
        answer: "Yes. We engineer read-optimized connection layers and role-based APIs that safely interface with PostgreSQL, MySQL, SQL Server, or cloud data stores without putting operational data at risk.",
      },
    ],
  },
  {
    id: "workflow-automation",
    slug: "workflow-automation",
    title: "Workflow Automation & System Integrations",
    shortTitle: "Workflow Automation",
    tagline: "Connecting your business systems with reliable, resilient data pipelines.",
    description:
      "Eliminate repetitive manual tasks, bridge disconnected SaaS applications, and ensure your critical data flows reliably across systems with comprehensive error handling and logging.",
    iconName: "Workflow",
    deliverables: [
      "Custom webhook listeners and automated processing workers",
      "Bi-directional API sync between CRM, billing, and accounting tools",
      "Automated customer onboarding and notification pipelines",
      "Data transformation and sanitization micro-services",
      "Failover, retry mechanics, and alert dispatch for interrupted jobs",
      "Operational health dashboards and audit logging",
    ],
    whenItMakesSense: [
      "Your team manually copies data between web forms, CRMs, accounting, and messaging apps.",
      "Customer requests or orders slip through the cracks during busy cycles.",
      "Commercial no-code tools hit execution limits, become fragile, or lack proper error auditing.",
      "You need custom validation logic between incoming webhooks and core databases.",
    ],
    problemsSolved: [
      "Costly delays between an action happening (e.g. sale) and subsequent operations starting.",
      "Silent sync failures that leave customer records out of sync.",
      "Excessive employee hours burned on mundane, repetitive copy-paste workflows.",
      "Inconsistent customer communications during multi-step fulfillment processes.",
    ],
    processSteps: [
      { step: "01", title: "Pipeline Assessment", desc: "We document existing touchpoints, trigger events, data payloads, and edge cases." },
      { step: "02", title: "Failure-Safe Architecture", desc: "We design idempotency keys, retry queues, and alert thresholds for zero data loss." },
      { step: "03", title: "Integration Implementation", desc: "We build secure webhooks, background workers, and transformation logic." },
      { step: "04", title: "Stress Testing & Monitoring", desc: "We test rate limits, unexpected payloads, and configure automatic failure alerts." },
    ],
    technicalHighlights: [
      "Idempotent event processing to prevent duplicate data creation",
      "Structured error logging with instant notification alerts on critical failures",
      "Rate-limit handling and queued batching for external APIs",
      "Full traceability for every automated execution and payload",
    ],
    faqs: [
      {
        question: "What happens if a third-party API goes down during an automation?",
        answer: "We engineer resilient message queues with exponential backoff and persistent retries. Failed payloads are securely quarantined for automated recovery or alert escalation without losing incoming customer records.",
      },
    ],
  },
  {
    id: "mvp-development",
    slug: "mvp-development",
    title: "Web Applications & MVP Development",
    shortTitle: "MVP & Web Apps",
    tagline: "Focused, production-ready product foundations designed to validate real market demand.",
    description:
      "For startup founders and innovating businesses, we build clean, focused Minimum Viable Products that test your core value proposition with real users without accumulating catastrophic technical debt.",
    iconName: "Rocket",
    deliverables: [
      "Scoped Minimum Viable Product (MVP) web applications",
      "Responsive, accessible web interfaces optimized for conversion",
      "Authentication, billing scaffolding, and user account workflows",
      "Scalable database architecture ready for post-validation growth",
      "Modular frontend and backend codebases for continuous iteration",
      "Deployment setup on modern cloud infrastructure (Vercel, AWS, or Supabase)",
    ],
    whenItMakesSense: [
      "You have a validated idea and need a functional software product in weeks, not quarters.",
      "Previous no-code experiments proved market interest but hit scalability and flexibility limits.",
      "You need a solid prototype to demonstrate traction to early investors or pilot enterprise clients.",
      "You want a lean, disciplined build focused strictly on core differentiators.",
    ],
    problemsSolved: [
      "Over-engineering features that users never actually touch.",
      "Spaghetti prototypes that must be completely discarded when scaling up.",
      "Months of delayed launches caused by feature creep and shifting goals.",
      "High upfront agency quotes for unproven product hypotheses.",
    ],
    processSteps: [
      { step: "01", title: "Scope Pruning", desc: "We strip the product down to the single core loop that creates true user value." },
      { step: "02", title: "System Foundation", desc: "We construct a clean schema, secure auth, and accessible component library." },
      { step: "03", title: "Rapid Execution", desc: "We implement the essential user journey in focused, rapid iterations." },
      { step: "04", title: "Pilot Launch", desc: "We deploy to production, verify tracking, and prepare documentation for post-launch learning." },
    ],
    technicalHighlights: [
      "Modern React / Next.js architecture with instant performance and SEO readiness",
      "Modular components structured for straightforward feature expansion",
      "Secure authentication and environment configuration",
      "Transparent codebase handover with full ownership retention",
    ],
    faqs: [
      {
        question: "Can an MVP be expanded into a full SaaS product later?",
        answer: "Yes. By building on standard TypeScript, relational schemas, and modular architecture, the MVP serves as a durable foundation rather than throwaway code.",
      },
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile Apps (Android & iOS)",
    tagline: "Purpose-built Android and iOS mobile applications engineered for seamless field, employee, and customer workflows.",
    description:
      "When your business requires on-the-go data capture, device hardware access, push notifications, or native mobile experiences, we engineer reliable Android and iOS applications that seamlessly sync with your central business backend.",
    iconName: "Smartphone",
    deliverables: [
      "Production-ready Android applications (phone, tablet, and rugged enterprise devices)",
      "Production-ready iOS applications optimized for the Apple ecosystem",
      "Cross-platform mobile applications (React Native / Flutter) when appropriate",
      "Offline-first data synchronization for field operations with intermittent connectivity",
      "Secure mobile authentication, biometrics, and role-based access",
      "Push notification integration and transactional alert workflows",
      "App Store & Google Play submission guidance and release preparation",
    ],
    whenItMakesSense: [
      "Field teams, drivers, or warehouse technicians need to log data away from a desktop terminal.",
      "Customers require instant mobile access, push status updates, or biometric login.",
      "You need device hardware capabilities such as camera barcode scanning, GPS geolocation, or Bluetooth peripherals.",
      "Offline capabilities are necessary in areas with poor or intermittent cellular reception.",
    ],
    problemsSolved: [
      "Paper-based field forms requiring delayed manual re-entry at the end of the day.",
      "Lost data and fulfillment delays when workers operate in low-connectivity environments.",
      "Inability to send timely push notifications for urgent customer milestones.",
      "Clunky responsive web experiences trying to emulate native device gestures.",
    ],
    processSteps: [
      { step: "01", title: "Platform & Hardware Mapping", desc: "We evaluate whether native Android/iOS or cross-platform (React Native/Flutter) best suits your use case, budget, and device needs." },
      { step: "02", title: "Mobile UI/UX & Offline Design", desc: "We design ergonomic touch interfaces, accessible contrast, and predictable offline data caching behaviors." },
      { step: "03", title: "Engineering & API Integration", desc: "We build the mobile client, connect to backend APIs, and implement push notifications and biometric authentication." },
      { step: "04", title: "Device Testing & Store Prep", desc: "We conduct multi-device testing, battery and memory profiling, and prepare assets for app store submission." },
    ],
    technicalHighlights: [
      "Support for native Android (Kotlin), native iOS (Swift), and cross-platform (React Native/Flutter)",
      "SQLite / WatermelonDB local persistence for offline-first resilience",
      "Secure token storage using iOS Keychain and Android Keystore",
      "Clean REST / GraphQL synchronization with backend API services",
    ],
    faqs: [
      {
        question: "Should we build native Android/iOS or a cross-platform app?",
        answer: "We recommend the architecture based on your actual requirements: cross-platform frameworks (such as React Native or Flutter) are typically optimal for standard business applications sharing UI and logic across platforms. Native Kotlin or Swift is recommended when intensive hardware integration, specialized OS capabilities, or extreme performance is required.",
      },
      {
        question: "Can our mobile application share the same database as our web dashboard?",
        answer: "Yes. We engineer unified API backends that allow your web dashboard, administrative panels, and mobile apps to interact with the same centralized data store in real time.",
      },
      {
        question: "Do you publish the apps to Google Play and Apple App Store?",
        answer: "We assist with release preparation, signing, asset generation, and guideline compliance so the application can be submitted cleanly through your organization's verified developer account.",
      },
    ],
  },
];
