import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { person } from "../data/portfolio";

export function QuickContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsOpen(true);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, []);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(
      form.name.trim() ? `Message from ${form.name.trim()}` : "Website contact request",
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name.trim() || "Not provided"}`,
        `Email: ${form.email.trim() || "Not provided"}`,
        "",
        "Message:",
        form.message.trim() || "Hello, I would like to talk.",
      ].join("\n"),
    );

    return `mailto:${person.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 right-4 z-[70] w-[calc(100vw-2rem)] max-w-sm sm:bottom-6 sm:right-6"
          >
            <div className="relative overflow-hidden rounded-[1.15rem] border border-[rgba(106,126,170,0.24)] bg-[linear-gradient(180deg,rgba(15,22,36,0.97),rgba(10,15,25,0.96))] p-4 shadow-[0_28px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,163,0.08),transparent_30%)]" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
                    quick.contact
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                    Need to talk?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#aeb9cc]">
                    For contact, complaint, or any reason, send a message directly to my email.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-[var(--accent)]/25 hover:text-white"
                  aria-label="Close contact popup"
                >
                  ×
                </button>
              </div>

              <div className="relative mt-4 grid gap-3">
                <input
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                  className="h-11 rounded-[0.9rem] border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-[var(--accent)]/28"
                />
                <input
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="Your email"
                  className="h-11 rounded-[0.9rem] border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-[var(--accent)]/28"
                />
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Write your message..."
                  className="min-h-[100px] rounded-[0.9rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-[var(--accent)]/28"
                />
              </div>

              <div className="relative mt-4 flex items-center gap-3">
                <a
                  href={mailtoLink}
                  className="inline-flex flex-1 items-center justify-center rounded-[0.95rem] bg-[linear-gradient(135deg,rgba(24,201,103,0.98),rgba(43,220,123,0.92))] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,207,99,0.24)] transition hover:translate-y-[-2px]"
                >
                  Send Message
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/84 transition hover:border-[var(--accent)]/24 hover:text-white"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-[70] inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/24 bg-[rgba(10,16,28,0.94)] px-4 py-3 font-mono text-sm text-white shadow-[0_18px_40px_rgba(0,0,0,0.26)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:text-[var(--accent-soft)] sm:bottom-6 sm:right-6"
        >
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          Message
        </button>
      ) : null}
    </>
  );
}
