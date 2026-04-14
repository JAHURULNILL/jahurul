import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useSpring(-100, { stiffness: 170, damping: 22, mass: 0.45 });
  const y = useSpring(-100, { stiffness: 170, damping: 22, mass: 0.45 });

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
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
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
      <div className="relative h-9 w-9 rounded-full border border-[rgba(111,245,176,0.65)] bg-[radial-gradient(circle,rgba(111,245,176,0.14),rgba(111,245,176,0.02)_68%)] shadow-[0_0_20px_rgba(0,255,163,0.12)]">
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(111,245,176,0.9)] shadow-[0_0_10px_rgba(0,255,163,0.28)]" />
      </div>
    </motion.div>
  );
}
