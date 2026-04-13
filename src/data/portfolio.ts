export const person = {
  name: "Jahurul Haque Nill",
  brand: "Zahurul",
  role: "Student | Prompt Engineer | Digital Marketer",
  email: "jahurulhaquenill@gmail.com",
  location: "Bangladesh",
  photo:
    "https://raw.githubusercontent.com/JAHURULNILL/portfolio/main/file_0000000023fc720babf6f02003b2ab93.png",
  github: "https://github.com/JAHURULNILL",
  facebook: "https://fb.com/error.nill",
  linkedin: "https://www.linkedin.com/",
};

export const navLinks = [
  { id: "about", href: "#about", label: "About" },
  { id: "skills", href: "#skills", label: "Skills" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "contact", href: "#contact", label: "Let's Talk" },
];

export const heroTerminalBlocks = [
  [
    "➜ cat profile.json",
    "{",
    '  "role": "Student | Prompt Engineer | Digital Marketer",',
    '  "focus": "Frontend learning, AI tools, creative work",',
    '  "status": "Building smart digital experiences",',
    '  "location": "Bangladesh"',
    "}",
  ].join("\n"),
  [
    "➜ cat skills.ts",
    "const skills = [",
    '  "Prompt Engineering",',
    '  "AI Tools",',
    '  "Digital Marketing",',
    '  "Frontend Development"',
    "]",
  ].join("\n"),
  [
    "➜ cat mission.md",
    "Building modern, premium, and useful digital experiences",
    "with creativity, learning, and smart problem solving.",
  ].join("\n"),
];

export const whoAmIBlocks = [
  [
    "identity.md",
    "Jahurul Haque Nill",
    "Student",
    "Prompt Engineer",
    "Digital Marketer",
  ].join("\n"),
  [
    "focus.ts",
    "const focus = [",
    '  "AI tools",',
    '  "prompt writing",',
    '  "frontend learning",',
    '  "modern digital creation"',
    "]",
  ].join("\n"),
  [
    "mission.md",
    "Growing as a creative, tech-focused professional",
    "while building premium digital experiences",
    "through continuous learning and thoughtful execution.",
  ].join("\n"),
].map((block) => `> cat ${block}`);

export const skills = [
  {
    title: "Prompt Engineering",
    description: "Designing structured prompts that produce cleaner outputs, clearer logic, and better AI guidance.",
    kicker: "prompt",
    glow: "rgba(0,255,163,0.18)",
  },
  {
    title: "AI Tools",
    description: "Exploring practical AI workflows that improve speed, creativity, and digital problem solving.",
    kicker: "ai",
    glow: "rgba(56,189,248,0.18)",
  },
  {
    title: "Digital Marketing",
    description: "Balancing strategy and presentation so content and campaigns feel more intentional and effective.",
    kicker: "growth",
    glow: "rgba(89,104,255,0.18)",
  },
  {
    title: "Frontend Development",
    description: "Learning to build responsive, polished interfaces with clean structure, smooth motion, and premium detail.",
    kicker: "frontend",
    glow: "rgba(192,168,255,0.18)",
  },
  {
    title: "Problem Solving",
    description: "Breaking down ideas thoughtfully and finding practical ways to turn concepts into useful outcomes.",
    kicker: "logic",
    glow: "rgba(0,255,163,0.16)",
  },
];

export const projects = [
  {
    title: "Prompt Workspace",
    description:
      "A concept for organizing reusable AI prompt systems, output patterns, and structured idea flows inside a cleaner developer-style interface.",
    tags: ["React", "TypeScript", "AI Workflow"],
    kicker: "featured concept",
    year: "2026",
    meta: "System thinking for better prompt quality",
  },
  {
    title: "Digital Growth Landing",
    description:
      "A premium landing experience focused on stronger visual trust, modern layout discipline, and smoother conversions for digital services.",
    tags: ["Tailwind", "UX", "Marketing"],
    kicker: "ui case",
    year: "2026",
    meta: "Premium presentation with stronger clarity",
  },
  {
    title: "Creative Frontend Lab",
    description:
      "An ongoing space for practicing modern frontend builds, dark developer-inspired visuals, and refined motion interactions across devices.",
    tags: ["Framer Motion", "Portfolio", "Responsive"],
    kicker: "learning build",
    year: "2026",
    meta: "Hands-on exploration with polished execution",
  },
];

export const contactLinks = [
  {
    label: "Email",
    caption: "Start a conversation directly",
    href: `mailto:${person.email}`,
    external: false,
  },
  {
    label: "GitHub",
    caption: "See my public work and profile",
    href: person.github,
    external: true,
  },
  {
    label: "Facebook",
    caption: "Connect on social",
    href: person.facebook,
    external: true,
  },
  {
    label: "LinkedIn",
    caption: "Professional profile",
    href: person.linkedin,
    external: true,
  },
];
