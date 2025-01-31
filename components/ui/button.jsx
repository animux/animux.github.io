"use client";

import Link from "next/link";

const Button = ({ type, text, onClick, href }) => {
  return type === "button" ? (
    <button
      className="px-10 py-2 bg-stone-800 text-lg text-white dark:bg-white dark:text-stone-800 rounded my-3"
      onClick={onClick}
    >
      {text}
    </button>
  ) : type === "link" ? (
    <Link
      href={href}
      className="px-10 py-2 bg-stone-800 text-lg text-white dark:bg-white dark:text-stone-800 rounded my-3"
    >
      {text}
    </Link>
  ) : null;
};

export default Button;
