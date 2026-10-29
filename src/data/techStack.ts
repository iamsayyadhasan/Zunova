export interface TechCategory {
  category: string;
  description: string;
  items: Array<{ name: string; role: string; status: "active" | "planned" }>;
}

export const techStackData: TechCategory[] = [
  {
    category: "Frontend & Web Applications",
    description: "Modern, type-safe frameworks delivering fast load times and clean component architecture.",
    items: [
      { name: "Next.js (App Router)", role: "Server-side rendering, routing & API routes", status: "active" },
      { name: "React 19", role: "Component architecture & concurrent rendering", status: "active" },
      { name: "TypeScript", role: "End-to-end type safety & refactoring resilience", status: "active" },
      { name: "Tailwind CSS", role: "Design tokens & responsive utility styling", status: "active" },
    ],
  },
  {
    category: "Backend & System APIs",
    description: "Reliable API runtimes and worker queues designed for high throughput and predictable error recovery.",
    items: [
      { name: "Node.js & Edge Runtimes", role: "Scalable asynchronous execution", status: "active" },
      { name: "REST & Webhook Handlers", role: "Standardized third-party payload ingestion", status: "active" },
      { name: "Redis & Message Queues", role: "Asynchronous task queuing & event streaming", status: "active" },
      { name: "GraphQL APIs", role: "Flexible, client-specified data querying", status: "planned" },
    ],
  },
  {
    category: "Databases & Data Integrity",
    description: "Battle-tested relational and key-value databases with strict constraints and audit trails.",
    items: [
      { name: "PostgreSQL", role: "Primary relational database & schema enforcement", status: "active" },
      { name: "Prisma & Drizzle ORM", role: "Type-safe database migrations & queries", status: "active" },
      { name: "SQLite / WatermelonDB", role: "Local embedded storage for offline mobile sync", status: "active" },
    ],
  },
  {
    category: "Mobile Application Technologies",
    description: "Architectures for Android and iOS mobile applications, chosen based on project requirements.",
    items: [
      { name: "React Native / Expo", role: "Cross-platform mobile application development", status: "active" },
      { name: "Flutter", role: "High-performance cross-platform interfaces", status: "planned" },
      { name: "Android SDK (Kotlin)", role: "Native Android hardware & background services", status: "active" },
      { name: "iOS SDK (Swift)", role: "Native iOS interface & Apple ecosystem features", status: "active" },
    ],
  },
  {
    category: "Cloud, CI/CD & Deployment",
    description: "Predictable, independent cloud deployment environments with minimal vendor lock-in.",
    items: [
      { name: "Vercel / Cloudflare", role: "Global edge deployment & asset caching", status: "active" },
      { name: "AWS (ECS, S3, RDS)", role: "Scalable backend computing & file storage", status: "active" },
      { name: "Docker Containers", role: "Reproducible deployment environments", status: "active" },
      { name: "GitHub Actions", role: "Automated linting, testing, and continuous deployment", status: "active" },
    ],
  },
];

