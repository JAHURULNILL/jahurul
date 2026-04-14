import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 px-4 py-18 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow=""
            title="Skills"
            description="The skills below reflect the blend of prompt thinking, AI curiosity, marketing perspective, and frontend learning that shapes my work."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                className="premium-panel premium-ring group relative h-full overflow-hidden rounded-[1.08rem] border border-[rgba(106,126,170,0.22)] p-4 sm:p-5 transition-[background-color,border-color,box-shadow,transform] duration-500 active:border-[var(--accent)]/18 active:bg-[linear-gradient(180deg,#213049_0%,#26364e_100%)] hover:border-[rgba(173,189,220,0.22)] hover:shadow-[0_28px_62px_rgba(0,0,0,0.34)]"
              >
                <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_58%)]" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,163,0.08),transparent_26%),radial-gradient(circle_at_top_right,rgba(123,132,255,0.08),transparent_26%)]" />
                </div>
                <div className="relative flex h-full flex-col">
                  <h3 className="font-mono text-[0.98rem] font-medium tracking-[0.03em] text-[var(--accent)] sm:text-[1.06rem]">
                    {skill.title}
                  </h3>

                  <div className="mt-6 flex flex-1 flex-col gap-3.5">
                    {skill.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-3 rounded-[0.9rem] border border-white/6 bg-[rgba(255,255,255,0.028)] px-3 py-2.5"
                      >
                        <p className="text-[0.92rem] font-medium tracking-[-0.02em] text-[#d7deeb] sm:text-[0.97rem]">
                          {item.label}
                        </p>
                        <span className="rounded-full border border-[var(--accent)]/16 bg-[rgba(0,255,163,0.08)] px-2.5 py-1 font-mono text-[0.7rem] tracking-[0.08em] text-[var(--accent-soft)] shadow-[0_0_16px_rgba(0,255,163,0.06)]">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute bottom-4 left-4 h-12 w-12 rounded-full border border-[rgba(0,255,163,0.22)] opacity-0 transition duration-500 group-hover:opacity-100">
                    <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(0,255,163,0.26)]" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
