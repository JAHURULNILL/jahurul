import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useSpring(-100, { stiffness: 155, damping: 20, mass: 0.42 });
  const y = useSpring(-100, { stiffness: 155, damping: 20, mass: 0.42 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateMode = () => {
      setEnabled(media.matches);
    };

    updateMode();
    media.addEventListener("change", updateMode);

    return () => media.removeEventListener("change", updateMode);
  }, []);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX + 10);
      y.set(event.clientY + 12);
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [enabled, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block"
      style={{
        x,
        y,
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="relative h-7 w-7 drop-shadow-[0_0_14px_rgba(0,255,163,0.16)]">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
          <path
            d="M5 3.8v15.6l4.15-4.35 3.6 4.95 2.35-1.7-3.55-4.85H18L5 3.8Z"
            fill="rgba(8,18,30,0.92)"
            stroke="rgba(158,248,213,0.7)"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute left-[6px] top-[6px] h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-85" />
      </div>
    </motion.div>
  );
}
