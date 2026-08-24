import { FaPlay, FaCalendarDays } from "react-icons/fa6";
import { getYouTubeThumbnail } from "../utils/youtube";
export default function WatchCard({ sermon, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 80}
      className="group rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-soft transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
       <img
  src={getYouTubeThumbnail(sermon.youtubeUrl)}
  alt={sermon.title}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>
        <div className="absolute inset-0 bg-primary-dark/30 group-hover:bg-primary-dark/50 transition-colors flex items-center justify-center">
          <span className="w-12 h-12 rounded-full bg-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <FaPlay className="text-primary-dark ml-0.5" size={14} />
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="flex items-center gap-2 text-xs text-gold-deep font-semibold mb-2">
          <FaCalendarDays size={11} /> {sermon.date}
        </p>
        <h3 className="font-display text-base font-semibold text-primary-dark mb-4 leading-snug">{sermon.title}</h3>
        <a
         href={sermon.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-deep transition-colors"
        >
          <FaPlay size={10} /> Watch Now
        </a>
      </div>
    </div>
  );
}
