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
      { label: "Structured prompting", level: "92%" },
      { label: "Output logic", level: "84%" },
      { label: "Prompt optimization", level: "88%" },
      { label: "AI instruction design", level: "81%" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { label: "Workflow exploration", level: "89%" },
      { label: "Tool chaining", level: "82%" },
      { label: "Creative automation", level: "85%" },
      { label: "AI-assisted research", level: "78%" },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      { label: "Content direction", level: "87%" },
      { label: "Campaign thinking", level: "83%" },
      { label: "Audience clarity", level: "79%" },
      { label: "Digital positioning", level: "86%" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { label: "React & TypeScript", level: "80%" },
      { label: "Tailwind CSS", level: "84%" },
      { label: "Responsive UI", level: "78%" },
      { label: "Interaction polish", level: "76%" },
    ],
  },
  {
    title: "Problem Solving",
    items: [
      { label: "Clear breakdowns", level: "88%" },
      { label: "Practical solutions", level: "90%" },
      { label: "Creative thinking", level: "82%" },
      { label: "Continuous learning", level: "91%" },
    ],
  },
];

export const projects = [
  {
    title: "Prompt Workspace",
    eyebrow: "AI Concept",
    summary: "A clean prompt hub for saving, organizing, and reusing smarter AI workflows.",
    tags: ["Prompt Design", "Workflow"],
    accent: "from-[rgba(0,255,163,0.18)] to-transparent",
    meta: "Premium system idea",
  },
  {
    title: "Digital Growth Landing",
    eyebrow: "Brand Page",
    summary: "A polished landing experience focused on clarity, trust, and premium presentation.",
    tags: ["Landing Page", "UX"],
    accent: "from-[rgba(101,163,255,0.18)] to-transparent",
    meta: "Conversion-first design",
  },
  {
    title: "Creative Frontend Lab",
    eyebrow: "UI Practice",
    summary: "A dark UI playground for testing layout, motion, and responsive design ideas.",
    tags: ["React", "Motion"],
    accent: "from-[rgba(192,168,255,0.16)] to-transparent",
    meta: "Refined visual experiments",
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
