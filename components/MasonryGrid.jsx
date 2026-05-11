"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LuGlobe } from "react-icons/lu";
import Link from "next/link";

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
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

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
