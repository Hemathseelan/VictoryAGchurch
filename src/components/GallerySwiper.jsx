import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const galleryImages = [
  "/gallery/jo.jpg",
  "/gallery/hero.jpg",
  "/gallery/joinus.jpg",
  "/gallery/ss1.jpg",
  "/gallery/ss2.jpg",
  "/gallery/sse1.jpg",
  "/gallery/work.jpeg",
  "/gallery/media.jpeg",
];

export default function GallerySwiper() {
  const [orientations, setOrientations] = useState({});

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;

    setOrientations((prev) => ({
      ...prev,
      [index]:
        naturalWidth > naturalHeight
          ? "landscape"
          : "portrait",
    }));
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF9ED] py-14 sm:py-16 lg:py-20">

      {/* ================= HEADING ================= */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-8 sm:mb-10">
        <div className="text-center">

          <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-gold-deep mb-3">
            Moments From Our Church
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-dark">
            Our Gallery
          </h2>

          <p className="mt-3 text-sm sm:text-base text-ink/60 max-w-xl mx-auto">
            A glimpse of our worship, fellowship and special moments together.
          </p>

        </div>
      </div>

      {/* ================= SWIPER ================= */}
      <div className="w-full overflow-hidden">

        <Swiper
          modules={[
            Autoplay,
            Pagination,
            EffectCoverflow,
          ]}
          effect="coverflow"
          centeredSlides={true}

          breakpoints={{
            0: {
              slidesPerView: 1.65,
            },

            640: {
              slidesPerView: 2.2,
            },

            1024: {
              slidesPerView: 2.6,
            },
          }}

          spaceBetween={18}
          loop={true}
          speed={850}

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.15,
            slideShadows: false,
          }}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}

          pagination={{
            clickable: true,
          }}

          className="gallery-coverflow"
        >

          {galleryImages.map((image, index) => {
            const orientation = orientations[index];

            return (
              <SwiperSlide key={image}>

                <div
                  className={`gallery-card ${
                    orientation === "landscape"
                      ? "is-landscape"
                      : orientation === "portrait"
                      ? "is-portrait"
                      : "is-loading"
                  }`}
                >

                  <img
                    src={image}
                    alt={`Victory A.G. Church Gallery ${index + 1}`}
                    className="gallery-photo"
                    onLoad={(e) => handleImageLoad(e, index)}
                  />

                  {/* Image bottom info */}
                  <div className="gallery-overlay">

                    <p className="text-white/75 text-xs tracking-[0.2em] uppercase">
                      Gallery
                    </p>

                    <p className="text-white font-semibold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                  </div>

                </div>

              </SwiperSlide>
            );
          })}

        </Swiper>

      </div>

      {/* ================= VIEW GALLERY ================= */}
      <div className="flex justify-center mt-8 sm:mt-10">

        <Link
          to="/gallery"
          className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Gallery
          <FaArrowRight size={13} />
        </Link>

      </div>

    </section>
  );
}