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
    <Reveal className="w-full">
      <div className="mb-5 flex items-center gap-3 text-[0.78rem] text-[var(--muted)]">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(0,255,163,0.12)]" />
        <span className="font-mono uppercase tracking-[0.28em]">System Status: Online &amp; Ready</span>
      </div>

      <motion.div
        className="group relative overflow-hidden rounded-[2rem] border border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,#1d2739_0%,#212d41_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.42)]"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,163,0.13),transparent_24%),radial-gradient(circle_at_top_right,rgba(128,88,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(36,75,255,0.08),transparent_26%)] opacity-85 transition duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(126,144,187,0.08),0_0_38px_rgba(0,255,163,0.08),0_0_44px_rgba(116,82,255,0.08)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

        <div className="relative flex items-center justify-between border-b border-[rgba(140,156,194,0.14)] bg-[rgba(27,36,53,0.78)] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff6b77]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbf5f]" />
            <span className="h-3 w-3 rounded-full bg-[#34d399]" />
          </div>
          <div className="rounded-full border border-[rgba(140,156,194,0.14)] bg-[rgba(255,255,255,0.02)] px-3 py-1 font-mono text-[0.72rem] tracking-[0.22em] text-[#8e99b1]">
            zahurul@portfolio:~
          </div>
        </div>

        <div className="relative px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="rounded-[1.5rem] border border-[rgba(140,156,194,0.12)] bg-[rgba(255,255,255,0.02)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
            <div className="font-mono text-[0.9rem] leading-7 text-[var(--accent-soft)] sm:text-[0.96rem]">
              <div className="text-[var(--accent)]">➜ whoami</div>
              <div className="text-[#d7deec]">&quot;{person.name}&quot;</div>
            </div>

            <div className="mt-5 min-h-[16.5rem] sm:min-h-[18rem]">
              <pre className="font-mono text-[0.78rem] leading-7 whitespace-pre-wrap break-words text-[#adb8cf] sm:text-[0.86rem]">
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
