"use client";

import { useEffect, useRef } from "react";
import Image from "next/image.js";
import dynamic from "next/dynamic";

import { motion, useScroll, useTransform } from "framer-motion";

import TypeWriter from "./typewriter.js";

import AboutUs from "@/app/_components/home/about.jsx";
import Services from "@/app/_components/home/services";
import Testimonials from "@/app/_components/home/testimonials";
import FAQs from "@/app/_components/home/faqs";
import {
  CountUp,
  Magnetic,
  MaskReveal,
  Marquee,
  ScrollProgress,
} from "@/components/motion";

// WebGL only exists in the browser; keep three.js out of the prerendered HTML.
const OrbScene = dynamic(() => import("@/components/three/OrbScene"), {
  ssr: false,
});

const ease = [0.16, 1, 0.3, 1];

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

const stack = [
  "Next.js",
  "React",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Three.js",
  "Express",
  "WordPress",
  "AWS",
  "Figma",
];

const typedWords = [
  "Full-stack interaction alchemist",
  "From brainstorm to browser",
  "You think, I code.",
  "Deploy-ready, chaos-free products.",
];

const gradientText = {
  backgroundImage: "var(--brand-gradient)",
  backgroundSize: "300% 300%",
};

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  useEffect(() => {
    const txtElement = document.querySelector(".txt-type");
    if (!txtElement) return;

    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    const typer = new TypeWriter(txtElement, words, wait);
    return () => typer.stop();
  }, []);

  return (
    <>
      <ScrollProgress />
      <div className="relative" ref={heroRef}>
        <div
          className="relative isolate overflow-x-hidden overflow-y-hidden px-4 pt-14 md:pt-28 sm:px-5"
          id="home"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_95%)]" />
          {/* Top-center primary glow - splash fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-80 left-1/3 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_20%_25%,rgba(16,185,129,0.18)_0%,transparent_60%),radial-gradient(circle_at_78%_22%,rgba(57,224,121,0.13)_0%,transparent_58%),radial-gradient(circle_at_52%_72%,rgba(11,110,63,0.10)_0%,transparent_65%)] blur-[180px] dark:bg-[radial-gradient(circle_at_20%_25%,rgba(16,185,129,0.12)_0%,transparent_60%),radial-gradient(circle_at_78%_22%,rgba(57,224,121,0.08)_0%,transparent_58%)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.9 }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(91,138,60,0.18)_0%,rgba(255,255,255,0)_72%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(16,185,129,0.24)_0%,rgba(3,23,13,0)_72%)]" />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-white/75 via-white/30 to-transparent dark:from-ink-deep/65 dark:via-ink-deep/25" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            style={{ opacity: heroOpacity }}
            className="relative z-10 mx-auto grid overflow-visible min-h-[calc(100svh-5rem)] h-auto max-h-none max-w-[92rem] grid-cols-1 lg:min-h-0 lg:h-[calc(100svh-5rem)] lg:max-h-[calc(100svh-5rem)] lg:grid-cols-[88px_1fr_1fr]"
          >
            {/* Frame lines that draw themselves in */}
            <motion.span
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.4, ease, delay: 0.2 }}
              className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top bg-zinc-300/60 dark:bg-white/10"
            />
            <motion.span
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.4, ease, delay: 0.35 }}
              className="pointer-events-none absolute inset-y-0 right-0 w-px origin-top bg-zinc-300/60 dark:bg-white/10"
            />
            {/* Light beams riding the frame */}
            <span className="pointer-events-none absolute left-0 top-0 h-40 w-px overflow-hidden">
              <span className="animate-beam block h-full w-px bg-linear-to-b from-transparent via-emerald-400 to-transparent" />
            </span>
            <span className="pointer-events-none absolute right-0 top-0 h-40 w-px overflow-hidden">
              <span
                className="animate-beam block h-full w-px bg-linear-to-b from-transparent via-signal to-transparent"
                style={{ animationDelay: "3s" }}
              />
            </span>

            <div className="relative hidden border-r border-zinc-300/60 dark:border-white/10 lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-10">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.8 }}
                className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-700 [writing-mode:vertical-rl] rotate-180 dark:text-zinc-300"
              >
                Reimagining the digital landscape
              </motion.span>
              {/* Scroll cue */}
              <a
                href="#about"
                aria-label="Scroll to about"
                className="group relative flex h-16 w-px items-start overflow-hidden bg-zinc-300/70 dark:bg-white/15"
              >
                <motion.span
                  animate={{ y: ["-100%", "400%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="block h-4 w-px bg-emerald-500 dark:bg-emerald-300"
                />
              </a>
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500 [writing-mode:vertical-rl] rotate-180 dark:text-zinc-500">
                © 2026
              </span>
            </div>

            <motion.div
              style={{ y: textY }}
              className="relative flex h-full flex-col justify-start overflow-hidden px-5 pb-4 pt-3 sm:px-8 lg:px-8 lg:pb-3 lg:pt-6"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease, delay: 0.9 }}
                className="pointer-events-none absolute left-5 top-20 hidden h-px w-40 origin-left bg-zinc-400/60 dark:bg-white/20 lg:block"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="pointer-events-none absolute left-5 top-20 hidden h-24 w-24 border-l border-b border-zinc-400/60 dark:border-white/20 lg:block"
              />

              <div className="pointer-events-none absolute left-0 top-0 hidden h-1/3 w-px bg-gradient-to-b from-emerald-400/60 via-signal/30 to-transparent lg:block" />
              <div className="relative flex max-w-[50rem] flex-col gap-4 pt-6 lg:gap-5 lg:pt-0">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.3 }}
                  className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400"
                >
                  <span className="h-px w-8 shrink-0 bg-linear-to-r from-emerald-400 to-signal" />
                  {/* Invisible longest phrase reserves the box, so typing,
                      deleting and wrapping never move the content below. */}
                  <span className="relative grid min-w-0 flex-1">
                    <span
                      aria-hidden="true"
                      className="invisible col-start-1 row-start-1 border-r-2 border-transparent pr-2"
                    >
                      {typedWords.reduce((a, b) => (b.length > a.length ? b : a))}
                    </span>
                    <span className="col-start-1 row-start-1">
                      <span
                        className="txt-type border-r-2 border-zinc-900 pr-2 dark:border-white"
                        data-wait="3000"
                        data-words={JSON.stringify(typedWords)}
                      />
                    </span>
                  </span>
                </motion.p>

                <div className="space-y-1.5 text-left [perspective:800px]">
                  <h1 className="text-[clamp(2.6rem,16vw,3.8rem)] font-black leading-[0.82] tracking-[-0.08em] md:text-[clamp(3.8rem,11vw,7.4rem)]">
                    <MaskReveal delay={0.35}>
                      <span
                        style={gradientText}
                        className="inline-block bg-clip-text pr-[0.08em] text-transparent animate-gradient-flow"
                      >
                        Hello,
                      </span>
                    </MaskReveal>
                  </h1>

                  <div className="flex flex-col gap-2 xl:flex-row xl:items-end xl:gap-4">
                    <h2 className="text-[clamp(1.6rem,8.6vw,2.6rem)] font-black leading-[0.95] tracking-[-0.07em] md:text-[clamp(2rem,5.4vw,4.35rem)]">
                      <MaskReveal delay={0.5}>
                        <span
                          style={gradientText}
                          className="inline-block bg-clip-text pr-[0.06em] text-transparent animate-gradient-flow"
                        >
                          I&apos;m Aminul Islam
                        </span>
                      </MaskReveal>
                    </h2>
                    <motion.p
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease, delay: 0.9 }}
                      className="pb-1 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400"
                    >
                      aka Animux
                    </motion.p>
                  </div>
                </div>

                <div className="pointer-events-none relative mt-4 hidden lg:block">
                  <div className="absolute -left-8 top-0 h-px w-16 bg-emerald-400/60" />
                  <div className="absolute -left-8 top-0 h-20 w-px bg-gradient-to-b from-emerald-400/60 to-transparent" />
                  <div className="absolute -left-8 top-20 h-px w-16 bg-gradient-to-r from-emerald-400/60 to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.75 }}
                  className="max-w-lg space-y-2 text-left"
                >
                  <p className="max-w-lg text-[0.9rem] leading-5 text-zinc-600 dark:text-zinc-300 sm:text-[0.94rem]">
                    Taking ideas from &quot;this could be cool&quot; to fully
                    shipped and polished. Crafting standout portfolios, speedy
                    dashboards, storefronts that convert, and digital
                    experiences with equal parts strategy, design, and code.
                  </p>
                </motion.div>

                <div className="grid grid-cols-3 gap-4 border-t border-zinc-300/50 pt-4 lg:max-w-[40rem] dark:border-white/10">
                  {heroStats.map((stat, i) => (
                    <motion.div
                      key={stat.number}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease, delay: 0.9 + i * 0.12 }}
                      className="group relative space-y-3"
                    >
                      <div className="mb-2 h-1 w-14 bg-gradient-to-r from-royal via-emerald-400 to-signal transition-all duration-500 group-hover:w-24" />
                      <p className="text-[2.25rem] font-black leading-none tracking-[-0.06em] text-zinc-950 dark:text-white sm:text-[2.75rem]">
                        <CountUp value={stat.number} delay={1 + i * 0.12} />
                      </p>
                      <p className="mt-1 max-w-[12rem] text-xs font-medium uppercase leading-4 tracking-[0.1em] text-zinc-600 dark:text-zinc-400">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease, delay: 1.25 }}
                  className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-4"
                >
                  <Magnetic>
                    <a
                      href="mailto:hello@animux.dev"
                      className="group relative inline-flex items-center gap-3 overflow-hidden bg-zinc-950 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)] dark:bg-white dark:text-zinc-950"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-royal via-emerald-400 to-signal transition-transform duration-500 ease-out group-hover:translate-x-0" />
                      <span className="relative">Let&apos;s talk</span>
                      <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </Magnetic>
                  <a
                    href="#about"
                    className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                  >
                    Discover More
                    <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-y-1">
                      ↓
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.35 }}
              className="relative flex h-full min-h-[340px] w-full items-end justify-center max-lg:px-5 max-lg:py-0 sm:min-h-[420px] sm:max-lg:px-8 lg:min-h-0 lg:px-0 lg:overflow-visible"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease, delay: 0.6 }}
                className="pointer-events-none absolute inset-x-6 top-10 hidden h-[58%] border border-emerald-500/60 dark:border-emerald-300/30 lg:block"
              >
                {/* Corner ticks */}
                <span className="absolute -left-1 -top-1 h-2 w-2 bg-emerald-400" />
                <span className="absolute -right-1 -top-1 h-2 w-2 bg-signal" />
                <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-royal" />
                <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-emerald-400" />
              </motion.div>
              <div className="pointer-events-none absolute left-0 top-[60%] hidden h-px w-28 bg-zinc-400/60 dark:bg-white/15 lg:block" />
              <div className="pointer-events-none absolute bottom-24 left-0 hidden h-24 w-24 border-r border-t border-zinc-300/60 dark:border-white/12 lg:block" />

              {/* 3D orbit scene */}
              <motion.div
                style={{ y: sceneY, scale: sceneScale }}
                className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[85%] lg:-inset-x-10 lg:top-0 lg:h-[75%]"
              >
                <OrbScene className="h-full w-full" />
              </motion.div>

              {/* Availability chip */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 1.4 }}
                className="absolute right-4 top-4 z-30 flex items-center gap-2 border border-zinc-300/70 bg-white/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-700 backdrop-blur-md dark:border-white/15 dark:bg-ink-800/50 dark:text-zinc-300 lg:right-10 lg:top-14"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-soft absolute inset-0 rounded-full bg-emerald-400" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for projects
              </motion.div>

              <motion.div
                style={{ y: portraitY }}
                className="relative z-10 flex h-full w-full items-end justify-center"
              >
                <div className="pointer-events-none absolute inset-x-10 top-20 h-1/2 rounded-[2rem] bg-[radial-gradient(circle_at_35%_30%,rgba(110,231,183,0.22),transparent_45%),radial-gradient(circle_at_72%_65%,rgba(57,224,121,0.18),transparent_42%),radial-gradient(circle_at_50%_95%,rgba(91,138,60,0.14),transparent_32%)] blur-3xl" />
                <Image
                  src="/landing_green.svg"
                  width={1080}
                  height={1080}
                  priority
                  className="relative z-20 mx-auto h-full w-full max-h-[70svh] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(16,185,129,0.25)] sm:max-h-[75svh] lg:h-[110%] lg:w-[125%] lg:max-h-none lg:max-w-none"
                  alt="Illustrated portrait"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech stack ticker */}
      <div className="relative border-y border-zinc-300/60 bg-white py-5 dark:border-white/10 dark:bg-ink-deep">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent dark:from-ink-deep" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent dark:from-ink-deep" />
        <Marquee items={stack} />
      </div>

      <AboutUs />
      <Services />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;
