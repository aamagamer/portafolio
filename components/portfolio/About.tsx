"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal } from "lucide-react";

const aboutText = `> Initializing profile...

NAME: Angel Alejandro Morales Aguilar
ROLE: Full-Stack Developer
FOCUS: Process Automation & Enterprise Solutions

> Loading background...

I'm a Computer Systems Engineering student with a passion for building scalable, production-ready applications. As the former President of the Computer Systems Student Chapter, I've led teams and mentored fellow developers.

> Profile loaded successfully.`;

export function About() {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasStarted) return;

    setHasStarted(true);

    let index = 0;

    const typeText = () => {
      if (index <= aboutText.length) {
        setDisplayedText(aboutText.slice(0, index));
        index++;

        const currentChar = aboutText[index - 1];
        const delay = currentChar === "\n" ? 80 : 15;

        setTimeout(typeText, delay);
      }
    };

    typeText();
  }, [isInView, hasStarted]);

  const formatLine = (line: string, index: number) => {
    const isCommand = line.startsWith(">");
    const isLabelLine =
      line.includes(":") &&
      line.split(":")[0] === line.split(":")[0].toUpperCase();

    if (isCommand) {
      return (
        <div key={index} className="mb-1">
          <span className="text-[#22c55e]">{line}</span>
        </div>
      );
    }

    if (isLabelLine) {
      const [label, ...rest] = line.split(":");
      return (
        <div key={index} className="mb-1">
          <span className="text-[#a855f7]">{label}:</span>
          <span className="text-[#e0e0e0]">{rest.join(":")}</span>
        </div>
      );
    }

    return (
      <div key={index} className="mb-1">
        <span className="text-[#888]">{line}</span>
      </div>
    );
  };

  return (
    <section id="about" className="relative bg-[#050505] py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded border border-[#a855f7]/30 bg-[#a855f7]/10 px-3 py-1 font-[var(--font-pixel)] text-[8px] uppercase tracking-wider text-[#a855f7]">
            ABOUT
          </span>

          <h2 className="font-[var(--font-pixel)] text-xl text-[#e0e0e0] md:text-2xl">
            <span className="glow-cyan">SYSTEM</span>{" "}
            <span className="text-[#a855f7]">PROFILE</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden rounded-lg border border-[#00ffff]/20"
        >
          <div className="flex items-center gap-2 border-b border-[#00ffff]/20 bg-[#0a0a0a] px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f]" />

            <div className="ml-4 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-[#00ffff]/60" />
              <span className="font-mono text-xs text-[#00ffff]/60">
                profile.sh
              </span>
            </div>
          </div>

          <div className="bg-[#0a0a0a]/90 p-6">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
              {displayedText.split("\n").map((line, index) => formatLine(line, index))}
              <span className="inline-block h-4 w-2 translate-y-[2px] bg-[#00ffff] animate-pulse" />
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { label: "YEARS EXP", value: "3+" },
            { label: "PROJECTS", value: "15+" },
            { label: "HACKATHONS", value: "5" },
            { label: "AWARDS", value: "5" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-lg border border-[#00ffff]/10 p-4 text-center"
            >
              <div className="font-[var(--font-pixel)] text-lg text-[#00ffff] md:text-2xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-xs text-[#888]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}