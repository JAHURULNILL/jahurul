import { motion } from "framer-motion";
import { person } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function HeroHeading() {
  return (
    <Reveal className="w-full">
      <div className="flex h-full flex-col justify-center py-2 lg:pr-8">
        <p className="font-mono text-[0.74rem] uppercase tracking-[0.34em] text-[#9aa7c0]">
          smart.digital.builder
        </p>
        <h1 className="mt-5 max-w-5xl text-[clamp(2.9rem,8vw,6.1rem)] font-bold leading-[0.92] tracking-[-0.065em] text-white">
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
