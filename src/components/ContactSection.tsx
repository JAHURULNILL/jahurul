import { motion } from "framer-motion";
import { contactLinks } from "../data/portfolio";
import { Reveal } from "./Reveal";

function ContactIcon({ label }: { label: string }) {
  if (label === "Email") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3" y="6.75" width="18" height="10.5" rx="2" />
        <path d="M4.5 8.25 12 13.5l7.5-5.25" />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.22 1.84 1.22 1.08 1.82 2.82 1.3 3.5 1 .11-.76.42-1.29.76-1.58-2.66-.3-5.47-1.31-5.47-5.86 0-1.29.47-2.34 1.23-3.16-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.21a11.7 11.7 0 0 1 6 0c2.28-1.53 3.29-1.21 3.29-1.21.66 1.65.25 2.87.13 3.17.77.82 1.23 1.87 1.23 3.16 0 4.56-2.82 5.56-5.51 5.85.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V4h-3c-3.31 0-6 2.69-6 6v2H5v4h3v4h4v-4h3.06l.94-4H12v-2c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[linear-gradient(180deg,rgba(7,11,19,0)_0%,rgba(9,13,22,0.86)_20%,rgba(10,14,24,0.98)_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,28,0.8),rgba(8,12,20,0.92))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.6rem]">
                Let&apos;s Talk
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#9aa7c0] sm:text-[1.45rem]">
                If you want to build something modern, polished, and useful, feel free to reach out through the
                platform that feels easiest for you.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-3">
              {contactLinks.map((link, index) => (
                <Reveal key={link.label} delay={index * 0.06}>
                  <motion.a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.985 }}
                    className={[
                      "group relative flex min-h-[104px] items-center justify-between gap-3 overflow-hidden rounded-[0.9rem] border px-4 py-4 shadow-[0_18px_46px_rgba(0,0,0,0.18)] transition duration-300",
                      link.label === "Email"
                        ? "border-[var(--accent)]/24 bg-[linear-gradient(135deg,rgba(26,198,97,0.98),rgba(41,218,121,0.92))] text-white shadow-[0_20px_44px_rgba(37,207,99,0.24)] hover:shadow-[0_26px_54px_rgba(37,207,99,0.3)]"
                        : "border-[rgba(106,126,170,0.2)] bg-[linear-gradient(180deg,rgba(29,39,57,0.96),rgba(27,35,51,0.96))] text-white hover:border-[var(--accent)]/16 hover:shadow-[0_24px_58px_rgba(0,0,0,0.24)]",
                    ].join(" ")}
                  >
                    <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <span
                        className={[
                          "absolute inset-0",
                          link.label === "Email"
                            ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]"
                            : "bg-[radial-gradient(circle_at_top_right,rgba(0,255,163,0.08),transparent_30%)]",
                        ].join(" ")}
                      />
                    </span>
                    <span
                      className={[
                        "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] border",
                        link.label === "Email"
                          ? "border-white/16 bg-white/10 text-white"
                          : "border-white/10 bg-white/[0.04] text-white/92",
                      ].join(" ")}
                    >
                      <ContactIcon label={link.label} />
                    </span>
                    <span className="relative flex-1 text-left">
                      <span className="block font-mono text-[0.62rem] uppercase tracking-[0.26em] text-white/55">
                        Contact
                      </span>
                      <span className="mt-1.5 block text-[1.28rem] font-semibold tracking-[-0.04em] text-white">
                        {link.label}
                      </span>
                    </span>
                    <span
                      className={[
                        "relative flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 group-hover:translate-x-1",
                        link.label === "Email" ? "text-white" : "text-[var(--accent-soft)]",
                        link.label === "Email"
                          ? "border-white/14 bg-white/8"
                          : "border-white/10 bg-white/[0.03]",
                      ].join(" ")}
                    >
                      <ArrowIcon />
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
