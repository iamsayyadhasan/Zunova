export interface BusinessProblem {
  id: string;
  number: string;
  title: string;
  frictionPoint: string;
  softwareSolution: string;
  impactArea: string;
}

export const businessProblemsData: BusinessProblem[] = [
  {
    id: "manual-repetitive-work",
    number: "01",
    title: "Manual, Repetitive Data Work",
    frictionPoint:
      "Employees spend multiple hours each day copying entries between spreadsheets, web portals, and invoicing systems.",
    softwareSolution:
      "Automated event listeners and background pipelines that validate and synchronize records instantly without human intervention.",
    impactArea: "Operations & Administration",
  },
  {
    id: "disconnected-processes",
    number: "02",
    title: "Disconnected Business Tools",
    frictionPoint:
      "Sales, inventory, fulfillment, and customer support operate on separate SaaS platforms that do not communicate.",
    softwareSolution:
      "Bi-directional API integrations and unified webhook workers that bridge disparate tools into a cohesive workflow.",
    impactArea: "Systems Integration",
  },
  {
    id: "limited-visibility",
    number: "03",
    title: "Limited Operational Visibility",
    frictionPoint:
      "Leaders and managers lack real-time insight into daily throughput, bottlenecks, or critical fulfillment delays.",
    softwareSolution:
      "Tailored real-time dashboards with role-based access, alert thresholds, and automated reporting digests.",
    impactArea: "Executive Management",
  },
  {
    id: "inefficient-reporting",
    number: "04",
    title: "Inefficient Weekly Reporting",
    frictionPoint:
      "Compiling periodic performance metrics takes days of manual collation, resulting in stale data before decisions are made.",
    softwareSolution:
      "Automated query caching, scheduled data rollups, and one-click exportable reporting consoles.",
    impactArea: "Business Intelligence",
  },
  {
    id: "unvalidated-product-ideas",
    number: "05",
    title: "Unvalidated Digital Ideas",
    frictionPoint:
      "Founders and innovators risk months of time and significant capital building bloated software before testing core demand.",
    softwareSolution:
      "Disciplined, modular MVP web applications focused strictly on the essential user loop and real market feedback.",
    impactArea: "Startups & New Products",
  },
  {
    id: "mobile-field-disconnect",
    number: "06",
    title: "Field & Mobile Experience Gaps",
    frictionPoint:
      "Field teams and mobile customers are forced to use desktop-only software or clunky browser forms on mobile devices.",
    softwareSolution:
      "Dedicated Android and iOS applications with offline caching, hardware device access, and instant push alerts.",
    impactArea: "Mobile & Field Workflows",
  },
];

