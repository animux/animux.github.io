"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";

/** Thin brand-gradient bar pinned to the top that tracks page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-linear-to-r from-neutral-900 to-emerald-500 dark:from-white dark:to-emerald-400"
    />
  );
}

/** Card that tilts in 3D toward the pointer, with a soft spotlight glare. */
export function TiltCard({
  children,
  className = "",
  max = 10,
  glare = true,
  ...rest
}) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(110,231,183,0.099), rgba(57,224,121,0.045) 35%, transparent 65%)`;

  const onMove = (e) => {
    if (e.pointerType === "touch") return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className="[perspective:1100px]">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className={`group/tilt relative ${className}`}
        {...rest}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden="true"
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          />
        )}
      </motion.div>
    </div>
  );
}

/** Animated number that counts up once it scrolls into view. Keeps any suffix like "+". */
export function CountUp({ value, className = "", duration = 1.6, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const target = parseInt(value, 10) || 0;
  const suffix = String(value).replace(/^\d+/, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/** Wrapper that drifts toward the pointer while hovered. */
export function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });
  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={`inline-block ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType === "touch") return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Fade + lift into view. */
export function Reveal({ children, delay = 0, y = 40, className = "", ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Text that slides up from behind a mask. */
export function MaskReveal({ children, delay = 0, className = "" }) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%", rotateX: -40 }}
        animate={{ y: "0%", rotateX: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Editorial section eyebrow: "[01] — About" with a drawn line. */
export function SectionLabel({ index, children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 ${className}`}
    >
      <span className="font-mono text-emerald-500 dark:text-emerald-300">
        [{index}]
      </span>
      <motion.span
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-16 origin-left bg-linear-to-r from-neutral-900 to-emerald-500 dark:from-white dark:to-emerald-400"
      />
      <motion.span
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}

/** Infinite horizontal ticker whose speed/skew reacts to scroll velocity. */
export function Marquee({ items, reverse = false }) {
  const { scrollY } = useScroll();
  const shift = useTransform(scrollY, (v) => (reverse ? v * 0.15 : -v * 0.15));
  const x = useSpring(shift, { stiffness: 80, damping: 20 });
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <motion.div style={{ x }} className="flex w-max">
        <div
          className={`flex w-max shrink-0 items-center gap-10 pr-10 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        >
          {row.concat(row).map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap text-2xl font-black uppercase tracking-[-0.03em] text-neutral-900 md:text-4xl dark:text-white"
            >
              {item}
              <span className="inline-block h-3 w-3 rotate-45 bg-linear-to-br from-neutral-900 to-emerald-500 dark:from-white dark:to-emerald-400" />
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
