export const person = {
  name: "Zahurul Haque Nill",
  brand: "Zahurul",
  role: "Student | Prompt Engineer | Digital Marketer",
  email: "jahurul4q@gmail.com",
  location: "Bangladesh",
  photo:
    "https://raw.githubusercontent.com/JAHURULNILL/jahurul/refs/heads/main/zahurul_pic.png",
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
    "> cat profile.json",
    "{",
    '  "role": "Student | Prompt Engineer | Digital Marketer",',
    '  "focus": "Frontend learning, AI tools, creative work"',
    "}",
  ].join("\n"),
  [
    "> cat skills.ts",
    "const skills = [",
    '  "Prompt Engineering",',
    '  "AI Tools",',
    '  "Digital Marketing",',
    '  "Frontend Development"',
    "]",
  ].join("\n"),
  [
    "> cat mission.md",
    "Building modern, premium, and useful digital experiences",
    "with creativity, learning, and smart problem solving.",
  ].join("\n"),
];

export const whoAmIBlocks = [
  [
    "identity.md",
    "Zahurul Haque Nill",
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

export const profileIntroBlocks = [
  "I'm building my path through AI tools, creative digital work, and modern frontend learning with a focus on polished experiences.",
  "I enjoy blending prompt thinking, design awareness, and digital strategy into work that feels clean, useful, and modern.",
  "My goal is to keep learning, keep improving, and create premium digital experiences with thoughtful execution.",
];

export const skills = [
  {
    title: "Prompt Engineering",
    items: [
      { label: "Structured prompting", width: "w-24 sm:w-28" },
      { label: "Output logic", width: "w-18 sm:w-20" },
      { label: "Prompt optimization", width: "w-20 sm:w-24" },
      { label: "AI instruction design", width: "w-16 sm:w-18" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { label: "Workflow exploration", width: "w-22 sm:w-26" },
      { label: "Tool chaining", width: "w-17 sm:w-20" },
      { label: "Creative automation", width: "w-19 sm:w-22" },
      { label: "AI-assisted research", width: "w-14 sm:w-16" },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      { label: "Content direction", width: "w-21 sm:w-24" },
      { label: "Campaign thinking", width: "w-18 sm:w-21" },
      { label: "Audience clarity", width: "w-15 sm:w-18" },
      { label: "Digital positioning", width: "w-20 sm:w-23" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { label: "React & TypeScript", width: "w-23 sm:w-27" },
      { label: "Tailwind CSS", width: "w-20 sm:w-24" },
      { label: "Responsive UI", width: "w-16 sm:w-19" },
      { label: "Interaction polish", width: "w-18 sm:w-22" },
    ],
  },
  {
    title: "Problem Solving",
    items: [
      { label: "Clear breakdowns", width: "w-19 sm:w-22" },
      { label: "Practical solutions", width: "w-23 sm:w-26" },
      { label: "Creative thinking", width: "w-17 sm:w-20" },
      { label: "Continuous learning", width: "w-21 sm:w-24" },
    ],
  },
];

export const projects = [
  {
    title: "Prompt Workspace",
    eyebrow: "AI System Concept",
    summary:
      "A premium concept for organizing reusable prompts, response structures, and cleaner AI workflows inside a calm, developer-inspired interface.",
    tags: ["Prompt Design", "Workflow", "UI System"],
    accent: "from-[rgba(0,255,163,0.18)] to-transparent",
    meta: "Reusable prompt architecture",
  },
  {
    title: "Digital Growth Landing",
    eyebrow: "Marketing Experience",
    summary:
      "A polished landing page direction focused on trust, visual hierarchy, and stronger digital presentation for premium services and modern brands.",
    tags: ["Landing Page", "UX", "Brand Feel"],
    accent: "from-[rgba(101,163,255,0.18)] to-transparent",
    meta: "Clearer conversion storytelling",
  },
  {
    title: "Creative Frontend Lab",
    eyebrow: "Practice & Exploration",
    summary:
      "An ongoing frontend lab where dark UI systems, responsive layout discipline, and refined motion ideas are explored and improved across devices.",
    tags: ["React", "Responsive", "Motion"],
    accent: "from-[rgba(192,168,255,0.16)] to-transparent",
    meta: "Refined visual experimentation",
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: `mailto:${person.email}`,
    external: false,
  },
  {
    label: "GitHub",
    href: person.github,
    external: true,
  },
  {
    label: "Facebook",
    href: person.facebook,
    external: true,
  },
];
