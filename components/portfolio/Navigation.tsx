"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-lg border-b border-[#00ffff]/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-[#00ffff]/30 bg-[#00ffff]/10">
              <span className="font-[var(--font-pixel)] text-[10px] text-[#00ffff]">
                AM
              </span>
            </div>
            <span className="hidden font-mono text-sm text-[#e0e0e0] md:block">
              ANGEL.DEV
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 font-mono text-xs text-[#888] transition-all hover:bg-[#00ffff]/10 hover:text-[#00ffff]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="hidden items-center gap-2 md:flex">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
            <span className="font-mono text-xs text-[#888]">
              AVAILABLE FOR HIRE
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00ffff]/30 bg-[#00ffff]/10 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-[#00ffff]" />
            ) : (
              <Menu className="h-5 w-5 text-[#00ffff]" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 border-b border-[#00ffff]/10 bg-[#050505]/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col p-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-[#1a1a2e] py-3 font-mono text-sm text-[#888] transition-colors hover:text-[#00ffff]"
                >
                  <span className="text-[#a855f7]">0{index + 1}.</span>{" "}
                  {item.label}
                </motion.a>
              ))}

              {/* Status */}
              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
                <span className="font-mono text-xs text-[#888]">
                  AVAILABLE FOR HIRE
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
