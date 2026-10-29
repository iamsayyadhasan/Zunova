import { SiteConfig } from "@/types/siteConfig";

export const siteConfig: SiteConfig = {
  name: "Zunova Tech",
  tagline: "Technology that moves business forward.",
  positioning:
    "A professional technology solutions company helping businesses, startups, and organizations solve real problems through software, applications, dashboards, and automation.",
  description:
    "Zunova Tech engineers custom software, business dashboards, workflow automation, web applications, and mobile applications (Android & iOS) tailored to real operational workflows.",
  heroSupportingCopy:
    "Zunova Tech helps businesses and startups build custom software, insightful dashboards, connected workflows, and mobile applications designed around real needs.",
  navLinks: [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      children: [
        {
          name: "Custom Software Development",
          href: "/services/custom-software",
          description: "Bespoke tools and systems tailored to your exact operational reality.",
        },
        {
          name: "Business Dashboards & Admin Panels",
          href: "/services/business-dashboards",
          description: "Unified operational visibility, reporting, and role-based panels.",
        },
        {
          name: "Workflow Automation & Integrations",
          href: "/services/workflow-automation",
          description: "Reliable API integrations, background pipelines, and resilient event triggers.",
        },
        {
          name: "MVP & Startup Product Development",
          href: "/services/mvp-development",
          description: "Focused first releases engineered to test and validate ideas quickly.",
        },
        {
          name: "Mobile Application Development",
          href: "/services/mobile-app-development",
          description: "Production-ready Android and iOS mobile applications built for field and customer workflows.",
        },
      ],
    },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  contactEmail: "inquiries@zunova.tech",
  domain: "https://zunova.tech",
  socials: {
    instagram: {
      handle: "@zunovatech",
      url: null, // Pending profile registration confirmation
      isConfirmed: false,
    },
    linkedin: {
      name: "Zunova Tech",
      url: null, // Pending profile URL confirmation
      isConfirmed: false,
    },
    whatsapp: {
      number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || null,
      displayNumber: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || null,
      defaultMessage: "Hello Zunova Tech, I would like to discuss a technology project.",
      isConfirmed: Boolean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    },
  },
};
