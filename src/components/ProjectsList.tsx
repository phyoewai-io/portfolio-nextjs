"use client";

import React from "react";
import { FolderGit2, ExternalLink, Code2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon } from "./BrandIcons";

export default function ProjectsList() {
  return (
    <section className="flex flex-col gap-5 z-10">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b border-purple-500/10 pb-2.5">
        <FolderGit2 className="w-5 h-5 text-[#b686ec] animate-pulse" />
        <h2 className="text-lg font-bold tracking-tight text-[#b686ec] font-sans">
          Featured Projects
        </h2>
        <span className="text-[10px] font-mono text-purple-400/40 ml-auto uppercase tracking-widest">
          projects_list.json
        </span>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portfolioData.projects.map((project, idx) => (
          <div
            key={project.title}
            className="glass-panel glass-panel-interactive rounded-xl p-4 flex flex-col justify-between gap-4 border border-purple-500/10 relative group"
          >
            {/* Top row: Folder icon & Links */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#b686ec] group-hover:scale-105 transition-transform" />
                <span className="text-[10px] font-mono text-purple-400/40 select-none">
                  {`project_0${idx + 1}`}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400/70 hover:text-[#b686ec] hover:scale-110 transition-all"
                  title="View Source on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400/70 hover:text-[#b686ec] hover:scale-110 transition-all"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Middle row: Text details */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-[#b686ec] transition-colors font-sans">
                {project.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#cfc5d8]/80">
                {project.description}
              </p>
            </div>

            {/* Bottom row: Tech tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-500/5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-purple-950/30 border border-purple-500/10 text-[9px] font-mono text-purple-400 select-none hover:text-white hover:border-[#b686ec]/30 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
