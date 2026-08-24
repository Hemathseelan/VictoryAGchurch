import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebase";

export default function PreviousMonthlyVerses() {
  const [verses, setVerses] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    const versesRef = ref(database, "monthlyVerses");

    const unsubscribe = onValue(versesRef, (snapshot) => {
      if (snapshot.exists()) {
        setVerses(snapshot.val());
      }
    });

    return () => unsubscribe();
  }, []);

  // Month order
  const monthOrder = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Current month
  const currentMonth = monthOrder[new Date().getMonth()];

  // Get previous months and show only latest 4
  const previousMonths = Object.keys(verses)
    .filter((month) => month !== currentMonth)
    .filter((month) => monthOrder.includes(month))
    .sort(
      (a, b) =>
        monthOrder.indexOf(b) - monthOrder.indexOf(a)
    )
    .slice(0, 4);

  const selectedVerse = selectedMonth
    ? verses[selectedMonth]
    : null;

  return (
    <section className="py-8 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Previous Months */}
        {previousMonths.length > 0 && (
          <div className="text-center">

            <p className="text-xs font-semibold tracking-[0.2em] text-primary/50 uppercase mb-4">
              Previous Months
            </p>

            {/* Month Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {previousMonths.map((month) => (
                <button
                  key={month}
                  onClick={() =>
                    setSelectedMonth(
                      selectedMonth === month ? null : month
                    )
                  }
                  className={`
                    px-6 py-2.5 rounded-full
                    text-sm font-semibold
                    transition-all duration-300
                    ${
                      selectedMonth === month
                        ? "bg-primary text-white shadow-soft"
                        : "bg-surface text-primary-dark hover:bg-primary/10"
                    }
                  `}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected Month Verse */}
        {selectedVerse && (
          <motion.div
            key={selectedMonth}
            initial={{
              opacity: 0,
              height: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            transition={{ duration: 0.35 }}
            className="mt-8 max-w-6xl mx-auto rounded-2xl bg-cream border border-primary/5 p-6 lg:p-8"
          >

            {/* Month */}
            <div className="text-center mb-6">
              <p className="eyebrow text-gold-deep">
                {selectedVerse.month ||
                  `${selectedMonth} 2026`}
              </p>
            </div>

            {/* Tamil + English */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">

              {/* Tamil */}
              <div className="text-center md:border-r md:border-primary/10 md:pr-8">

                <p className="text-xs font-semibold tracking-[0.2em] text-primary/50 uppercase mb-3">
                  தமிழ்
                </p>

                <blockquote className="font-display text-lg sm:text-xl leading-snug text-primary-dark">
                  "{selectedVerse.tamilText}"
                </blockquote>

                <p className="mt-4 text-gold-deep font-semibold text-sm">
                  — {selectedVerse.tamilReference}
                </p>

              </div>

              {/* English */}
              <div className="text-center">

                <p className="text-xs font-semibold tracking-[0.2em] text-primary/50 uppercase mb-3">
                  English
                </p>

                <blockquote className="font-display text-lg sm:text-xl leading-snug text-primary-dark">
                  "{selectedVerse.englishText}"
                </blockquote>

                <p className="mt-4 text-gold-deep font-semibold text-sm">
                  — {selectedVerse.englishReference}
                </p>

              </div>

            </div>

          </motion.div>
        )}
      </div>
    </section>
  );
}