"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({ text, title, index }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: (index ?? 0) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full border-b border-b-neutral-300 dark:border-b-neutral-700"
    >
      {/* Gradient underline that grows on hover / when open */}
      <span
        className={`pointer-events-none absolute -bottom-px left-0 h-px origin-left bg-linear-to-r from-neutral-900 to-emerald-500 dark:from-white dark:to-emerald-400 transition-transform duration-700 ease-out ${toggle ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"}`}
      />
      <button
        type="button"
        aria-expanded={toggle}
        className="flex w-full cursor-pointer flex-row items-center justify-between gap-6 px-4 py-5 text-left"
        onClick={() => setToggle(!toggle)}
      >
        <span className="flex items-baseline gap-4">
          {index !== undefined && (
            <span className="font-mono text-xs text-emerald-500 dark:text-emerald-300">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className="text-xl font-normal text-neutral-800 transition-transform duration-300 group-hover:translate-x-1 dark:text-neutral-200">
            {title}
          </span>
        </span>
        <motion.span
          animate={{ rotate: toggle ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center border text-xl leading-none transition-colors duration-300 ${toggle ? "border-transparent bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "border-neutral-300 text-neutral-700 group-hover:border-emerald-400 dark:border-neutral-600 dark:text-neutral-200"}`}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {toggle && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-6 text-lg text-neutral-600 md:pl-12 dark:text-neutral-300">
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
