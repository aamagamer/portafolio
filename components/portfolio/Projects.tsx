"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Crosshair } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative bg-[#050505] py-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded border border-[#00ffff]/30 bg-[#00ffff]/10 px-3 py-1 font-[var(--font-pixel)] text-[8px] uppercase tracking-wider text-[#00ffff]">
            PORTFOLIO
          </span>
          <h2 className="font-[var(--font-pixel)] text-xl text-[#e0e0e0] md:text-2xl">
            <span className="glow-cyan">MISSION</span>{" "}
            <span className="text-[#a855f7]">SELECT</span>
          </h2>
          <p className="mt-4 font-mono text-sm text-[#888]">
            Select a mission to view intel and objectives
          </p>
        </motion.div>

        {/* Mission Control HUD */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center justify-center gap-8 rounded-lg border border-[#1a1a2e] bg-[#0a0a0a]/80 p-4 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <Crosshair className="h-4 w-4 text-[#00ffff]" />
            <span className="font-mono text-xs text-[#888]">MISSIONS:</span>
            <span className="font-[var(--font-pixel)] text-[12px] text-[#00ffff]">
              {projects.length}
            </span>
          </div>
          <div className="h-4 w-px bg-[#1a1a2e]" />
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
            <span className="font-mono text-xs text-[#888]">STATUS:</span>
            <span className="font-mono text-xs text-[#22c55e]">ACTIVE</span>
          </div>
          <div className="hidden h-4 w-px bg-[#1a1a2e] md:block" />
          <div className="hidden items-center gap-2 md:flex">
            <span className="font-mono text-xs text-[#888]">CLEARANCE:</span>
            <span className="font-mono text-xs text-[#a855f7]">FULL ACCESS</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Mission Complete Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded border border-[#22c55e]/30 bg-[#22c55e]/10 px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
            <span className="font-mono text-sm text-[#22c55e]">
              All missions available for briefing
            </span>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
