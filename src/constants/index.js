import { title } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  scu_logo,
  bytedance_logo,
  geenuity_logo,
  birlasoft_logo,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tiktok_logo,
  netflix_logo,
  bar_logo_1,
  leaf,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    href: "/resume/VrushabhResume.pdf",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Research Assistant",
    icon: mobile,
  },
  {
    title: "Machine Learning Developer",
    icon: backend,
  },
  {
    title: "Mechanical Keyboard Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student Ambassador, Developer Relations",
    company_name: "ByteDance",
    icon: bytedance_logo,
    iconBg: "#FFFFFF",
    date: "August 2025 - January 2026",
    points: [
      "Designed and prototyped spatial XR + AI apps for Apple Vision Pro using WebSpatial SDK, validating integration of AI powered interactions in spatial UI, dynamic 3D assets, and multi-scene routing.",
      "Built reference apps integrating voice-assisted conversational AI and LLM-powered backends into XR interfaces.",
      "Developed Android XR apps with on-device AI/ML inference pipelines using the SecureMR SDK, which enables AI/ML models to execute in a secure runtime without exposing raw camera frames or user data.",
      "Troubleshot SDK and API issues across multiple projects, reproduced bugs, and provided Zixes or workarounds while submitting detailed reports to engineering teams.",
      "Led hands-on workshops on SecureMR and WebSpatial SDK; created YouTube tutorials for quick onboarding.",
      "Served as a technical mentor for 30+ hackathon teams and as a judge for ByteDance sponsored events, including Web-to-Spatial Program, Stanford XR Hackathon, and Hack for Humanity.",
      "Actively monitored and supported the ofZicial WebSpatial Discord developer community, troubleshooting issues, guiding developers to resources, and sharing implementation ideas to help developers unblock development.",
      "Created developer-focused technical content including video tutorials, blog posts, and demo walkthroughs showcasing SDK capabilities; published content across YouTube, X, TikTok, and PICO Developer Blog.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Santa Clara University",
    icon: scu_logo,
    iconBg: "#FFFFFF",
    date: "September 2023 - September 2024",
    points: [
      "Contributed to research on 3D human mesh reconstruction from egocentric images; contributed to model training, ablation studies, and quantitative evaluation, co-authoring an ICCV-accepted computer vision paper.",
      "Developed a React, Python based research platform for Human-AI trust study, combining AI chatbots with distinct prompt-engineered personalities, and a real-time Prisoner’s Dilemma game with autonomous AI gameplay.",
      "Developed a cross-platform TikTok-style short-form video application using Flutter (iOS/Android) and a complementary React-based web platform for behavioral research studies; integrated Python-based eye-tracking and facial signal capture to analyze user engagement patterns.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Geenuity",
    icon: geenuity_logo,
    iconBg: "#E6DEDD",
    date: "June 2024 - September 2024",
    points: [
      "Developed RESTful APIs using Python integrating TimeGPT and AWS Forecast to enable time-series forecasting within Geenuity’s agentic AI platform.",
      "Built interactive frontend using ReactJS to visualize forecast data and API responses through dynamic charts.",
      "Integrated LLM-driven agent workZlows using Flowise, building hybrid API + AI pipelines.",
      "Containerized backend services with Docker and deployed applications across AWS and Railway, ensuring scalable and reproducible environments.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Farmia",
    icon: leaf,
    iconBg: "#FFFFFF",
    date: "April 2023 - September 2023",
    points: [
      "Engineered a VGG19-based deep learning model using Keras and TensorFlow for accurate classification of plant diseases from images.",
      "Implemented image preprocessing and data augmentation strategies, and transfer learning techniques to enhance model performance.",
      "Fine-tuned model through early stopping and model checkpointing, achieving high accuracy in disease classification.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Birlasoft",
    icon: birlasoft_logo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Owned end-to-end QA lifecycle (manual + automation testing) for a Manufacturing Execution System (MES) supporting clients including Proterra and Cummins.",
      "Led complete manual testing process including requirement analysis, test strategy definition, test planning, test case development, test execution, and test reporting.",
      "Developed Python automation test scripts for functional, system integration, and regression test suites; identified and resolved automation framework issues.",
      "Managed execution of automation tests via Jenkins CI/CD pipelines; analyzed regression failures across builds through detailed log analysis and root cause investigation.",
      "Debugged and validated bugs across multiple operating systems (Windows, Linux), ensuring cross-platform stability.",
      "Collaborated closely with development teams to reproduce issues, perform root cause analysis, and drive defects to timely resolution in Agile environments.",
    ],
  },
];

const projects = [
  {
    name: "Android/iOS TikTok Clone App",
    description:
      "Built a reusable Android/iOS TikTok clone app with Flutter SDK for research on sludge video content, featuring facial data recording, user interaction data capture, and integrated gaze tracking using Python to record pupil coordinates.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "appdevelopment",
        color: "pink-text-gradient",
      },
    ],
    image: tiktok_logo,
    source_code_link: "https://github.com/vrushabhh97/tiktok_clone",
  },
  {
    name: "Netflix Clone App",
    description:
      "A Netflix clone app built with Swift and UIKit, featuring dynamic content tabs, movie trailers, and a searchable library for an engaging user experience.",
    tags: [
      {
        name: "swiftui",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "uitoolkit",
        color: "pink-text-gradient",
      },
    ],
    image: netflix_logo,
    source_code_link: "https://github.com/vrushabhh97/NETFLIX_CLONE",
  },
  {
    name: "Expense Tracker",
    description:
      "The Expense Tracker app, built with Flutter, leverages Hive for data storage and Provider for state management, offering an intuitive interface for managing personal finances. It features dynamic visual summaries, swipe-to-delete expense records, and insightful weekly spending analyses, providing a seamless and efficient budgeting tool.",
    tags: [
      {
        name: "hivedatabase",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "graphs",
        color: "pink-text-gradient",
      },
    ],
    image: bar_logo_1,
    source_code_link: "https://github.com/vrushabhh97/EXPENSE_TRACKER",
  },
];

export { services, technologies, experiences, projects };
