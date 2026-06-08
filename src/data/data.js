import {
  FaReact,
  FaServer,
  FaDatabase,
  FaPython,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

export const skills = [

  {
    title: "Frontend",
    icon: FaReact,
    items: ["HTML", "CSS", "JavaScript", "React", "Angular"],
  },

  {
    title: "Backend",
    icon: FaServer,
    items: ["Node.js", "Express.js"],
  },

  {
    title: "Database",
    icon: FaDatabase,
    items: ["MongoDB", "MySQL"],
  },

  {
    title: "Programming",
    icon: FaPython,
    items: ["Python", "Java"],
  },

  {
    title: "Tools",
    icon: FaTools,
    items: ["Git", "GitHub", "VS Code"],
  },

  {
    title: "Cybersecurity",
    icon: FaShieldAlt,
    items: ["Linux", "Networking", "Ethical Hacking"],
  },

];

/*projects*/
export const projects = [
  /*{
    title: 'AI Freelance Platform',
    desc: 'Modern freelance platform with AI recommendations and futuristic UI.',
  },
  {
    title: 'Chakra Activation App',
    desc: 'Interactive chakra learning app with tracking system.',
  },
  {
    title: 'EAMCET Mock Test',
    desc: 'Responsive exam interface with timer and dashboard.',
  },*/
  {
    title:'Personal Portfolio Website',
    desc:'Developed a responsive portfolio using HTML, CSS, JavaScript and React to showcase projects and achievements with a professional UI.',
  },
    
  {
    title: 'Live Sentimental Analysis using AIML',
    desc: 'Live Analysis of Emotions using deepface in python and using a openCV a lightweigth model.',
  },
  
  {
    title: 'Data Analytics Dashboard (Mini Project)',
    desc: 'Designed a simple data analytics dashboard using Python (Pandas & Matplotlib) to visualize student performance metrics.',
  },
];
/*Services*/
export const freelanceServices = [
  {
    title: "Custom Web Applications",
    description:
      "Building fast, dynamic, and responsive full-stack applications tailored perfectly to your business requirements and scaling needs.",
    deliverables: ["Single Page Apps (SPAs)", "Admin Dashboards", "Saas Platforms"],
  },
  {
    title: "Responsive Frontend Design",
    description:
      "Converting static designs into pixel-perfect, interactive modern layouts.",
    deliverables: ["Mobile-first layouts", "Tailwind UI integration", "Interactive UX"],
  },
  {
    title: "Native Android Development",
    description:
      "Developing robust, high-performance Android apps using Kotlin and modern architecture.",
    deliverables: ["Jetpack Compose", "API Sync", "Play Store Deployment"],
  },
];