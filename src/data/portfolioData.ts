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
  title: "Software Engineer & Linux Enthusiast",
  location: "Yangon, Myanmar",
  status: "● Active - Building AI-driven experiences",
  avatarSeed: "phyoe-wai",
  bio: "I am a Software Engineer dedicated to building high-performance web applications and robust system architectures. With a deep appreciation for the efficiency of the Linux environment, I bridge the gap between elegant frontend interfaces and stable, scalable backend logic.",
  terminalCommand: "whoami",
  email: "phyoe.wai.dev@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/phyoewai-io", iconName: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/phyoe-wai", iconName: "Linkedin" },
    // { name: "Twitter", url: "https://twitter.com/phyoe_wai", iconName: "Twitter" },
    { name: "Email", url: "mailto:phyoewai2311@gmail.com", iconName: "Mail" }
  ],
  skillsCategories: [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Java", "PHP", "SQL", "Dark"]
    },
    {
      title: "Frontend Frameworks",
      skills: ["Next.js (App Router)", "React", "Tailwind CSS", "Redux Toolkit", "Framer Motion"]
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Laravel", "Docker", "Git"]
    },
    {
      title: "AI & Tooling",
      skills: ["Gemini API Integration", "LangChain", "Claude Code", "Git", "Linux"]
    }
  ] as SkillCategory[],
  experiences: [
    {
      year: "2024 - Present",
      role: "Software Engineer",
      company: "AcePlus Solutions Company Limited",
      bullets: [
        "Experienced Software Engineer focused on building scalable system architectures and high-performance web applications.",
        "I bridge the gap between elegant frontend design and robust backend logic, fueled by a deep passion for Linux and workflow automation.",
        "Dedicated to writing clean, maintainable code and mentoring teams to deliver impactful digital solutions."
      ]
    },
    {
      year: "2022 - 2024",
      role: "Junior Web Developer",
      company: "Advanced Technology Solutions",
      bullets: [
        "Ambitious Web Developer with a strong foundation in modern frameworks and a drive for continuous learning.",
        "I specialize in building responsive, user-centric interfaces while exploring the intricacies of server-side logic and system administration.",
        "Eager to contribute to collaborative projects and solve complex problems through efficient, well-documented code"
      ]
    },
    // {
    //   year: "2020 - 2022",
    //   role: "Full-Stack Developer",
    //   company: "ByteCraft Studio",
    //   bullets: [
    //     "Implemented pixel-perfect HTML5/Tailwind layouts based on complex UI designer mockups.",
    //     "Integrated secure payment workflows (Stripe API) and OAuth user authentication handlers.",
    //     "Configured robust local dev builds, improving hot-reload speed for developer tools."
    //   ]
    // }
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
  projects - Catalog of recent works
  socials  - List of channels to connect with me
  neofetch - System specification summary banner
  clear    - Clear console outputs`,
    
    about: `Phyoe Wai - Software Engineer
------------------------------------------------------
Based in Yangon, Myanmar, I am a Software Engineer dedicated to building high-performance web applications and robust system architectures. With a deep appreciation for the efficiency of the Linux environment, I bridge the gap between elegant frontend interfaces and stable, scalable backend logic.`,
    
    skills: `My Core Technology Stack:
---------------------------------------------
Languages        : TypeScript, JavaScript, Java, PHP, SQL, Dark
Frontend         : Next.js (App Router), React, Tailwind CSS, Framer Motion
Backend/Systems  : Node.js, PHP, Docker, Git
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
GitHub   : https://github.com/phyoewai-io
LinkedIn : https://linkedin.com/in/phyoe-wai
Email    : phyoewai2311@gmail.com`,
    
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
