import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow=""
            title="Skills"
            description="The skills below reflect the blend of prompt thinking, AI curiosity, marketing perspective, and frontend learning that shapes my work."
          />
        </Reveal>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-[1.05rem] border border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,#1c2739_0%,#212d41_100%)] p-4 sm:p-5 shadow-[0_22px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:border-[var(--accent)]/24 hover:shadow-[0_30px_70px_rgba(0,0,0,0.34)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,163,0.08),transparent_26%)]" />
                </div>
                <div className="relative flex h-full flex-col">
                  <h3 className="font-mono text-[0.96rem] font-medium tracking-[0.02em] text-[var(--accent)] sm:text-[1.04rem]">
                    {skill.title}
                  </h3>

                  <div className="mt-6 flex flex-1 flex-col gap-4">
                    {skill.items.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4">
                        <p className="text-[0.95rem] font-medium tracking-[-0.02em] text-[#d0d8e6] sm:text-[1rem]">
                          {item.label}
                        </p>
                        <span
                          className={`h-[5px] rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(0,255,163,0.18)] ${item.width}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute bottom-4 left-4 h-12 w-12 rounded-full border border-[rgba(0,255,163,0.38)] opacity-0 transition duration-500 group-hover:opacity-100">
                    <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(0,255,163,0.36)]" />
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
