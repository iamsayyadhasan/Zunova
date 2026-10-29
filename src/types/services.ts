export type ServiceIconName =
  | "Code2"
  | "LayoutDashboard"
  | "Workflow"
  | "Rocket"
  | "Globe"
  | "Smartphone"
  | "Apple";

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  iconName: ServiceIconName;
  deliverables: string[];
  whenItMakesSense: string[];
  problemsSolved: string[];
  processSteps: ServiceProcessStep[];
  technicalHighlights: string[];
  faqs?: ServiceFaq[];
}

