"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootMessages = [
  { text: "BIOS v4.2.0 - CYBER SYSTEMS INC.", delay: 0 },
  { text: "Initializing neural interface...", delay: 200 },
  { text: "Loading memory banks... 16GB OK", delay: 400 },
  { text: "Detecting input devices... OK", delay: 600 },
  { text: "Mounting file systems...", delay: 800 },
  { text: "Starting graphics subsystem...", delay: 1000 },
  { text: "Loading portfolio.exe...", delay: 1200 },
  { text: "", delay: 1400 },
  { text: "WELCOME, USER.", delay: 1600 },
  { text: "SYSTEM READY.", delay: 1800 },
];

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Show boot messages sequentially
    const messageTimers = bootMessages.map((_, index) => {
      return setTimeout(() => {
        setVisibleLines(index + 1);
      }, bootMessages[index].delay);
    });

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Complete boot sequence
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => {
      messageTimers.forEach(clearTimeout);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] p-4"
        >
          {/* Terminal Window */}
          <div className="w-full max-w-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 rounded-t-lg border border-b-0 border-[#00ffff]/20 bg-[#0a0a0a] px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-4 font-mono text-xs text-[#00ffff]/60">
                system_boot.exe
              </span>
            </div>

            {/* Terminal Body */}
            <div className="rounded-b-lg border border-[#00ffff]/20 bg-[#0a0a0a]/90 p-6 font-mono text-sm">
              {/* Boot Messages */}
              <div className="mb-6 space-y-1">
                {bootMessages.slice(0, visibleLines).map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`${
                      message.text === "WELCOME, USER." ||
                      message.text === "SYSTEM READY."
                        ? "text-[#00ffff] glow-cyan"
                        : "text-[#22c55e]"
                    }`}
                  >
                    {message.text && (
                      <>
                        <span className="text-[#a855f7]">&gt;</span> {message.text}
                      </>
                    )}
                  </motion.div>
                ))}
                {/* Blinking cursor */}
                <span className="inline-block h-4 w-2 bg-[#00ffff] cursor-blink" />
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#888]">Loading...</span>
                  <span className="text-[#00ffff]">{progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#1a1a2e]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00ffff] to-[#a855f7]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Skip hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 font-mono text-xs text-[#888]"
          >
            Initializing system...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
