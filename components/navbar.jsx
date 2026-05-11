"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import ThemeSwitch from "@/components/ThemeSwitch";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const isErpSolutionPage = pathname?.startsWith("/erp-solution");

  useEffect(() => {
    document.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () => document.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/erp-solution", label: "ERP Solution" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  return (
    <nav
      className={`fixed w-full top-0 backdrop-filter backdrop-blur-xl bg-linear-to-b from-white/65 via-white/35 to-transparent dark:from-zinc-950/60 dark:via-zinc-950/30 dark:to-transparent transition-all ease-in-out duration-300 z-50 ${
        scrollY >= 100
          ? "shadow-lg border-b border-zinc-300/30 dark:border-zinc-700/40"
          : "shadow-none"
      }`}
    >
      <motion.div
        layout
        className={isErpSolutionPage ? "container mx-auto" : ""}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{
          delay: 0.5,
          layout: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="flex items-center justify-between mx-2 px-4 py-5 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center z-40 flex-shrink-0">
            <img
              src="/logo.png"
              className="hidden dark:block w-[100px]"
              alt="Animux"
            />
            <img
              src="/logo-dark.png"
              width={100}
              className="block dark:hidden w-[100px]"
              alt="Animux"
            />
          </Link>

          {/* Desktop Menu + Mobile Controls Container */}
          <div className="flex items-center justify-end gap-3 md:gap-8">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex font-medium gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative py-2 text-gray-900 dark:text-white transition-colors duration-300 hover:text-zinc-600 dark:hover:text-zinc-400 group"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zinc-600 to-zinc-700 dark:from-zinc-400 dark:to-zinc-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Switch */}
            <ThemeSwitch></ThemeSwitch>

            {/* Mobile Menu Button */}
            <motion.button
              variants={hamburgerVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50 transition-colors duration-300 z-40"
              aria-label="Toggle menu"
            >
              <motion.svg
                className="w-6 h-6 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white dark:bg-zinc-900/95 backdrop-blur-md border-t border-zinc-200/30 dark:border-zinc-700/40"
            >
              <ul className="font-medium flex flex-col gap-1 p-4 sm:p-6">
                {navItems.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-gray-900 dark:text-white rounded-lg hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-all duration-300 hover:translate-x-1"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
