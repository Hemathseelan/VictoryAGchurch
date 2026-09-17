import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBookBible,
  FaArrowRight,
  FaRotate,
} from "react-icons/fa6";
import { personalVerses } from "../data/verseData";

export default function PersonalVerse() {
  const [name, setName] = useState("");
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const getVerse = () => {
    const cleanName = name.trim();

    if (!cleanName) return;

    setLoading(true);
    setVerse(null);

    setTimeout(() => {
      // Create a unique number from the name
      let hash = 0;

      for (let i = 0; i < cleanName.length; i++) {
        hash =
          cleanName.charCodeAt(i) +
          ((hash << 5) - hash);
      }

      // Today's date
      const today = new Date();

      const dateNumber =
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        today.getDate();

      // Name + today's date = verse selection
      const index =
        Math.abs(hash + dateNumber) %
        personalVerses.length;

      // Set result
      setVerse(personalVerses[index]);

      // Show submitted name
      setSubmittedName(cleanName);

      // Clear input box
      setName("");

      setLoading(false);
    }, 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getVerse();
  };

  const todayText = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden bg-[#FBF6EF] py-14 sm:py-16 lg:py-20">

      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#E0B152]/15 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#C97B86]/12 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <div
            className="
              w-14 h-14
              sm:w-16 sm:h-16
              rounded-full
              bg-white
              border border-[#E0B152]/30
              shadow-[0_8px_30px_rgba(201,150,46,0.15)]
              flex items-center justify-center
            "
          >
            <FaBookBible
              className="text-[#C9962E]"
              size={22}
            />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <p
          className="
            text-[10px]
            sm:text-xs
            font-bold
            tracking-[0.25em]
            uppercase
            text-[#C9962E]
            mb-3
          "
        >
          A Word For You
        </p>

        {/* Heading */}
        <h2
          className="
            font-display
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
            text-[#362A47]
            leading-tight
          "
        >
          Receive Your Verse
        </h2>

        {/* Description */}
        <p
          className="
            mt-3
            max-w-xl
            mx-auto
            text-sm
            sm:text-base
            leading-relaxed
            text-[#7A6D82]
          "
        >
          Enter your name and receive a special word from
          God's Word for today.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-7 sm:mt-8 max-w-xl mx-auto"
        >
          <div
            className="
              flex flex-col
              sm:flex-row
              gap-3
              p-2
              bg-white
              rounded-2xl
              sm:rounded-full
              border border-[#E0B152]/20
              shadow-[0_10px_35px_rgba(54,42,71,0.08)]
            "
          >

            {/* Name Input */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              autoComplete="off"
              className="
                flex-1
                min-w-0
                px-5
                py-3.5
                sm:py-3
                rounded-xl
                sm:rounded-full
                bg-transparent
                text-sm
                text-[#362A47]
                placeholder:text-[#7A6D82]/60
                outline-none
              "
            />

            {/* Button */}
            <button
              type="submit"
              disabled={!name.trim() || loading}
              className="
                w-full
                sm:w-auto
                flex items-center
                justify-center
                gap-2
                px-6
                py-3.5
                sm:py-3
                rounded-xl
                sm:rounded-full
                bg-[#C9962E]
                text-white
                text-sm
                font-semibold
                hover:bg-[#B4822344]
                hover:bg-[#B18127]
                transition-all
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? (
                "Finding..."
              ) : (
                <>
                  Get My Verse
                  <FaArrowRight size={13} />
                </>
              )}
            </button>

          </div>
        </form>

        {/* Verse Result */}
        <AnimatePresence mode="wait">

          {verse && !loading && (

            <motion.div
              key={verse.id}
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mt-8
                sm:mt-10
                max-w-3xl
                mx-auto
                rounded-3xl
                bg-gradient-to-br
                from-[#FDF0F4]
                via-white
                to-[#F4EEFB]
                border border-[#E0B152]/25
                px-5
                py-7
                sm:px-10
                sm:py-9
                shadow-[0_15px_45px_rgba(54,42,71,0.10)]
              "
            >

              {/* Result Header */}
              <div className="mb-7">

                <div className="flex items-center justify-center gap-3 mb-4">

                  <span className="w-8 sm:w-12 h-px bg-[#C9962E]/40" />

                  <p
                    className="
                      text-[10px]
                      sm:text-xs
                      font-bold
                      tracking-[0.2em]
                      uppercase
                      text-[#C9962E]
                    "
                  >
                    A Word For You Today
                  </p>

                  <span className="w-8 sm:w-12 h-px bg-[#C9962E]/40" />

                </div>

                {/* Name */}
                <h3
                  className="
                    font-display
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    text-[#362A47]
                  "
                >
                  {submittedName}
                </h3>

                {/* Today's Date */}
                <p
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    text-[#7A6D82]
                  "
                >
                  {todayText}
                </p>

              </div>

              {/* Tamil */}
              <div>

                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    font-bold
                    tracking-[0.2em]
                    uppercase
                    text-[#C97B86]
                    mb-3
                  "
                >
                  தமிழ்
                </p>

                <blockquote
                  className="
                    font-display
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    leading-relaxed
                    text-[#362A47]
                  "
                  style={{
                    wordSpacing: "5px",
                  }}
                >
                  “{verse.tamil}”
                </blockquote>

                <p
                  className="
                    mt-4
                    text-sm
                    font-semibold
                    text-[#C9962E]
                  "
                >
                  — {verse.reference}
                </p>

              </div>

              {/* Divider */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  my-7
                "
              >
                <span className="w-16 h-px bg-[#362A47]/10" />

                <span className="text-[#C9962E] text-xs">
                  ✦
                </span>

                <span className="w-16 h-px bg-[#362A47]/10" />
              </div>

              {/* English */}
              <div>

                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    font-bold
                    tracking-[0.2em]
                    uppercase
                    text-[#C97B86]
                    mb-3
                  "
                >
                  English
                </p>

                <blockquote
                  className="
                    font-display
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    leading-relaxed
                    text-[#362A47]
                  "
                >
                  “{verse.english}”
                </blockquote>

                <p
                  className="
                    mt-4
                    text-sm
                    font-semibold
                    text-[#C9962E]
                  "
                >
                  — {verse.reference}
                </p>

              </div>

              {/* Get Another Verse */}
              <button
                type="button"
                onClick={() => {
                  setVerse(null);
                  setSubmittedName("");
                  setName("");
                }}
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  text-[#7A6D82]
                  hover:text-[#C9962E]
                  transition-colors
                "
              >
                <FaRotate size={11} />
                Get Another Verse
              </button>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
}