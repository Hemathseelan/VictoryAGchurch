import { FaPlay, FaCalendarDays, FaUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebase";
import {
  getYouTubeThumbnail,
  getYouTubeId,
} from "../utils/youtube";

export default function LatestMessage() {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    const sermonsRef = ref(database, "sermons");

    const unsubscribe = onValue(sermonsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        // Firebase data -> Array
        const sermonList = Array.isArray(data)
          ? data
          : Object.values(data);
          console.log("🔥 FIREBASE SERMONS:", sermonList);

setSermons(sermonList);

        setSermons(sermonList);
      } else {
        setSermons([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // No sermons
  if (!sermons.length) {
    return null;
  }

  // Convert "09 August 2026" into a reliable Date
  const parseDate = (dateString) => {
    if (!dateString) return new Date(0);

    const parts = dateString.trim().split(" ");

    if (parts.length !== 3) {
      return new Date(dateString);
    }

    const day = parseInt(parts[0], 10);
    const monthName = parts[1];
    const year = parseInt(parts[2], 10);

    const months = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };

    return new Date(
      year,
      months[monthName] ?? 0,
      day
    );
  };

  // Sort newest sermon first
const latestSermon = sermons.reduce((latest, sermon) => {
  if (!latest) return sermon;

  return parseDate(sermon.date) > parseDate(latest.date)
    ? sermon
    : latest;
}, null);

  // YouTube data
  const thumbnail = getYouTubeThumbnail(
    latestSermon.youtubeUrl
  );

  const videoId = getYouTubeId(
    latestSermon.youtubeUrl
  );

  return (
    // <section className="py-16 lg:py-24 bg-surface">
    //   <div className="max-w-7xl mx-auto px-5 lg:px-10">

    //     {/* Heading */}
    //     <div
    //       className="flex items-end justify-between mb-10"
    //       data-aos="fade-up"
    //     >
    //       <div>
    //         <p className="eyebrow text-gold-deep mb-3">
    //           This Week
    //         </p>

    //         <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">
    //           Latest Sunday Service
    //         </h2>
    //       </div>

    //       <a
    //         href="/watch"
    //         className="hidden sm:block text-primary font-semibold text-sm hover:text-gold-deep transition-colors"
    //       >
    //         View All →
    //       </a>
    //     </div>

    //     {/* Latest Sermon Card */}
    //     <div
    //       className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-soft"
    //       data-aos="fade-up"
    //       data-aos-delay="100"
    //     >

    //       {/* YouTube Thumbnail */}
    //       <a
    //         href="/watch"
    //         className="relative group h-72 lg:h-auto block"
    //       >
    //         <img
    //           src={thumbnail}
    //           alt={latestSermon.title}
    //           className="w-full h-full object-cover"
    //         />

    //         <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/55 transition-colors flex items-center justify-center">

    //           <span className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">

    //             <FaPlay
    //               className="text-primary-dark ml-1"
    //               size={20}
    //             />

    //           </span>

    //         </div>
    //       </a>

    //       {/* Sermon Details */}
    //       <div className="bg-primary p-8 lg:p-12 flex flex-col justify-center text-white">

    //         <p className="eyebrow text-gold mb-4">
    //           Sunday Message
    //         </p>

    //         <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-6 text-balance">
    //           {latestSermon.title}
    //         </h3>

    //         <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm mb-8">

    //           {/* Pastor */}
    //           <span className="flex items-center gap-2">
    //             <FaUser size={12} />
    //             {latestSermon.pastor}
    //           </span>

    //           {/* Date */}
    //           <span className="flex items-center gap-2">
    //             <FaCalendarDays size={12} />
    //             {latestSermon.date}
    //           </span>

    //         </div>

    //         {/* Watch YouTube */}
    //         <a
    //           href={
    //             videoId
    //               ? `https://youtube.com/watch?v=${videoId}`
    //               : latestSermon.youtubeUrl
    //           }
    //           target="_blank"
    //           rel="noreferrer"
    //           className="w-fit flex items-center gap-3 px-6 py-3 rounded-full bg-gold text-primary-dark font-semibold hover:bg-white transition-colors"
    //         >
    //           <FaPlay size={12} />
    //           Watch Now
    //         </a>

    //       </div>
    //     </div>

    //   </div>
    // </section>
   <section className="py-12 sm:py-16 lg:py-24 bg-surface">
  <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-10">

    {/* Heading */}
    <div
      className="text-center mb-8 sm:mb-10 lg:mb-12"
      data-aos="fade-up"
    >
      <p className="eyebrow text-gold-deep mb-3">
        This Week
      </p>

      <h2 className="font-display text-2xl sm:text-4xl font-semibold text-primary-dark">
        Latest Sunday Service
      </h2>

      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-ink/60">
        Watch our latest service and message.
      </p>
    </div>


    {/* Featured Sermon */}
    <div
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft group bg-primary-dark"
      data-aos="fade-up"
      data-aos-delay="100"
    >

      {/* ================= THUMBNAIL ================= */}
      <a
        href="/watch"
        className="relative block bg-black"
      >
        <div className="relative w-full aspect-video overflow-hidden">

          <img
            src={thumbnail}
            alt={latestSermon.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent pointer-events-none" />

          {/* Latest Badge */}
          <div className="absolute top-3 left-3 sm:top-5 sm:left-5">

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gold text-primary-dark text-[9px] sm:text-xs font-bold tracking-wide shadow-lg">

              <span className="w-1.5 h-1.5 rounded-full bg-primary-dark animate-pulse" />

              LATEST SERVICE

            </span>

          </div>


          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">

            <span className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:scale-110 transition-all duration-300">

              <FaPlay
                className="text-white group-hover:text-primary-dark ml-0.5 sm:ml-1 transition-colors"
                size={16}
              />

            </span>

          </div>

        </div>
      </a>


      {/* ================= MOBILE DETAILS ================= */}
      <div className="block sm:hidden bg-primary p-5">

        <p className="eyebrow text-gold mb-2">
          Sunday Message
        </p>

        <h3 className="font-display text-xl font-semibold text-white leading-tight">
          {latestSermon.title}
        </h3>

        <div className="flex flex-wrap items-center gap-4 mt-3 text-white/70 text-xs">

          <span className="flex items-center gap-1.5">
            <FaUser size={10} />
            {latestSermon.pastor}
          </span>

          <span className="flex items-center gap-1.5">
            <FaCalendarDays size={10} />
            {latestSermon.date}
          </span>

        </div>

        <a
          href={
            videoId
              ? `https://youtube.com/watch?v=${videoId}`
              : latestSermon.youtubeUrl
          }
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gold text-primary-dark font-semibold text-xs hover:bg-white transition-colors"
        >
          <FaPlay size={10} />
          Watch Now
        </a>

      </div>


      {/* ================= DESKTOP DETAILS ================= */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-7 lg:p-12">

        <div className="flex flex-row items-end justify-between gap-6">

          <div className="max-w-2xl">

            <p className="eyebrow text-gold mb-3">
              Sunday Message
            </p>

            <h3 className="font-display text-3xl lg:text-5xl font-semibold text-white leading-tight">
              {latestSermon.title}
            </h3>

            <div className="flex flex-wrap items-center gap-5 mt-5 text-white/70 text-sm">

              <span className="flex items-center gap-2">
                <FaUser size={12} />
                {latestSermon.pastor}
              </span>

              <span className="flex items-center gap-2">
                <FaCalendarDays size={12} />
                {latestSermon.date}
              </span>

            </div>

          </div>


          {/* Watch Button */}
          <a
            href={
              videoId
                ? `https://youtube.com/watch?v=${videoId}`
                : latestSermon.youtubeUrl
            }
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-gold text-primary-dark font-semibold text-sm hover:bg-white transition-colors shrink-0 shadow-gold"
          >
            <FaPlay size={12} />
            Watch Now
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
  );
}