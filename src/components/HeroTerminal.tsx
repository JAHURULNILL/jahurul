import { useState } from "react";
import { motion } from "framer-motion";
import { heroHighlights, heroRotatingTexts, person } from "../data/portfolio";
import { useRotatingTypewriter } from "../hooks/useRotatingTypewriter";
import { Reveal } from "./Reveal";

export function HeroProfileCard() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const typedText = useRotatingTypewriter(heroRotatingTexts, {
    typingSpeed: 28,
    deletingSpeed: 15,
    pauseDuration: 2400,
  });

  return (
    <Reveal className="w-full">
      <div className="mb-6 flex items-center gap-3 text-[0.76rem] text-[var(--muted)]">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_7px_rgba(0,255,163,0.12)]" />
        <span className="font-mono uppercase tracking-[0.3em] text-white/56">Available for Opportunities</span>
      </div>

      <motion.div
        className="group relative overflow-hidden rounded-[1.15rem] border border-[rgba(118,136,175,0.2)] bg-[linear-gradient(180deg,#1a2436_0%,#202c40_100%)] shadow-[0_18px_42px_rgba(0,0,0,0.28)]"
        animate={tilt}
        whileHover={{ y: -3, scale: 1.002 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
          const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

          setTilt({
            rotateX: offsetY * -6,
            rotateY: offsetX * 8,
          });
        }}
        onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,163,0.11),transparent_22%),radial-gradient(circle_at_top_right,rgba(128,88,255,0.11),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(36,75,255,0.06),transparent_24%)] opacity-90 transition duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_12%,transparent_88%,rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 rounded-[1.15rem] shadow-[inset_0_0_0_1px_rgba(126,144,187,0.08),0_0_20px_rgba(0,255,163,0.04),0_0_24px_rgba(116,82,255,0.04)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-[rgba(140,156,194,0.14)] bg-[rgba(24,33,49,0.74)] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full bg-[var(--accent)]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbf5f]" />
            <span className="h-3 w-3 rounded-full bg-[#8ea0bf]" />
          </div>
          <div className="rounded-full border border-[rgba(140,156,194,0.14)] bg-[rgba(255,255,255,0.025)] px-3 py-1 font-mono text-[0.68rem] tracking-[0.22em] text-[#8e99b1]">
            Professional Profile
          </div>
        </div>

        {/* Profile Content */}
        <div className="relative px-3.5 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
          {/* Photo + Name */}
          <div className="flex items-center gap-4">
            <div className="relative overflow-hidden rounded-full border-2 border-[var(--accent)]/30 p-[2px]">
              <img
                src={person.photo}
                alt={person.name}
                className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
              />
            </div>
            <div>
              <h3 className="text-[1.1rem] font-bold tracking-[-0.04em] text-white sm:text-[1.2rem]">
                {person.name}
              </h3>
              <p className="mt-0.5 text-[0.82rem] text-[var(--accent-soft)]">
                {person.role}
              </p>
            </div>
          </div>

          {/* Rotating Text */}
          <div className="mt-5 rounded-[0.95rem] border border-[rgba(140,156,194,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_10px_24px_rgba(0,0,0,0.12)] sm:p-5">
            <div className="min-h-[3rem] sm:min-h-[3.25rem]">
              <p className="text-[0.88rem] leading-7 text-[#c6d1e4] sm:text-[0.94rem]">
                {typedText}
                <span className="terminal-cursor" aria-hidden="true">
                  |
                </span>
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {heroHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[0.8rem] border border-white/6 bg-[rgba(255,255,255,0.028)] px-3 py-3 text-center"
              >
                <p className="font-mono text-[1.1rem] font-bold text-[var(--accent)] sm:text-[1.25rem]">
                  {item.value}
                </p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-white/50">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Info */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.74rem] text-white/70">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Pabna, Bangladesh
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.74rem] text-white/70">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
              Dutch-Bangla Bank
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/16 bg-[rgba(0,255,163,0.06)] px-3 py-1.5 text-[0.74rem] text-[var(--accent-soft)]">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Open to Work
            </span>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
