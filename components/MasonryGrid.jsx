"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LuGlobe } from "react-icons/lu";
import Link from "next/link";

const PREVIEW_WIDTH = 1440;

function freshCaptureUrl(siteUrl, viewportHeight) {
  const crop = Math.min(1800, Math.max(480, Math.round(viewportHeight)));
  return `https://image.thum.io/get/maxAge/1/width/${PREVIEW_WIDTH}/crop/${crop}/noanimate/${siteUrl}`;
}

function readFrame(iframe) {
  try {
    const doc = iframe.contentDocument;
    if (!doc) return { status: "live" };

    const href = doc.location?.href || "";
    if (href === "about:blank") return { status: "pending" };

    const text = (doc.body?.innerText || "").toLowerCase();
    const blocked =
      href.startsWith("chrome-error:") ||
      href.startsWith("about:neterror") ||
      text.includes("refused to connect") ||
      text.includes("refused to display") ||
      text.includes("can't be reached") ||
      text.includes("can’t be reached");

    return { status: blocked ? "blocked" : "live" };
  } catch {
    return { status: "live" };
  }
}

function LiveSitePreview({ url, title }) {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [box, setBox] = useState(null);
  const [visible, setVisible] = useState(false);
  const [source, setSource] = useState("live");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.clientWidth;
      const height = el.clientHeight;
      if (!width || !height) return;
      const scale = width / PREVIEW_WIDTH;
      setBox({ scale, frameHeight: height / scale });
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin: "280px" },
    );
    intersectionObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setSource("live");
    setReady(false);
  }, [url]);

  useEffect(() => {
    if (!visible || source !== "live" || ready) return;

    const timer = window.setTimeout(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;
      const { status } = readFrame(iframe);
      if (status === "blocked" || status === "pending") {
        setSource("shot");
        setReady(false);
      }
    }, 12000);

    return () => window.clearTimeout(timer);
  }, [visible, source, ready, url]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-zinc-200 dark:bg-zinc-800"
    >
      <div
        className={`absolute inset-0 animate-pulse bg-zinc-200 transition-opacity duration-500 dark:bg-zinc-800 ${ready ? "opacity-0" : "opacity-100"}`}
      />

      {visible && box && source === "live" && (
        <iframe
          ref={iframeRef}
          src={url}
          title={`${title} live preview`}
          tabIndex={-1}
          loading="lazy"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => {
            const iframe = iframeRef.current;
            if (!iframe) return;
            const { status } = readFrame(iframe);
            if (status === "pending") return;
            if (status === "blocked") {
              setSource("shot");
              setReady(false);
              return;
            }
            setReady(true);
          }}
          className={`pointer-events-none absolute top-0 left-0 origin-top-left border-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
          style={{
            width: PREVIEW_WIDTH,
            height: box.frameHeight,
            transform: `scale(${box.scale})`,
          }}
        />
      )}

      {visible && box && source === "shot" && (
        <img
          src={freshCaptureUrl(url, box.frameHeight)}
          alt={title}
          onLoad={() => setReady(true)}
          onError={() => setSource("unavailable")}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}

export default function MasonryGrid({ projects }) {
  const [hoverId, setHoverId] = useState(null);

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 pb-5">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative mb-4 break-inside-avoid"
          initial={{ opacity: 0, y: -55 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: project.id * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          onHoverStart={() => setHoverId(project.id)}
          onHoverEnd={() => setHoverId(null)}
          onClick={() => setHoverId(project.id)}
        >
          <div
            className="relative group overflow-hidden rounded-2xl border border-white/20 shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
            style={{ height: project.height }}
          >
            <LiveSitePreview url={project.link} title={project.title} />

            <div className="absolute inset-0 bg-linear-to-b from-slate-900/5 to-slate-900/25" />

            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoverId === project.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-950/92 via-slate-900/70 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoverId === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute inset-x-0 bottom-0 h-[100%] bg-[radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.95),rgba(2,6,23,0.55)_55%,transparent_100%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoverId === project.id ? 0.9 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 p-1">
                <h3 className="text-white text-2xl font-extrabold tracking-tight mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/14 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold tracking-wide text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    className="flex items-center gap-2 px-4 py-2 bg-white/95 text-slate-900 rounded-full font-semibold border border-white/60 hover:bg-cyan-50 transition-colors"
                    href={project.link}
                    target="_blank"
                  >
                    <LuGlobe className="w-4 h-4" />
                    Visit Site
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
