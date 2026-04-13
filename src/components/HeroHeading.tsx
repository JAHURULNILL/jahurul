import { motion } from "framer-motion";
import { person } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function HeroHeading() {
  return (
    <Reveal className="pb-4">
      <div className="rounded-[2rem] border border-[rgba(106,126,170,0.22)] bg-[linear-gradient(180deg,#1d2739_0%,#212d41_100%)] px-5 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:px-8 sm:py-10 lg:px-12">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="h-3 w-3 rounded-full bg-[#62708f]" />
          <span className="h-3 w-3 rounded-full bg-[#62708f]" />
        </div>
        <p className="font-mono text-[0.74rem] uppercase tracking-[0.34em] text-[#9aa7c0]">
          smart.digital.builder
        </p>
        <h1 className="mt-5 max-w-5xl text-[clamp(3rem,9vw,6.6rem)] font-bold leading-[0.92] tracking-[-0.065em] text-white">
          <span className="block">Building Smart</span>
          <span className="block bg-[linear-gradient(90deg,#f8fafc_0%,#82f9c8_30%,#8ab4ff_68%,#c0a8ff_100%)] bg-clip-text text-transparent">
            Digital &amp; AI
          </span>
          <span className="block">Experiences.</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base leading-7 text-[#b5c0d2] sm:text-lg"
        >
          {person.name} brings together prompt thinking, modern frontend learning, and digital strategy to craft
          clean, premium, future-facing work that feels considered on every screen.
        </motion.p>
      </div>
    </Reveal>
  );
}
