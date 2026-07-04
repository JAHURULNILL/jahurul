import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 px-4 py-18 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow=""
            title="Work Experience"
            description="3 years of dedicated professional experience in customer service and banking operations."
          />
        </Reveal>

        <div className="mt-12 grid gap-5">
          {experience.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -7 }}
                className="premium-panel premium-ring group relative overflow-hidden rounded-[1.08rem] border border-[rgba(115,132,172,0.18)] p-5 sm:p-6 transition-[background-color,border-color,box-shadow,transform] duration-500 active:border-white/16 hover:border-[rgba(178,192,220,0.22)] hover:shadow-[0_30px_66px_rgba(0,0,0,0.36)]"
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-[rgba(0,255,163,0.18)] to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(0,255,163,0.04),transparent_26%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex flex-col gap-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/70">
                        Banking Sector
                      </span>
                      <h3 className="mt-4 text-[1.38rem] font-bold tracking-[-0.055em] text-white sm:text-[1.56rem]">
                        {exp.position}
                      </h3>
                      <p className="mt-1 text-[1rem] font-medium text-[var(--accent-soft)]">
                        {exp.company}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="rounded-full border border-[var(--accent)]/16 bg-[rgba(0,255,163,0.08)] px-3 py-1.5 font-mono text-[0.72rem] tracking-[0.08em] text-[var(--accent-soft)] shadow-[0_0_16px_rgba(0,255,163,0.06)]">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-2.5">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <div
                        key={rIndex}
                        className="flex items-start gap-3 rounded-[0.9rem] border border-white/6 bg-[rgba(255,255,255,0.028)] px-4 py-3"
                      >
                        <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                        <p className="text-[0.93rem] leading-7 text-[#b1bfd3]">{resp}</p>
                      </div>
                    ))}
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
