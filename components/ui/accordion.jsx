"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ text, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="px-4 py-4 w-full border-b-zinc-300 border-b bg-neutral-100 dark:bg-zinc-900">
      <div
        className="flex flex-row justify-between cursor-pointer items-center"
        onClick={() => setToggle(!toggle)}
      >
        <div className="font-normal text-xl text-zinc-800 dark:text-neutral-200">
          {title}
        </div>
        {toggle ? (
          <FontAwesomeIcon icon={faChevronUp} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} size="lg" />
        )}
      </div>
      <div
        className={
          "text-lg" +
          " transition-height" +
          " ease-in-out duration-300 " +
          " " +
          (toggle ? "max-h-full pt-5" : "max-h-0 invisible")
        }
      >
        {text}
      </div>
    </div>
  );
};

export default Accordion;
