import { motion } from "framer-motion";
import { person, profileIntroBlocks } from "../data/portfolio";
import { useRotatingTypewriter } from "../hooks/useRotatingTypewriter";
import { Reveal } from "./Reveal";

export function WhoAmISection() {
  const typedIntro = useRotatingTypewriter(profileIntroBlocks, {
    typingSpeed: 20,
    deletingSpeed: 10,
    pauseDuration: 2200,
  });

  return (
    <section id="about" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6">
          <Reveal delay={0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,#1d2739_0%,#212d41_100%)] p-5 shadow-[0_26px_70px_rgba(0,0,0,0.28)] sm:p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,163,0.09),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(120,146,255,0.1),transparent_32%)] opacity-80 transition duration-500 group-hover:opacity-100" />
              <div className="relative mb-5 flex items-center gap-2.5 border-b border-[rgba(140,156,194,0.14)] pb-4">
                <span className="h-3 w-3 rounded-full bg-[#62708f]" />
                <span className="h-3 w-3 rounded-full bg-[#62708f]" />
              </div>

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="relative overflow-hidden rounded-[1.45rem] border border-[rgba(140,156,194,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="relative h-36 w-28 rounded-[1.1rem] object-cover transition duration-500 group-hover:scale-[1.03] sm:h-40 sm:w-32"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[#9ef8d5]">
                    live.profile
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.05em] text-white sm:text-[2rem]">
                    Student | Prompt Engineer | Digital Marketer
                  </h3>
                  <div className="mt-4 min-h-[7rem] max-w-2xl">
                    <p className="font-mono text-[0.95rem] leading-8 text-[#b5c0d2] sm:text-[1rem]">
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

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              ["Focus", "AI tools, prompt writing, frontend learning, and modern digital creation."],
              ["Location", person.location],
              ["Status", "Growing, learning, and building premium digital experiences."],
            ].map(([title, value], index) => (
              <Reveal key={title} delay={0.14 + index * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,#1d2739_0%,#212d41_100%)] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.24)] transition duration-300 hover:border-[var(--accent)]/22"
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
