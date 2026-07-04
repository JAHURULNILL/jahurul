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

  if (label === "WhatsApp") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }

  if (label === "Phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
      className="scroll-mt-28 bg-[linear-gradient(180deg,rgba(7,11,19,0)_0%,rgba(8,12,21,0.68)_12%,rgba(11,16,28,0.98)_40%,rgba(12,18,31,1)_100%)] px-4 py-20 sm:px-6 lg:px-8 lg:py-30"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden py-2">
            <div className="mx-auto mb-10 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/12 to-transparent" />
            <div className="absolute left-[8%] top-4 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(0,255,163,0.08),_transparent_70%)] blur-3xl" />
            <div className="absolute right-[6%] top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(101,163,255,0.08),_transparent_70%)] blur-3xl" />

            <div className="relative mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold tracking-[-0.065em] text-white sm:text-5xl lg:text-[4.9rem]">
                Let&apos;s Talk
              </h2>
              <p className="text-balance mx-auto mt-5 max-w-3xl text-base leading-8 text-[#a0aec6] sm:text-[1.32rem]">
                Interested in hiring or collaborating? Reach out through WhatsApp for the quickest response, or use any
                channel below.
              </p>
            </div>

            <div className="mx-auto mt-11 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {contactLinks.map((link, index) => (
                <Reveal key={link.label} delay={index * 0.06}>
                  <motion.a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.985 }}
                    className={[
                      "group relative flex min-h-[88px] items-center justify-between gap-3 overflow-hidden rounded-[1rem] border px-4 py-3 shadow-[0_16px_38px_rgba(0,0,0,0.16)] transition-[background-color,border-color,box-shadow,transform] duration-500",
                      link.label === "WhatsApp"
                        ? "border-[#25D366]/30 bg-[linear-gradient(135deg,rgba(37,211,102,0.92),rgba(37,211,102,0.82))] text-white shadow-[0_20px_44px_rgba(37,211,102,0.2)] active:bg-[linear-gradient(135deg,rgba(37,211,102,0.98),rgba(37,211,102,0.9))] hover:shadow-[0_26px_54px_rgba(37,211,102,0.28)]"
                        : "border-[rgba(106,126,170,0.2)] bg-[linear-gradient(180deg,rgba(29,39,57,0.9),rgba(27,35,51,0.94))] text-white active:border-[var(--accent)]/16 active:bg-[linear-gradient(180deg,rgba(33,45,65,0.94),rgba(29,39,57,0.98))] hover:border-[var(--accent)]/16 hover:shadow-[0_24px_58px_rgba(0,0,0,0.24)]",
                    ].join(" ")}
                  >
                    <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <span
                        className={[
                          "absolute inset-0",
                          link.label === "WhatsApp"
                            ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]"
                            : "bg-[radial-gradient(circle_at_top_right,rgba(0,255,163,0.08),transparent_30%)]",
                        ].join(" ")}
                      />
                    </span>
                    <span
                      className={[
                        "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] border",
                        link.label === "WhatsApp"
                          ? "border-white/16 bg-white/10 text-white"
                          : "border-white/10 bg-white/[0.04] text-white/92",
                      ].join(" ")}
                    >
                      <ContactIcon label={link.label} />
                    </span>
                    <span className="relative flex-1 text-left">
                      <span className="block text-[1.1rem] font-semibold tracking-[-0.04em] text-white">
                        {link.label}
                      </span>
                    </span>
                    <span
                      className={[
                        "relative flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 group-hover:translate-x-1",
                        link.label === "WhatsApp" ? "text-white" : "text-[var(--accent-soft)]",
                        link.label === "WhatsApp"
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
