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
    title: "Research Assistant",
    company_name: "Santa Clara University",
    icon: scu_logo,
    iconBg: "#FFFFFF",
    date: "September 2023 - September 2024",
    points: [
      "Researched 3D human body mesh reconstruction from egocentric images, focusing on data collection and model development.",
      "Built a reusable Android/iOS TikTok clone app with Flutter SDK for research on sludge video content, featuring facial data recording, user interaction data capture, and integrated gaze tracking using Python to record pupil coordinates.",
      "Performed comprehensive data analysis using SPSS on app-recorded and Qualtrics data, including covariance analysis, t-tests for significance, and principal component analysis, and visualized results with Python.",
      "Created an immersive VR escape room game using Unity 3D engine and C++, incorporating advanced gameplay elements such as grabbable and destructible objects, sockets, puzzles, and teleportation.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "ANTEMATTR",
    icon: geenuity_logo,
    iconBg: "#E6DEDD",
    date: "June 2024 - September 2024",
    points: [
      "Researched Nixtla TimeGPT, NeuralForecast, and AWS Forecast to integrate time forecasting functionality in Geenuity’s AI agent.",
      "Developed RESTful APIs with Python using FastAPI and containerized the app on Docker. Tested APIs with Postman.",
      "Designed interactive user interface using Bubble, incorporating charts for visualizing time forecast API response data in JSON.",
      "Integrated LLMs using Flowise to develop an autonomous AI agent, capable of executing diverse tasks and optimizing content delivery.",
    ],
  },
  {
    title: "Machine Learning Developer",
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
    title: "Software Developer",
    company_name: "Birlasoft",
    icon: birlasoft_logo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Promoted to MES Consultant within 18 months. Took over maintenance of NoMuda VisualFactory implemented for Proterra.",
      "Collaborated closely with the development team for debugging and resolving high priority issues in an agile setting.",
      "Completed Piston Protrusion Management System project for Cummins India Ltd., replaced old system with a new Ignition software.",
      "Developed SCADA HMI screens and PLC programs for building management system, chiller plant, air handler unit for Entegris.",
      "Curated proof of concepts for manufacturing plant on Ignition platform scripted in Python and live PLC data.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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

export { services, technologies, experiences, testimonials, projects };
