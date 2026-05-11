import Link from "next/link";

import {
  LuInstagram,
  LuMail,
  LuLinkedin,
  LuGithub,
  LuFacebook,
} from "react-icons/lu";

export default function Footer() {
  return (
    <div className="dark:bg-zinc-950 bg-white relative flex md:flex-row flex-col justify-between items-center px-5 py-10 gap-5 dark:text-white text-zinc-950">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
      <div className="text-lg md:text-left text-center">
        Reached the bottom? Cool. Now let’s take your ideas to the top!
        <br />
        Copyright &copy; {new Date().getFullYear()} Animux.
      </div>
      <div className="flex flex-row gap-2">
        <Link href={"mailto:hello@animux.dev"} target="_blank">
          <LuMail className="w-8 h-8" />
        </Link>
        <Link href={"https://www.instagram.com/aminullll"} target="_blank">
          <LuInstagram className="w-8 h-8" />
        </Link>
        <Link href={"https://www.facebook.com/devanimux"} target="_blank">
          <LuFacebook className="w-8 h-8" />
        </Link>
        <Link href="https://www.linkedin.com/in/animux" target="_blank">
          <LuLinkedin className="w-8 h-8" />
        </Link>
        <Link href={"https://www.github.com/animux"} target="_blank">
          <LuGithub className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}
