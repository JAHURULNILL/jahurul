import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useSpring(-100, { stiffness: 180, damping: 22, mass: 0.4 });
  const y = useSpring(-100, { stiffness: 180, damping: 22, mass: 0.4 });

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
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
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
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-6 w-6 rounded-full border border-[rgba(158,248,213,0.5)] bg-[radial-gradient(circle,rgba(158,248,213,0.18),rgba(158,248,213,0.04))] shadow-[0_0_18px_rgba(0,255,163,0.14)] md:block"
      style={{
        x,
        y,
        opacity: visible ? 1 : 0,
      }}
    >
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]" />
    </motion.div>
  );
}
