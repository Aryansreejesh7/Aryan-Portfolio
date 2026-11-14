// All portfolio content lives here. Edit this file to update the site.
// Everything below comes from the candidate's resume and LinkedIn profile.

export const profile = {
  name: "Aryan Sreejesh",
  title: "Data Analyst",
  level: "Entry-level",
  headline:
    "Computer Science graduate who turns raw data into clear insights, using SQL, Python, Excel and Power BI.",
  location: "Kannur, Kerala, India",
  email: "aryansree2017@gmail.com",
  phone: "+91 8157910166",
  linkedin: "https://www.linkedin.com/in/aryansreejesh-b51ab9287",
  resume: "/Aryan_Sreejesh_Resume.pdf",
  status: "Open to entry-level Data Analyst roles",
};

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

// Shown in the hero "query" card.
export const toolkit = ["SQL", "Python", "Excel", "Power BI", "Pandas", "NumPy"];

export const about = [
  "I'm a recent Computer Science graduate (B.Tech, KTU, 2026) with a strong interest in data and problem-solving. I enjoy working with data, finding useful insights, and using them to understand and solve real-world problems.",
  "My hands-on experience covers SQL, relational databases, Excel, Power BI and Python (Pandas, NumPy), and I'm currently completing a Data Analytics Master Course focused on data cleaning, analysis, visualization and generating business insights.",
  "Alongside analytics, I have built two web platforms end to end, which gives me a practical understanding of how data-driven products are put together. I'm looking for an entry-level Data Analyst role where I can learn from real-world data and grow.",
];

export type Project = {
  name: string;
  tag: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  role: string;
};

export const projects: Project[] = [
  {
    name: "Green Horizon",
    tag: "Waste Management System · Minor Project",
    problem:
      "Waste collection needs a simple way for people to schedule pickups and report waste-related issues.",
    solution:
      "A web-based waste management platform for scheduling waste pickups and reporting issues, built to make collection more efficient.",
    features: [
      "Real-time notifications",
      "Worker assignment",
      "Waste pre-classification to improve collection efficiency",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Developed the platform.",
  },
  {
    name: "Automotive Grade Fuel",
    tag: "Roadside Assistance & Fuel Delivery Platform",
    problem: "Drivers facing vehicle emergencies need fuel and roadside help on demand.",
    solution:
      "An on-demand roadside assistance and fuel delivery platform that connects users with nearby fuel stations.",
    features: [
      "Location-based service provider assignment",
      "Secure payments",
      "Real-time tracking",
      "Fuel inventory management",
    ],
    tech: [],
    role: "Developed the platform.",
  },
];

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  type: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "J-Spiders / QSpiders",
    role: "Data Analytics Master Course",
    period: "Jun 2026 – Jan 2027",
    type: "Training programme (ongoing)",
    points: [
      "Hands-on learning in Python, SQL, Power BI and data visualization.",
      "Building skills in data cleaning, analysis, visualization and generating business insights.",
    ],
  },
  {
    org: "Pace Lab",
    role: "Python Programming Intern",
    period: "Jul 2024",
    type: "Internship · Kochi, Kerala",
    points: [
      "Developed Python scripts and small applications for automation and data-handling exercises under mentorship.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Databases & Querying",
    items: ["SQL", "Relational databases", "SQL*Plus"],
  },
  {
    title: "Analysis with Python",
    items: ["Python", "Pandas", "NumPy", "Google Colab"],
  },
  {
    title: "Reporting & Visualization",
    items: ["Power BI", "Excel", "Data visualization"],
  },
  {
    title: "Analytics Practice",
    items: ["Data cleaning", "Data analysis", "Business insights"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Professional Skills",
    items: [
      "Problem solving",
      "Active listening",
      "Team collaboration",
      "Communication",
      "Event coordination",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science",
  school: "Sree Narayana Guru College of Engineering & Technology",
  university: "APJ Abdul Kalam Technological University (KTU)",
  period: "Jun 2022 – Apr 2026",
};

export const certifications = [
  "Master Class in Data Analytics (Online Certification)",
  "Introduction to Data Analysis using Microsoft Excel",
  "Business Analysis & Process Management",
  "Deloitte Australia – Cyber Job Simulation",
];

export const languages = ["English", "Hindi", "Malayalam"];
