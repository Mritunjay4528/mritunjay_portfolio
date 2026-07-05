export const profile = {
  name: "Mritunjay Kumar Mandal",
  handle: "mritunjay",
  role: "Backend-leaning Full-Stack Developer",
  tagline:
    "I build the systems that run underneath the product — APIs, pipelines, and the occasional Git server from scratch.",
  location: "Bhubaneswar, India",
  email: "mritunjay4528@gmail.com",
  github: "https://github.com/Mritunjay4528",
  linkedin: "https://www.linkedin.com/in/mritunjay-mandal-bb640a322",
  resumeHref: "/resume-mritunjay.pdf",
  summary:
    "Computer Science undergrad who spends more time in backend architecture and infra than in figma. Comfortable across the stack — React and Express on the surface, PostgreSQL, Redis, and Docker underneath — with a growing interest in the machine-learning side of things: scikit-learn, pandas, and model evaluation.",
};

export const about = {
  paragraphs: [
    "I'm a B.Tech Computer Science student at KIIT Bhubaneswar (2024–2028), currently sitting at a 7.54 CGPA while spending most of my actual time shipping side projects that are, admittedly, more ambitious than any assignment requires.",
    "My interest keeps pulling toward the backend: authentication systems, queues, containerized job execution, database schemas. I like the kind of problem where the constraint isn't 'what should this look like' but 'how do I make this run reliably at 2am when nobody's watching.'",
    "Outside of coursework, I'm a Web Developer and Project POC at eLabs Society, where I coordinate deliverables across a small team and write a fair share of the backend myself.",
  ],
};

export const skills = [
  {
    group: "languages",
    items: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    group: "web",
    items: ["Node.js", "Express", "React", "HTML", "CSS"],
  },
  {
    group: "infra",
    items: ["Docker", "Redis", "Kubernetes", "Git", "GitHub Actions"],
  },
  {
    group: "data & ml",
    items: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    group: "concepts",
    items: [
      "Data Structures & Algorithms",
      "Regression & Classification",
      "K-Means & PCA",
      "REST API Design",
      "NLP fundamentals",
    ],
  },
];

export const projects = [
  // {
  //   slug: "codepulse",
  //   name: "CodePulse",
  //   status: "running",
  //   statusLabel: "in progress",
  //   period: "2026 —",
  //   description:
  //     "A self-hosted CI/CD pipeline platform. Push a commit, and CodePulse queues, containers, and runs your build steps end to end — no third-party runner required.",
  //   highlights: [
  //     "Job queue built on BullMQ + ioredis for reliable, retryable pipeline execution",
  //     "Dockerode-driven containerized job execution, isolating each pipeline run",
  //     "PostgreSQL schema designed around pipelines, runs, and step-level logs",
  //     "8-week build roadmap: React/Tailwind + Monaco editor frontend, Socket.io for live run output",
  //   ],
  //   stack: ["Node.js", "Express", "BullMQ", "ioredis", "Dockerode", "PostgreSQL", "Redis", "Socket.io"],
  //   github: "https://github.com/Mritunjay4528",
  //   featured: true,
  // },
  {
    slug: "codeplus",
    name: "CodePlus",
    status: "success",
    statusLabel: "shipped",
    period: "May – Jun 2026",
    description:
      "A self-hosted Git server and repository visualization platform — a lightweight alternative to GitHub or GitLab for teams that want their own git remote.",
    highlights: [
      "Custom Git HTTP server using Node.js child processes, routed to native git http-backend for clone/push/pull",
      "Authentication via bcryptjs password hashing + JWT sessions, guarded by Express middleware",
      "PostgreSQL via Supabase with Prisma ORM, Redis caching via Docker Compose",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Docker"],
    github: "https://github.com/Mritunjay4528",
    featured: true,
  },
  {
    slug: "creditwise",
    name: "CreditWise",
    status: "success",
    statusLabel: "shipped",
    period: "Jun 2026",
    description:
      "An ML-powered loan approval system that classifies applicants as approved or rejected based on financial and personal attributes.",
    highlights: [
      "Data preprocessing: missing-value imputation, label encoding, one-hot encoding",
      "EDA with correlation heatmaps, box plots, and distribution charts to surface features like credit score",
      "Logistic Regression, KNN, and Naive Bayes compared on precision, recall, F1, and accuracy",
    ],
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/Mritunjay4528",
    featured: true,
  },
  {
    slug: "renora",
    name: "Renora",
    status: "success",
    statusLabel: "shipped",
    period: "Mar 2026",
    description:
      "A product management backend with an admin panel for upload, update, and edit operations, built for real-time data handling.",
    highlights: [
      "RESTful APIs in Express.js connecting the admin frontend to product data",
      "Admin panel for efficient product management with real-time updates",
      "Image upload/replace handling with proper storage lifecycle",
    ],
    stack: ["Node.js", "Express.js"],
    github: "https://github.com/Mritunjay4528",
    featured: false,
  },
];

export const experience = [
  {
    role: "Web Developer & Project POC",
    org: "eLabs Society",
    period: "Ongoing",
    points: [
      "Point of contact coordinating project deliverables and team communication",
      "Built and contributed to a web application as part of the eLabs team",
      "Backend development in Node.js and Express.js, integrating with frontend components",
    ],
  },
];

export const education = [
  {
    school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    degree: "B.Tech in Computer Science",
    period: "2024 – 2028",
    meta: "CGPA: 7.54 / 10",
  },
];

export const nav = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];
