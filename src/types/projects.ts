export type ProjectBadge = "Concept Project" | "Demo Project";
export type ProjectVisualType = "dashboard" | "pipeline" | "portal" | "mobile";
export type ProjectCategory =
  | "Business Dashboards"
  | "Workflow Automation"
  | "Web Applications"
  | "Mobile Applications";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  badge: ProjectBadge;
  category: ProjectCategory;
  shortDescription: string;
  problemExplored: string;
  proposedSolution: string;
  technologies: string[];
  keyFeatures: string[];
  architectureOverview: string;
  visualPreviewType: ProjectVisualType;
}

