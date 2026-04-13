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
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,30,0.92),rgba(7,10,18,0.8))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:border-[var(--accent)]/26 hover:shadow-[0_34px_84px_rgba(0,0,0,0.38)]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,255,163,0.06),transparent_32%,transparent)]" />
                  <div className="absolute right-[-2rem] top-[-2rem] h-36 w-36 rounded-full bg-[radial-gradient(circle,_rgba(0,255,163,0.18),_transparent_68%)] blur-2xl" />
                </div>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
                        {project.kicker}
                      </p>
                      <h3 className="mt-4 text-2xl font-bold tracking-[-0.05em] text-white">{project.title}</h3>
                    </div>
                    <span className="inline-flex rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.72rem] text-white/66">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[0.73rem] text-white/72 transition duration-300 group-hover:border-white/12 group-hover:text-white/84"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-sm text-white/76">
                    <span>{project.meta}</span>
                    <span className="inline-flex items-center gap-2 text-[var(--accent-soft)] transition duration-300 group-hover:translate-x-1">
                      Explore
                      <span aria-hidden="true">↗</span>
                    </span>
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
