"use client";

import { useState } from "react";
import { BootSequence } from "@/components/portfolio/BootSequence";
import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Timeline } from "@/components/portfolio/Timeline";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";

export default function HomePage() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      {/* Boot Sequence */}
      {!isBooted && <BootSequence onComplete={() => setIsBooted(true)} />}

      {/* Main Content */}
      {isBooted && (
        <main className="relative min-h-screen overflow-x-hidden bg-[#050505]">
          {/* Navigation */}
          <Navigation />

          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Experience Timeline */}
          <Timeline />

          {/* Projects Section */}
          <Projects />

          {/* Achievements Section */}
          <Achievements />

          {/* Contact / Footer */}
          <Contact />
        </main>
      )}
    </>
  );
}
