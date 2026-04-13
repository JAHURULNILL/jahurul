import { motion } from "framer-motion";
import { contactLinks } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,30,0.94),rgba(7,11,18,0.82))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
                  let&apos;s.talk
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.2rem]">
                  Let&apos;s Talk
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                  If you want to build something modern, polished, and genuinely useful, I&apos;m open to discussing
                  ideas around AI tools, frontend growth, digital strategy, and premium web experiences.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                  contact.channels
                </p>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  Choose the platform that feels easiest for you and let&apos;s talk about smart digital ideas, useful
                  tools, or premium web work.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {contactLinks.map((link, index) => (
                <Reveal key={link.label} delay={index * 0.06}>
                  <motion.a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative inline-flex items-center justify-between gap-4 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] px-5 py-4 shadow-[0_18px_46px_rgba(0,0,0,0.18)] transition duration-300 hover:border-[var(--accent)]/32 hover:shadow-[0_24px_58px_rgba(0,0,0,0.26)]"
                  >
                    <span className="absolute inset-0 translate-y-full bg-[linear-gradient(135deg,rgba(0,255,163,0.14),rgba(79,109,255,0.08))] transition duration-500 group-hover:translate-y-0" />
                    <span className="relative">
                      <span className="block text-base font-semibold text-white">{link.label}</span>
                      <span className="mt-1 block text-sm text-[var(--muted)]">{link.caption}</span>
                    </span>
                    <span className="relative text-lg text-[var(--accent-soft)] transition duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </motion.a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
