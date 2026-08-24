import { FaCalendarDays, FaUser } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebase";
import {
  getYouTubeEmbedUrl,
  getYouTubeThumbnail,
} from "../utils/youtube";

export default function Watch() {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    const sermonsRef = ref(database, "sermons");

    const unsubscribe = onValue(sermonsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        // Firebase object -> array
        const sermonList = Array.isArray(data)
          ? data
          : Object.values(data);

        setSermons(sermonList);
      } else {
        setSermons([]);
      }
    });

    return () => unsubscribe();
  }, []);

  if (sermons.length === 0) {
    return (
      <section className="py-20 text-center">
        Loading Sermons...
      </section>
    );
  }

  // Convert "09 August 2026" into a proper Date
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

  // Sort newest -> oldest
  const sortedSermons = [...sermons].sort((a, b) => {
    return parseDate(b.date) - parseDate(a.date);
  });

  // Latest sermon
  const latestSermon = sortedSermons[0];

  // All previous sermons
  const previousSermons = sortedSermons.slice(1,7);

  const embedUrl = getYouTubeEmbedUrl(
    latestSermon.youtubeUrl
  );

  return (
    <>
      <PageHero
        eyebrow="Sermons"
        title="Watch"
        subtitle="Catch up on the latest message from VICTORY A.G. CHURCH."
        image="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="mb-10 text-center" data-aos="fade-up">
            <p className="eyebrow mb-3">This Week</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">Latest Sunday Service</h2>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-soft bg-surface" data-aos="fade-up" data-aos-delay="100">
            <div className="relative w-full aspect-video">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={latestSermon.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-ink/50 text-sm">
                  Video coming soon.
                </div>
              )}
            </div>
            <div className="p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold text-primary-dark mb-4">{latestSermon.title}</h3>
              <div className="flex flex-wrap items-center gap-6 text-ink/60 text-sm">
                <span className="flex items-center gap-2"><FaUser size={13} className="text-gold-deep" /> {latestSermon.pastor}</span>
                <span className="flex items-center gap-2"><FaCalendarDays size={13} className="text-gold-deep" /> {latestSermon.date}</span>
              </div>
            </div>
          </div>
          {/* Previous Services */}

<div className="mt-16">
  <h2 className="font-display text-2xl font-semibold text-primary-dark mb-8">
    Previous Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {previousSermons.map((sermon, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
      >
        <img
         src={getYouTubeThumbnail(sermon.youtubeUrl)}
          alt={sermon.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-5">
          <h3 className="font-semibold text-lg mb-2">
            {sermon.title}
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            {sermon.date}
          </p>

          <a
            href={sermon.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg inline-block hover:bg-blue-800"
          >
            ▶ Watch Now
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>
    </>
  );
}
