"use client";

import React from "react";
import { GitBranch, Calendar, Briefcase, GitCommit } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function TimelineExperience() {
  return (
    <section className="flex flex-col gap-5 z-10">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b border-purple-500/10 pb-2.5">
        <GitBranch className="w-5 h-5 text-[#b686ec] animate-pulse" />
        <h2 className="text-lg font-bold tracking-tight text-[#b686ec] font-sans">
          Engineering History
        </h2>
        <span className="text-[10px] font-mono text-purple-400/40 ml-auto uppercase tracking-widest">
          git_log.sh
        </span>
      </div>

      {/* Git Graph Style Timeline Container */}
      <div className="relative pl-6 md:pl-8 border-l border-purple-500/20 ml-3.5 my-2 flex flex-col gap-7 select-text">
        {/* Glowing Git Head Pointer at the very top */}
        <div className="absolute -top-3.5 -left-[14px] flex items-center justify-center bg-[#0d0214] z-10 w-7 h-7">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-ping absolute opacity-45" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" title="HEAD Pointer (Active)" />
        </div>

        {portfolioData.experiences.map((exp, idx) => (
          <div 
            key={`${exp.company}-${idx}`}
            className="relative group flex flex-col gap-2.5"
          >
            {/* Glowing Commit Node on the vertical line */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center z-10 w-4 h-4 bg-[#0d0214] rounded-full">
              <span className="w-3 h-3 rounded-full bg-purple-950 border border-[#b686ec] group-hover:bg-[#b686ec] group-hover:shadow-[0_0_12px_rgba(182,134,236,0.8)] transition-all duration-300 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-[#b686ec] group-hover:bg-black transition-colors" />
              </span>
            </div>

            {/* Git Branch Info Label (Hover Trigger) */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs">
              {/* Year Commit Badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-purple-950/40 text-[#b686ec] border border-purple-500/10 font-mono text-[10px]">
                <Calendar className="w-3 h-3 text-[#b686ec]/60" />
                {exp.year}
              </span>
              
              {/* Branch Merge Label */}
              <span className="text-[10px] text-purple-400/40 font-mono uppercase tracking-wider flex items-center gap-1 select-none">
                <GitCommit className="w-3.5 h-3.5" /> commit_{idx === 0 ? "main" : `feat_0${idx}`}
              </span>
            </div>

            {/* Experience Card */}
            <div className="glass-panel rounded-xl p-4 flex flex-col gap-2.5 border border-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                {/* Role Title */}
                <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5 font-sans">
                  <Briefcase className="w-3.5 h-3.5 text-[#b686ec] shrink-0" />
                  {exp.role}
                </h3>
                
                {/* Company Label */}
                <span className="text-xs font-mono font-semibold text-[#b686ec]">
                  @ {exp.company}
                </span>
              </div>

              {/* Achievements Logs list */}
              <ul className="flex flex-col gap-2 pl-4 list-none text-xs text-[#cfc5d8]">
                {exp.bullets.map((bullet, bIdx) => (
                  <li 
                    key={bIdx}
                    className="relative before:content-['>'] before:absolute before:-left-4 before:text-[#b686ec] before:opacity-60 before:font-bold before:text-[10px] before:top-0.5 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        {/* End of Git Tree marker */}
        <div className="absolute -bottom-7 -left-[14px] flex items-center justify-center bg-[#0d0214] z-10 w-7 h-7">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500/20 border border-purple-500/30 font-mono text-[8px] flex items-center justify-center text-purple-500/40 select-none">
            o
          </div>
        </div>
      </div>
    </section>
  );
}
