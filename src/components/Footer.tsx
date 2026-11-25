"use client";

import { Copy, FileText } from "lucide-react";
import { profile } from "@/lib/content";
import { useApp } from "./Providers";
import { Magnetic } from "./ui";

export function Footer() {
  const { toast } = useApp();
  return (
    <footer
      id="contact"
      className="no-print border-t-2 border-ink bg-ink text-paper"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-4xl font-bold sm:text-6xl">
          Let&apos;s build something <span className="text-[#7DD3FC]">fast</span>.
        </h2>
        <p className="mt-4 max-w-md text-paper/70">
          Open to backend and full-stack software engineering roles.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="btn-brut inline-block px-4 py-3 font-semibold text-[#111]"
              style={{ background: "var(--icy)", borderColor: "#F4F4F0", boxShadow: "4px 4px 0 0 #F4F4F0" }}
            >
              {profile.email}
            </a>
          </Magnetic>
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(profile.email);
                toast("Email copied to clipboard");
              } catch {
                toast(profile.email);
              }
            }}
            className="btn-brut flex items-center gap-2 bg-transparent px-4 py-3 font-semibold"
            style={{ borderColor: "#F4F4F0", boxShadow: "4px 4px 0 0 #F4F4F0" }}
          >
            <Copy size={16} aria-hidden /> Copy
          </button>
          <a
            href={profile.resumeUrl}
            target="_blank"
              rel="noopener noreferrer"
            className="btn-brut flex items-center gap-2 bg-transparent px-4 py-3 font-semibold"
            style={{ borderColor: "#F4F4F0", boxShadow: "4px 4px 0 0 #F4F4F0" }}
          >
            <FileText size={16} aria-hidden /> View resume
          </a>
        </div>
        <p className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-paper/70">
          <a className="hover:text-[#7DD3FC]" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-[#7DD3FC]" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>© {profile.name}</span>
        </p>
      </div>
    </footer>
  );
}
