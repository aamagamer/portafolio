"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PixelStars } from "./PixelStars";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* Parallax Stars Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <PixelStars />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4"
      >
        {/* Floating HUD Panels */}
        <div className="absolute left-4 top-1/4 hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass rounded-lg border border-[#00ffff]/20 p-4"
          >
            <div className="font-mono text-xs text-[#00ffff]/60">STATUS</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
              <span className="font-mono text-sm text-[#22c55e]">ONLINE</span>
            </div>
            <div className="mt-3 font-mono text-xs text-[#888]">
              LOC: SALTILLO, MX
            </div>
          </motion.div>
        </div>

        <div className="absolute right-4 top-1/3 hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glass rounded-lg border border-[#a855f7]/20 p-4"
          >
            <div className="font-mono text-xs text-[#a855f7]/60">STATS</div>
            <div className="mt-2 space-y-1 font-mono text-xs">
              <div className="text-[#e0e0e0]">PROJECTS: 15+</div>
              <div className="text-[#e0e0e0]">HACKATHONS: 5</div>
              <div className="text-[#e0e0e0]">AWARDS: 3</div>
            </div>
          </motion.div>
        </div>

        {/* Center Content */}
        <div className="text-center">
          {/* Pixel Art Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <span className="rounded border border-[#00ffff]/30 bg-[#00ffff]/10 px-3 py-1 font-[var(--font-pixel)] text-[8px] uppercase tracking-wider text-[#00ffff]">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 font-[var(--font-pixel)] text-2xl leading-relaxed text-[#e0e0e0] md:text-4xl"
          >
            <span className="glow-cyan">ANGEL</span>{" "}
            <span className="text-[#a855f7]">MORALES</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-2 font-mono text-lg text-[#888] md:text-xl"
          >
            Computer Systems Engineering Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 font-mono text-sm text-[#00ffff]/80"
          >
            Process Automation Builder • Graduating December 2026
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg border border-[#00ffff] bg-[#00ffff]/10 px-6 py-3 font-mono text-sm text-[#00ffff] transition-all hover:bg-[#00ffff]/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              <span className="font-[var(--font-pixel)] text-[10px]">VIEW MISSIONS</span>
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-lg border border-[#a855f7] bg-[#a855f7]/10 px-6 py-3 font-mono text-sm text-[#a855f7] transition-all hover:bg-[#a855f7]/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <span className="font-[var(--font-pixel)] text-[10px]">CONTACT</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/aamagamer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] transition-colors hover:text-[#00ffff]"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aama010803/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] transition-colors hover:text-[#00ffff]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:aama0108003@outlook.com"
              className="text-[#888] transition-colors hover:text-[#00ffff]"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-[#888]">SCROLL</span>
            <ChevronDown className="h-4 w-4 text-[#00ffff]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
