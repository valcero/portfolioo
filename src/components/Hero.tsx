"use client";

import { motion } from "framer-motion";
import { Copy, FileText, GitBranch, Link2, Mail } from "lucide-react";
import { profile } from "@/lib/content";
import { Terminal } from "./Terminal";
import { Magnetic } from "./ui";
import { useApp } from "./Providers";

export function Hero() {
  const { toast } = useApp();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast("Email copied to clipboard");
    } catch {
      toast(`Copy failed. Email: ${profile.email}`);
    }
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:items-center lg:gap-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div
          className="brut inline-block -rotate-1 p-3 text-[#111] sm:p-4"
          style={{ background: "var(--icy)" }}
        >
          <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide sm:text-sm">
            <span className="relative flex h-3 w-3" aria-hidden>
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75 animate-ping motion-reduce:animate-none" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#111] bg-[#16a34a]" />
            </span>
            Actively looking for SWE roles
          </p>
          <p className="mt-1 font-display text-2xl font-bold leading-tight sm:text-3xl">
            Full-Stack <span aria-hidden>/</span> SRE <span aria-hidden>/</span> Golang
          </p>
        </div>

        <h1
          id="hero-title"
          className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl"
        >
          I build backends that{" "}
          <span className="bg-cobalt px-2 text-white">don&apos;t flinch</span>{" "}
          at checkout.
        </h1>

        <p className="mt-6 max-w-lg text-lg text-muted">
          <strong className="text-ink">{profile.name}</strong>, {profile.role}.
          Go, Node.js, PostgreSQL and Redis in production at a YC-backed
          healthcare startup. {profile.education}.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Magnetic>
            <button
              type="button"
              onClick={copyEmail}
              className="btn-brut flex items-center gap-2 px-4 py-3 font-semibold text-[#111]"
              style={{ background: "var(--icy)" }}
            >
              <Copy size={18} aria-hidden /> Copy email
            </button>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brut flex items-center gap-2 bg-card px-4 py-3 font-semibold"
            >
              <FileText size={18} aria-hidden /> View resume
            </a>
          </Magnetic>
        </div>

        <ul className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
          {[
            { href: profile.github, label: "GitHub", Icon: GitBranch },
            { href: profile.linkedin, label: "LinkedIn", Icon: Link2 },
            { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="pill flex items-center gap-1.5 bg-card px-3 py-1 transition-transform duration-150 hover:-translate-y-0.5"
              >
                <Icon size={14} aria-hidden /> {label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
      >
        <Terminal />
      </motion.div>
    </section>
  );
}
