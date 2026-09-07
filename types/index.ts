export type TechCategory =
  | "Frontend"
  | "Styling"
  | "State & Data"
  | "Forms & Validation"
  | "Animation & Visualization"
  | "E-commerce & Platforms";

export interface Technology {
  name: string;
  category: TechCategory;
  level: "Advanced" | "Expert" | "Mastery";
  experience?: string;
  description: string;
  realWorldUsage: string;
  architecturalRole: string;
  relatedTech: string[];
}

export type ProjectCategory =
  | "All"
  | "Next.js"
  | "React"
  | "E-commerce"
  | "Salla"
  | "Shopify";

export interface ProjectCaseStudy {
  problem: string;
  goal: string;
  architecture: string[];
  challenges: string[];
  solution: string[];
  performanceGains: {
    label: string;
    value: string;
  }[];
  architectureHighlights: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: "E-commerce" | "Next.js" | "React" | "Salla" | "Shopify";
  categories: ProjectCategory[];
  description: string;
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceItem {
  period: string;
  role: string;
  type: string;
  location: string;
  overview: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface CoreWebVital {
  metric: string;
  name: string;
  value: string;
  target: string;
  description: string;
  score: number; // 0 - 100
  color: string;
}

export interface ArchitectureLayer {
  level: number;
  name: string;
  subtitle: string;
  components: string[];
  role: string;
  bestPractices: string[];
}
