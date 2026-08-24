import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa6";
import { churchInfo } from "../data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src="/gallery/hero.jpg"
        alt="Congregation worshipping together"
        className="absolute inset-0 w-full h-full object-cover"
      />
   <div className="absolute inset-0 bg-primary-dark/40" />
      {/* signature radiant motif */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-radiant animate-sunray" />

    <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 py-20 pt-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold mb-4"
        >
          Welcome Home
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance"
        >
          VICTORY A.G. CHURCH
          <span className="block text-gold mt-2 text-2xl sm:text-3xl lg:text-4xl tracking-[0.15em] font-medium">
            CUDDALORE N.T
          </span>
      <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white">
  Rev. J. Jayaraj
</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-3 mt-6"
        >
          <span className="divider-ray" />
          <p className="text-white/90 text-lg sm:text-xl font-display italic">"{churchInfo.tagline}"</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="/watch"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-gold text-primary-dark font-semibold shadow-gold hover:bg-white transition-colors"
          >
            <FaPlay size={13} /> Watch Latest Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
