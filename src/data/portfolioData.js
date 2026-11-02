// ============================================================
// portfolioData.js
// This file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Ashwini K B",
  firstName: "Ashwini K B",
  brandName: "Ashwini K B", // shown in the preloader, navbar and footer
  title: "Python Full Stack developer",
  location: "Bengaluru, India",
  phone: "+91 9844985775",
  emails: {
    primary: "kbashwini450@gmail.com",
    secondary: "",
  },
  summary:
    "MCA graduate with a robust foundation in Python, data structures, and database management. Experienced in building impactful Python-driven solutions ranging from machine learning models (ResNet50, KNN) published at IEEE-associated conferences to real-time translation tools (Streamlit) and financial data analytics systems (Pandas). Currently sharpening full-stack development and AI integration skills through training at TAP Academy. Passionate about writing clean code, solving complex programming challenges, and developing scalable applications.",
  resumeUrl: "/Ashwini_K_B_Resume.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Ashwini-200",
  linkedin: "https://www.linkedin.com/in/ashwini-k-b-60a88a218/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Ashwini K B",
  titleHighlight: "Python Full Stack Developer",
  subtitle:
    "Building scalable web applications, data-driven solutions, and machine learning models with clean code and modern architectures.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:kbashwini450@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Ashwini_K_B_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Ashwini K B</span>, an MCA graduate and Python Full Stack Developer based in Bengaluru, India. I have hands-on experience developing machine learning classifiers published at the IEEE-associated ICKES 2022 Conference, real-time voice and document translation systems with Streamlit, and financial analytics models using Pandas. Currently, I am expanding my technical capabilities and sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Python", "Java", "React", "MySQL"],
};

export const introVideo = {
  badge: "Meet Me",
  heading: "Watch My Introduction",
  description: "Get to know more about my background, technical journey, and development philosophy.",
  youtubeUrl: "https://youtu.be/HD2IX-iCsWU?si=HkMz5UJOpaH1LB7-",
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured, data-driven engineering methodology from concept to production.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing problem statements, data structures, and architecture requirements to establish clear technical goals.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architecting modular database schemas, backend services, and clean, intuitive user interfaces.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing clean, scalable code in Python, Java, and React while integrating robust APIs and ML models.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Validating through rigorous testing, containerizing, and shipping reliable applications to production.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }, { name: "Java" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }, { name: "Tailwind CSS" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "SQL" }, { name: "Pandas" }],
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code" },
        { name: "Jupyter Notebook" },
        { name: "GitHub" },
        { name: "MySQL Workbench" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Domain Training Program in Python with AI",
    description:
      "Successfully completed intensive domain training in Python and Artificial Intelligence at AMC Engineering College in collaboration with Zestech.",
    role: "Trainee",
    badge: "AI Training",
  },
  {
    title: "IEEE-Associated ICKES 2022 Conference",
    description:
      "Published a research paper on Breast Cancer Detection Using Machine Learning evaluating ResNet50, PSO, and KNN algorithms.",
    role: "Author & Researcher",
    badge: "Research Paper",
  },
  {
    title: "College Tech Events",
    description:
      "Served as Student Coordinator for TechIntellect 2021 and TechVinzo 2K22, driving technical challenges and student engagement.",
    role: "Student Coordinator",
    badge: "Leadership",
  },
  {
    title: "MINDTRICK-2020",
    description:
      "Participated and demonstrated strategic analytical thinking in the All India Level Chess Tournament.",
    role: "Participant",
    badge: "Chess",
  },
];

export const internshipsList = [
  {
    organization: "MediBuddy",
    role: "NATS Trainee",
    duration: "Nov 2024 - Jan 2025",
    skills: ["Quality Check", "Data Validation", "Document Verification"],
    tech: ["Excel", "Documentation"],
  },
  {
    organization: "Sensei Technologies Pvt. Ltd.",
    role: "Web Developer Intern",
    duration: "March 2026 - Oct 2026",
    skills: ["Web Development", "Application Deployment", "Full Stack Engineering"],
    tech: ["Java", "Spring Boot", "Angular"],
  },
  {
    organization: "Arrow Electronics",
    role: "Manual Tester Apprentice",
    duration: "Nov 2022 - Feb 2023",
    skills: ["Manual Testing", "Regression Testing", "Functional Testing"],
    tech: ["Software Testing", "Bug Tracking"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Coordinating effectively across cross-functional teams and organizing large-scale collegiate technical events.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Deconstructing complex algorithmic and business challenges into efficient, maintainable software solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluating datasets and transaction patterns to extract actionable insights and optimize algorithms.",
  },
  {
    name: "Leadership",
    icon: "🌟",
    desc: "Guiding student coordination teams and driving technical initiatives from planning through execution.",
  },
];

export const projects = [
  {
    id: "breast-cancer-detection",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Breast Cancer Detection",
    description:
      "Classified breast cancer using histopathology images and feature extraction models, published at the IEEE-associated ICKES 2022 Conference.",
    techTags: ["Python", "ResNet50 (CNN)", "PSO", "KNN"],
    links: { github: "", demo: "" },
    isFlagship: true,
  },
  {
    id: "real-money-gaming-loyalty",
    number: "02",
    badge: null,
    title: "Real-Money Online Gaming Loyalty Analytics",
    description:
      "Analyzed player transactions to calculate loyalty points, monthly rankings, and proportional rewards using automated financial analytics pipelines.",
    techTags: ["Python", "Pandas", "Jupyter Notebook"],
    links: {
      github: "https://github.com/Ashwini-200/real-money-gaming-loyalty-points",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "real-time-voice-and-doc-translator",
    number: "03",
    badge: null,
    title: "Real-Time Voice and Document Translator",
    description:
      "Multilingual application supporting live speech-to-text transcription and document translation with an interactive user interface.",
    techTags: ["Python", "Speech Recognition", "Streamlit"],
    links: {
      github: "https://github.com/Ashwini-200/real-time-voice-doc-translation",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Domain Training Program in Python with AI", issuer: "AMC & Zestech", icon: "🤖" },
    { name: "Research Paper Publication", issuer: "IEEE ICKES 2022", icon: "📄" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/ashwini-k-b-60a88a218/",
};

export const education = {
  degree: "MCA - Master of Computer Applications",
  institution: "AMC Engineering College, Visvesvaraya Technological University",
  cgpa: "2023 - 2025",
  graduation: "2025",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Python Full Stack Developer",
    "Python · React · AI & ML",
    "Building Scalable & Data-Driven Solutions",
  ],
  credential: "MCA - Master of Computer Applications",
  copyright: `© ${new Date().getFullYear()} Ashwini K B | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

