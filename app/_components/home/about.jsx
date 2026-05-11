"use client";
import { motion } from "framer-motion";

import { useId } from "react";

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
        "pointer-events-none absolute inset-0 h-full w-full fill-zinc-500/35 md:fill-zinc-500/45 dark:fill-zinc-300/20"
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(16,185,129,0.22),transparent_44%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_48%_86%,rgba(168,85,247,0.16),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative py-20 text-zinc-900 dark:text-white backdrop-blur-sm bg-white/45 dark:bg-zinc-950/35">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto md:px-0 px-5">
            <div className="group relative  p-[1px] bg-linear-to-r from-emerald-400/90 via-cyan-400/90 to-violet-400/90 shadow-[0_0_0_1px_rgba(16,185,129,0.22),0_0_42px_rgba(34,211,238,0.22)]">
              <div className="relative overflow-hidden p-6 sm:p-8 md:p-10 bg-white/70 dark:bg-zinc-900/70">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(16,185,129,0.10),transparent_36%),radial-gradient(circle_at_86%_16%,rgba(34,211,238,0.09),transparent_34%),radial-gradient(circle_at_50%_96%,rgba(168,85,247,0.10),transparent_38%)]" />
                <DotPattern width={32} height={32} cx={1} cy={1} cr={0.5} />
                <div className="absolute -left-2 -top-2 z-20 h-4 w-4 bg-emerald-300 opacity-100 shadow-[0_0_18px_rgba(16,185,129,0.7)]" />
                <div className="absolute -bottom-2 -left-2 z-20 h-4 w-4 bg-cyan-300 opacity-100 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
                <div className="absolute -right-2 -top-2 z-20 h-4 w-4 bg-violet-300 opacity-100 shadow-[0_0_18px_rgba(167,139,250,0.68)]" />
                <div className="absolute -bottom-2 -right-2 z-20 h-4 w-4 bg-cyan-300 opacity-100 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
                <div className="relative z-10 flex">
                  <h1 className="mb-6 text-3xl font-extrabold opacity-95 sm:text-4xl md:text-6xl dark:text-white text-zinc-900">
                    Code,{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-gradient-flow">
                      Coffee
                    </span>{" "}
                    &amp; Creativity
                  </h1>
                </div>
                <div className="relative z-10 flex flex-col items-stretch gap-4 text-pretty text-base sm:text-lg md:flex-row md:gap-5 md:text-xl">
                  {/* Gradient left accent bar */}
                  <div className="mx-4 hidden w-1 flex-shrink-0 self-stretch  bg-linear-to-b from-emerald-400 via-cyan-400 to-violet-400 md:flex" />
                  <p className="leading-relaxed text-zinc-700 dark:text-zinc-200 text-base sm:text-lg md:text-xl">
                    <span className="font-bold underline decoration-emerald-400/90">
                      Let’s make something awesome together.
                    </span>{" "}
                    Hi, I’m Aminul Islam (aka Animux), a{" "}
                    <span className="font-bold">Full Stack Web Developer</span>{" "}
                    with{" "}
                    <span className="font-bold underline decoration-violet-400/90">
                      8+ years
                    </span>{" "}
                    of experience — but let’s be honest, I’m here to create cool
                    stuff that gets results. From front-end finesse to back-end
                    wizardry, I’ve got the skills to make everything run smooth
                    and look even smoother.{" "}
                    <span className="font-bold underline decoration-cyan-400/90">
                      Communication is my jam
                    </span>
                    , so I make sure I understand exactly what you need, then
                    turn it into an app that’s not just functional, but a joy to
                    use. I’m always keeping my skills sharp by staying ahead of
                    the latest tech trends —{" "}
                    <span className="font-bold underline decoration-violet-400/90">
                      because who doesn’t love learning the newest tricks?
                    </span>{" "}
                    Whether it’s a big project or just some advice, my goal is
                    simple: to help you and your business shine with a mix of
                    solid tech and a bit of creative flair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
