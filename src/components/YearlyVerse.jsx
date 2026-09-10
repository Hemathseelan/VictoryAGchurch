import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { FaCross } from "react-icons/fa6";
import { database } from "../firebase/firebase";

export default function YearlyVerse() {
  const [yearlyVerse, setYearlyVerse] = useState(null);

  useEffect(() => {
    const verseRef = ref(database, "yearlyVerse");

    const unsubscribe = onValue(verseRef, (snapshot) => {
      if (snapshot.exists()) {
        setYearlyVerse(snapshot.val());
      }
    });

    return () => unsubscribe();
  }, []);

  if (!yearlyVerse) {
    return (
      <section className="py-20 text-center">
        Loading Yearly Verse...
      </section>
    );
  }

  return (
    <section className="relative py-12 lg:py-10 bg-gradient-to-br from-[#FAF7F0] via-[#FFFDF8] to-[#F4E9C9] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"></div>

      <div
        className="relative max-w-6xl mx-auto px-5 lg:px-10"
        data-aos="zoom-in"
      >
        <div className="bg-white rounded-[35px] shadow-2xl border border-yellow-200 overflow-hidden">

          {/* Header */}
          <div className="text-center pt-10 pb-8 px-6">

            <div className="w-20 h-20 rounded-full bg-yellow-100 mx-auto flex items-center justify-center shadow-lg">
              <FaCross className="text-[#C89B3C]" size={30} />
            </div>

            <p className="mt-6 uppercase tracking-[5px] text-[#C89B3C] text-sm font-semibold">
              YEARLY PROMISE • {yearlyVerse.year}
            </p>

            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#1E355E] font-display">
              God's Promise For This Year
            </h2>

            <div className="w-24 h-1 rounded-full bg-[#C89B3C] mx-auto mt-5"></div>
          </div>

          {/* Verse */}
      <div className="grid grid-cols-2">

            {/* Tamil */}
          <div className="p-4 sm:p-6 lg:p-14 text-center border-r border-yellow-200">

              <p className="uppercase tracking-[4px] text-[#C89B3C] font-semibold text-sm mb-8">
                தமிழ்
              </p>

              <blockquote className="font-display text-sm sm:text-xl lg:text-3xl text-[#1E355E] leading-[2]">
                "{yearlyVerse.tamilText}"
              </blockquote>

              <div className="w-16 h-[2px] bg-[#C89B3C] mx-auto my-8"></div>

              <p className="text-[#C89B3C] font-bold text-lg">
                {yearlyVerse.tamilReference}
              </p>
            </div>

            {/* English */}
            <div className="p-4 sm:p-6 lg:p-14 text-center">

              <p className="uppercase tracking-[4px] text-[#C89B3C] font-semibold text-sm mb-8">
                English
              </p>

              <blockquote className="font-display text-sm sm:text-xl lg:text-3xl text-[#1E355E] leading-relaxed">
                "{yearlyVerse.englishText}"
              </blockquote>

              <div className="w-16 h-[2px] bg-[#C89B3C] mx-auto my-8"></div>

              <p className="text-[#C89B3C] font-bold text-lg">
                {yearlyVerse.englishReference}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-[#C89B3C] via-[#E4C66A] to-[#C89B3C] h-2"></div>

        </div>
      </div>
    </section>
  );
}