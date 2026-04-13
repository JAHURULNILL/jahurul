import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { person } from "../data/portfolio";

export function QuickContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
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
      "Website contact request",
    );
    const body = encodeURIComponent(
      [
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
            className="fixed bottom-4 right-4 z-[70] w-[calc(100vw-2rem)] max-w-[15.75rem] sm:bottom-6 sm:right-6 sm:max-w-[18.5rem]"
          >
            <div className="relative overflow-hidden rounded-[0.9rem] border border-[rgba(106,126,170,0.24)] bg-[linear-gradient(180deg,rgba(15,22,36,0.97),rgba(10,15,25,0.96))] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:rounded-[1rem] sm:p-3.5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,163,0.08),transparent_30%)]" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
                    quick.contact
                  </p>
                  <h3 className="mt-1.5 text-[1rem] font-semibold tracking-[-0.04em] text-white sm:mt-2 sm:text-lg">
                    Need to talk?
                  </h3>
                  <p className="mt-1 text-[0.78rem] leading-5 text-[#aeb9cc] sm:mt-1.5 sm:text-[0.84rem] sm:leading-6">
                    Contact, complaint, or anything else. Write a short message and send it.
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

              <div className="relative mt-2.5 grid gap-2.5 sm:mt-3 sm:gap-3">
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Write your message..."
                  className="min-h-[74px] rounded-[0.8rem] border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[0.82rem] text-white outline-none transition placeholder:text-white/34 focus:border-[var(--accent)]/28 sm:min-h-[88px] sm:rounded-[0.85rem] sm:px-3.5 sm:py-3 sm:text-sm"
                />
              </div>

              <div className="relative mt-2.5 flex items-center gap-2 sm:mt-3 sm:gap-2.5">
                <a
                  href={mailtoLink}
                  className="inline-flex flex-1 items-center justify-center rounded-[0.8rem] bg-[linear-gradient(135deg,rgba(24,201,103,0.98),rgba(43,220,123,0.92))] px-3 py-2.5 text-[0.8rem] font-semibold text-white shadow-[0_18px_40px_rgba(37,207,99,0.24)] transition hover:translate-y-[-2px] sm:rounded-[0.85rem] sm:px-4 sm:py-3 sm:text-sm"
                >
                  Send Message
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center justify-center rounded-[0.8rem] border border-white/10 bg-white/[0.03] px-2.5 py-2.5 text-[0.8rem] font-medium text-white/84 transition hover:border-[var(--accent)]/24 hover:text-white sm:rounded-[0.85rem] sm:px-3 sm:py-3 sm:text-sm"
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
          className="fixed bottom-4 right-4 z-[70] inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/24 bg-[rgba(10,16,28,0.94)] px-4 py-2.5 font-mono text-sm text-white shadow-[0_18px_40px_rgba(0,0,0,0.26)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:text-[var(--accent-soft)] sm:bottom-6 sm:right-6"
        >
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          Message
        </button>
      ) : null}
    </>
  );
}
