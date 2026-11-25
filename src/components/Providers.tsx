"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Check } from "lucide-react";

type Ctx = {
  toast: (message: string) => void;
};

const AppContext = createContext<Ctx | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside Providers");
  return ctx;
}

export function Providers({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toast = useCallback((m: string) => {
    setMessage(m);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(null), 2200);
  }, []);
  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <MotionConfig reducedMotion="user">
      <AppContext.Provider value={value}>
        {children}
        <div
          aria-live="polite"
          role="status"
          className="no-print pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
        >
          <AnimatePresence>
            {message && (
              <motion.div
                key={message}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.2 }}
                className="brut flex items-center gap-2 bg-icy px-4 py-2 font-mono text-sm font-semibold text-[#111]"
                style={{ background: "var(--icy)" }}
              >
                <Check size={16} aria-hidden /> {message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AppContext.Provider>
    </MotionConfig>
  );
}
