"use client";

import * as React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-500 hover:border-emerald-500 dark:border-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 ",
        outline:
          "relative isolate overflow-hidden border-emerald-600 bg-transparent text-emerald-600 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-emerald-600 before:transition-transform before:duration-300 before:ease-out hover:border-emerald-600 hover:text-white hover:before:scale-x-100 dark:border-emerald-400 dark:text-emerald-300 dark:before:bg-emerald-500 dark:hover:text-white",
        secondary:
          "border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 dark:border-zinc-200 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
        ghost:
          "border-transparent bg-transparent text-zinc-800 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white",
        link: "rounded-none border-transparent p-0 text-emerald-600 underline-offset-4 hover:underline hover:text-emerald-500 dark:text-emerald-400",
        destructive:
          "border-rose-600 bg-rose-600 text-white hover:bg-rose-500 hover:border-rose-500",
      },
      size: {
        default: "h-9 px-5 text-xs",
        sm: "h-6 rounded-lg px-5 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(function Button(
  {
    className,
    variant,
    size,
    href,
    text,
    children,
    type,
    outline,
    buttonType = "button",
    ...props
  },
  ref,
) {
  const content = children ?? text;
  const resolvedVariant = outline ? "outline" : variant;

  if (href || type === "link") {
    return (
      <Link
        href={href || "#"}
        className={cn(
          buttonVariants({ variant: resolvedVariant, size }),
          className,
        )}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type === "submit" || type === "reset" ? type : buttonType}
      className={cn(
        buttonVariants({ variant: resolvedVariant, size }),
        className,
      )}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
