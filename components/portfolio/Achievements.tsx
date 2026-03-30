"use client";

import { motion } from "framer-motion";
import { achievements } from "@/constants/projects";
import { Trophy, Medal, Star, Award } from "lucide-react";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  star: Star,
  award: Award,
};

const colorMap = {
  trophy: "#ffd700",
  medal: "#c0c0c0",
  star: "#00ffff",
  award: "#a855f7",
};

export function Achievements() {
  return (
    <section id="achievements" className="relative bg-[#050505] py-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded border border-[#ffd700]/30 bg-[#ffd700]/10 px-3 py-1 font-[var(--font-pixel)] text-[8px] uppercase tracking-wider text-[#ffd700]">
            HALL OF FAME
          </span>
          <h2 className="font-[var(--font-pixel)] text-xl text-[#e0e0e0] md:text-2xl">
            <span style={{ textShadow: "0 0 10px #ffd700, 0 0 20px #ffd700" }}>
              TROPHY
            </span>{" "}
            <span className="text-[#a855f7]">CABINET</span>
          </h2>
          <p className="mt-4 font-mono text-sm text-[#888]">
            Achievements unlocked throughout my journey
          </p>
        </motion.div>

        {/* Arcade Cabinet Style Trophy Display */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            const color = colorMap[achievement.icon];

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className="glass overflow-hidden rounded-xl border border-[#1a1a2e] p-6 text-center transition-all duration-300 hover:border-opacity-50"
                  style={{
                    borderColor: `${color}30`,
                  }}
                >
                  {/* Glow Effect on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(ellipse at center, ${color}10 0%, transparent 70%)`,
                    }}
                  />

                  {/* Trophy Icon */}
                  <motion.div
                    className="relative mb-4 inline-flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${color}15`,
                        boxShadow: `0 0 20px ${color}20`,
                      }}
                    >
                      <Icon className="h-8 w-8" style={{ color }} />
                    </div>
                  </motion.div>

                  {/* Year Badge */}
                  <div className="mb-3 inline-block rounded border border-[#00ffff]/30 bg-[#00ffff]/10 px-2 py-0.5">
                    <span className="font-[var(--font-pixel)] text-[8px] text-[#00ffff]">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Achievement Title */}
                  <h3
                    className="mb-2 font-[var(--font-pixel)] text-sm"
                    style={{ color }}
                  >
                    {achievement.title}
                  </h3>

                  {/* Event Name */}
                  <p className="font-mono text-xs text-[#888]">
                    {achievement.event}
                  </p>

                  {/* Pixel Art Decoration */}
                  <div className="mt-4 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 w-1"
                        style={{
                          backgroundColor: i < 3 ? color : "#1a1a2e",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="glass overflow-hidden rounded-xl border border-[#a855f7]/20 p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              {/* Icon */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10">
                <Award className="h-10 w-10 text-[#a855f7]" />
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <div className="mb-2 inline-block rounded border border-[#a855f7]/30 bg-[#a855f7]/10 px-2 py-0.5">
                  <span className="font-[var(--font-pixel)] text-[8px] text-[#a855f7]">
                    LEADERSHIP
                  </span>
                </div>
                <h3 className="mb-2 font-mono text-lg font-semibold text-[#e0e0e0]">
                  Former President - Computer Systems Student Chapter
                </h3>
                <p className="font-mono text-sm text-[#888]">
                  Led the student chapter, organized technical workshops, mentored
                  fellow students, and established partnerships with industry
                  leaders.
                </p>
              </div>

              {/* Stats */}
              <div className="flex shrink-0 gap-6 md:flex-col md:gap-2">
                <div className="text-center">
                  <div className="font-[var(--font-pixel)] text-lg text-[#00ffff]">
                    10+
                  </div>
                  <div className="font-mono text-[10px] text-[#888]">
                    EVENTS
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-[var(--font-pixel)] text-lg text-[#22c55e]">
                    150%
                  </div>
                  <div className="font-mono text-[10px] text-[#888]">
                    GROWTH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
