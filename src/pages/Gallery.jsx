import { useEffect, useState } from "react";
import {
  FaXmark,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import PageHero from "../components/PageHero";
import { galleryCategories, galleryImages } from "../data/siteData";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((g) => g.category === active);

  // Open selected item
  const openLightbox = (item) => {
    const index = filtered.findIndex((g) => g.id === item.id);

    setLightbox({
      item,
      index,
    });
  };

  // Previous item
  const previousItem = (e) => {
    e.stopPropagation();

    if (!lightbox || filtered.length === 0) return;

    const newIndex =
      lightbox.index === 0
        ? filtered.length - 1
        : lightbox.index - 1;

    setLightbox({
      item: filtered[newIndex],
      index: newIndex,
    });
  };

  // Next item
  const nextItem = (e) => {
    e.stopPropagation();

    if (!lightbox || filtered.length === 0) return;

    const newIndex =
      lightbox.index === filtered.length - 1
        ? 0
        : lightbox.index + 1;

    setLightbox({
      item: filtered[newIndex],
      index: newIndex,
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;

      if (e.key === "ArrowLeft") {
        previousItem(e);
      }

      if (e.key === "ArrowRight") {
        nextItem(e);
      }

      if (e.key === "Escape") {
        setLightbox(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

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
          <div
  className="flex flex-nowrap gap-2 sm:gap-3 mb-12 overflow-x-auto scrollbar-hide"
  data-aos="fade-up"
>
  {galleryCategories.map((c) => (
    <button
      key={c}
      onClick={() => setActive(c)}
      className={`shrink-0 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
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
                onClick={() => openLightbox(item)}
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

      {/* ================= LIGHTBOX ================= */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightbox(null)}
        >

          {/* Close Button */}
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-5 right-5 sm:top-6 sm:right-6 z-30 w-11 h-11 rounded-full bg-white/80 hover:bg-gold text-primary-dark flex items-center justify-center transition-colors shadow-lg"
          >
            <FaXmark size={18} />
          </button>

          {/* LEFT ARROW */}
          {filtered.length > 1 && (
            <button
              onClick={previousItem}
              aria-label="Previous"
              className="absolute left-3 sm:left-6 lg:left-10 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/80 hover:bg-gold text-primary-dark flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105"
            >
              <FaChevronLeft size={18} />
            </button>
          )}

          {/* RIGHT ARROW */}
          {filtered.length > 1 && (
            <button
              onClick={nextItem}
              aria-label="Next"
              className="absolute right-3 sm:right-6 lg:right-10 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/80 hover:bg-gold text-primary-dark flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105"
            >
              <FaChevronRight size={18} />
            </button>
          )}

          {/* ================= MEDIA ================= */}
          <div
            className="relative z-20 max-w-[90vw] max-h-[88vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >

            {/* IMAGE */}
            {lightbox.item.type === "image" && (
              <img
                src={lightbox.item.src}
                alt={lightbox.item.category}
                className="max-h-[85vh] max-w-[85vw] rounded-2xl object-contain shadow-2xl"
              />
            )}

            {/* VIDEO */}
            {lightbox.item.type === "video" && (
              <video
                key={lightbox.item.src}
                src={lightbox.item.src}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-[85vw] rounded-2xl shadow-2xl"
              />
            )}

          </div>

          {/* Bottom category */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
            <span className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-primary-dark text-xs sm:text-sm font-semibold shadow-lg">
              {lightbox.item.category}
            </span>
          </div>

        </div>
      )}
    </>
  );
}