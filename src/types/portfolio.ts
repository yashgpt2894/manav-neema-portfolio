export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  meta: string;
}

export interface ImpactItem {
  index: string;
  context: string;
  title: string;
  summary: string;
  tags: string[];
  tone: "acid" | "violet" | "blue";
}

export interface CapabilityGroup {
  index: string;
  title: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  period: string;
  institution: string;
  qualification: string;
  detail: string;
}
