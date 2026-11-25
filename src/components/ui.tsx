"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

/** Staggered scroll reveal container. Children should be <RevealItem>. */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/** Pulls its child slightly toward the cursor. */
export function Magnetic({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      style={{ x, y }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.2);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** OS-style window chrome. */
export function Window({
  title,
  children,
  className = "",
  bodyClassName = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`brut flex flex-col overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b-2 border-ink bg-ink px-3 py-1.5 text-paper">
        <span className="h-3 w-3 rounded-full border border-paper bg-coral" aria-hidden />
        <span className="h-3 w-3 rounded-full border border-paper bg-icy" aria-hidden />
        <span className="h-3 w-3 rounded-full border border-paper bg-cobalt" aria-hidden />
        <span className="ml-2 truncate font-mono text-xs">{title}</span>
      </div>
      <div className={`flex-1 ${bodyClassName}`}>{children}</div>
    </div>
  );
}

export function SectionHeading({
  id,
  index,
  title,
  sub,
}: {
  id: string;
  index: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-8">
      <p className="font-mono text-sm font-semibold text-muted">/{index}</p>
      <h2
        id={id}
        className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
      >
        <span className="bg-icy px-2 text-[#111]">{title}</span>
      </h2>
      {sub && <p className="mt-3 max-w-xl text-muted">{sub}</p>}
    </div>
  );
}
