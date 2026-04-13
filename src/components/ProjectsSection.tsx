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
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,#1d2739_0%,#212d41_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:border-[var(--accent)]/24 hover:shadow-[0_34px_84px_rgba(0,0,0,0.38)]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,163,0.08),transparent_26%)]" />
                </div>

                <div className="relative flex h-full flex-col">
                  <h3 className="font-mono text-[1.05rem] font-medium tracking-[0.02em] text-[var(--accent)] sm:text-[1.12rem]">
                    {project.title}
                  </h3>

                  <div className="mt-8 flex flex-1 flex-col gap-5">
                    {project.items.map((item) => (
                      <div key={item} className="flex items-center justify-between gap-4">
                        <p className="text-[1.02rem] font-medium tracking-[-0.02em] text-[#d0d8e6] sm:text-[1.08rem]">
                          {item}
                        </p>
                        <span className="h-[5px] w-20 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(0,255,163,0.18)] sm:w-24" />
                      </div>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute bottom-5 left-5 h-14 w-14 rounded-full border border-[rgba(0,255,163,0.38)] opacity-0 transition duration-500 group-hover:opacity-100">
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
