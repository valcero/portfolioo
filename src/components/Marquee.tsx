import { stack } from "@/lib/content";

export function Marquee() {
  const items = [...stack, ...stack];
  return (
    <div
      className="marquee no-print overflow-hidden border-y-2 border-ink py-3 text-[#111]"
      style={{ background: "var(--icy)" }}
      aria-hidden
    >
      <div className="marquee-track flex gap-8 font-mono text-sm font-bold uppercase">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            {s.name} <span>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
