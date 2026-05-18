"use client";

import React from "react";
import { Lock, RotateCw, ArrowLeft, ArrowRight, Share2, MoreHorizontal, ShieldCheck } from "lucide-react";

interface BrowserFrameProps {
  children: React.ReactNode;
}

export default function BrowserFrame({ children }: BrowserFrameProps) {
  const isSecure = true;

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0214] text-[#cfc5d8]">
      {/* Sticky Simulated Browser Header */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-[#0d0214]/90 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        {/* Left: Window Control Dots */}
        <div className="flex items-center gap-2 w-1/4">
          <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500 transition-colors" title="Close" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer hover:bg-yellow-500 transition-colors" title="Minimize" />
          <span className="w-3 h-3 rounded-full bg-[#b686ec]/80 cursor-pointer hover:bg-[#b686ec] transition-colors" title="Maximize" />
          
          {/* Quick Nav Controls for desktop */}
          <div className="hidden md:flex items-center gap-2 ml-4 text-purple-400/50">
            <ArrowLeft className="w-4 h-4 cursor-pointer hover:text-[#b686ec] transition-colors" />
            <ArrowRight className="w-4 h-4 cursor-pointer hover:text-[#b686ec] transition-colors" />
          </div>
        </div>

        {/* Center: Simulated SSL URL Bar */}
        <div className="flex-1 max-w-md lg:max-w-lg">
          <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/45 border border-purple-500/20 text-[#b686ec] text-xs font-mono select-none">
            {isSecure ? (
              <Lock className="w-3.5 h-3.5 text-green-400 shrink-0" />
            ) : (
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            )}
            <span className="opacity-60 text-purple-300">https://</span>
            <span className="font-semibold tracking-wide">phyoe-wai.dev</span>
            <RotateCw className="w-3 h-3 text-purple-400/50 hover:text-[#b686ec] ml-2 cursor-pointer transition-colors animate-pulse" />
          </div>
        </div>

        {/* Right: Tool Icons */}
        <div className="flex items-center justify-end gap-3.5 w-1/4">
          <span title="Share">
            <Share2 className="w-4 h-4 text-purple-400/60 hover:text-[#b686ec] cursor-pointer transition-colors" />
          </span>
          <span title="Options">
            <MoreHorizontal className="w-4 h-4 text-purple-400/60 hover:text-[#b686ec] cursor-pointer transition-colors" />
          </span>
        </div>
      </header>

      {/* Main Page Area Container */}
      <main className="flex-1 w-full flex flex-col relative">
        {children}
      </main>
      
      {/* Sticky Simulated Browser Status Bar / Footer */}
      <footer className="w-full border-t border-purple-500/10 bg-[#0d0214]/60 py-2.5 px-4 flex items-center justify-between text-[10px] font-mono text-purple-400/40 select-none">
        <div>SYS: ANTIGRAVITY_SHELL_OK</div>
        <div className="flex items-center gap-2">
          <span>LATENCY: 14ms</span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        </div>
      </footer>
    </div>
  );
}
