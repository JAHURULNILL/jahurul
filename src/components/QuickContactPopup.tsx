import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { person } from "../data/portfolio";

export function QuickContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({
    message: "",
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsOpen(true);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [isMobile]);

  const whatsappLink = useMemo(() => {
    const text = encodeURIComponent(form.message.trim() || "Hello, I saw your portfolio and would like to talk.");
    return `https://wa.me/${person.whatsapp}?text=${text}`;
  }, [form]);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent("Portfolio Contact Request");
    const body = encodeURIComponent([
      "Message:",
      form.message.trim() || "Hello, I would like to talk.",
    ].join("\n"));
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
            <div className="relative overflow-hidden rounded-[0.9rem] border border-[rgba(106,126,170,0.24)] bg-[linear-gradient(180deg,rgba(16,23,38,0.97),rgba(9,14,24,0.96))] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:rounded-[1rem] sm:p-3.5">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,163,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[0.98rem] font-semibold tracking-[-0.04em] text-white sm:mt-2 sm:text-lg">
                    Hire me?
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-[var(--accent)]/25 hover:text-white"
                  aria-label="Close contact popup"
                >
                  &times;
                </button>
              </div>

              <div className="relative mt-2 grid gap-2 sm:mt-3 sm:gap-3">
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Write your message..."
                  className="min-h-[64px] rounded-[0.75rem] border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[0.8rem] text-white outline-none transition placeholder:text-white/34 focus:border-[var(--accent)]/28 sm:min-h-[88px] sm:rounded-[0.85rem] sm:px-3.5 sm:py-3 sm:text-sm"
                />
              </div>

              <div className="relative mt-2 flex items-center gap-2 sm:mt-3 sm:gap-2.5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-[0.75rem] bg-[linear-gradient(135deg,rgba(37,211,102,0.98),rgba(37,211,102,0.88))] px-3 py-2.5 text-[0.78rem] font-semibold text-white shadow-[0_18px_40px_rgba(37,211,102,0.24)] transition hover:translate-y-[-2px] sm:rounded-[0.85rem] sm:px-4 sm:py-3 sm:text-sm"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center justify-center rounded-[0.75rem] border border-white/10 bg-white/[0.03] px-2.5 py-2.5 text-[0.78rem] font-medium text-white/84 transition hover:border-[var(--accent)]/24 hover:text-white sm:rounded-[0.85rem] sm:px-3 sm:py-3 sm:text-sm"
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
          Hire Me
        </button>
      ) : null}
    </>
  );
}
