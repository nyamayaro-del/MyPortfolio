import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Figma,
  Github,
  Layers3,
  LineChart,
  Rocket,
  Smartphone
} from "lucide-react";

export const personalInfo = {
  name: "Criswell Nyamayaro",
  role: "AI/ML Engineer",
  tagline:
    "I design intelligent products that connect machine learning insight with polished full-stack experiences.",
  email: "criswellnyamayaro876@gmail.com",
  github: "https://github.com/nyamayaro-del",
  linkedin: "https://linkedin.com/in/criswell-nyamayaro-a02b96394"
};

export const typingRoles = [
  "Machine Learning Builder",
  "Full-Stack Problem Solver",
  "AI Product Prototyper"
] as const;

export const stats = [
  { label: "AI projects shipped", value: "08+" },
  { label: "Model experiments", value: "25+" },
  { label: "Frontend builds", value: "15+" }
];

export const techStack = [
  { name: "Python", icon: BrainCircuit },
  { name: "FastAPI", icon: Rocket },
  { name: "PyTorch", icon: Cpu },
  { name: "Next.js", icon: Layers3 },
  { name: "TypeScript", icon: Code2 },
  { name: "PostgreSQL", icon: Database }
];

export const highlights = [
  {
    title: "AI-first thinking",
    description:
      "I prioritize measurable model outcomes, data quality, and human-centered product flows when I design solutions."
  },
  {
    title: "Engineering discipline",
    description:
      "I enjoy building reliable APIs, responsive interfaces, and deployment pipelines that move a project from prototype to production."
  }
];

export const projects = [
  {
    title: "VisionCrop Disease Classifier",
    category: "AI Project",
    problem:
      "Smallholder farmers often wait too long to identify crop disease, which leads to lower yield and expensive intervention.",
    solution:
      "Built a CNN-powered diagnosis workflow that classifies leaf images, explains confidence bands, and surfaces next-step treatment guidance.",
    technologies: ["Python", "PyTorch", "FastAPI", "OpenCV", "Next.js"],
    impact: "Reached 91.8% validation accuracy and reduced diagnosis time from hours to seconds in pilot tests.",
    github: "https://github.com/nyamayaro-del/visioncrop",
    demo: "https://visioncrop-demo.vercel.app"
  },
  {
    title: "Campus Hub Analytics",
    category: "Full-Stack Project",
    problem:
      "Student organizations lacked a single place to manage events, measure engagement, and forecast attendance.",
    solution:
      "Created a full-stack platform with dashboards, event publishing, secure auth, and predictive attendance insights generated from historical signups.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    impact: "Improved club event visibility and increased average event attendance by 34% during semester rollout.",
    github: "https://github.com/nyamayaro-del/campus-hub",
    demo: "https://campus-hub.vercel.app"
  },
  {
    title: "PulseFit Companion",
    category: "Mobile / React Project",
    problem:
      "Users struggled to maintain consistency because most health apps delivered generic plans with little feedback.",
    solution:
      "Designed a React Native companion app with adaptive activity recommendations, streak tracking, and intelligent nudges based on user behavior.",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
    impact: "Lifted 14-day retention by 22% in peer usability testing through more personalized recommendation loops.",
    github: "https://github.com/nyamayaro-del/pulsefit",
    demo: ""
  }
] as const;

export const skillGroups = [
  {
    title: "AI / ML",
    icon: Bot,
    skills: [
      { name: "Model Training", level: 88 },
      { name: "NLP Prototyping", level: 82 },
      { name: "Computer Vision", level: 79 }
    ]
  },
  {
    title: "Frontend",
    icon: Smartphone,
    skills: [
      { name: "Next.js / React", level: 90 },
      { name: "TypeScript", level: 87 },
      { name: "UI Systems", level: 85 }
    ]
  },
  {
    title: "Backend",
    icon: Cloud,
    skills: [
      { name: "FastAPI", level: 89 },
      { name: "REST API Design", level: 91 },
      { name: "SQL / Data Modeling", level: 78 }
    ]
  },
  {
    title: "Tools",
    icon: Figma,
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Experiment Tracking", level: 72 }
    ]
  }
];

export const contactCards = [
  {
    title: "GitHub",
    handle: "@CriswellNyamayaro",
    href: personalInfo.github,
    icon: Github
  },
  {
    title: "LinkedIn",
    handle: "Criswell-Nyamayaro",
    href: personalInfo.linkedin,
    icon: LineChart
  }
];
