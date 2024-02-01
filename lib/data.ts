import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-Masters in Information Technology
import { LuGraduationCap } from "react-icons/lu";
import TwitterClone from "@/public/TwitterClone.png";
import NewsBits from "@/public/NewsBits.png";
import ToDoApp from "@/public/ToDoApp.png";
import Portfolio from "@/public/Portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Computer Applications",
    location: "MS University, Vadodara",
    description:
      "My journey into the IT realm began with courses like CS Fundamentals and Web Dev, and I must admit, it ignited a spark within me. Graduating with an 'A' grade, I not only earned the knowledge but also a secret handshake with my computer. We're tight now.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2019 - May 2022",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Minimal Dot, Vadodara",
    description:
      "I ventured into the realm of Full-Stack Development, diving headfirst into real-time client projects while embracing the holy grail of coding practices. As I delved deeper into the mesmerizing world of web development, my passion for crafting aesthetically pleasing websites with a purpose skyrocketed.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2021 - May 2022",
  },
  {
    title: "Masters in Information Technology",
    location: "DA-IICT, Gandhinagar",
    description:
      "Currently pursuing Masters in Information Technology, with a focus on core concepts like Cloud Computing, Database Management Systems, Systems Programming, Web Development, and Object-Oriented Programming. Alongside, I've honed my soft skills and public speaking abilities.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Twitter Clone",
    description:
      "Developed a professional grade Twitter clone with full integration of key functionalities that make the platform unique.",
    tags: [
      "React",
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Firebase",
      "Recoil",
      "React Modal",
    ],
    imageUrl: TwitterClone,
    projLink: "https://twitter-clone-daveprayag.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "A very minimal yet elegant portfolio website which reflects my skill as a web developer. This very website you are visiting.",
    tags: [
      "React.js",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Resend",
    ],
    imageUrl: Portfolio,
    projLink: "https://prayagdave.com",
  },
  {
    title: "NewsBits",
    description:
      "An interactive website that provides news in a short and concise manner summarized using powerful NLP toolkits.",
    tags: [
      "React.js",
      "Bootstrap 5",
      "Express",
      "MongoDB",
      "Node.js",
      "JWT",
      "Pysummarization",
    ],
    imageUrl: NewsBits,
    projLink: "https://news-bits-main-web.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Firebase",
  "Tailwind CSS",
  "Bootstrap",
  "MongoDB",
  "Recoil",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
