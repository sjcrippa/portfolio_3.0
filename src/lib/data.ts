import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import pacorabanne from "/public/pacorabanne.png";
import nfpaisanos from "/public/nfpaisanos.png";
import weatherapp from "/public/weatherapp.png";
import animevault from '/public/animevault.png'
import iphone from '/public/iphone.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: 'iPhone 15 replica',
    description: 'Recreate the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. From custom animations to animated 3D models.',
    tags: ['Next Js', 'TypeScript', 'Server Actions', 'GSAP', 'Three Js', 'Tailwind'],
    imageUrl: iphone,
    siteUrl: 'https://apples-clone.vercel.app/'
  },
  {
    title: 'Anime Vault',
    description: 'An infinite scrolling website for showing multiple anime cards with animations and stunning visuals.',
    tags: ['Next Js', 'TypeScript', 'Server Actions', 'Next Ui', 'Framer Motion', 'Tailwind'],
    imageUrl: animevault,
    siteUrl: 'https://vault-anime-sjcrippa.vercel.app/'
  },
  {
    title: "Paisanos",
    description:
      "Single page application developed as an NFT viewing and bidding site, categorizing different NFTs by price and type. ",
    tags: ["React", "TypeScript", "Next Js", "Tailwind", "Framer Motion"],
    imageUrl: nfpaisanos,
    siteUrl: 'https://nfpaisanos-challenge.vercel.app/'
  },
  {
    title: "Paco Rabanne",
    description:
      "E-commerce site made as a final project for the React Js Developer course. Where data fetching, contexts, data persistence, state changes and CRUD fundamentals are applied.",
    tags: ["React", "Tailwind", "API", "CRUD"],
    imageUrl: pacorabanne,
    siteUrl: 'https://paco-sjc-ecommerce.vercel.app/'
  },
  {
    title: "Weather App",
    description:
      "Climate information site, which consumes data from the Open Weather API and renders it in a clean and friendly interface.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    imageUrl: weatherapp,
    siteUrl: 'https://weather-app-scrippa.netlify.app/'
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;