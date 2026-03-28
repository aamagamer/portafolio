"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/constants/projects";
import { X, ExternalLink, Github, Trophy, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#050505]/90 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-[#00ffff]/20 bg-[#0a0a0a]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#00ffff]/30 bg-[#050505] text-[#00ffff] transition-colors hover:bg-[#00ffff]/10"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

              {/* Achievement Badge */}
              {project.achievement && (
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded border border-[#22c55e]/30 bg-[#22c55e]/20 px-3 py-1.5 backdrop-blur-sm">
                  <Trophy className="h-4 w-4 text-[#22c55e]" />
                  <span className="font-[var(--font-pixel)] text-[10px] text-[#22c55e]">
                    {project.achievement}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h2 className="mb-2 font-[var(--font-pixel)] text-lg text-[#00ffff] md:text-xl">
                {project.title}
              </h2>

              {/* Long Description */}
              <p className="mb-6 font-mono text-sm leading-relaxed text-[#888]">
                {project.longDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="mb-3 font-[var(--font-pixel)] text-[10px] text-[#a855f7]">
                  TECH STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-[#00ffff]/30 bg-[#00ffff]/10 px-3 py-1 font-mono text-xs text-[#00ffff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="mb-3 font-[var(--font-pixel)] text-[10px] text-[#a855f7]">
                  KEY FEATURES
                </h3>
                <ul className="grid gap-2 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 font-mono text-sm text-[#888]"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-[#00ffff] bg-[#00ffff]/10 px-6 py-3 font-[var(--font-pixel)] text-[10px] text-[#00ffff] transition-all hover:bg-[#00ffff]/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    LIVE DEMO
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-[#a855f7] bg-[#a855f7]/10 px-6 py-3 font-[var(--font-pixel)] text-[10px] text-[#a855f7] transition-all hover:bg-[#a855f7]/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    <Github className="h-4 w-4" />
                    SOURCE CODE
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
