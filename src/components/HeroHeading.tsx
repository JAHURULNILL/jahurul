import { motion } from "framer-motion";
import { person } from "../data/portfolio";
import { Reveal } from "./Reveal";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <motion.a
            href="/Jahurul_CV.pdf"
            download="Md_Jahurul_Haque_CV.pdf"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-[linear-gradient(135deg,rgba(26,198,97,0.96),rgba(41,218,121,0.9))] px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_18px_40px_rgba(37,207,99,0.22)] transition hover:shadow-[0_24px_52px_rgba(37,207,99,0.3)]"
          >
            <DownloadIcon />
            Download CV
          </motion.a>
          <motion.a
            href={`https://wa.me/${person.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(106,126,170,0.28)] bg-[rgba(16,34,33,0.55)] px-6 py-3.5 text-[0.95rem] font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_10px_24px_rgba(0,0,0,0.12)] transition hover:border-[var(--accent)]/40 hover:bg-[rgba(17,45,41,0.72)] hover:text-[var(--accent-soft)]"
          >
            <WhatsAppIcon />
            WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </Reveal>
  );
}
