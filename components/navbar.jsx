"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ThemeSwitch from "@/components/ThemeSwitch";

import Logo from "@/public/logo.png";
import LogoDark from "@/public/logo-dark.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  return (
    <nav
      className={
        "fixed w-full top-0 z-10 backdrop-filter backdrop-blur-md bg-opacity-10 dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-10 lg:px transition-all ease-in-out duration-300 " +
        (scrollY >= 100 ? "shadow-lg" : "shadow-none")
      }
    >
      <div className="flex flex-wrap items-center justify-between mx-2 p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            className="hidden dark:block"
            alt="Animux"
            width={100}
          />
          <Image
            src={LogoDark}
            width={100}
            className="block dark:hidden"
            alt="Animux"
          />
        </Link>

        <div className="flex items-center flex-row justify-between xl:gap-8 sm:gap-2">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
            onClick={() => setOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={
              isOpen
                ? "absolute top-10 left-0 w-full"
                : "" + "hidden w-full md:block md:w-auto basis-1/2"
            }
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:text-zinc-700 md:p-0 dark:text-zinc-800 md:dark:text-zinc-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ThemeSwitch className="basis-1/4"></ThemeSwitch>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
