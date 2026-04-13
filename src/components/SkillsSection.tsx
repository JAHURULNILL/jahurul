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
            eyebrow="skill.stack"
            title="Skills"
            description="The skills below reflect the blend of prompt thinking, AI curiosity, marketing perspective, and frontend learning that shapes my work."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,29,0.9),rgba(8,12,20,0.72))] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:border-[var(--accent)]/26 hover:shadow-[0_30px_70px_rgba(0,0,0,0.34)]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at top right, ${skill.glow}, transparent 45%)`,
                  }}
                />
                <div className="relative">
                  <div className="inline-flex rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--accent-soft)]">
                    {skill.kicker}
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-[-0.04em] text-white">{skill.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{skill.description}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
