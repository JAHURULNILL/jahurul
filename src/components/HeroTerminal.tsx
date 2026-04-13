import { useState } from "react";
import { motion } from "framer-motion";
import { heroTerminalBlocks, person } from "../data/portfolio";
import { useRotatingTypewriter } from "../hooks/useRotatingTypewriter";
import { Reveal } from "./Reveal";

export function HeroTerminal() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const typedBlock = useRotatingTypewriter(heroTerminalBlocks, {
    typingSpeed: 18,
    deletingSpeed: 10,
    pauseDuration: 2200,
  });

  return (
    <Reveal>
      <div className="mb-5 flex items-center gap-3 text-[0.78rem] text-[var(--muted)]">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(0,255,163,0.12)]" />
        <span className="font-mono uppercase tracking-[0.28em]">System Status: Online &amp; Ready</span>
      </div>

      <motion.div
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,31,0.92),rgba(6,10,18,0.84))] shadow-[0_30px_90px_rgba(0,0,0,0.42)]"
        animate={tilt}
        whileHover={{ y: -6, scale: 1.005 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
          const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

          setTilt({
            rotateX: offsetY * -7,
            rotateY: offsetX * 9,
          });
        }}
        onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,163,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(78,109,255,0.12),transparent_30%)] opacity-80 transition duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

        <div className="relative flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff6b77]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbf5f]" />
            <span className="h-3 w-3 rounded-full bg-[#34d399]" />
          </div>
          <div className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[0.72rem] tracking-[0.22em] text-white/58">
            zahurul@portfolio:~
          </div>
        </div>

        <div className="relative grid gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8 lg:py-8">
          <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.025)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-5">
            <div className="font-mono text-[0.9rem] leading-7 text-[var(--accent-soft)] sm:text-[0.96rem]">
              <div className="text-[var(--accent)]">➜ whoami</div>
              <div className="text-white/90">&quot;{person.name}&quot;</div>
            </div>

            <div className="mt-5 min-h-[18.5rem] rounded-[1.25rem] border border-white/8 bg-[#040913]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.26)] sm:min-h-[20rem] sm:p-5">
              <pre className="font-mono text-[0.78rem] leading-7 whitespace-pre-wrap break-words text-white/74 sm:text-[0.86rem]">
                {typedBlock}
                <span className="terminal-cursor" aria-hidden="true">
                  |
                </span>
              </pre>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 transition duration-300 group-hover:border-[var(--accent)]/18">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--muted)]">
                live.profile
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-[-0.05em] text-white sm:text-[2rem]">
                {person.role}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Building premium, clean, and modern digital work with a developer mindset, careful spacing, and
                smart AI-first thinking.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["Focus", "Frontend learning, AI tools, creative problem solving"],
                ["Location", person.location],
                ["Status", "Open to smart digital collaboration"],
              ].map(([label, value]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] px-4 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition duration-300 hover:border-[var(--accent)]/24 hover:shadow-[0_22px_40px_rgba(0,0,0,0.18)]"
                >
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent-soft)]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/84">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
