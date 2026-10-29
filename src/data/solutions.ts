export interface SolutionPlatform {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  roleInEcosystem: string;
  badge: string;
}

export const webAndMobilePlatforms: SolutionPlatform[] = [
  {
    id: "web-applications",
    title: "Web Applications & Portals",
    subtitle: "Centralized Desktop & Browser Control",
    description:
      "High-performance Next.js and React web applications engineered for heavy administrative tasks, complex reporting, customer account portals, and desktop operations.",
    capabilities: [
      "Role-based administrative dashboards and permissions",
      "Comprehensive data grids, filtering, and export tools",
      "Customer and vendor self-service portals",
      "Instant accessibility across modern desktop and tablet browsers",
    ],
    roleInEcosystem:
      "Acts as the primary control center for managers, dispatchers, and desktop power users to manage records and monitor workflows.",
    badge: "Web & Desktop",
  },
  {
    id: "android-applications",
    title: "Android Applications",
    subtitle: "Accessible Field & Mobile Workflows",
    description:
      "Robust Android mobile applications designed to empower field personnel, warehouse staff, delivery drivers, and retail customers on diverse Android devices.",
    capabilities: [
      "Optimized for phones, tablets, and rugged handheld terminals",
      "Camera barcode and QR scanning integration",
      "Offline database caching for low-connectivity environments",
      "Background location telemetry and transactional push alerts",
    ],
    roleInEcosystem:
      "Extends operational data collection and field task completion directly to on-the-move workers and distributed teams.",
    badge: "Android Ecosystem",
  },
  {
    id: "ios-applications",
    title: "iOS Applications",
    subtitle: "Apple Ecosystem & Customer Experience",
    description:
      "Polished iOS applications built with fluid navigation, biometric authentication, and strict adherence to Apple Human Interface Guidelines for premium customer and executive touchpoints.",
    capabilities: [
      "Fluid touch ergonomics and native iOS gestures",
      "Face ID / Touch ID biometric authentication",
      "Apple Push Notification service (APNs) integration",
      "App Store submission readiness and privacy compliance",
    ],
    roleInEcosystem:
      "Provides a high-trust, responsive touchpoint for mobile customers, executives, and clients using Apple devices.",
    badge: "iOS Ecosystem",
  },
];

