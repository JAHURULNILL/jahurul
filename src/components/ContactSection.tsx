import { motion } from "framer-motion";
import { contactLinks } from "../data/portfolio";
import { Reveal } from "./Reveal";

const contactIcons: Record<string, string> = {
  Email: "✉",
  GitHub: "⌘",
  Facebook: "f",
};

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,28,0.96),rgba(7,11,18,0.9))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:p-8 lg:p-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
                let&apos;s.talk
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.6rem]">
                Let&apos;s Talk
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#9aa7c0] sm:text-[1.45rem]">
                If you want to build something modern, polished, and useful, feel free to reach out through the
                platform that feels easiest for you.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contactLinks.map((link, index) => (
                <Reveal key={link.label} delay={index * 0.06}>
                  <motion.a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.985 }}
                    className={[
                      "group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-[1.25rem] border px-6 py-5 shadow-[0_18px_46px_rgba(0,0,0,0.18)] transition duration-300",
                      link.label === "Email"
                        ? "border-[var(--accent)]/30 bg-[linear-gradient(180deg,#25cf63_0%,#1fc85e_100%)] text-white shadow-[0_20px_44px_rgba(37,207,99,0.24)] hover:shadow-[0_26px_54px_rgba(37,207,99,0.3)]"
                        : "border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,#1d2739_0%,#212d41_100%)] text-white hover:border-[var(--accent)]/18 hover:shadow-[0_24px_58px_rgba(0,0,0,0.24)]",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "relative flex h-11 w-11 items-center justify-center rounded-xl border text-lg font-semibold",
                        link.label === "Email"
                          ? "border-white/16 bg-white/10 text-white"
                          : "border-white/10 bg-white/[0.04] text-white/90",
                      ].join(" ")}
                    >
                      {contactIcons[link.label]}
                    </span>
                    <span className="relative text-left">
                      <span className="block text-xl font-semibold text-white">{link.label}</span>
                      <span
                        className={[
                          "mt-1 block text-sm",
                          link.label === "Email" ? "text-white/90" : "text-[#aeb9cc]",
                        ].join(" ")}
                      >
                        {link.caption}
                      </span>
                    </span>
                    <span
                      className={[
                        "relative text-xl transition duration-300 group-hover:translate-x-1",
                        link.label === "Email" ? "text-white" : "text-[var(--accent-soft)]",
                      ].join(" ")}
                    >
                      →
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
