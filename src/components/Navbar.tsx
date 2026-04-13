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
  isScrolled: boolean;
  onMobileMenuToggle: () => void;
  onNavigate: () => void;
};

export function Navbar({
  links,
  activeSection,
  mobileMenuOpen,
  isScrolled,
  onMobileMenuToggle,
  onNavigate,
}: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "border-b backdrop-blur-2xl transition duration-300",
          isScrolled
            ? "border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,rgba(29,39,57,0.84),rgba(33,45,65,0.8))] shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
            : "border-white/8 bg-[rgba(9,15,28,0.94)] shadow-[0_18px_40px_rgba(0,0,0,0.2)]",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="group inline-flex items-center transition duration-300"
          >
            <span className="font-mono text-[1.95rem] font-semibold leading-none tracking-[-0.05em] text-white transition duration-300 group-hover:scale-[1.02] sm:text-[2.35rem]">
              &lt;Zahurul/&gt;
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={onNavigate}
                  className="group relative inline-flex items-center justify-center py-2 text-[1.05rem] font-medium text-white/68 transition duration-300 hover:text-white"
                >
                  <span className="relative">
                    {link.label}
                    <span
                      className={[
                        "absolute inset-x-0 -bottom-2 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent transition-all duration-300 group-hover:w-full",
                        isActive ? "w-full opacity-100" : "opacity-70",
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
              className="hidden rounded-full border border-[var(--accent)]/34 bg-[rgba(16,34,33,0.55)] px-8 py-3 font-mono text-[1.02rem] font-medium text-[var(--accent-soft)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_10px_24px_rgba(0,255,163,0.06)] transition hover:border-[var(--accent)]/58 hover:bg-[rgba(17,45,41,0.82)] hover:text-[var(--accent)] hover:shadow-[0_0_0_1px_rgba(0,255,163,0.08),0_18px_40px_rgba(0,255,163,0.12)] md:inline-flex"
            >
              Let&apos;s Talk
            </motion.a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={onMobileMenuToggle}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition duration-300 hover:border-[var(--accent)]/35 hover:bg-[rgba(0,255,163,0.08)] md:hidden"
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
