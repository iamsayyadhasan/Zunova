import { PrincipleItem, HowWeWorkStep } from "@/types/principles";

export const coreValues: PrincipleItem[] = [
  {
    number: "01",
    title: "Focus on Real Business Problems",
    summary: "Software must solve an actual operational bottleneck, not chase arbitrary technical trends.",
    detail: "We begin every project by understanding how your team actually works, uncovering where manual overhead drains time, and confirming that custom software is truly the best answer.",
  },
  {
    number: "02",
    title: "Practical Technical Decisions",
    summary: "Proven, reliable architectures chosen for long-term stability rather than resume-building.",
    detail: "We pick technologies with robust ecosystems, predictable maintenance costs, and clear documentation—ensuring your systems remain dependable year after year.",
  },
  {
    number: "03",
    title: "Clear & Direct Communication",
    summary: "No jargon, no hidden assumptions, and open updates at every stage of the build.",
    detail: "You always know what is being built, why technical trade-offs were made, and what progress has been accomplished in straightforward business terms.",
  },
  {
    number: "04",
    title: "Maintainable, Clean Code",
    summary: "Systems structured so your business owns its technical destiny without vendor hostage-taking.",
    detail: "We write clean, typed, modular code with comprehensive setup guides, ensuring any competent engineer can maintain or extend the codebase in the future.",
  },
];

export const workingPrinciples: PrincipleItem[] = [
  {
    number: "01",
    title: "Scope Agreed Before Implementation",
    summary: "Clear written agreements on deliverables, milestones, and boundaries before coding begins.",
    detail: "We prevent surprise costs and endless scope creep by defining concise user journeys and functional specifications before committing development resources.",
  },
  {
    number: "02",
    title: "Transparent Weekly Cadence",
    summary: "Regular progress reviews and tangible working builds you can review in real environments.",
    detail: "Rather than disappearing for months, we share iterative staging deployments, allowing practical feedback while the code is actively being shaped.",
  },
  {
    number: "03",
    title: "Maintainable Engineering",
    summary: "Standardized conventions, type safety, and minimal extraneous third-party bloat.",
    detail: "Every component, data model, and API endpoint is built with clarity in mind, reducing future maintenance overhead and system fragility.",
  },
  {
    number: "04",
    title: "Complete Handover & Documentation",
    summary: "Source code ownership, deployment instructions, and full architectural documentation.",
    detail: "You receive full ownership of code repositories, configuration files, and architectural documentation—no proprietary lock-in or hidden licensing strings.",
  },
];

export const howWeWorkSteps: HowWeWorkStep[] = [
  {
    number: "01",
    name: "Discover",
    title: "Understand the Problem",
    description: "We map your current business processes, identify core friction points, define user roles, and outline project constraints before touching any code.",
    deliverables: ["Process flow mapping", "Requirements summary", "Technical feasibility check"],
  },
  {
    number: "02",
    name: "Plan",
    title: "Agree on Scope & Architecture",
    description: "We establish a clear technical specification, agreed deliverables, data flow blueprints, and realistic delivery phases to keep momentum high.",
    deliverables: ["Architecture specification", "Milestone schedule", "Database schema blueprint"],
  },
  {
    number: "03",
    name: "Build & Test",
    title: "Iterative Construction & Verification",
    description: "We implement features in focused, reviewable increments. Continuous integration, code linting, and automated checks ensure functional integrity.",
    deliverables: ["Working staging builds", "Continuous test coverage", "Weekly progress demos"],
  },
  {
    number: "04",
    name: "Launch & Improve",
    title: "Handover, Documentation & Support",
    description: "We orchestrate production deployment, deliver thorough operating documentation, conduct team walkthroughs, and discuss ongoing maintenance.",
    deliverables: ["Production deployment", "Complete source ownership", "Operating guide & support plan"],
  },
];
