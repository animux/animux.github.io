"use client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faPencil,
  faGear,
  faCloud,
  faCartShopping,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import MasonryGrid from "@/components/MasonryGrid";

import { TypeAnimation } from "react-type-animation";
import { TypewriterEffect } from "@/components/Typewriter";

const servicesData = [
  {
    icon: faDisplay,
    title: "Web Application Development",
    text: "Crafting responsive and high-performance web applications using the latest technologies to meet your business needs.",
    // iconClass: "text-sky-300",
  },
  {
    icon: faCartShopping,
    title: "E-Commerce Solutions",
    text: "Building and optimizing online stores with secure payment gateways and intuitive user experiences.",
    // iconClass: "text-green-300",
  },
  {
    icon: faPencil,
    title: "UX/UI Design Collaboration",
    text: "Collaborating with UX/UI designers to create intuitive and engaging user experiences.",
    // iconClass: "text-amber-300",
  },
  {
    icon: faGear,
    title: "Maintenance and Support",
    text: "Providing ongoing maintenance and support to keep your applications running smoothly and securely.",
    // iconClass: "text-blue-700",
  },
  {
    icon: faArrowTrendUp,
    title: "Performance Optimization",
    text: "Enhancing the speed and efficiency of your web applications through various optimization techniques.",
    // iconClass: "text-lime-500",
  },
  {
    icon: faCloud,
    title: "Cloud Services",
    text: "Deploying and managing applications on cloud platforms e.g AWS and Google Cloud for enhanced scalability and reliability.",
    // iconClass: "text-yellow-400",
  },
];

const myWork = [
  {
    id: 1,
    image: "/work1.png",
    title: "LegalX",
    link: "https://asklegalx.com",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    height: 300,
  },
  {
    id: 2,
    image: "/work3.png",
    title: "TezzFeed",
    link: "https://tezzfeed.com",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    height: 400,
  },
  {
    id: 3,
    image: "/work2.png",
    title: "LegalX Suite",
    link: "https://legalxsuite.com",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    height: 500,
  },
  {
    id: 4,
    image: "/work5.png",
    title: "Read Nuze",
    link: "https://readnuze.com",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    height: 300,
  },
  {
    id: 5,
    image: "/work6.png",
    title: "Go Greener World",
    link: "https://gogreenerworld.com",
    technologies: ["Wordpress"],
    height: 400,
  },
  {
    id: 6,
    image: "/work4.png",
    title: "Aveneur Solutions & Networks Limited",
    link: "https://aveneursolutions.com",
    technologies: ["Next.js"],
    height: 300,
  },
];

const Services = () => {
  return (
    <div
      className="py-20 bg-white dark:bg-zinc-900 text-dark dark:text-white"
      id="services"
    >
      <div className="px-5">
        <div className="md:mb-20 mb-10">
          <TypewriterEffect
            text={"How I can power\nup your web game"}
            className="md:text-8xl text-6xl text-left font-bold whitespace-pre-line"
          />
        </div>
        <div className="flex md:flex-row flex-col gap-5 flex-wrap justify-center items-stretch flex-grow flex-1">
          {servicesData.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
              key={index}
              className="basis-1/4 flex-grow"
            >
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                text={service.text}
                iconClass={service.iconClass}
              ></ServiceCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pt-20 px-5" id="portfolio">
        <TypewriterEffect
          text={"Proof that I don't just\nCtrl+C, Ctrl+V"}
          className="md:text-8xl text-6xl text-right font-bold mb-20 whitespace-pre-line"
        />
        <MasonryGrid projects={myWork} />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, text, iconClass }) => {
  return (
    <div className="bg-neutral-50 dark:bg-zinc-800 basis-1/4 flex flex-col gap-5 text-center p-10 items-center flex-grow flex-1 justify-center rounded-xl h-[350px] hover:shadow-xl transition-all ease-in-out duration-300 cursor-pointer dark:text-white text-zinc-900">
      <FontAwesomeIcon
        icon={icon}
        size="4x"
        className={"py-5 " + iconClass}
      ></FontAwesomeIcon>
      <div>
        <h1 className="text-lg uppercase font-semibold tracking-wide py-3">
          {title}
        </h1>
        <p className="font-light">{text}</p>
      </div>
    </div>
  );
};

export default Services;
