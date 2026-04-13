import { motion } from "framer-motion";
import { person, whoAmIBlocks } from "../data/portfolio";
import { useRotatingTypewriter } from "../hooks/useRotatingTypewriter";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhoAmISection() {
  const typedProfile = useRotatingTypewriter(whoAmIBlocks, {
    typingSpeed: 16,
    deletingSpeed: 8,
    pauseDuration: 2400,
  });

  return (
    <section id="about" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="who.am.i"
            title="Who am I?"
            description="I’m Jahurul Haque Nill, a student, prompt engineer, and digital marketer focused on AI tools, frontend growth, and building thoughtful modern digital work."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <Reveal delay={0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,17,28,0.86),rgba(7,12,20,0.72))] p-4 shadow-[0_26px_70px_rgba(0,0,0,0.28)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,163,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(40,78,255,0.1),transparent_30%)] opacity-70 transition duration-500 group-hover:opacity-100" />
              <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-white/8 bg-[#09111d] p-2">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-full min-h-[21rem] w-full rounded-[1.2rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.16}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,19,32,0.8),rgba(9,14,24,0.68))] p-5 shadow-[0_26px_70px_rgba(0,0,0,0.28)] sm:p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,163,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(120,146,255,0.1),transparent_34%)] opacity-80 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between gap-3 border-b border-white/8 pb-4">
                <div>
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
                    &gt; whoami
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-[-0.05em] text-white">Live profile intro</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[0.7rem] tracking-[0.22em] text-white/58">
                  profile.log
                </div>
              </div>

              <div className="mt-5 min-h-[19rem] rounded-[1.5rem] border border-white/8 bg-[rgba(4,8,15,0.84)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-5">
                <pre className="font-mono text-[0.8rem] leading-7 whitespace-pre-wrap break-words text-white/76 sm:text-[0.88rem]">
                  {typedProfile}
                  <span className="terminal-cursor" aria-hidden="true">
                    |
                  </span>
                </pre>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Student mindset", "AI-driven creativity", "Modern frontend growth"].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/78 transition duration-300 group-hover:border-white/12"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
