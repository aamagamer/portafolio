"use client";

import { motion } from "framer-motion";
import { experiences } from "@/constants/projects";
import { Briefcase, Building, Users } from "lucide-react";

const iconMap = {
  "Sole IT Owner": Briefcase,
  "Head of IT": Building,
  "President": Users,
};

export function Timeline() {
  return (
    <section id="experience" className="relative bg-[#050505] py-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded border border-[#00ffff]/30 bg-[#00ffff]/10 px-3 py-1 font-[var(--font-pixel)] text-[8px] uppercase tracking-wider text-[#00ffff]">
            EXPERIENCE
          </span>
          <h2 className="font-[var(--font-pixel)] text-xl text-[#e0e0e0] md:text-2xl">
            <span className="glow-cyan">CAREER</span>{" "}
            <span className="text-[#a855f7]">TIMELINE</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing Line */}
          <div className="absolute left-8 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2">
            <div className="h-full w-full bg-gradient-to-b from-[#00ffff] via-[#a855f7] to-[#22c55e]" />
            <div className="absolute inset-0 blur-sm bg-gradient-to-b from-[#00ffff] via-[#a855f7] to-[#22c55e] opacity-50" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.title as keyof typeof iconMap] || Briefcase;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-8 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#00ffff] bg-[#050505]">
                      <div className="h-3 w-3 rounded-full bg-[#00ffff] animate-pulse" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="glass rounded-xl border border-[#1a1a2e] p-6 transition-all hover:border-[#00ffff]/30 hover:box-glow-cyan">
                      {/* Period Badge */}
                      <div
                        className={`mb-3 inline-flex items-center gap-2 rounded border border-[#a855f7]/30 bg-[#a855f7]/10 px-2 py-1 ${
                          isLeft ? "md:ml-auto" : ""
                        }`}
                      >
                        <span className="font-[var(--font-pixel)] text-[8px] text-[#a855f7]">
                          {exp.period}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <div className={`mb-3 flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00ffff]/10">
                          <Icon className="h-5 w-5 text-[#00ffff]" />
                        </div>
                        <div>
                          <h3 className="font-mono text-lg font-semibold text-[#e0e0e0]">
                            {exp.title}
                          </h3>
                          <p className="font-mono text-sm text-[#00ffff]">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`mb-4 font-mono text-sm text-[#888] ${isLeft ? "md:text-right" : ""}`}>
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className={`space-y-2 ${isLeft ? "md:text-right" : ""}`}>
                        {exp.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className={`flex items-center gap-2 font-mono text-xs text-[#888] ${
                              isLeft ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <span className="text-[#22c55e]">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End Node */}
          <div className="absolute bottom-0 left-8 md:left-1/2 md:-translate-x-1/2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#22c55e] bg-[#050505]">
              <span className="font-[var(--font-pixel)] text-[8px] text-[#22c55e]">
                ✓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
