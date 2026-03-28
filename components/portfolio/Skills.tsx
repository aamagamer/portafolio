"use client";

import { motion } from "framer-motion";
import { skills } from "@/constants/projects";
import { SkillBar } from "./SkillBar";
import { Code, Server, Wrench, Users } from "lucide-react";

const categories = [
  { id: "frontend", label: "FRONTEND", icon: Code, color: "#00ffff" },
  { id: "backend", label: "BACKEND", icon: Server, color: "#a855f7" },
  { id: "tools", label: "TOOLS", icon: Wrench, color: "#22c55e" },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-[#050505] py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded border border-[#22c55e]/30 bg-[#22c55e]/10 px-3 py-1 font-[var(--font-pixel)] text-[8px] uppercase tracking-wider text-[#22c55e]">
            ABILITIES
          </span>
          <h2 className="font-[var(--font-pixel)] text-xl text-[#e0e0e0] md:text-2xl">
            <span className="glow-cyan">SKILL</span>{" "}
            <span className="text-[#a855f7]">STATS</span>
          </h2>
          <p className="mt-4 font-mono text-sm text-[#888]">
            Level up your understanding of my technical abilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category.id
            );
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass rounded-xl border border-[#1a1a2e] p-6"
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: category.color }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-[var(--font-pixel)] text-[10px]"
                      style={{ color: category.color }}
                    >
                      {category.label}
                    </h3>
                    <p className="font-mono text-xs text-[#888]">
                      {categorySkills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={index + categoryIndex * 4}
                    />
                  ))}
                </div>

                {/* Total XP */}
                <div className="mt-6 border-t border-[#1a1a2e] pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#888]">
                      TOTAL XP
                    </span>
                    <span
                      className="font-[var(--font-pixel)] text-sm"
                      style={{ color: category.color }}
                    >
                      {categorySkills.reduce((acc, s) => acc + s.level, 0) * 10}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Unlocked Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center"
        >
          <div className="glass inline-flex items-center gap-4 rounded-full border border-[#22c55e]/30 px-6 py-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
            <span className="font-mono text-sm text-[#22c55e]">
              ACHIEVEMENT UNLOCKED: Multi-Stack Developer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
