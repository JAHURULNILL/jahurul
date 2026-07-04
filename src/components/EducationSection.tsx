import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-28 px-4 py-18 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow=""
            title="Education"
            description="Academic background and qualifications."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {education.map((edu, index) => (
            <Reveal key={edu.degree} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -7 }}
                className="premium-panel premium-ring group relative h-full overflow-hidden rounded-[1.08rem] border border-[rgba(115,132,172,0.18)] p-5 transition-[background-color,border-color,box-shadow,transform] duration-500 active:border-white/16 hover:border-[rgba(178,192,220,0.22)] hover:shadow-[0_30px_66px_rgba(0,0,0,0.36)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${
                    index === 0
                      ? "from-[rgba(0,255,163,0.18)] to-transparent"
                      : index === 1
                        ? "from-[rgba(101,163,255,0.18)] to-transparent"
                        : "from-[rgba(192,168,255,0.16)] to-transparent"
                  } opacity-90`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(0,255,163,0.04),transparent_26%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/70">
                      {index === 0 ? "Undergraduate" : index === 1 ? "HSC" : "SSC"}
                    </span>
                    <span className="font-mono text-[0.8rem] text-white/34">0{index + 1}</span>
                  </div>

                  <h3 className="mt-6 text-[1.2rem] font-bold tracking-[-0.055em] text-white sm:text-[1.32rem]">
                    {edu.degree}
                  </h3>

                  <p className="mt-3 text-[0.93rem] leading-7 text-[#b1bfd3]">{edu.institution}</p>

                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="text-sm font-medium text-white/72">{edu.year}</span>
                    {edu.gpa ? (
                      <span className="rounded-full border border-[var(--accent)]/16 bg-[rgba(0,255,163,0.08)] px-2.5 py-1 font-mono text-[0.7rem] tracking-[0.08em] text-[var(--accent-soft)] shadow-[0_0_16px_rgba(0,255,163,0.06)]">
                        {edu.gpa}
                      </span>
                    ) : (
                      <span className="text-[0.78rem] font-medium text-[var(--accent-soft)]">
                        Running
                      </span>
                    )}
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
