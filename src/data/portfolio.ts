export const person = {
  name: "Md Jahurul Haque",
  brand: "Jahurul",
  role: "Marketing & Customer Relations Professional",
  email: "jahurul4q@gmail.com",
  phone: "+880 1799-298672",
  whatsapp: "8801799298672",
  location: "Baghulpur, Sujanagar, Pabna, Bangladesh",
  photo:
    "https://raw.githubusercontent.com/JAHURULNILL/jahurul/refs/heads/main/zahurul_pic.png",
  github: "https://github.com/JAHURULNILL",
  facebook: "https://fb.com/error.nill",
  linkedin: "https://www.linkedin.com/in/md-jahurul-haque",
};

export const navLinks = [
  { id: "about", href: "#about", label: "About" },
  { id: "skills", href: "#skills", label: "Skills" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "education", href: "#education", label: "Education" },
  { id: "contact", href: "#contact", label: "Let's Talk" },
];

export const heroHighlights = [
  { label: "Years Experience", value: "3+" },
  { label: "Accounts Opened", value: "1,200+" },
  { label: "Daily Transactions", value: "30+" },
  { label: "Total Transactions", value: "23,000+" },
];

export const heroRotatingTexts = [
  "Agent Banking Representative at Dutch-Bangla Bank",
  "3 Years of Customer Service & Banking Operations",
  "Strong in Cash Management & Client Relations",
  "BBA in Marketing Student — Ready to Grow",
];

export const whoAmIBlocks = [
  [
    "identity.md",
    "Md Jahurul Haque",
    "Marketing & Customer Relations Professional",
    "Agent Banking Representative",
    "BBA in Marketing Student",
  ].join("\n"),
  [
    "strengths.ts",
    "const strengths = [",
    '  "Customer Relationship Management",',
    '  "Effective Communicator",',
    '  "Quick Learner & Adaptable",',
    '  "Detail-Oriented Record Keeping"',
    "]",
  ].join("\n"),
  [
    "mission.md",
    "A motivated professional with hands-on experience",
    "in customer service and banking operations.",
    "Ready to contribute and grow with the organization.",
  ].join("\n"),
].map((block) => `> cat ${block}`);

export const profileIntroBlocks = [
  "A motivated professional with 3 years of hands-on experience in customer service and banking operations. I work well with people, handle pressure without losing focus, and always make sure the customer leaves satisfied.",
  "I am looking for a role where I can bring this attitude, contribute to the team, and grow with the organization. Strong in customer handling, cash management, and digital marketing.",
  "Detail-oriented with proven experience in financial record keeping, rural and semi-urban client service, and compliance coordination with branch officials.",
];

export const skills = [
  {
    title: "Customer Service",
    items: [
      { label: "Customer Handling", level: "95%" },
      { label: "Complaint Resolution", level: "92%" },
      { label: "Client Relationship Management", level: "90%" },
      { label: "Communication", level: "93%" },
    ],
  },
  {
    title: "Banking & Finance",
    items: [
      { label: "Cash Management", level: "94%" },
      { label: "Transaction Processing", level: "93%" },
      { label: "Account Opening & Documentation", level: "90%" },
      { label: "Financial Record Keeping", level: "91%" },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      { label: "Content Strategy", level: "85%" },
      { label: "Digital Positioning", level: "82%" },
      { label: "Campaign Planning", level: "80%" },
      { label: "Audience Targeting", level: "83%" },
    ],
  },
  {
    title: "Professional Skills",
    items: [
      { label: "MS Word / Excel", level: "88%" },
      { label: "Problem Solving", level: "90%" },
      { label: "Time Management", level: "87%" },
      { label: "Leadership & Teamwork", level: "85%" },
    ],
  },
  {
    title: "Technology & Internet",
    items: [
      { label: "Internet & Web Browsing", level: "92%" },
      { label: "Website Management", level: "80%" },
      { label: "Software Knowledge", level: "82%" },
      { label: "AI Tools & Applications", level: "78%" },
    ],
  },
];

export const experience = [
  {
    company: "Dutch-Bangla Bank Limited",
    position: "Agent Banking Representative",
    duration: "2021 – 2024 | 3 Years",
    responsibilities: [
      "Processed daily banking transactions — deposits, withdrawals, and fund transfers — with full accuracy and zero discrepancies.",
      "Opened new customer accounts and guided clients through required documentation step by step.",
      "Maintained daily financial records and prepared end-of-day transaction reports consistently.",
      "Served rural and semi-urban clients with patience and professionalism, often resolving issues on the spot.",
      "Handled customer complaints directly and followed through until each case was fully resolved.",
      "Coordinated with branch officials to ensure all operations met compliance standards.",
    ],
  },
];

export const education = [
  {
    degree: "BBA in Marketing (4th Year Running)",
    institution: "National University, Bangladesh",
    year: "2021 – Present",
    gpa: "",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Dr. Zahurul Kamal Degree (Hons.) College, Pabna",
    year: "Rajshahi Board — 2020",
    gpa: "GPA: 3.67",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Alhaj Iman Ali High School, Pabna",
    year: "Rajshahi Board — 2018",
    gpa: "GPA: 3.50",
  },
];

export const projects = [
  {
    eyebrow: "Desktop Software",
    title: "NDM — Nill Download Manager",
    summary:
      "An IDM-style download manager for Linux and Windows, designed and built from scratch. Fast multi-connection downloads, a browser companion that catches downloads and video as you browse, and one-click video saving with quality selection — all in a clean glass interface.",
    tags: ["Rust", "Tauri", "Linux + Windows", "Browser Extension"],
    meta: "Open Source · v1.8.0",
    accent: "from-emerald-400/60 via-teal-500/20 to-transparent",
    link: "https://ndm.zahurul.tech",
    cta: "Visit site",
  },
  {
    eyebrow: "Web App",
    title: "Personal Dashboard",
    summary:
      "My daily command center in Bengali — job applications, learning progress, quotes, news and fascinating facts in one calm, glass-styled page. It refreshes itself every morning, so each day opens with a new edition.",
    tags: ["JavaScript", "Vercel", "Daily Automation"],
    meta: "Live · Updated Daily",
    accent: "from-sky-400/55 via-indigo-500/20 to-transparent",
    link: "https://dashboard.zahurul.tech",
    cta: "Open dashboard",
  },
  {
    eyebrow: "YouTube Channel",
    title: "Obak Prithibi TV",
    summary:
      "A Bengali documentary channel I created — short, carefully researched films about the wonders of our world, with warm narration and frame-perfect editing. Every episode is produced end to end by me.",
    tags: ["Documentary Shorts", "Bengali", "Video Production"],
    meta: "YouTube · @ObakPrithibiTV",
    accent: "from-rose-400/55 via-orange-400/20 to-transparent",
    link: "https://www.youtube.com/@ObakPrithibiTV",
    cta: "Watch channel",
  },
];

export const keyStrengths = [
  "Strong Customer Relationship Management",
  "Effective Communicator in Bengali & English",
  "Resilient, Empathetic & Community-Focused",
  "Quick Learner with High Adaptability",
  "Detail-Oriented Financial Record Keeping",
  "Leadership & Teamwork in Group Settings",
];

export const languages = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Proficient" },
];

export const contactLinks = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${person.whatsapp}`,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${person.email}`,
    external: false,
  },
  {
    label: "Phone",
    href: `tel:${person.phone.replace(/[\s-]/g, "")}`,
    external: false,
  },
  {
    label: "LinkedIn",
    href: person.linkedin,
    external: true,
  },
];
