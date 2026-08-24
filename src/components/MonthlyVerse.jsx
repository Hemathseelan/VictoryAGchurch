import { motion } from "framer-motion";
import { FaBookBible } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebase";

export default function MonthlyVerse() {
  const [monthlyVerse, setMonthlyVerse] = useState(null);

  useEffect(() => {
    const verseRef = ref(database, "monthlyVerse");

    const unsubscribe = onValue(verseRef, (snapshot) => {
      if (snapshot.exists()) {
        setMonthlyVerse(snapshot.val());
      }
    });

    return () => unsubscribe();
  }, []);

  if (!monthlyVerse) {
    return (
      <section className="py-16 text-center">
        Loading Monthly Verse...
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-cream relative overflow-hidden">
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10"
        data-aos="fade-up"
      >
        {/* Bible Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
            <FaBookBible className="text-gold-deep" size={22} />
          </div>
        </div>

        {/* Month */}
        <p className="eyebrow mb-8">
          Monthly Verse · {monthlyVerse.month}
        </p>

        {/* ================= TAMIL ================= */}
        <div className="w-full max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary/60 uppercase mb-4">
            தமிழ்
          </p>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-xl sm:text-2xl lg:text-3xl leading-snug text-primary-dark"
          >
            "{monthlyVerse.tamilText}"
          </motion.blockquote>

          <p className="mt-4 text-gold-deep font-semibold tracking-wide text-sm">
            — {monthlyVerse.tamilReference}
          </p>
        </div>

        {/* Divider */}
        <div className="w-20 h-px bg-gold/40 mx-auto my-8" />

        {/* ================= ENGLISH ================= */}
        <div className="w-full max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary/60 uppercase mb-4">
            ENGLISH
          </p>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl lg:text-3xl leading-snug text-primary-dark"
          >
            "{monthlyVerse.englishText}"
          </motion.blockquote>

          <p className="mt-4 text-gold-deep font-semibold tracking-wide text-sm">
            — {monthlyVerse.englishReference}
          </p>
        </div>
      </div>
    </section>
  );
}