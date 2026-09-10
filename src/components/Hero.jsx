import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaClock } from "react-icons/fa6";

import { churchInfo, services } from "../data/siteData";

export default function Hero() {
  // ================= MOBILE HERO IMAGES =================
  const mobileHeroImages = [
    "/gallery/hero.jpg",
    "/gallery/join.jpg",
    "/gallery/joinus.jpg",
    "/gallery/ss1.jpg",
    "/gallery/ss2.jpg",
  ];

  const [mobileImageIndex, setMobileImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileImageIndex(
        (prev) => (prev + 1) % mobileHeroImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[520px] sm:min-h-[650px] lg:min-h-[85vh] flex items-center overflow-hidden">

      {/* ================= HERO IMAGE ================= */}
      {/* ================= HERO IMAGE ================= */}

{/* Desktop - existing image unchanged */}
<img
  src="/gallery/hero.jpg"
  alt="Congregation worshipping together"
  className="absolute inset-0 w-full h-full object-cover object-center hidden sm:block"
/>

{/* Mobile - 5 images with smooth transformation */}
<img
  key={mobileImageIndex}
  src={mobileHeroImages[mobileImageIndex]}
  alt="Congregation worshipping together"
  className="absolute inset-0 w-full h-full object-cover object-center block sm:hidden animate-mobile-hero"
/>

      <div className="absolute inset-0 bg-primary-dark/40" />

      {/* Signature radiant motif */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-radiant animate-sunray" />



      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 py-20 pt-16 lg:pt-24   w-full">

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
          className="font-display font-semibold text-white text-[27px] sm:text-6xl lg:text-7xl leading-[1.05] text-balance"
        >

       <span className="whitespace-nowrap text-[30px] sm:text-6xl">
  VICTORY A.G. CHURCH
</span>


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

          <p className="text-white/90 text-lg sm:text-xl font-display italic">
            "{churchInfo.tagline}"
          </p>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-4 mt-10"
        >

          <a
            href="/watch"
           className="flex items-center gap-2 px-5 py-2.5 sm:gap-3 sm:px-7 sm:py-3.5 rounded-full bg-gold text-primary-dark font-semibold text-sm sm:text-base shadow-gold hover:bg-white transition-colors"
          >
            <FaPlay size={13} />
            Watch Latest Service
          </a>

        </motion.div>

      </div>


      {/* ================= BOTTOM MARQUEE ================= */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden bg-white/95 backdrop-blur-sm border-t-2 border-amber-400">

        <div className="flex w-max animate-marquee-left-to-right">

          {/* First set */}
          <div className="flex items-center shrink-0">

            {services.map((service) => (
              <div
                key={`bottom-${service.id}`}
                className="flex items-center shrink-0 px-6 sm:px-10 py-3"
              >

                <span className="text-primary-dark text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
                  {service.name}
                </span>

                <span className="mx-3 text-gold">
                  •
                </span>

                <span className="text-primary text-xs sm:text-sm font-semibold whitespace-nowrap">
                  Sunday Service
                </span>

                <span className="mx-2 text-primary/30">
                  —
                </span>

                <span className="text-gold-deep text-xs sm:text-sm font-bold whitespace-nowrap">
                  {service.timings?.[0]?.time}
                </span>

                <span className="mx-6 text-primary/20">
                  ✦
                </span>

              </div>
            ))}

          </div>


          {/* Duplicate set */}
          <div className="flex items-center shrink-0">

            {services.map((service) => (
              <div
                key={`bottom-duplicate-${service.id}`}
                className="flex items-center shrink-0 px-6 sm:px-10 py-3"
              >

                <span className="text-primary-dark text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
                  {service.name}
                </span>

                <span className="mx-3 text-gold">
                  •
                </span>

                <span className="text-primary text-xs sm:text-sm font-semibold whitespace-nowrap">
                  Sunday Service
                </span>

                <span className="mx-2 text-primary/30">
                  —
                </span>

                <span className="text-gold-deep text-xs sm:text-sm font-bold whitespace-nowrap">
                  {service.timings?.[0]?.time}
                </span>

                <span className="mx-6 text-primary/20">
                  ✦
                </span>

              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}