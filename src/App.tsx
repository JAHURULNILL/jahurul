import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContactSection } from "./components/ContactSection";
import { CursorFollower } from "./components/CursorFollower";
import { Footer } from "./components/Footer";
import { HeroHeading } from "./components/HeroHeading";
import { HeroTerminal } from "./components/HeroTerminal";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { QuickContactPopup } from "./components/QuickContactPopup";
import { SkillsSection } from "./components/SkillsSection";
import { WhoAmISection } from "./components/WhoAmISection";
import { navLinks } from "./data/portfolio";

const observedSectionIds = ["about", "skills", "projects", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.title = "Zahurul Haque Nill | Premium Developer Portfolio";
  }, []);

  useEffect(() => {
    const sections = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-0 opacity-100">
        <div className="absolute left-[6%] top-[-7rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(0,255,163,0.16),_transparent_68%)] blur-3xl" />
        <div className="absolute right-[-6rem] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(63,94,251,0.13),_transparent_72%)] blur-3xl" />
        <div className="absolute left-[22%] top-[34%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.04),_transparent_72%)] blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(11,161,255,0.08),_transparent_72%)] blur-3xl" />
      </div>

      <div className="site-grid pointer-events-none fixed inset-0" />

      <Navbar
        links={navLinks}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        isScrolled={isScrolled}
        onMobileMenuToggle={() => setMobileMenuOpen((value) => !value)}
        onNavigate={() => setMobileMenuOpen(false)}
      />

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 bg-[rgba(2,6,13,0.82)] backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-4 mt-24 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,24,0.98),rgba(7,11,19,0.94))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -12, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-base text-white/80 transition hover:border-[var(--accent)]/40 hover:text-white"
                >
                  &times;
                </button>
              </div>

              <nav className="grid gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-base font-medium text-white/84 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/35 hover:bg-[rgba(0,255,163,0.08)] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative z-10">
        <section id="home" className="mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="order-2 lg:order-1">
              <HeroHeading />
            </div>
            <div className="order-1 lg:order-2">
              <HeroTerminal />
            </div>
          </div>
        </section>

        <WhoAmISection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <CursorFollower />
      <QuickContactPopup />
    </div>
  );
}
