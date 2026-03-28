"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Calendar, Power } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="relative bg-[#050505] py-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        {/* System Logout Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded border border-[#ff5f56]/30 bg-[#ff5f56]/10 px-3 py-1">
            <Power className="h-3 w-3 text-[#ff5f56]" />
            <span className="font-[var(--font-pixel)] text-[8px] uppercase tracking-wider text-[#ff5f56]">
              SYSTEM EXIT
            </span>
          </div>
          <h2 className="font-[var(--font-pixel)] text-xl text-[#e0e0e0] md:text-2xl">
            <span className="glow-cyan">INITIATE</span>{" "}
            <span className="text-[#a855f7]">CONTACT</span>
          </h2>
          <p className="mt-4 font-mono text-sm text-[#888]">
            Ready to collaborate? Let&apos;s connect and build something amazing.
          </p>
        </motion.div>

        {/* Contact Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-xl border border-[#00ffff]/20"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-[#00ffff]/20 bg-[#0a0a0a] px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4 font-mono text-xs text-[#00ffff]/60">
              contact.sh
            </span>
          </div>

          {/* Terminal Body */}
          <div className="bg-[#0a0a0a]/90 p-6">
            <div className="space-y-4 font-mono text-sm">
              <div>
                <span className="text-[#a855f7]">$</span>{" "}
                <span className="text-[#22c55e]">cat</span>{" "}
                <span className="text-[#888]">contact_info.txt</span>
              </div>

              {/* Contact Info */}
              <div className="grid gap-4 pl-4 md:grid-cols-2">
                <a
                  href="mailto:contact@angelmorales.dev"
                  className="group flex items-center gap-3 rounded-lg border border-[#1a1a2e] bg-[#0a0a0a] p-4 transition-all hover:border-[#00ffff]/30 hover:bg-[#00ffff]/5"
                >
                  <Mail className="h-5 w-5 text-[#888] transition-colors group-hover:text-[#00ffff]" />
                  <div>
                    <div className="text-xs text-[#888]">EMAIL</div>
                    <div className="text-[#e0e0e0] transition-colors group-hover:text-[#00ffff]">
                      contact@angelmorales.dev
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-[#1a1a2e] bg-[#0a0a0a] p-4 transition-all hover:border-[#00ffff]/30 hover:bg-[#00ffff]/5"
                >
                  <Github className="h-5 w-5 text-[#888] transition-colors group-hover:text-[#00ffff]" />
                  <div>
                    <div className="text-xs text-[#888]">GITHUB</div>
                    <div className="text-[#e0e0e0] transition-colors group-hover:text-[#00ffff]">
                      @angelmorales
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-[#1a1a2e] bg-[#0a0a0a] p-4 transition-all hover:border-[#00ffff]/30 hover:bg-[#00ffff]/5"
                >
                  <Linkedin className="h-5 w-5 text-[#888] transition-colors group-hover:text-[#00ffff]" />
                  <div>
                    <div className="text-xs text-[#888]">LINKEDIN</div>
                    <div className="text-[#e0e0e0] transition-colors group-hover:text-[#00ffff]">
                      Angel Morales
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-lg border border-[#1a1a2e] bg-[#0a0a0a] p-4">
                  <MapPin className="h-5 w-5 text-[#888]" />
                  <div>
                    <div className="text-xs text-[#888]">LOCATION</div>
                    <div className="text-[#e0e0e0]">Saltillo, Mexico</div>
                  </div>
                </div>
              </div>

              {/* Graduation Info */}
              <div className="mt-4 flex items-center gap-2 pl-4">
                <Calendar className="h-4 w-4 text-[#a855f7]" />
                <span className="text-[#888]">
                  Expected Graduation:{" "}
                  <span className="text-[#22c55e]">December 2026</span>
                </span>
              </div>

              {/* Terminal Prompt */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[#a855f7]">$</span>
                <span className="inline-block h-4 w-2 bg-[#00ffff] cursor-blink" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Divider */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00ffff]/30" />
            <div className="h-2 w-2 rotate-45 border border-[#00ffff]/30" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00ffff]/30" />
          </div>

          {/* Copyright */}
          <p className="mb-2 font-mono text-xs text-[#888]">
            Designed & Built by{" "}
            <span className="text-[#00ffff]">Angel Morales</span>
          </p>
          <p className="font-[var(--font-pixel)] text-[8px] text-[#888]">
            © {new Date().getFullYear()} • ALL SYSTEMS OPERATIONAL
          </p>

          {/* System Status */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-4 py-1">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
            <span className="font-mono text-xs text-[#22c55e]">
              System Status: Online
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
