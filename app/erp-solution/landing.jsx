"use client";

import React, { useState, useEffect, useRef } from "react";

const DigitalSerenity = () => {
  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: "0px",
    top: "0px",
    opacity: 0,
  });
  const [ripples, setRipples] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const wordsRef = useRef([]); // Not strictly necessary if not directly manipulating post-initial animation
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const animateWords = () => {
      const wordElements = document.querySelectorAll(".word-animate");
      wordElements.forEach((word) => {
        const delay = parseInt(word.getAttribute("data-delay")) || 0;
        setTimeout(() => {
          if (word) word.style.animation = "word-appear 0.8s ease-out forwards";
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle((prev) => ({ ...prev, opacity: 0 }));
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(
        () => setRipples((prev) => prev.filter((r) => r.id !== newRipple.id)),
        1000,
      );
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const wordElements = document.querySelectorAll(".word-animate");
    const handleMouseEnter = (e) => {
      if (e.target) {
        const isDarkTheme = document.documentElement.classList.contains("dark");
        const glowColor = isDarkTheme ? "110, 231, 183" : "5, 150, 105";
        e.target.style.textShadow = `0 0 18px rgba(${glowColor}, 0.45)`;
      }
    };
    const handleMouseLeave = (e) => {
      if (e.target) e.target.style.textShadow = "none";
    };
    wordElements.forEach((word) => {
      word.addEventListener("mouseenter", handleMouseEnter);
      word.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      wordElements.forEach((word) => {
        if (word) {
          word.removeEventListener("mouseenter", handleMouseEnter);
          word.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".floating-element-animate");
    floatingElementsRef.current = Array.from(elements);
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true);
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(
            () => {
              if (el) {
                el.style.animationPlayState = "running";
                el.style.opacity = "";
              }
            },
            parseFloat(el.style.animationDelay || "0") * 1000 + index * 100,
          );
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const pageStyles = `
    .serenity-surface {
      --emerald-rgb: 6, 95, 70;
      --emerald-solid: #065f46;
      --emerald-soft: #047857;
      --grid-mid-opacity: 0.42;
      --grid-final-opacity: 0.24;
    }
    .dark .serenity-surface {
      --emerald-rgb: 52, 211, 153;
      --emerald-solid: #34d399;
      --emerald-soft: #6ee7b7;
      --grid-mid-opacity: 0.32;
      --grid-final-opacity: 0.15;
    }
    #mouse-gradient-react {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px; /* rounded-full */
      background-image: radial-gradient(circle, rgba(var(--emerald-rgb), 0.12), rgba(var(--emerald-rgb), 0.07), transparent 70%);
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
    }
    @keyframes word-appear { 0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); } 50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); } 100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
    @keyframes grid-draw { 0% { stroke-dashoffset: 1000; opacity: 0; } 50% { opacity: var(--grid-mid-opacity); } 100% { stroke-dashoffset: 0; opacity: var(--grid-final-opacity); } }
    @keyframes pulse-glow { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.1); } }
    .word-animate { display: inline-block; opacity: 0; margin: 0 0.1em; transition: color 0.3s ease, transform 0.3s ease; }
    .word-animate:hover { color: var(--emerald-soft); transform: translateY(-2px); }
    .grid-line { stroke: var(--emerald-solid); stroke-width: 0.65; opacity: 0; stroke-dasharray: 5 5; stroke-dashoffset: 1000; animation: grid-draw 2s ease-out forwards; }
    .detail-dot { fill: var(--emerald-soft); opacity: 0; animation: pulse-glow 3s ease-in-out infinite; }
    .corner-element-animate { position: absolute; width: 40px; height: 40px; border: 1px solid rgba(var(--emerald-rgb), 0.3); opacity: 0; animation: word-appear 1s ease-out forwards; }
    .text-decoration-animate { position: relative; }
    .text-decoration-animate::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--emerald-solid), transparent); animation: underline-grow 2s ease-out forwards; animation-delay: 2s; }
    @keyframes underline-grow { to { width: 100%; } }
    .floating-element-animate { position: absolute; width: 2px; height: 2px; background: var(--emerald-solid); border-radius: 50%; opacity: 0; animation: float 4s ease-in-out infinite; animation-play-state: paused; }
    @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; } 25% { transform: translateY(-10px) translateX(5px); opacity: 0.6; } 50% { transform: translateY(-5px) translateX(-3px); opacity: 0.4; } 75% { transform: translateY(-15px) translateX(7px); opacity: 0.8; } }
    .ripple-effect { position: fixed; width: 4px; height: 4px; background: rgba(var(--emerald-rgb), 0.65); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; animation: pulse-glow 1s ease-out forwards; z-index: 9999; }
  `;

  return (
    <>
      <style>{pageStyles}</style>
      <div className="serenity-surface pt-14 h-[75vh] bg-background text-emerald-900 dark:text-emerald-100 font-primary overflow-hidden relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none text-emerald-800/35 dark:text-emerald-300/22"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="gridReactDarkResponsive"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#gridReactDarkResponsive)"
          />
          <line
            x1="0"
            y1="20%"
            x2="100%"
            y2="20%"
            className="grid-line"
            style={{ animationDelay: "0.5s" }}
          />
          <line
            x1="0"
            y1="80%"
            x2="100%"
            y2="80%"
            className="grid-line"
            style={{ animationDelay: "1s" }}
          />
          <line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            className="grid-line"
            style={{ animationDelay: "1.5s" }}
          />
          <line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            className="grid-line"
            style={{ animationDelay: "2s" }}
          />
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            className="grid-line"
            style={{ animationDelay: "2.5s", opacity: "0.05" }}
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            className="grid-line"
            style={{ animationDelay: "3s", opacity: "0.05" }}
          />
          <circle
            cx="20%"
            cy="20%"
            r="2"
            className="detail-dot"
            style={{ animationDelay: "3s" }}
          />
          <circle
            cx="80%"
            cy="20%"
            r="2"
            className="detail-dot"
            style={{ animationDelay: "3.2s" }}
          />
          <circle
            cx="20%"
            cy="80%"
            r="2"
            className="detail-dot"
            style={{ animationDelay: "3.4s" }}
          />
          <circle
            cx="80%"
            cy="80%"
            r="2"
            className="detail-dot"
            style={{ animationDelay: "3.6s" }}
          />
          <circle
            cx="50%"
            cy="50%"
            r="1.5"
            className="detail-dot"
            style={{ animationDelay: "4s" }}
          />
        </svg>

        {/* Responsive Corner Elements */}
        <div
          className="corner-element-animate top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8"
          style={{ animationDelay: "4s" }}
        >
          <div className="absolute top-0 left-0 w-2 h-2 bg-emerald-600 dark:bg-emerald-300 opacity-45 dark:opacity-35 rounded-full"></div>
        </div>
        <div
          className="corner-element-animate top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8"
          style={{ animationDelay: "4.2s" }}
        >
          <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-600 dark:bg-emerald-300 opacity-45 dark:opacity-35 rounded-full"></div>
        </div>
        <div
          className="corner-element-animate bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8"
          style={{ animationDelay: "4.4s" }}
        >
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-emerald-600 dark:bg-emerald-300 opacity-45 dark:opacity-35 rounded-full"></div>
        </div>
        <div
          className="corner-element-animate bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
          style={{ animationDelay: "4.6s" }}
        >
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-600 dark:bg-emerald-300 opacity-45 dark:opacity-35 rounded-full"></div>
        </div>

        <div
          className="floating-element-animate"
          style={{ top: "25%", left: "15%", animationDelay: "0.5s" }}
        ></div>
        <div
          className="floating-element-animate"
          style={{ top: "60%", left: "85%", animationDelay: "1s" }}
        ></div>
        <div
          className="floating-element-animate"
          style={{ top: "40%", left: "10%", animationDelay: "1.5s" }}
        ></div>
        <div
          className="floating-element-animate"
          style={{ top: "75%", left: "90%", animationDelay: "2s" }}
        ></div>

        {/* Responsive Main Content Padding */}
        <div className="relative z-10 h-[70vh] w-[70%] max-w-5xl mx-auto flex flex-col justify-between items-center px-3 py-7 sm:px-5 sm:py-9 md:px-8 md:py-12">
          <div className="text-center">
            <h2 className="text-xs sm:text-sm font-mono font-light text-emerald-700 dark:text-emerald-300 uppercase tracking-[0.2em] opacity-90 dark:opacity-80">
              <span className="word-animate" data-delay="0">
                Business
              </span>
              <span className="word-animate" data-delay="300">
                OPERATIONS
              </span>
              <span className="word-animate" data-delay="300">
                Simplified
              </span>
            </h2>
            <div className="mt-3 w-10 sm:w-14 h-px bg-gradient-to-r from-transparent via-emerald-600 dark:via-emerald-300 to-transparent opacity-55 dark:opacity-40 mx-auto"></div>
          </div>

          <div className="text-center max-w-3xl mx-auto relative">
            {/* Responsive Main Heading Sizes */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-tight tracking-tight text-emerald-900 dark:text-emerald-100 text-decoration-animate">
              <div className="mb-2 md:mb-4">
                <span className="word-animate" data-delay="700">
                  Manage
                </span>
                <span className="word-animate" data-delay="850">
                  Your
                </span>
                <span className="word-animate" data-delay="1000">
                  Entire
                </span>
                <span className="word-animate" data-delay="1000">
                  Business,
                </span>
                <span className="word-animate" data-delay="1000">
                  Seemlessly
                </span>
              </div>
              {/* Responsive Secondary Heading Sizes & Added tracking-wide for letter spacing */}
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-emerald-800/90 dark:text-emerald-200/80 leading-relaxed tracking-wide">
                <span className="word-animate" data-delay="1400">
                  An
                </span>
                <span className="word-animate" data-delay="1550">
                  all-in-one
                </span>
                <span className="word-animate" data-delay="1700">
                  ERP
                </span>
                <span className="word-animate" data-delay="1850">
                  solution
                </span>
                <span className="word-animate" data-delay="2000">
                  for
                </span>
                <span className="word-animate" data-delay="2900">
                  day-to-day
                </span>
                <span className="word-animate" data-delay="3050">
                  operations
                </span>
                <span className="word-animate" data-delay="3200">
                  built
                </span>
                <span className="word-animate" data-delay="3350">
                  to
                </span>
                <span className="word-animate" data-delay="3500">
                  keep
                </span>
                <span className="word-animate" data-delay="3650">
                  your
                </span>
                <span className="word-animate" data-delay="3800">
                  business
                </span>
                <span className="word-animate" data-delay="3950">
                  organized
                </span>
                <span className="word-animate" data-delay="4100">
                  and
                </span>
                <span className="word-animate" data-delay="4250">
                  growing.
                </span>
              </div>
            </h1>
            {/* Responsive Detail Line Offsets */}
            <div
              className="absolute -left-5 sm:-left-7 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-emerald-600 dark:bg-emerald-300 opacity-0"
              style={{
                animation: "word-appear 1s ease-out forwards",
                animationDelay: "3.2s",
              }}
            ></div>
            <div
              className="absolute -right-5 sm:-right-7 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-emerald-600 dark:bg-emerald-300 opacity-0"
              style={{
                animation: "word-appear 1s ease-out forwards",
                animationDelay: "3.4s",
              }}
            ></div>
          </div>

          <div className="text-center">
            <div className="mb-3 w-10 sm:w-14 h-px bg-gradient-to-r from-transparent via-emerald-600 dark:via-emerald-300 to-transparent opacity-55 dark:opacity-40 mx-auto"></div>
            <h2 className="text-xs sm:text-sm font-mono font-light text-emerald-700 dark:text-emerald-300 uppercase tracking-[0.2em] opacity-90 dark:opacity-80">
              <span className="word-animate" data-delay="3000">
                Observe,
              </span>
              <span className="word-animate" data-delay="3200">
                accept,
              </span>
              <span className="word-animate" data-delay="3400">
                let
              </span>
              <span className="word-animate" data-delay="3550">
                go.
              </span>
            </h2>
            <div
              className="mt-5 flex justify-center space-x-3 opacity-0"
              style={{
                animation: "word-appear 1s ease-out forwards",
                animationDelay: "4.2s",
              }}
            >
              <div className="w-1 h-1 bg-emerald-600 dark:bg-emerald-300 rounded-full opacity-40"></div>
              <div className="w-1 h-1 bg-emerald-600 dark:bg-emerald-300 rounded-full opacity-60"></div>
              <div className="w-1 h-1 bg-emerald-600 dark:bg-emerald-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="ripple-effect"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default DigitalSerenity;
