export const person = {
  name: "Jahurul Haque Nill",
  brand: "Zahurul",
  role: "Student | Prompt Engineer | Digital Marketer",
  email: "jahurul4q@gmail.com",
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
    items: ["Structured prompting", "Output logic", "Prompt optimization", "AI instruction design"],
  },
  {
    title: "AI Tools",
    items: ["Workflow exploration", "Tool chaining", "Creative automation", "AI-assisted research"],
  },
  {
    title: "Digital Marketing",
    items: ["Content direction", "Campaign thinking", "Audience clarity", "Digital positioning"],
  },
  {
    title: "Frontend Development",
    items: ["React & TypeScript", "Tailwind CSS", "Responsive UI", "Interaction polish"],
  },
  {
    title: "Problem Solving",
    items: ["Clear breakdowns", "Practical solutions", "Creative thinking", "Continuous learning"],
  },
];

export const projects = [
  {
    title: "Prompt Workspace",
    items: ["Reusable prompt systems", "Structured output patterns", "Cleaner AI workflow design"],
  },
  {
    title: "Digital Growth Landing",
    items: ["Premium landing presentation", "Better trust and clarity", "Smoother digital conversion flow"],
  },
  {
    title: "Creative Frontend Lab",
    items: ["Dark UI practice builds", "Responsive layout refinement", "Motion and interaction polish"],
  },
];

export const contactLinks = [
  {
    label: "Email",
    caption: "jahurul4q@gmail.com",
    href: `mailto:${person.email}`,
    external: false,
  },
  {
    label: "GitHub",
    caption: "JAHURULNILL",
    href: person.github,
    external: true,
  },
  {
    label: "Facebook",
    caption: "error.nill",
    href: person.facebook,
    external: true,
  },
];
