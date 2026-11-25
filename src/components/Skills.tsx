"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, stack } from "@/lib/content";
import { Reveal, RevealItem, SectionHeading, Window } from "./ui";

export function Skills() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <SectionHeading
        id="skills-title"
        index="02"
        title="Tech stack"
        sub="Filter by category. Go and Postgres are where I spend most of my time."
      />
      <Reveal className="grid gap-5 md:grid-cols-3">
        <RevealItem className="md:col-span-2">
          <Window title="stack.json" className="h-full" bodyClassName="p-5">
            <div role="group" aria-label="Filter technologies" className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active === c}
                  onClick={() => setActive(c)}
                  className={`pill px-3 py-1 font-mono text-xs font-semibold transition-colors duration-150 ${
                    active === c ? "bg-ink text-paper" : "bg-card hover:bg-icy hover:text-[#111]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <motion.ul layout className="mt-5 flex flex-wrap gap-2.5">
              <AnimatePresence mode="popLayout">
                {stack
                  .filter((s) => active === "All" || s.category === active)
                  .map((s) => (
                    <motion.li
                      key={s.name}
                      layout
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.2 }}
                      className="pill bg-card px-3.5 py-1.5 font-mono text-sm shadow-[2px_2px_0_0_var(--ink)]"
                    >
                      {s.name}
                    </motion.li>
                  ))}
              </AnimatePresence>
            </motion.ul>
          </Window>
        </RevealItem>

        <RevealItem>
          <div
            className="brut flex h-full flex-col justify-between p-5 text-[#111]"
            style={{ background: "var(--coral)" }}
          >
            <p className="font-mono text-xs font-semibold uppercase">Focus</p>
            <p className="mt-6 font-display text-3xl font-bold leading-tight">
              APIs, caching, pipelines.
            </p>
            <p className="mt-3 text-sm">
              Backend services that stay fast under load and ship through
              automated CI/CD.
            </p>
          </div>
        </RevealItem>
      </Reveal>
    </section>
  );
}
