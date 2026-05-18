"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, MapPin, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./BrandIcons";

export default function ProfileHeader() {
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.terminalCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Maps the iconName from data to appropriate local brand icon components
  const renderSocialIcon = (iconName: string) => {
    const iconProps = { className: "w-4 h-4 transition-transform group-hover:scale-110" };
    switch (iconName) {
      case "Github":
        return <GithubIcon {...iconProps} />;
      case "Linkedin":
        return <LinkedinIcon {...iconProps} />;
      case "Twitter":
        return <TwitterIcon {...iconProps} />;
      case "Mail":
        return <Mail {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8 z-10">
      {/* Left: Beautiful Neon Glowing Avatar */}
      <div className="relative group mx-auto md:mx-0 shrink-0">
        {/* Neon outer glow rings */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#b686ec] via-purple-600 to-[#b686ec] opacity-30 blur-md group-hover:opacity-75 transition-opacity duration-500" />
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-800 to-[#b686ec] opacity-40 animate-glow-pulse" />
        
        {/* Core avatar SVG layout */}
        <div className="relative w-28 h-28 rounded-2xl bg-black border border-purple-500/30 flex items-center justify-center overflow-hidden">
          <svg
            className="w-16 h-16 text-[#b686ec] animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Cybernetic avatar grid graphic */}
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <path d="M6 8l4 4-4 4" />
            <line x1="12" y1="16" x2="18" y2="16" strokeDasharray="3 3" />
          </svg>
          
          {/* Subtle grid lines background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(182,134,236,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(182,134,236,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
        </div>
      </div>

      {/* Right: Info and Details */}
      <div className="flex-1 flex flex-col gap-3 text-center md:text-left">
        {/* Status indicator badge */}
        <div className="flex items-center justify-center md:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium font-mono bg-purple-950/40 text-[#b686ec] border border-purple-500/20 shadow-[0_0_10px_rgba(182,134,236,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping absolute" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {portfolioData.status}
          </span>
        </div>

        {/* Name and Title */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#b686ec] md:text-4xl bg-gradient-to-r from-purple-100 via-[#b686ec] to-purple-400 bg-clip-text text-transparent">
            {portfolioData.name}
          </h1>
          <p className="text-sm font-mono text-purple-400/80 font-medium tracking-wide">
            {portfolioData.title}
          </p>
        </div>

        {/* Location Info */}
        <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-purple-200/50 font-mono">
          <MapPin className="w-3.5 h-3.5 text-purple-400" />
          <span>{portfolioData.location}</span>
        </div>

        {/* Biography text */}
        <p className="text-sm leading-relaxed text-[#cfc5d8] max-w-lg mx-auto md:mx-0">
          {portfolioData.bio}
        </p>

        {/* Copyable Terminal Command Badge & Social Links */}
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5">
          {/* CLI Badge */}
          <div 
            onClick={handleCopyCommand}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-black border border-purple-500/20 hover:border-[#b686ec]/40 font-mono text-xs text-[#cfc5d8] cursor-pointer select-none transition-all group shrink-0"
            title="Click to copy command"
          >
            <Terminal className="w-3.5 h-3.5 text-[#b686ec] group-hover:scale-105 transition-transform" />
            <span className="text-purple-300/80">$</span>
            <span className="font-semibold text-[#b686ec]">{portfolioData.terminalCommand}</span>
            <button className="text-purple-400 hover:text-white ml-1.5 transition-colors">
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-400 animate-bounce" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Socials Icon Buttons */}
          <div className="flex items-center gap-2">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-950/20 border border-purple-500/10 text-purple-400/80 hover:text-[#b686ec] hover:border-purple-500/30 hover:bg-purple-950/40 transition-all shadow-[0_0_8px_rgba(0,0,0,0.2)] group"
                title={social.name}
              >
                {renderSocialIcon(social.iconName)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
