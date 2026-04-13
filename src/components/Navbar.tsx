import { motion } from "framer-motion";

type NavLink = {
  id: string;
  href: string;
  label: string;
};

type NavbarProps = {
  links: NavLink[];
  activeSection: string;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  onNavigate: () => void;
};

export function Navbar({
  links,
  activeSection,
  mobileMenuOpen,
  onMobileMenuToggle,
  onNavigate,
}: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[rgba(6,10,18,0.74)] px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
          <a
            href="#home"
            className="group inline-flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 transition duration-300 hover:border-[var(--accent)]/35 hover:bg-[rgba(0,255,163,0.07)]"
          >
            <span className="font-mono text-sm font-medium tracking-[0.04em] text-white/92 sm:text-base">
              &lt;Zahurul/&gt;
            </span>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={onNavigate}
                  className="group relative inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium text-white/72 transition duration-300 hover:-translate-y-0.5 hover:text-white"
                >
                  <span
                    className={[
                      "absolute inset-0 rounded-full border transition duration-300",
                      isActive
                        ? "border-[var(--accent)]/40 bg-[rgba(0,255,163,0.08)]"
                        : "border-transparent bg-transparent group-hover:border-white/10 group-hover:bg-white/[0.04]",
                    ].join(" ")}
                  />
                  <span className="relative">
                    {link.label}
                    <span
                      className={[
                        "absolute inset-x-0 -bottom-1.5 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent transition-all duration-300 group-hover:w-full",
                        isActive ? "w-full" : "",
                      ].join(" ")}
                    />
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="hidden rounded-full border border-[var(--accent)]/28 bg-[linear-gradient(135deg,rgba(0,255,163,0.18),rgba(63,94,251,0.12))] px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,255,163,0.08)] transition hover:border-[var(--accent)]/45 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_18px_40px_rgba(0,255,163,0.14)] md:inline-flex"
            >
              Let&apos;s Talk
            </motion.a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={onMobileMenuToggle}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:border-[var(--accent)]/35 hover:bg-[rgba(0,255,163,0.08)] md:hidden"
            >
              <div className="flex h-4 w-5 flex-col justify-between">
                <span
                  className={[
                    "h-0.5 w-full rounded-full bg-current transition duration-300",
                    mobileMenuOpen ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "h-0.5 w-full rounded-full bg-current transition duration-300",
                    mobileMenuOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "h-0.5 w-full rounded-full bg-current transition duration-300",
                    mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
