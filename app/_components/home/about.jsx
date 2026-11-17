"use client";
import { motion } from "framer-motion";

import { useId } from "react";
import { SectionLabel, TiltCard } from "@/components/motion";

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
      className={
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-500/35 md:fill-neutral-500/45 dark:fill-neutral-300/20"
      }
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

const AboutUs = () => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: "url('/about-us.jpg')" }}
      id="about"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(16,185,129,0.099),transparent_44%),radial-gradient(circle_at_82%_18%,rgba(57,224,121,0.081),transparent_40%),radial-gradient(circle_at_48%_86%,rgba(11,110,63,0.072),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(23,23,23,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,23,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative py-20 text-neutral-900 dark:text-white backdrop-blur-sm bg-white/45 dark:bg-neutral-950/35">
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 18 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          style={{ transformPerspective: 1200 }}
        >
          <div className="container mx-auto md:px-0 px-5">
            <SectionLabel index="01">About</SectionLabel>
            <TiltCard max={4} className="group relative  p-[1px] bg-linear-to-br from-neutral-300 via-neutral-200 to-emerald-400/50 dark:from-white/20 dark:via-white/10 dark:to-emerald-400/40 shadow-[0_0_0_1px_rgba(16,185,129,0.099),0_0_42px_rgba(57,224,121,0.099)]">
              <div className="relative overflow-hidden p-6 sm:p-8 md:p-10 bg-white/70 dark:bg-neutral-900/70">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(16,185,129,0.045),transparent_36%),radial-gradient(circle_at_86%_16%,rgba(57,224,121,0.041),transparent_34%),radial-gradient(circle_at_50%_96%,rgba(11,110,63,0.045),transparent_38%)]" />
                <DotPattern width={32} height={32} cx={1} cy={1} cr={0.5} />
                <div className="absolute -left-2 -top-2 z-20 h-4 w-4 bg-emerald-300 opacity-100 shadow-[0_0_18px_rgba(16,185,129,0.315)]" />
                <div className="absolute -bottom-2 -left-2 z-20 h-4 w-4 bg-neutral-400 dark:bg-neutral-500 opacity-100 shadow-[0_0_18px_rgba(57,224,121,0.315)]" />
                <div className="absolute -right-2 -top-2 z-20 h-4 w-4 bg-neutral-400 dark:bg-neutral-500 opacity-100 shadow-[0_0_18px_rgba(167,243,201,0.306)]" />
                <div className="absolute -bottom-2 -right-2 z-20 h-4 w-4 bg-neutral-400 dark:bg-neutral-500 opacity-100 shadow-[0_0_18px_rgba(57,224,121,0.315)]" />
                <div className="relative z-10 flex">
                  <h1 className="mb-6 text-3xl font-extrabold opacity-95 sm:text-4xl md:text-6xl dark:text-white text-neutral-900">
                    Code,{" "}
                    <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-transparent animate-gradient-flow">
                      Coffee
                    </span>{" "}
                    &amp; Creativity
                  </h1>
                </div>
                <div className="relative z-10 flex flex-col items-stretch gap-4 text-pretty text-base sm:text-lg md:flex-row md:gap-5 md:text-xl">
                  {/* Gradient left accent bar */}
                  <div className="mx-4 hidden w-1 flex-shrink-0 self-stretch  bg-linear-to-b from-neutral-900 to-emerald-500 dark:from-white dark:to-emerald-400 md:flex" />
                  <p className="leading-relaxed text-neutral-700 dark:text-neutral-200 text-base sm:text-lg md:text-xl">
                    <span className="font-bold underline decoration-emerald-400/90">
                      Let’s make something awesome together.
                    </span>{" "}
                    Hi, I’m Aminul Islam (aka Animux), a{" "}
                    <span className="font-bold">Full Stack Web Developer</span>{" "}
                    with{" "}
                    <span className="font-bold underline decoration-neutral-400">
                      8+ years
                    </span>{" "}
                    of experience — but let’s be honest, I’m here to create cool
                    stuff that gets results. From front-end finesse to back-end
                    wizardry, I’ve got the skills to make everything run smooth
                    and look even smoother.{" "}
                    <span className="font-bold underline decoration-neutral-400">
                      Communication is my jam
                    </span>
                    , so I make sure I understand exactly what you need, then
                    turn it into an app that’s not just functional, but a joy to
                    use. I’m always keeping my skills sharp by staying ahead of
                    the latest tech trends —{" "}
                    <span className="font-bold underline decoration-neutral-400">
                      because who doesn’t love learning the newest tricks?
                    </span>{" "}
                    Whether it’s a big project or just some advice, my goal is
                    simple: to help you and your business shine with a mix of
                    solid tech and a bit of creative flair.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
