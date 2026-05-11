"use client";

import { useEffect } from "react";
import Image from "next/image.js";

import { motion } from "framer-motion";

import TypeWriter from "./typewriter.js";

import Button from "@/components/ui/button";

import AboutUs from "@/app/_components/home/about.jsx";
import Services from "@/app/_components/home/services";
import Testimonials from "@/app/_components/home/testimonials";
import FAQs from "@/app/_components/home/faqs";

import { Plus } from "lucide-react";

const Home = () => {
  useEffect(() => {
    const txtElement = document.querySelector(".txt-type");
    if (!txtElement) return;

    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    new TypeWriter(txtElement, words, wait);
  }, []);

  const heroStats = [
    {
      number: "7",
      label: "Industries translated into launch-ready experiences",
    },
    {
      number: "50+",
      label: "Digital systems, sites, and product flows shipped",
    },
    {
      number: "4",
      label: "Core disciplines blended into every delivery orbit",
    },
  ];

  return (
    <>
      <div className="relative">
        <div
          className="relative isolate overflow-x-hidden overflow-y-hidden px-4 pt-14 md:pt-28 sm:px-5"
          id="home"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px)] [background-size:42px_42px]" />
          {/* Top-center primary glow - splash fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-80 left-1/3 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_20%_25%,rgba(16,185,129,0.18)_0%,transparent_60%),radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.13)_0%,transparent_58%),radial-gradient(circle_at_52%_72%,rgba(168,85,247,0.10)_0%,transparent_65%)] blur-[180px] dark:bg-[radial-gradient(circle_at_35%_30%,rgba(24,24,27,0.10)_0%,rgba(24,24,27,0.08)_40%,rgba(24,24,27,0.04)_70%,transparent_90%)] dark:opacity-60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.9 }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.18)_0%,rgba(255,255,255,0)_72%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(192,132,252,0.24)_0%,rgba(2,6,23,0)_72%)]" />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-white/75 via-white/30 to-transparent dark:from-zinc-950/65 dark:via-zinc-950/25" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="relative z-10 mx-auto grid overflow-visible min-h-[calc(100svh-5rem)] h-auto max-h-none max-w-[92rem] grid-cols-1 border-x border-zinc-300/60 dark:border-white/10 lg:min-h-0 lg:h-[calc(100svh-5rem)] lg:max-h-[calc(100svh-5rem)] lg:grid-cols-[88px_1fr_1fr]"
          >
            <div className="hidden border-r border-zinc-300/60 dark:border-white/10 lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-10">
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-700 [writing-mode:vertical-rl] rotate-180 dark:text-zinc-300">
                Reimagining the digital landscape
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500 [writing-mode:vertical-rl] rotate-180 dark:text-zinc-500">
                © 2026
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="relative flex h-full flex-col justify-start overflow-hidden px-5 pb-4 pt-3 sm:px-8 lg:px-8 lg:pb-3 lg:pt-6"
            >
              <div className="pointer-events-none absolute left-5 top-20 hidden h-px w-40 bg-zinc-400/60 dark:bg-white/20 lg:block" />
              <div className="pointer-events-none absolute left-5 top-20 hidden h-24 w-24 border-l border-b border-zinc-400/60 dark:border-white/20 lg:block" />

              <div className="pointer-events-none absolute left-0 top-0 hidden h-1/3 w-px bg-gradient-to-b from-emerald-400/60 via-cyan-300/30 to-transparent lg:block" />
              <div className="relative flex max-w-[50rem] flex-col gap-4 pt-6 lg:gap-5 lg:pt-0">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  <span
                    className="txt-type border-r-2 border-zinc-900 pr-2 dark:border-white"
                    data-wait="3000"
                    data-words='["Full-stack interaction alchemist", "From brainstorm to browser", "You think, I code.", "Deploy-ready, chaos-free products."]'
                  ></span>
                </p>

                <div className="space-y-1.5 text-left">
                  <h1
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #10b981, #06b6d4, #a855f7)",
                      backgroundSize: "300% 300%",
                    }}
                    className="bg-clip-text text-transparent animate-gradient-flow text-[clamp(2.6rem,16vw,3.8rem)] font-black leading-[0.82] tracking-[-0.08em] md:text-[clamp(3.8rem,11vw,7.4rem)]"
                  >
                    Hello,
                  </h1>

                  <div className="flex flex-col gap-2 xl:flex-row xl:items-end xl:gap-4">
                    <h2
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #10b981, #06b6d4, #a855f7)",
                        backgroundSize: "300% 300%",
                      }}
                      className="bg-clip-text text-transparent animate-gradient-flow text-[clamp(1.6rem,8.6vw,2.6rem)] font-black leading-[0.95] tracking-[-0.07em] md:text-[clamp(2rem,5.4vw,4.35rem)]"
                    >
                      I&apos;m Aminul Islam
                    </h2>
                    <p className="pb-1 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                      aka Animux
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none relative mt-4 hidden lg:block">
                  <div className="absolute -left-8 top-0 h-px w-16 bg-emerald-400/60" />
                  <div className="absolute -left-8 top-0 h-20 w-px bg-gradient-to-b from-emerald-400/60 to-transparent" />
                  <div className="absolute -left-8 top-20 h-px w-16 bg-gradient-to-r from-emerald-400/60 to-transparent" />
                </div>

                <div className="max-w-lg space-y-2 text-left">
                  <p className="max-w-lg text-[0.9rem] leading-5 text-zinc-600 dark:text-zinc-300 sm:text-[0.94rem]">
                    Taking ideas from "this could be cool" to fully shipped and
                    polished. Crafting standout portfolios, speedy dashboards,
                    storefronts that convert, and digital experiences with equal
                    parts strategy, design, and code.
                  </p>
                </div>

                <div className="grid gap-4 border-t border-zinc-300/50 pt-4 grid-cols-1 grid-cols-3 lg:max-w-[40rem] dark:border-white/10">
                  {heroStats.map((stat) => (
                    <div key={stat.number} className="relative space-y-3">
                      <div className="mb-2 h-1 w-14 bg-gradient-to-r from-emerald-400 via-cyan-300 to-violet-400" />
                      <p className="text-[2.25rem] font-black leading-none tracking-[-0.06em] text-zinc-950 dark:text-white sm:text-[2.75rem]">
                        {stat.number}
                      </p>
                      <p className="mt-1 max-w-[12rem] text-xs font-medium uppercase leading-4 tracking-[0.1em] text-zinc-600 dark:text-zinc-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap mt-3">
                  <a
                    href="#about"
                    className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                  >
                    Discover More
                    <span className="text-lg leading-none">↓</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 120 }}
              transition={{ duration: 0.95, ease: "easeOut", delay: 0.35 }}
              className="relative flex h-full min-h-[260px] w-full items-end justify-center max-lg:px-5 max-lg:py-0 sm:min-h-[360px] sm:max-lg:px-8 lg:min-h-0 lg:px-0 lg:overflow-visible"
            >
              <div className="pointer-events-none absolute inset-x-6 top-10 hidden h-[58%] border border-zinc-300/60 dark:border-white/12 lg:block" />
              <div className="pointer-events-none absolute left-0 top-[60%] hidden h-px w-28 bg-zinc-400/60 dark:bg-white/15 lg:block" />
              <div className="pointer-events-none absolute bottom-24 left-0 hidden h-24 w-24 border-r border-t border-zinc-300/60 dark:border-white/12 lg:block" />

              <div className="relative z-10 flex h-full w-full items-end justify-center">
                <div className="pointer-events-none absolute inset-x-10 top-20 h-1/2 rounded-[2rem] bg-[radial-gradient(circle_at_35%_30%,rgba(110,231,183,0.22),transparent_45%),radial-gradient(circle_at_72%_65%,rgba(96,165,250,0.18),transparent_42%),radial-gradient(circle_at_50%_95%,rgba(244,114,182,0.14),transparent_32%)] blur-3xl" />
                <Image
                  src="/landing_green.svg"
                  width={1080}
                  height={1080}
                  className="relative z-20 mx-auto h-full w-full max-h-[70svh] object-contain object-bottom sm:max-h-[75svh] lg:h-[110%] lg:w-[125%] lg:max-h-none lg:max-w-none"
                  alt="Illustrated portrait of Aminul Islam"
                />
              </div>
            </motion.div>
          </motion.div>
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
