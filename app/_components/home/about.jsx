"use client";

// import Particles from "@tsparticles/react";
// import config from "./particlesjs-config";

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: "url('/about-us.jpg')" }}
      id="about"
    >
      <div className="py-20 backdrop-filter backdrop-blur-lg bg-opacity-50 bg-white dark:bg-zinc-900 dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto md:px-0 px-5">
            <div className="flex">
              <h1 className="md:text-6xl text-5xl opacity-80 font-extrabold mb-5 dark:bg-zinc-900 bg-white dark:text-white text-zinc-900">
                Code, <span className="bg-amber-950 text-white ">Coffee</span> &
                Creativity
              </h1>
            </div>
            <div className="flex flex-row text-xl text-pretty gap-5">
              <p className="px-10 border-t-4 border-white md:block hidden"></p>
              <p className="text-xl">
                <span className="font-bold">
                  Let’s make something awesome together.
                </span>{" "}
                Hi, I’m Aminul Islam (aka Animux), a{" "}
                <span className="font-bold">Full Stack Web Developer</span> with{" "}
                <span className="underline font-bold">7+ years</span> of
                experience — but let’s be honest, I’m here to create cool stuff
                that gets results. From front-end finesse to back-end wizardry,
                I’ve got the skills to make everything run smooth and look even
                smoother.{" "}
                <span className="font-bold underline">
                  Communication is my jam
                </span>
                , so I make sure I understand exactly what you need, then turn
                it into an app that’s not just functional, but a joy to use. I’m
                always keeping my skills sharp by staying ahead of the latest
                tech trends —{" "}
                <span className="font-bold underline">
                  because who doesn’t love learning the newest tricks?
                </span>{" "}
                Whether it’s a big project or just some advice, my goal is
                simple: to help you and your business shine with a mix of solid
                tech and a bit of creative flair.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
