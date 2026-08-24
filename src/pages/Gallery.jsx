import { useState } from "react";
import { FaXmark, FaPlay } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import { galleryCategories, galleryImages } from "../data/siteData";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((g) => g.category === active);

  return (
    <>
      <PageHero
        eyebrow="Moments"
        title="Gallery"
        subtitle="A glimpse of our church family, worship and special moments."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12" data-aos="fade-up">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c
                    ? "bg-primary text-white"
                    : "bg-surface text-ink/70 hover:bg-primary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                data-aos="fade-up"
                data-aos-delay={(i % 6) * 60}
                className="mb-4 block w-full rounded-2xl overflow-hidden group relative break-inside-avoid cursor-pointer bg-primary-dark"
              >

                {/* IMAGE */}
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt={item.category}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* VIDEO */}
                {item.type === "video" && (
                  <div className="relative">
                    <video
                      src={item.src}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-auto object-cover"
                    />

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary-dark/20 group-hover:bg-primary-dark/40 transition-colors">
                      <span className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <FaPlay
                          className="text-primary-dark ml-1"
                          size={18}
                        />
                      </span>
                    </div>

                    {/* Video Label */}
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      VIDEO
                    </span>
                  </div>
                )}

                {/* Category */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/80 to-transparent p-5 pt-10 pointer-events-none">
                  <p className="text-white text-sm font-semibold">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[90] bg-primary-dark/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >

          {/* Close Button */}
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-primary-dark text-white flex items-center justify-center transition-colors"
          >
            <FaXmark size={18} />
          </button>

          {/* IMAGE LIGHTBOX */}
          {lightbox.type === "image" && (
            <img
              src={lightbox.src}
              alt={lightbox.category}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {/* VIDEO LIGHTBOX */}
          {lightbox.type === "video" && (
            <video
              src={lightbox.src}
              controls
              autoPlay
              playsInline
              className="max-h-[85vh] max-w-full rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  );
}