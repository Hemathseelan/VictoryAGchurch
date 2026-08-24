import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaCalendarDays } from "react-icons/fa6";
import { events } from "../data/siteData";

export default function PosterSlider() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="mb-12" data-aos="fade-up">
          <p className="eyebrow mb-3">Save the Date</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">Upcoming Events</h2>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {events.map((e) => (
            <SwiperSlide key={e.id}>
              <div className="relative rounded-2xl overflow-hidden group h-96 shadow-card">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/10 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="flex items-center gap-2 text-gold text-xs font-semibold mb-2">
                    <FaCalendarDays size={12} /> {e.date}
                  </p>
                  <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
