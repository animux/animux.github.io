"use client";

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

const servicesData = [
  {
    icon: faDisplay,
    title: "Web Application Development",
    text: "Crafting responsive and high-performance web applications using the latest technologies to meet your business needs.",
    iconClass: "text-sky-300",
  },
  {
    icon: faCartShopping,
    title: "E-Commerce Solutions",
    text: "Building and optimizing online stores with secure payment gateways and intuitive user experiences.",
    iconClass: "text-green-300",
  },
  {
    icon: faPencil,
    title: "UX/UI Design Collaboration",
    text: "Collaborating with UX/UI designers to create intuitive and engaging user experiences.",
    iconClass: "text-amber-300",
  },
  {
    icon: faGear,
    title: "Maintenance and Support",
    text: "Providing ongoing maintenance and support to keep your applications running smoothly and securely.",
    iconClass: "text-blue-700",
  },
  {
    icon: faArrowTrendUp,
    title: "Performance Optimization",
    text: "Enhancing the speed and efficiency of your web applications through various optimization techniques.",
    iconClass: "text-lime-500",
  },
  {
    icon: faCloud,
    title: "Cloud Services",
    text: "Deploying and managing applications on cloud platforms e.g AWS and Google Cloud for enhanced scalability and reliability.",
    iconClass: "text-yellow-400",
  },
];

const myWork = [
  {
    picture: '/work1.png',
    name: 'LegalX',
    link: 'https://asklegalx.com',
    technology: 'Website built with MERN stack'
  },
  {
    picture: '/work3.png',
    name: 'TezzFeed',
    link: 'https://tezzfeed.com',
    technology: 'Website built with MERN stack'
  },
  {
    picture: '/work2.png',
    name: 'LegalX Suite',
    link: 'https://legalxsuite.com',
    technology: 'Website built with MERN stack'
  },
  {
    picture: '/work4.png',
    name: 'Senoark Digital',
    link: 'https://senoarkdigital.com',
    technology: 'Website built with REACTJS'
  },
  {
    picture: '/work5.png',
    name: 'Eco Motors EV',
    link: 'https://ecomotorsev.com.bd',
    technology: 'Website built with Wordpress'
  },
  {
    picture: '/work6.png',
    name: 'Go Greener World',
    link: 'https://gogreenerworld.com',
    technology: 'Website built with Wordpress'
  }
]

const Services = () => {
  return (
    <div
      className="py-32 bg-white dark:bg-zinc-900 text-dark dark:text-white"
      id="services"
    >
      <h1 className="text-4xl uppercase text-center font-bold mb-20">
        services
      </h1>
      <div className="container mx-auto md:px-0 px-4">
        <div className="flex md:flex-row flex-col gap-6 flex-wrap justify-center items-center flex-grow flex-1">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              text={service.text}
              iconClass={service.iconClass}
            ></ServiceCard>
          ))}
        </div>
      </div>

      <div className='py-20'>
        <h1 className="text-4xl uppercase text-center font-bold mb-20">some of my work</h1>
        <div className="container mx-auto">
          <div className='flex md:flex-row flex-col md:mx-0 mx-5 flex-wrap flex-grow justify-center items-center flex-1 gap-5'>
            {myWork.map((work, index) => (
                <div className="basis-1/3 shadow-lg relative group rounded-xl ease-in-out duration-300 transition-all" key={index}>
                  <Image src={work.picture} alt={work.name} width={1920} height={1080} className="rounded-xl"></Image>
                  <div className="md:opacity-30 opacity-60 bg-zinc-950 text-white ease-in-out duration-300 group-hover:opacity-80 transition-all absolute top-0 left-0 h-full w-full flex items-center justify-center flex-col cursor-pointer rounded-xl" onClick={() => window.open(work.link)}>
                    <h1 className="text-2xl font-bold">{work.name}</h1>
                    <h1 className="uppercase text-xl">{work.technology}</h1>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, text, iconClass }) => {
  return (
    <div className="bg-neutral-50 dark:bg-zinc-800 basis-1/4 flex flex-col gap-5 text-center px-10 py-10 flex-grow flex-1 rounded-xl h-full hover:shadow-xl transition-all ease-in-out duration-300 cursor-pointer">
      <FontAwesomeIcon
        icon={icon}
        size="4x"
        className={"py-5 " + iconClass}
      ></FontAwesomeIcon>
      <div>
        <h1 className="text-xl uppercase font-semibold tracking-wide py-3">
          {title}
        </h1>
        <p className="font-light">{text}</p>
      </div>
    </div>
  );
};

export default Services;
