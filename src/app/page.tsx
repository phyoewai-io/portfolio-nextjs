"use client";

import React from "react";
import BrowserFrame from "../components/BrowserFrame";
import TerminalWatermark from "../components/TerminalWatermark";
import ProfileHeader from "../components/ProfileHeader";
import InteractiveTerminal from "../components/InteractiveTerminal";
import SkillsGrid from "../components/SkillsGrid";
import TimelineExperience from "../components/TimelineExperience";
import ProjectsList from "../components/ProjectsList";

export default function Home() {
  return (
    <BrowserFrame>
      {/* Background Subtle Scattered Logs */}
      <TerminalWatermark />

      {/* Main Content Layout Container */}
      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 md:py-14 flex flex-col gap-10 md:gap-14 z-10 selection:bg-purple-500/30 selection:text-white">
        
        {/* Section 1: Hero Bio & Socials */}
        <header id="profile-section" className="w-full">
          <ProfileHeader />
        </header>

        {/* Section 2: Interactive Terminal Emulator */}
        <section id="terminal-section" className="w-full">
          <InteractiveTerminal />
        </section>

        {/* Section 3: Technical Skills Badge Matrix */}
        <section id="skills-section" className="w-full">
          <SkillsGrid />
        </section>

        {/* Section 4: Projects Catalog */}
        <section id="projects-section" className="w-full">
          <ProjectsList />
        </section>

        {/* Section 5: Engineering & Career Timeline */}
        <section id="experience-section" className="w-full">
          <TimelineExperience />
        </section>

        {/* Dynamic Subtle Footer Accent */}
        <div className="flex items-center justify-center gap-2 mt-4 font-mono text-[9px] text-purple-400/30 select-none">
          <span>{"// DESIGNED FOR AESTHETICS"}</span>
          <span>●</span>
          <span>BUILT FOR PERFORMANCE</span>
        </div>
      </div>
    </BrowserFrame>
  );
}
