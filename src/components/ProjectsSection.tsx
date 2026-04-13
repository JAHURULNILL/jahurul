import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="selected.projects"
            title="Projects"
            description="A selection of concept builds and ongoing work that show how I think about AI, presentation, interaction, and digital clarity."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -10 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.05rem] border border-[rgba(115,132,172,0.18)] bg-[linear-gradient(180deg,rgba(12,18,30,0.96),rgba(11,16,28,0.94))] p-4 sm:p-5 shadow-[0_24px_70px_rgba(0,0,0,0.26)] transition duration-300 hover:border-white/20 hover:shadow-[0_34px_84px_rgba(0,0,0,0.36)]"
              >
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br opacity-90 transition duration-500 group-hover:opacity-100" />
                <div
                  className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${project.accent} opacity-80 transition duration-500 group-hover:opacity-100`}
                />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(0,255,163,0.05),transparent_28%)]" />
                </div>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/70">
                      {project.eyebrow}
                    </div>
                    <span className="text-2xl text-white/36 transition duration-300 group-hover:translate-x-1 group-hover:text-white/72">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-6 text-[1.4rem] font-bold tracking-[-0.05em] text-white sm:text-[1.55rem]">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[0.92rem] leading-7 text-[#aeb9cc]">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)] px-2.5 py-1.5 text-[0.76rem] text-white/74 transition duration-300 group-hover:border-white/14 group-hover:text-white/84"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-[var(--accent-soft)]">
                      {project.meta}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_14px_rgba(0,255,163,0.28)]" />
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
