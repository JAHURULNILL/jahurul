import { useState } from "react";
import { motion } from "framer-motion";
import { heroTerminalBlocks, person } from "../data/portfolio";
import { useRotatingTypewriter } from "../hooks/useRotatingTypewriter";
import { Reveal } from "./Reveal";

export function HeroTerminal() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const typedBlock = useRotatingTypewriter(heroTerminalBlocks, {
    typingSpeed: 24,
    deletingSpeed: 13,
    pauseDuration: 2600,
  });

  return (
    <Reveal className="w-full">
      <div className="mb-6 flex items-center gap-3 text-[0.76rem] text-[var(--muted)]">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_7px_rgba(0,255,163,0.12)]" />
        <span className="font-mono uppercase tracking-[0.3em] text-white/56">System Status: Online &amp; Ready</span>
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

        <div className="relative flex items-center justify-between border-b border-[rgba(140,156,194,0.14)] bg-[rgba(24,33,49,0.74)] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff6b77]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbf5f]" />
            <span className="h-3 w-3 rounded-full bg-[#34d399]" />
          </div>
          <div className="rounded-full border border-[rgba(140,156,194,0.14)] bg-[rgba(255,255,255,0.025)] px-3 py-1 font-mono text-[0.68rem] tracking-[0.22em] text-[#8e99b1]">
            zahurul@portfolio:~
          </div>
        </div>

        <div className="relative px-3.5 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
          <div className="rounded-[0.95rem] border border-[rgba(140,156,194,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_10px_24px_rgba(0,0,0,0.12)] sm:p-5">
            <div className="font-mono text-[0.85rem] leading-7 text-[var(--accent-soft)] sm:text-[0.9rem]">
              <div className="text-[var(--accent)]">&gt; whoami</div>
              <div className="text-[#d7deec]">&quot;{person.name}&quot;</div>
            </div>

            <div className="mt-5 min-h-[12.25rem] sm:min-h-[13.75rem]">
              <pre className="font-mono text-[0.74rem] leading-7 whitespace-pre-wrap break-words text-[#a8b6cb] sm:text-[0.8rem]">
                {typedBlock}
                <span className="terminal-cursor" aria-hidden="true">
                  |
                </span>
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
