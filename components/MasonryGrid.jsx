"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LuGlobe } from "react-icons/lu";

export default function MasonryGrid({ projects }) {
  const [hoverId, setHoverId] = useState(null);

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="relative mb-4 break-inside-avoid"
          initial={{ opacity: 0, y: -55 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: project.id * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          onHoverStart={() => setHoverId(project.id)}
          onHoverEnd={() => setHoverId(null)}
        >
          <div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            style={{ height: project.height }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoverId === project.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
                  <LuGlobe className="w-4 h-4" />
                  Visit Site
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
