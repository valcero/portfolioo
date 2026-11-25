"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "@/lib/content";
import { Reveal, RevealItem, SectionHeading, Window } from "./ui";

export function Experience() {
  const [activeId, setActiveId] = useState(experience.highlights[0].id);
  const active = experience.highlights.find((h) => h.id === activeId)!;

  return (
    <section
      id="experience"
      aria-labelledby="exp-title"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <SectionHeading id="exp-title" index="01" title="Experience" />
      <Reveal>
        <RevealItem>
          <Window title="farmako/backend.log" bodyClassName="p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-bold">
                  {experience.title}
                </h3>
                <p className="mt-1">
                  <span className="font-semibold">{experience.company}</span>{" "}
                  <span className="text-muted">
                    ({experience.note}), {experience.location}
                  </span>
                </p>
              </div>
              <span
                className="pill px-3 py-1 font-mono text-xs font-semibold text-[#111]"
                style={{ background: "var(--icy)" }}
              >
                {experience.period}
              </span>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-[220px_1fr]">
              <div
                role="tablist"
                aria-label="Highlights"
                aria-orientation="vertical"
                className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible"
              >
                {experience.highlights.map((h) => {
                  const selected = h.id === activeId;
                  return (
                    <button
                      key={h.id}
                      role="tab"
                      id={`tab-${h.id}`}
                      aria-selected={selected}
                      aria-controls="exp-panel"
                      type="button"
                      onClick={() => setActiveId(h.id)}
                      className={`shrink-0 border-2 border-ink px-3 py-2 text-left text-sm font-semibold transition-colors duration-150 ${
                        selected
                          ? "bg-ink text-paper"
                          : "bg-card hover:bg-icy hover:text-[#111]"
                      }`}
                    >
                      {h.title}
                    </button>
                  );
                })}
              </div>

              <div
                id="exp-panel"
                role="tabpanel"
                aria-labelledby={`tab-${activeId}`}
                className="min-h-40 border-2 border-dashed border-ink p-5"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.15 }}
                  >
                    <p className="text-lg leading-relaxed">{active.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {active.tags.map((t) => (
                        <li
                          key={t}
                          className="pill bg-cobalt px-3 py-0.5 font-mono text-xs font-semibold text-white"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Window>
        </RevealItem>
      </Reveal>
    </section>
  );
}
