import { motion } from "framer-motion";
import { person, profileIntroBlocks } from "../data/portfolio";
import { useRotatingTypewriter } from "../hooks/useRotatingTypewriter";
import { Reveal } from "./Reveal";

export function WhoAmISection() {
  const typedIntro = useRotatingTypewriter(profileIntroBlocks, {
    typingSpeed: 24,
    deletingSpeed: 13,
    pauseDuration: 2600,
  });

  return (
    <section id="about" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6">
          <Reveal>
            <p className="font-mono text-[0.74rem] uppercase tracking-[0.34em] text-[#9ef8d5]">who.am.i?</p>
          </Reveal>
          <Reveal delay={0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[1.55rem] border border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,#1c2739_0%,#202b3e_100%)] p-5 shadow-[0_22px_52px_rgba(0,0,0,0.26)] transition-[background-color,border-color,box-shadow,transform] duration-500 active:border-[var(--accent)]/18 active:bg-[linear-gradient(180deg,#213049_0%,#253349_100%)] sm:p-6 hover:shadow-[0_30px_68px_rgba(0,0,0,0.34)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,163,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(120,146,255,0.08),transparent_32%)] opacity-80 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-[1.55rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]" />
              <div className="relative mb-5 flex items-center gap-2.5 border-b border-[rgba(140,156,194,0.14)] pb-4">
                <span className="h-3 w-3 rounded-full bg-[#62708f]" />
                <span className="h-3 w-3 rounded-full bg-[#62708f]" />
              </div>

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="relative overflow-hidden rounded-[1.05rem] border border-[rgba(140,156,194,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.18)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="relative h-36 w-28 rounded-[0.85rem] object-cover transition duration-500 group-hover:scale-[1.03] sm:h-40 sm:w-32"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-mono text-[0.98rem] font-medium tracking-[0.08em] text-[#aef6d7] sm:text-[1.06rem]">
                    Zahurul Haque Nill
                  </p>
                  <h3 className="text-balance mt-3 text-2xl font-bold tracking-[-0.05em] text-white sm:text-[2rem]">
                    Student | Prompt Engineer | Digital Marketer
                  </h3>
                  <div className="mt-4 min-h-[7rem] max-w-2xl">
                    <p className="font-mono text-[0.92rem] leading-8 text-[#b0bdd1] sm:text-[0.98rem]">
                      {typedIntro}
                      <span className="terminal-cursor" aria-hidden="true">
                        |
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <div className="grid gap-4 md:max-w-xl">
            {[
              ["Focus", "AI tools, prompt writing, frontend learning, and modern digital creation."],
            ].map(([title, value], index) => (
              <Reveal key={title} delay={0.14 + index * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[1.2rem] border border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,#1b2536_0%,#212d41_100%)] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.2)] transition-[background-color,border-color,box-shadow,transform] duration-500 active:border-[var(--accent)]/18 active:bg-[linear-gradient(180deg,#223047_0%,#26354d_100%)] hover:border-[var(--accent)]/22 hover:shadow-[0_24px_48px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,163,0.08),transparent_28%)]" />
                  </div>
                  <div className="relative">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[#9ef8d5]">{title}</p>
                    <p className="mt-4 text-base leading-7 text-[#cfd7e6]">{value}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
