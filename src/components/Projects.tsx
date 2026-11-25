"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/lib/content";
import { Reveal, RevealItem, SectionHeading, Window } from "./ui";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="proj-title"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <SectionHeading id="proj-title" index="03" title="Projects" />
      <Reveal className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <RevealItem key={p.name}>
            <motion.div
              whileHover={{ y: -6, rotate: -0.4 }}
              transition={{ duration: 0.15 }}
              className="h-full"
            >
              <Window
                title={`${p.name.toLowerCase().replace(/\s+/g, "-")}.exe`}
                className="h-full"
                bodyClassName="flex h-full flex-col p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  {p.status && (
                    <span
                      className="pill shrink-0 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#111]"
                      style={{ background: "var(--icy)" }}
                    >
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted">{p.tagline}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.metrics.map((m) => (
                    <li
                      key={m}
                      className="border-2 border-ink bg-coral px-2 py-0.5 font-mono text-xs font-bold text-[#111]"
                    >
                      {m}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex-1 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="pill bg-card px-2.5 py-0.5 font-mono text-xs">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={p.repo ?? profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brut inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#111]"
                    style={{ background: "var(--icy)" }}
                  >
                    GitHub <ArrowUpRight size={16} aria-hidden />
                  </a>
                  {p.download && (
                    <a
                      href={p.download.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brut inline-flex items-center gap-1.5 bg-card px-3 py-2 text-sm font-semibold"
                    >
                      {p.download.label} <ArrowUpRight size={16} aria-hidden />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brut inline-flex items-center gap-1.5 bg-card px-3 py-2 text-sm font-semibold"
                    >
                      Live demo <ArrowUpRight size={16} aria-hidden />
                    </a>
                  )}
                </div>
              </Window>
            </motion.div>
          </RevealItem>
        ))}

        <RevealItem className="md:col-span-2">
          <Window title="more-projects.exe" className="border-dashed" bodyClassName="flex flex-wrap items-center justify-between gap-4 p-5">
            <div>
              <h3 className="font-display text-xl font-bold">More on GitHub</h3>
              <p className="mt-1 text-sm text-muted">Smaller experiments and everything else I&apos;ve built.</p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brut inline-flex items-center gap-1.5 bg-card px-3 py-2 text-sm font-semibold"
            >
              github.com/valcero <ArrowUpRight size={16} aria-hidden />
            </a>
          </Window>
        </RevealItem>
      </Reveal>
    </section>
  );
}
