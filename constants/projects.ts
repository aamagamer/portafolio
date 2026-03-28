export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  achievement?: string;
}

export const projects: Project[] = [
  {
    id: "tempo-air",
    title: "Tempo Air",
    shortDescription: "NASA Space Apps Challenge 3rd Place Winner - Air quality monitoring platform with AI-powered predictions.",
    longDescription: "Tempo Air is an innovative air quality monitoring system developed during the NASA Space Apps Challenge. The platform leverages real-time satellite data and AI algorithms to predict air quality patterns, helping communities make informed decisions about outdoor activities and health precautions. Built with a focus on accessibility and real-time data visualization.",
    techStack: ["Python", "FastAPI", "React", "TensorFlow", "NASA APIs", "PostgreSQL"],
    features: [
      "Real-time air quality index monitoring",
      "AI-powered 24-hour predictions",
      "Interactive map visualization",
      "Health recommendation engine",
      "Historical data analysis dashboard"
    ],
    image: "https://via.placeholder.com/600x400/0a0a0a/00ffff?text=Tempo+Air",
    liveUrl: "#",
    sourceUrl: "#",
    achievement: "3rd Place - NASA Space Apps"
  },
  {
    id: "dif-saltillo",
    title: "DIF Saltillo",
    shortDescription: "Official government web platform focused on accessibility and citizen services.",
    longDescription: "Developed the official digital platform for DIF Saltillo, a government institution serving the community. The platform was built with a strong emphasis on accessibility (WCAG compliance) to ensure all citizens, including those with disabilities, can access essential services. Features a robust Flask backend with secure data handling and administrative tools.",
    techStack: ["Python", "Flask", "PostgreSQL", "JavaScript", "Bootstrap", "Redis"],
    features: [
      "WCAG 2.1 accessibility compliance",
      "Citizen services portal",
      "Administrative dashboard",
      "Document management system",
      "Multi-language support"
    ],
    image: "public/DifSaltillo.png",
    liveUrl: "https://difsaltillo.vercel.app/",
    achievement: "Government Platform"
  },
  {
    id: "knq-transporte",
    title: "KNQ Transporte",
    shortDescription: "Full ERP system for logistics company - HR automation, fleet tracking, and operations management.",
    longDescription: "Comprehensive Enterprise Resource Planning (ERP) system built from the ground up for KNQ Transporte. As the sole IT owner, designed and implemented a complete digital transformation solution covering HR processes, fleet management, real-time GPS tracking, fuel consumption analytics, and automated payroll systems. The system handles 50+ daily operations and has significantly reduced manual paperwork.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    features: [
      "Real-time GPS fleet tracking",
      "Automated HR & payroll system",
      "Fuel consumption analytics",
      "Route optimization algorithms",
      "Driver performance dashboards",
      "Maintenance scheduling system"
    ],
    image: "https://via.placeholder.com/600x400/0a0a0a/00ffff?text=KNQ+ERP",
    liveUrl: "#",
    achievement: "Full ERP System"
  },
  {
    id: "adm-asesoria",
    title: "ADM Asesoría",
    shortDescription: "Corporate website & HR system with FortiGate integration and process digitalization.",
    longDescription: "Led the complete IT infrastructure overhaul for ADM Asesoría as Head of IT. Developed a corporate website, implemented an HR management system, and integrated FortiGate security appliances for network protection. The project involved digitizing paper-based processes, resulting in a 60% reduction in administrative overhead.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "FortiGate", "Azure"],
    features: [
      "Corporate web presence",
      "Employee self-service portal",
      "FortiGate firewall integration",
      "Automated onboarding workflows",
      "Document digitalization system",
      "Performance review automation"
    ],
    image: "https://via.placeholder.com/600x400/0a0a0a/00ffff?text=ADM+Asesoria",
    liveUrl: "#",
    achievement: "Head of IT Project"
  },
  {
    id: "mexathon-google",
    title: "Mexathon x Google",
    shortDescription: "AI Business Optimizer leveraging Google Vertex AI for intelligent business recommendations.",
    longDescription: "Developed an AI-powered business optimization tool during Mexathon in collaboration with Google. The platform uses Vertex AI to analyze business metrics, identify inefficiencies, and provide actionable recommendations. Features natural language processing for business query interpretation and automated report generation.",
    techStack: ["Python", "Google Vertex AI", "FastAPI", "React", "BigQuery", "Cloud Run"],
    features: [
      "AI-driven business insights",
      "Natural language query interface",
      "Automated recommendation engine",
      "Real-time metrics dashboard",
      "Custom report generation"
    ],
    image: "https://via.placeholder.com/600x400/0a0a0a/00ffff?text=Mexathon+AI",
    sourceUrl: "#",
    achievement: "Google Vertex AI"
  },
  {
    id: "hackmty",
    title: "HackMTY",
    shortDescription: "Top 8 Finalist - AI Financial Analysis tool for intelligent investment insights.",
    longDescription: "Built an AI-powered financial analysis platform that earned a Top 8 position at HackMTY. The tool analyzes market trends, company financials, and news sentiment to provide comprehensive investment recommendations. Features include portfolio optimization, risk assessment, and automated trading signals.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Alpha Vantage API"],
    features: [
      "Real-time market analysis",
      "Sentiment analysis engine",
      "Portfolio optimization tools",
      "Risk assessment algorithms",
      "Automated trading signals"
    ],
    image: "https://via.placeholder.com/600x400/0a0a0a/00ffff?text=HackMTY+Finance",
    sourceUrl: "#",
    achievement: "Top 8 - HackMTY"
  }
];

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "soft";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "JavaFx", level: 80, category: "frontend" },
  
  // Backend
  { name: "Python / FastAPI", level: 88, category: "backend" },
  { name: "Node.js / Express", level: 85, category: "backend" },
  { name: "Java", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 82, category: "backend" },
  { name: "Docker / AWS", level: 78, category: "backend" },
  
  // Tools
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "Linux / Bash", level: 80, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "CI/CD Pipelines", level: 75, category: "tools" },
  { name: "Vercel", level: 90, category: "tools" },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Sole IT Owner",
    company: "KNQ Transporte",
    period: "2023 - Present",
    description: "Leading all technology initiatives for a logistics company, from infrastructure to software development.",
    highlights: [
      "Built complete ERP system from scratch",
      "Develop and train an AI application to detect asleep drivers at the wheel",
      "Automated 80% of HR processes",
      "Implemented real-time fleet tracking",
      "Reduced operational costs by 35%"
    ]
  },
  {
    title: "Tech Lead",
    company: "ADM Asesoría",
    period: "2022 - 2023",
    description: "Managed IT infrastructure and led digital transformation initiatives.",
    highlights: [
      "Deployed FortiGate security infrastructure",
      "Digitized paper-based workflows",
      "Developed corporate web platform",
      "Trained staff on new systems"
    ]
  },
  {
    title: "President",
    company: "Computer Systems Student Chapter",
    period: "2022 - 2023",
    description: "Led the student chapter, organizing tech events and fostering community growth.",
    highlights: [
      "Organized 10+ technical workshops",
      "Grew membership by 150%",
      "Established industry partnerships",
      "Mentored junior students"
    ]
  }
];

export interface Achievement {
  title: string;
  event: string;
  icon: "trophy" | "medal" | "star" | "award";
  year: string;
}

export const achievements: Achievement[] = [
  { title: "3rd Place", event: "NASA Space Apps Challenge", icon: "trophy", year: "2024" },
  { title: "Top 8", event: "HackMTY", icon: "medal", year: "2024" },
  { title: "Participant", event: "Mexathon x Google", icon: "star", year: "2024" },
  { title: "Chapter President", event: "IEEE CS Student Chapter", icon: "award", year: "2023" },
];
