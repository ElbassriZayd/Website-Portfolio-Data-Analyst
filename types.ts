export interface Project {
  title: string;
  description: string;
  techStack: string[];
  metrics: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface SkillCategory {
  name: string;
  level: number; // 0-100 for charts
  skills: string[];
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  EDUCATION = 'education',
  CONTACT = 'contact',
}