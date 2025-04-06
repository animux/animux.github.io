"use client";

import { useEffect } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import TypeWriter from "./typewriter.js";

import Button from "@/components/ui/button";

import AboutUs from "@/app/_components/home/about.jsx";
import Services from "@/app/_components/home/services";
import Testimonials from "@/app/_components/home/testimonials";
import FAQs from "@/app/_components/home/faqs";

const Home = () => {
  useEffect(() => {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    new TypeWriter(txtElement, words, wait);
  }, []);

  return (
    <>
      <div className="bg-neutral-100 dark:bg-zinc-900 lg:pt-20 pt-28">
        <div className="mx-5" id="home">
          <div className="flex items-center justify-between md:flex-row flex-col gap-10">
            <div className="basis-1/2 lg:text-left text-center">
              <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -500 }}
                transition={{ delay: 1 }}
              >
                <div>
                  <h1 className="text-2xl lg:text-4xl text-zinc-800 dark:text-gray-300 font-semibold uppercase mb-2">
                    <span
                      className="txt-type border-r-2 border-black dark:border-white"
                      data-wait="3000"
                      data-words='["From brainstorm to browser", "Bringing your ideas to life.", "you think, i code.", "Experience the power of code. Without writing it."]'
                    ></span>
                  </h1>
                  <h1 className="uppercase text-3xl lg:text-6xl font-bold mt-2">
                    where innovation meets functionality
                  </h1>
                  <h5 className="text-xl tracking-wide mb-4 mt-1">
                    Woke up with a chaotic idea? Let’s code it before logic
                    kicks in. Portfolios that pop, shops that sell, apps that
                    don’t crash when you blink — I’m your full-stack chaos
                    tamer. Deploy-ready and lowkey unstoppable.
                  </h5>
                  <Button type="link" text={"Get The Scoop"} href="#about" />
                </div>
              </motion.div>
            </div>
            <div className="basis-1/2">
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 500 }}
                transition={{ delay: 0.8 }}
              >
                <Image
                  src="/img/hero.png"
                  width={1080}
                  height={1080}
                  className="block dark:hidden mx-auto w-svw"
                  alt="Digital Art"
                />
                <Image
                  src="/img/hero-dark.png"
                  width={1080}
                  height={1080}
                  className="hidden dark:block mx-auto w-svw"
                  alt="Digital Art"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-950 py-10">
          <div className="flex flex-col items-center lg:flex-row justify-between gap-8">
            <div className="flex lg:flex-row flex-col gap-2 px-5">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-row items-center gap-5 justify-between lg:justify-center">
                  <h1 className="text-8xl font-bold">7+</h1>
                  <p className="w-1/2 uppercase lg:text-xl text-sm">
                    Years of experience
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-row items-center gap-5 justify-between lg:justify-center">
                  <h1 className="text-8xl font-bold">50+</h1>
                  <p className="w-1/2 uppercase lg:text-xl text-sm">
                    Projects completed around the world
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-flow-col md:grid-rows-1 grid-rows-2 gap-4 px-5">
                <img
                  src="/img/language/javascript.png"
                  height="100px"
                  width="100px"
                  alt="javascript"
                />
                <img
                  src="/img/language/html.png"
                  height="100px"
                  width="100px"
                  alt="html"
                />
                <img
                  src="/img/language/css.png"
                  height="100px"
                  width="100px"
                  alt="javascript"
                />
                <img
                  src="/img/language/react.png"
                  height="100px"
                  width="100px"
                  alt="react"
                />
                <img
                  src="/img/language/vuejs.png"
                  height="100px"
                  width="100px"
                  alt="vuejs"
                />
                <img
                  src="/img/language/nodejs.png"
                  height="100px"
                  width="100px"
                  alt="nodejs"
                />
                <img
                  src="/img/language/mongodb.png"
                  height="100px"
                  width="100px"
                  alt="mongodb"
                />
                <img
                  src="/img/language/wordpress.png"
                  height="100px"
                  width="100px"
                  alt="wordpress"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Services />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;
