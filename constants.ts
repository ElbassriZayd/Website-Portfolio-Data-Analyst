import { Experience, Project, SkillCategory } from './types';
import { 
  Database, 
  BarChart2, 
  Brain, 
  Server, 
  LayoutDashboard, 
  Code2, 
  Container 
} from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/ElbassriZayd?tab=repositories",
  linkedin: "https://www.linkedin.com/in/zayd-el-bassri-619339292/",
  email: "zayd.elbassri01@gmail.com",
  resume: "/DATA ANALYST ELBASSRI ZAYD.pdf", 
};

export const CONTACT_INFO = {
  email: "zayd.elbassri01@gmail.com",
  location: "Casablanca, Morocco",
  phone: "+212 648 941 679",
};

export const EXPERIENCES: Experience[] = [
  {
    role: "End-to-End Project Dev (FinTech/Telco)",
    company: "Self-Initiated / Auto-formation",
    duration: "Jul 2025 – Present",
    points: [
      "MLOps: Developed & deployed Churn Prediction model (XGBoost) via Docker & FastAPI.",
      "BI: Created real-time Power BI dashboard connected to prediction API for risk analysis.",
      "Data Pipeline: Automated ETL processes using SQL and Python.",
    ],
  },
  {
    role: "R&D Data Science Engineer",
    company: "LISAC Lab, Fès",
    duration: "Nov 2024 – Jun 2025",
    points: [
      "ML models with 90% accuracy for healthcare needs.",
      "Optimization with NSGA-II & SPEA2 algorithms.",
      "Reduced operational cost by 12% & distance by 18%.",
    ],
  },
  {
    role: "Freelance – AI Software Engineer (Python)",
    company: "G2i Inc",
    duration: "Aug 2024 – Oct 2024",
    points: [
      "AI code evaluation with 98% production readiness.",
      "Refactoring improved performance by 30%.",
      "RLHF pipeline optimization (+12% accuracy).",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Healthcare Needs Prediction & Routing",
    description: "Optimization system for medical resource allocation and logistics.",
    techStack: ["Python", "Scikit-learn", "Pandas"],
    metrics: ["Reduced routing time by 15%", "92% Prediction Accuracy"],
  },
  {
    title: "Churn Prediction System",
    description: "End-to-end machine learning pipeline to identify at-risk customers.",
    techStack: ["XGBoost", "Docker", "FastAPI"],
    metrics: ["Deployment via Docker", "Real-time inference API"],
  },
  {
    title: "CNN Defect Detection",
    description: "Computer vision model for industrial quality control using VGG16 architecture.",
    techStack: ["TensorFlow", "VGG16", "OpenCV"],
    metrics: ["95% Accuracy", "Automated visual inspection"],
  },
  {
    title: "Football Player Classification",
    description: "Graph Neural Network (GNN) implementation for player role analysis.",
    techStack: ["GNN", "PyTorch", "NetworkX"],
    metrics: ["Novel approach", "High clustering coefficient"],
  },
  {
    title: "Movie Revenue Analysis",
    description: "Statistical correlation analysis to determine factors driving box office success.",
    techStack: ["Python", "Seaborn", "Statsmodels"],
    metrics: ["Identified key revenue drivers", "Detailed visual reports"],
  },
  {
    title: "Nashville Housing Data Cleaning",
    description: "Complex SQL data transformation and cleaning project.",
    techStack: ["SQL Server", "ETL"],
    metrics: ["Cleaned 50k+ records", "Standardized schema"],
  },
  {
    title: "Power BI Sales BI Solution",
    description: "Interactive dashboard for sales tracking and regional performance.",
    techStack: ["Power BI", "DAX"],
    metrics: ["Dynamic KPI tracking", "Automated daily refresh"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Business Intelligence",
    level: 95,
    skills: ["Power BI", "DAX", "SSIS", "SSAS", "MDX", "SQL", "Tableau", "KPI Design"],
  },
  {
    name: "Data Science & ML",
    level: 90,
    skills: ["Python", "Scikit-learn", "TensorFlow", "Deep Learning", "NLP"],
  },
  {
    name: "Big Data & Eng",
    level: 85,
    skills: ["PySpark", "Hadoop", "ETL Pipelines"],
  },
  {
    name: "MLOps",
    level: 80,
    skills: ["Docker", "FastAPI", "Model Deployment"],
  },
];

export const RADAR_DATA = [
  { subject: 'BI', A: 95, fullMark: 100 },
  { subject: 'Data Science', A: 90, fullMark: 100 },
  { subject: 'Big Data', A: 85, fullMark: 100 },
  { subject: 'MLOps', A: 80, fullMark: 100 },
  { subject: 'Mathematics', A: 85, fullMark: 100 },
  { subject: 'Communication', A: 90, fullMark: 100 },
];

export const TECH_ICONS = {
  bi: LayoutDashboard,
  ds: Brain,
  data: Database,
  mlops: Container,
  code: Code2,
};