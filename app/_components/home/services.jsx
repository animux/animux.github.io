"use client";

import { motion } from "framer-motion";
import { useId } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faPencil,
  faGear,
  faCloud,
  faCartShopping,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import MasonryGrid from "@/components/MasonryGrid";

import { TypewriterEffect } from "@/components/Typewriter";

function DotPattern({
  width = 24,
  height = 24,
  x = 0,
  y = 0,
  cx = 1,
  cy = 0.5,
  cr = 0.5,
  className,
  ...props
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-slate-500/30 dark:fill-slate-500/20`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

const servicesData = [
  {
    icon: faDisplay,
    title: "Web Application Development",
    text: "Crafting responsive and high-performance web applications using the latest technologies to meet your business needs.",
    gradient: "from-cyan-500 to-blue-500",
    glow: "hover:shadow-cyan-500/25",
    topBar: "from-cyan-400 to-blue-400",
  },
  {
    icon: faCartShopping,
    title: "E-Commerce Solutions",
    text: "Building and optimizing online stores with secure payment gateways and intuitive user experiences.",
    gradient: "from-lime-500 to-emerald-500",
    glow: "hover:shadow-lime-500/25",
    topBar: "from-lime-400 to-emerald-400",
  },
  {
    icon: faPencil,
    title: "UX/UI Design Collaboration",
    text: "Collaborating with UX/UI designers to create intuitive and engaging user experiences.",
    gradient: "from-fuchsia-500 to-pink-500",
    glow: "hover:shadow-fuchsia-500/25",
    topBar: "from-fuchsia-400 to-pink-400",
  },
  {
    icon: faGear,
    title: "Maintenance and Support",
    text: "Providing ongoing maintenance and support to keep your applications running smoothly and securely.",
    gradient: "from-amber-500 to-red-500",
    glow: "hover:shadow-amber-500/25",
    topBar: "from-amber-400 to-red-400",
  },
  {
    icon: faArrowTrendUp,
    title: "Performance Optimization",
    text: "Enhancing the speed and efficiency of your web applications through various optimization techniques.",
    gradient: "from-violet-500 to-indigo-500",
    glow: "hover:shadow-violet-500/25",
    topBar: "from-violet-400 to-indigo-400",
  },
  {
    icon: faCloud,
    title: "Cloud Services",
    text: "Deploying and managing applications on cloud platforms e.g AWS and Google Cloud for enhanced scalability and reliability.",
    gradient: "from-sky-500 to-teal-500",
    glow: "hover:shadow-sky-500/25",
    topBar: "from-sky-400 to-teal-400",
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
    title: "Biluibaba",
    link: "https://biluibaba.com",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    height: 500,
  },
  {
    id: 4,
    image: "/work5.png",
    title: "Rang Production",
    link: "https://rang-production-sigma.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    height: 300,
  },
  {
    id: 5,
    image: "/work6.png",
    title: "Shawn Novel",
    link: "https://shawnnovel.com",
    technologies: ["React.js", "Python", "Django", "PostgreSQL"],
    height: 400,
  },
  {
    id: 6,
    image: "/work4.png",
    title: "Aveneur Solutions & Networks Limited",
    link: "https://aveneur-solutions.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    height: 300,
  },
  {
    id: 7,
    image: "/work7.png",
    title: "Akhtar Imam & Associates",
    link: "https://akhtarimam.com ",
    technologies: ["Wordpress"],
    height: 300,
  },
];

const Services = () => {
  return (
    <div
      className="relative py-10 bg-white dark:bg-zinc-900 text-dark dark:text-white overflow-hidden"
      id="services"
    >
      {/* Grid Pattern Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px)] [background-size:42px_42px]" />

      {/* Gradient Overlay - Top Left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-500/15 via-violet-500/8 to-transparent rounded-full blur-3xl pointer-events-none dark:from-sky-500/10 dark:via-violet-500/5" />

      {/* Gradient Overlay - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/20 via-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none dark:from-emerald-500/10 dark:via-rose-500/5" />

      <div className="relative px-5 z-10">
        <div className="mb-10 px-2 sm:px-4 md:px-8">
          <TypewriterEffect
            text={"How I can power\nup your web game"}
            className="text-4xl sm:text-5xl md:text-8xl text-left font-bold whitespace-pre-line"
          />
        </div>

        {/* Services Grid with Modern Styling */}
        <div className="mb-10">
          <div className="relative p-2 sm:p-4 md:p-8">
            <div className="flex md:flex-row flex-col gap-5 flex-wrap justify-center items-stretch flex-grow flex-1 relative z-10">
              {servicesData.map((service, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index }}
                  viewport={{ once: true }}
                  key={index}
                  className="w-full sm:basis-[calc(50%-0.75rem)] lg:basis-1/4 flex-grow"
                >
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    text={service.text}
                    gradient={service.gradient}
                    glow={service.glow}
                    topBar={service.topBar}
                  ></ServiceCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-5 px-2 sm:px-4 md:px-8" id="portfolio">
          <TypewriterEffect
            text={"Proof that I don't just\nCtrl+C, Ctrl+V"}
            className="text-4xl sm:text-5xl md:text-8xl text-left md:text-right font-bold mb-10 md:mb-20 whitespace-pre-line"
          />
          <MasonryGrid projects={myWork} />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, text, gradient, glow, topBar }) => {
  return (
    <div
      className={`relative isolate overflow-hidden basis-1/4 flex flex-col gap-4 md:gap-5 text-center p-6 md:p-8 items-center flex-grow flex-1 justify-center rounded-2xl min-h-[300px] md:h-[350px] border border-white/20 bg-white/30 dark:bg-zinc-900/30 shadow-xl backdrop-blur-2xl ${glow} transition-all ease-out duration-300 cursor-pointer group hover:-translate-y-2 hover:scale-[1.01]`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] [background-size:34px_34px] opacity-15 pointer-events-none" />
      <div className="absolute left-6 right-6 top-[7.2rem] hidden h-px bg-white/8 dark:bg-white/8 md:block" />
      <div className="absolute left-6 right-6 top-[11.6rem] hidden h-px bg-white/3 dark:bg-white/3 md:block" />

      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${topBar}`}
      />

      <div
        className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center border border-white/20 shadow-lg backdrop-blur-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
      >
        <FontAwesomeIcon
          icon={icon}
          size="xl"
          className="relative z-10 text-white"
        />
      </div>

      <div className="relative z-10">
        <h1 className="relative py-2 text-lg md:text-xl uppercase font-black text-neutral-900 dark:text-white transition-colors duration-300">
          {title}
        </h1>
        <p className="relative text-sm sm:text-base font-normal leading-relaxed text-neutral-800 dark:text-neutral-200 transition-colors duration-300">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Services;
