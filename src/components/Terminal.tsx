"use client";

import { useRef, useState, type FormEvent } from "react";
import { Window } from "./ui";
import { experience, profile, stack } from "@/lib/content";

type Entry = { cmd: string; out: string[] };

const COMMANDS = ["whoami", "stack", "experience", "contact"] as const;

function run(cmd: string): string[] | "clear" {
  switch (cmd) {
    case "help":
      return ["Available: whoami, stack, experience, contact, clear"];
    case "whoami":
      return [
        profile.name,
        profile.role,
        profile.education,
      ];
    case "stack":
      return [stack.map((s) => s.name).join(", ")];
    case "experience":
      return [
        `${experience.title} @ ${experience.company}`,
        `${experience.location} | ${experience.period}`,
        ...experience.highlights.map((h) => `- ${h.title}`),
      ];
    case "contact":
      return [
        `email:    ${profile.email}`,
        `github:   ${profile.github}`,
        `linkedin: ${profile.linkedin}`,
      ];
    case "clear":
      return "clear";
    default:
      return [`command not found: ${cmd}. Try "help".`];
  }
}

export function Terminal() {
  const [history, setHistory] = useState<Entry[]>([
    { cmd: "whoami", out: run("whoami") as string[] },
  ]);
  const [value, setValue] = useState("");
  const scroller = useRef<HTMLDivElement>(null);

  const exec = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const out = run(cmd);
    setHistory((h) => (out === "clear" ? [] : [...h, { cmd, out }]));
    setValue("");
    requestAnimationFrame(() => {
      const el = scroller.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    exec(value);
  };

  return (
    <Window title="~/hamza — zsh" className="w-full">
      <div className="bg-[#121212] font-mono text-[13px] text-[#F4F4F0]">
        <div className="flex flex-wrap gap-2 border-b border-white/20 p-3">
          {COMMANDS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => exec(c)}
              className="pill bg-[#7DD3FC] px-3 py-0.5 text-xs font-semibold text-[#111] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
              style={{ borderColor: "#111" }}
            >
              {c}
            </button>
          ))}
        </div>
        <div
          ref={scroller}
          className="h-64 overflow-y-auto p-3 leading-relaxed"
          aria-live="polite"
        >
          {history.map((h, i) => (
            <div key={i} className="mb-2">
              <p>
                <span className="text-[#7DD3FC]">$</span> {h.cmd}
              </p>
              {h.out.map((line, j) => (
                <p key={j} className="break-words text-[#c9c9c2]">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-white/20 p-3">
          <label htmlFor="term-input" className="text-[#7DD3FC]">
            $
          </label>
          <input
            id="term-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="type a command, e.g. help"
            className="min-w-0 flex-1 bg-transparent text-[#F4F4F0] outline-none placeholder:text-white/40"
          />
        </form>
      </div>
    </Window>
  );
}
