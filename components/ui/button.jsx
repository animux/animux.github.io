"use client";

import Link from "next/link";

const Button = ({ type, text, onClick, href }) => {
  return type === "button" ? (
    <button
      className="px-10 py-3 uppercase bg-stone-800 text-lg text-white dark:bg-white dark:text-stone-800 rounded my-3 whitespace-break-spaces"
      onClick={onClick}
    >
      {text}
    </button>
  ) : type === "link" ? (
    <Link
      href={href}
      className="px-10 py-3 bg-stone-800 text-lg text-white dark:bg-white dark:text-stone-800 uppercase rounded my-3 whitespace-break-spaces"
    >
      {text}
    </Link>
  ) : null;
};

export default Button;
