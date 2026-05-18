export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const portfolioData = {
  name: "Phyoe Wai",
  title: "Software Engineer & AI Solutions Architect",
  location: "Yangon, Myanmar / Remote",
  status: "● Active - Building AI-driven experiences",
  avatarSeed: "phyoe-wai",
  bio: "I design and engineer high-performance systems, robust APIs, and immersive web experiences. With a strong focus on clean architecture, responsive designs, and interactive interfaces, I build software that wows users at first glance.",
  terminalCommand: "npx phyoe-wai",
  email: "phyoe.wai.dev@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/phyoe-wai", iconName: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/phyoe-wai", iconName: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com/phyoe_wai", iconName: "Twitter" },
    { name: "Email", url: "mailto:phyoe.wai.dev@gmail.com", iconName: "Mail" }
  ],
  skillsCategories: [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Go", "Python", "SQL", "Rust"]
    },
    {
      title: "Frontend Frameworks",
      skills: ["Next.js (App Router)", "React 19", "Tailwind CSS v4", "Redux Toolkit", "Framer Motion"]
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "Docker", "REST & GraphQL"]
    },
    {
      title: "AI & Tooling",
      skills: ["Gemini API Integration", "LangChain", "Vector Databases", "Git", "Neovim", "Linux"]
    }
  ] as SkillCategory[],
  experiences: [
    {
      year: "2024 - Present",
      role: "Lead Full-Stack & AI Systems Architect",
      company: "Antigravity AI Lab",
      bullets: [
        "Architected core agentic systems capable of autonomous file manipulation and workspace exploration.",
        "Engineered single-page frameworks with Next.js and Tailwind CSS, improving application load performance by 35%.",
        "Orchestrated vector-db pipelines to index codebase repositories for real-time model analysis."
      ]
    },
    {
      year: "2022 - 2024",
      role: "Senior Software Engineer",
      company: "CoreTech Solutions",
      bullets: [
        "Developed responsive Web3 dashboard portals with React, handling 50k+ active daily users.",
        "Refactored heavy legacy backend modules to Node.js / PostgreSQL service pipelines, cutting CPU loads by 45%.",
        "Mentored a cross-functional team of 6 engineers on Next.js best practices and UI/UX responsive flows."
      ]
    },
    {
      year: "2020 - 2022",
      role: "Full-Stack Developer",
      company: "ByteCraft Studio",
      bullets: [
        "Implemented pixel-perfect HTML5/Tailwind layouts based on complex UI designer mockups.",
        "Integrated secure payment workflows (Stripe API) and OAuth user authentication handlers.",
        "Configured robust local dev builds, improving hot-reload speed for developer tools."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "Antigravity Workspace Studio",
      description: "An AI-powered, browser-native IDE designed for real-time code editing, persistent sandbox execution, and terminal simulation.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "WebSockets"],
      githubUrl: "https://github.com/phyoe-wai/antigravity-studio"
    },
    {
      title: "Synapse Search Accelerator",
      description: "A fast, sub-millisecond semantic search engine leveraging vector embedding spaces, Docker container clusters, and a sleek web dashboard.",
      tags: ["Python", "FastAPI", "Qdrant DB", "React", "Docker"],
      githubUrl: "https://github.com/phyoe-wai/synapse-search"
    },
    {
      title: "Retro Terminal Visualizer",
      description: "A customizable graphic builder for producing retro sci-fi developer dashboard layouts. Features customized fonts and glassmorphic colors.",
      tags: ["TypeScript", "React", "HTML5 Canvas", "Tailwind v4"],
      githubUrl: "https://github.com/phyoe-wai/retro-terminal"
    }
  ] as Project[],
  terminalResponses: {
    help: `Available commands:
  about    - Summary of who I am and what I build
  skills   - Detailed breakdown of my technology stack
  projects - Catalog of recent open-source works
  socials  - List of channels to connect with me
  neofetch - System specification summary banner
  clear    - Clear console outputs`,
    
    about: `Phyoe Wai - Software Engineer & Systems Architect
------------------------------------------------------
Based in Yangon, Myanmar, I specialize in crafting high-efficiency architectures, 
designing sleek interfaces, and bridging the gap between web experiences and AI systems. 
I love glassmorphism design, terminal interfaces, and writing highly clean, TypeScript code.`,
    
    skills: `My Core Technology Stack:
---------------------------------------------
Languages        : TypeScript, JavaScript, Go, Python, SQL, Rust
Frontend         : Next.js (App Router), React 19, Tailwind CSS v4, Framer Motion
Backend/Systems  : Node.js, Express, NestJS, PostgreSQL, Docker, REST & GraphQL
AI/Tooling       : Gemini API, LangChain, Git, Neovim, Linux CLI`,
    
    projects: `Featured Projects:
---------------------------------------------
1. Antigravity Workspace Studio
   - Next.js, Go, WebSockets, Tailwind v4
   - AI-powered browser native workspace environment.
2. Synapse Search Accelerator
   - Python, FastAPI, Qdrant DB, Docker
   - Sub-millisecond AI-powered semantic search engine.
3. Retro Terminal Visualizer
   - TypeScript, React, Canvas, Tailwind CSS
   - Sci-fi developer dashboard builder layout.`,
    
    socials: `Connect with me:
---------------------------------------------
GitHub   : https://github.com/phyoe-wai
LinkedIn : https://linkedin.com/in/phyoe-wai
Twitter  : https://twitter.com/phyoe_wai
Email    : phyoe.wai.dev@gmail.com`,
    
    neofetch: `phyoe@antigravity
-----------------
OS       : Antigravity OS v4.16.2-stable
Shell    : zsh 5.9 (x86_64-pc-linux-gnu)
Uptime   : 92 days, 14 hours, 28 mins
Model    : Gemini 3 Flash Hybrid Co-Developer
Packages : 1420 (npm), 34 (pip), 12 (cargo)
Theme    : Deep Purple / Neon Violet Glassmorphism
CPU      : Antigravity Core 2026 (16 Cores) @ 4.80GHz
Memory   : 32 GB LPDDR5 (12.4 GB Used / 64 GB Virtual)`
  } as Record<string, string>
};
