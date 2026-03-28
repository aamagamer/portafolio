"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

export function SkillBar({ name, level, index }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-sm text-[#e0e0e0] transition-colors group-hover:text-[#00ffff]">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-[var(--font-pixel)] text-[10px] text-[#a855f7]">
            LVL
          </span>
          <span className="font-mono text-sm text-[#00ffff]">{level}</span>
        </div>
      </div>
      <div className="relative h-3 overflow-hidden rounded-full bg-[#1a1a2e]">
        {/* Background glow */}
        <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="h-full w-full bg-gradient-to-r from-[#00ffff]/10 to-[#a855f7]/10" />
        </div>
        
        {/* Progress bar */}
        <motion.div
          className="relative h-full rounded-full bg-gradient-to-r from-[#00ffff] to-[#a855f7]"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1s_ease-in-out]" />
          </div>
        </motion.div>

        {/* Pixel markers */}
        <div className="absolute inset-0 flex items-center justify-between px-1">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="h-1 w-px bg-[#050505]/50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
