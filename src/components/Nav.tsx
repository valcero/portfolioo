"use client";

import { FileText } from "lucide-react";
import { profile } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="no-print sticky top-0 z-40 border-b-2 border-ink bg-paper/90 backdrop-blur">
      <a
        href="#contact"
        className="block bg-ink px-4 py-1.5 text-center font-mono text-xs font-bold text-paper sm:text-sm"
      >
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#16a34a] live-dot" aria-hidden />
        Actively looking for SWE roles: <span style={{ color: "var(--icy)" }}>Full-Stack / SRE / Golang</span>
        <span className="ml-2 underline underline-offset-2">Get in touch</span>
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <a href="#top" className="font-display text-lg font-bold">
          hamza<span className="text-cobalt">.</span>dev
        </a>
        <ul className="hidden items-center gap-6 font-mono text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="btn-brut flex h-10 items-center gap-2 px-3 text-sm font-semibold text-[#111]"
            style={{ background: "var(--icy)" }}
          >
            <FileText size={16} aria-hidden /> Resume
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
