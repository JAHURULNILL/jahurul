import { motion } from "framer-motion";
import { person } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function HeroHeading() {
  return (
    <Reveal className="w-full">
      <div className="flex h-full flex-col justify-center py-3 lg:pr-10">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[#92a3c2]">
          marketing.banking.professional
        </p>
        <h1 className="text-balance mt-5 max-w-4xl text-[clamp(2.3rem,5.9vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.05em] text-white">
          <span className="block text-white/95">Marketing &amp;</span>
          <span className="block bg-[linear-gradient(90deg,#eef4ff_0%,#a8f1d5_32%,#97bcff_70%,#d4c6ff_100%)] bg-clip-text text-transparent">
            Customer Relations
          </span>
          <span className="block text-white/88">Professional.</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance mt-7 max-w-[35rem] text-[0.98rem] leading-8 text-[#b4bfd1] sm:text-[1.05rem]"
        >
          {person.name} — 3 years of hands-on experience in customer service and banking operations at Dutch-Bangla Bank Limited. Strong in customer handling, cash management, and digital marketing.
        </motion.p>
      </div>
    </Reveal>
  );
}
