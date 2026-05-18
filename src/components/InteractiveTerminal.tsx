"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, Trash2, Command } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

interface HistoryItem {
  command: string;
  output: string;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: `Welcome to Phyoe's Interactive Shell v2.4!
Type 'help' to see the available command registry.
---------------------------------------------------------
Try clicking one of the quick actions below to run it!`
    }
  ]);

  const screenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to terminal bottom (restricted to terminal container only, preventing page jumps)
  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTo({
        top: screenRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    
    if (trimmed === "") return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const response = portfolioData.terminalResponses[trimmed] || 
      `command not found: ${cmdStr}. Type 'help' to see a list of valid commands.`;

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const quickCommands = ["help", "neofetch", "skills", "projects", "about"];

  return (
    <div 
      className="glass-panel rounded-xl overflow-hidden border border-purple-500/20 shadow-2xl flex flex-col h-[340px] text-xs font-mono select-text z-10"
      onClick={handleTerminalClick}
    >
      {/* Terminal Title Bar */}
      <div className="bg-black/80 px-4 py-2 flex items-center justify-between border-b border-purple-500/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#b686ec]/70" />
          <div className="flex items-center gap-1.5 ml-2 text-[10px] text-purple-400/60 font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>phyoe@antigravity: ~</span>
          </div>
        </div>
        <div className="text-[9px] text-purple-400/40 font-bold select-none">zsh</div>
      </div>

      {/* Terminal Content Screen */}
      <div 
        ref={screenRef}
        className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-black/45 backdrop-blur-sm scrollbar-thin"
      >
        {history.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1.5">
            {item.command !== "welcome" && (
              <div className="flex items-center gap-2 text-purple-400 font-semibold select-none">
                <span>phyoe@antigravity ~ %</span>
                <span className="text-[#cfc5d8] font-normal">{item.command}</span>
              </div>
            )}
            <div className="text-purple-100/90 leading-relaxed whitespace-pre-wrap font-mono">
              {item.output}
            </div>
          </div>
        ))}
      </div>

      {/* Prompt Form */}
      <form 
        onSubmit={handleSubmit}
        className="bg-black/90 p-3 flex items-center border-t border-purple-500/15"
      >
        <span className="text-purple-400 font-bold shrink-0 select-none mr-2 font-mono">
          phyoe@antigravity ~ %
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-white border-0 outline-none p-0 focus:ring-0 font-mono text-xs selection:bg-purple-500/30"
          placeholder="type a command..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <div className="flex items-center gap-2 select-none shrink-0 ml-2">
          {input.trim() !== "" && (
            <button
              type="submit"
              className="text-[#b686ec] hover:text-white transition-colors cursor-pointer"
              title="Run command"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setHistory([]);
            }}
            className="text-purple-500/40 hover:text-red-400 transition-colors"
            title="Clear window"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Quick Click Anchors Footer */}
      <div className="bg-[#0e0316] border-t border-purple-500/10 px-3.5 py-2.5 flex items-center gap-2 overflow-x-auto select-none shrink-0 scrollbar-none">
        <span className="text-[10px] text-purple-400/40 font-mono uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Command className="w-3 h-3 text-[#b686ec]" /> Quick actions:
        </span>
        <div className="flex items-center gap-1.5 font-mono">
          {quickCommands.map((qCmd) => (
            <button
              key={qCmd}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleCommand(qCmd);
              }}
              className="px-2 py-0.5 rounded text-[10px] bg-purple-950/20 hover:bg-purple-950/60 text-[#b686ec] hover:text-white border border-purple-500/10 hover:border-purple-500/30 transition-all font-mono cursor-pointer"
            >
              {qCmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
