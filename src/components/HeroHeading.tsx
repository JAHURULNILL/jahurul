import { motion } from "framer-motion";
import { person } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function HeroHeading() {
  return (
    <Reveal className="w-full">
      <div className="flex h-full flex-col justify-center py-5 lg:pr-12">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.36em] text-[#9db0cd]">
          smart.digital.builder
        </p>
        <h1 className="text-balance mt-6 max-w-4xl text-[clamp(2.45rem,6.1vw,4.9rem)] font-bold leading-[0.96] tracking-[-0.058em] text-white">
          <span className="block text-white">Building Smart</span>
          <span className="block bg-[linear-gradient(92deg,#f6f9ff_0%,#b8f5df_28%,#91beff_70%,#e0d2ff_100%)] bg-clip-text text-transparent">
            Digital &amp; AI
          </span>
          <span className="block text-white/84">Experiences.</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance mt-8 max-w-[36rem] text-[1rem] leading-8 text-[#a9b7cb] sm:text-[1.08rem]"
        >
          {person.name} brings together prompt thinking, modern frontend learning, and digital strategy to craft
          clean, premium, future-facing work that feels considered on every screen.
        </motion.p>
      </div>
    </Reveal>
  );
}
