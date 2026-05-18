"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function SkillsGrid() {
  return (
    <section className="flex flex-col gap-5 z-10">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b border-purple-500/10 pb-2.5">
        <Cpu className="w-5 h-5 text-[#b686ec] animate-pulse" />
        <h2 className="text-lg font-bold tracking-tight text-[#b686ec] font-sans">
          Technical Stack
        </h2>
        <span className="text-[10px] font-mono text-purple-400/40 ml-auto uppercase tracking-widest">
          core_skills.log
        </span>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portfolioData.skillsCategories.map((category, idx) => (
          <div
            key={category.title}
            className="glass-panel rounded-xl p-4 flex flex-col gap-3 shadow-md relative group border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
          >
            {/* Corner retro bracket indicators */}
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-purple-500/20 group-hover:border-purple-500/40 transition-colors" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-purple-500/20 group-hover:border-purple-500/40 transition-colors" />
            
            {/* Category Title */}
            <h3 className="text-xs font-mono text-purple-400 font-semibold tracking-wide flex items-center gap-1.5">
              <span className="text-[#b686ec] opacity-60">[{`0${idx + 1}`}]</span>
              {category.title}
            </h3>

            {/* Badges Flow */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-3 py-1.5 bg-purple-950/20 hover:bg-purple-950/40 border border-purple-500/15 hover:border-[#b686ec]/40 rounded-lg text-xs font-mono text-[#b686ec] hover:text-white transition-all cursor-default select-none shadow-[0_2px_8px_rgba(0,0,0,0.1)] glow-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
