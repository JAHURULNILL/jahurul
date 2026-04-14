import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-18 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow=""
            title="Projects"
            description="A few selected ideas that reflect how I approach premium interfaces, digital clarity, and modern creative work."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -7 }}
                className="premium-panel premium-ring group relative overflow-hidden rounded-[1.08rem] border border-[rgba(115,132,172,0.18)] p-5 transition-[background-color,border-color,box-shadow,transform] duration-500 active:border-white/16 active:bg-[linear-gradient(180deg,rgba(17,24,38,0.98),rgba(14,20,32,0.96))] hover:border-[rgba(178,192,220,0.22)] hover:shadow-[0_30px_66px_rgba(0,0,0,0.36)]"
              >
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${project.accent} opacity-90`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(0,255,163,0.04),transparent_26%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/70">
                      {project.eyebrow}
                    </span>
                    <span className="font-mono text-[0.8rem] text-white/34">0{index + 1}</span>
                  </div>

                  <h3 className="mt-6 text-[1.38rem] font-bold tracking-[-0.055em] text-white sm:text-[1.56rem]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[0.93rem] leading-7 text-[#b1bfd3]">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)] px-2.5 py-1.5 text-[0.74rem] text-white/78"
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
