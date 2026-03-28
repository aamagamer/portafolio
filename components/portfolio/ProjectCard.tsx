"use client";

import { motion } from "framer-motion";
import type { Project } from "@/constants/projects";
import { ExternalLink, Trophy } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass relative overflow-hidden rounded-xl border border-[#1a1a2e] transition-all duration-300 hover:border-[#00ffff]/30 hover:box-glow-cyan">
        {/* Achievement Badge */}
        {project.achievement && (
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded border border-[#22c55e]/30 bg-[#22c55e]/20 px-2 py-1 backdrop-blur-sm">
            <Trophy className="h-3 w-3 text-[#22c55e]" />
            <span className="font-[var(--font-pixel)] text-[6px] text-[#22c55e]">
              {project.achievement}
            </span>
          </div>
        )}

        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          
          {/* Scanline effect on hover */}
          <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative p-5">
          {/* Mission Number */}
          <div className="mb-2 inline-block rounded border border-[#a855f7]/30 bg-[#a855f7]/10 px-2 py-0.5">
            <span className="font-[var(--font-pixel)] text-[8px] text-[#a855f7]">
              MISSION {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-2 font-mono text-lg font-semibold text-[#e0e0e0] transition-colors group-hover:text-[#00ffff]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-2 font-mono text-sm text-[#888]">
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded border border-[#00ffff]/20 bg-[#00ffff]/5 px-2 py-0.5 font-mono text-[10px] text-[#00ffff]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="rounded border border-[#888]/20 bg-[#888]/5 px-2 py-0.5 font-mono text-[10px] text-[#888]">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onViewDetails(project)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#00ffff]/30 bg-[#00ffff]/10 px-4 py-2 font-[var(--font-pixel)] text-[10px] text-[#00ffff] transition-all hover:bg-[#00ffff]/20 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]"
          >
            <ExternalLink className="h-3 w-3" />
            VIEW DETAILS
          </button>
        </div>
      </div>
    </motion.div>
  );
}
