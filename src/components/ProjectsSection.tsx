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
            eyebrow=""
            title="Projects"
            description="A few selected ideas that reflect how I approach premium interfaces, digital clarity, and modern creative work."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-[1.05rem] border border-[rgba(115,132,172,0.18)] bg-[linear-gradient(180deg,rgba(13,19,31,0.98),rgba(11,16,27,0.96))] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.24)] transition duration-300 hover:border-white/18 hover:shadow-[0_28px_60px_rgba(0,0,0,0.34)]"
              >
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${project.accent} opacity-90`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_26%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-[1.05rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/70">
                      {project.eyebrow}
                    </span>
                    <span className="font-mono text-[0.8rem] text-white/34">0{index + 1}</span>
                  </div>

                  <h3 className="mt-6 text-[1.35rem] font-bold tracking-[-0.05em] text-white sm:text-[1.5rem]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[0.92rem] leading-7 text-[#aeb9cc]">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)] px-2.5 py-1.5 text-[0.74rem] text-white/76"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="text-sm font-medium text-white/72">{project.meta}</span>
                    <span className="inline-flex items-center gap-2 text-[0.78rem] font-medium text-[var(--accent-soft)] transition duration-300 group-hover:translate-x-1">
                      View idea
                      <span aria-hidden="true">&rarr;</span>
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
