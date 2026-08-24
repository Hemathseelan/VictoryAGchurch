import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa6";
import { testimonials, stats } from "../data/siteData";
import Counter from "./Counter";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-4 gap-8 mb-16" data-aos="fade-up">
        {stats.map((s) => (
          <Counter key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-5 lg:px-10" data-aos="fade-up">
        <Swiper modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 5000 }} loop>
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="text-center pb-12">
                <FaQuoteLeft className="text-gold mx-auto mb-6" size={28} />
                <p className="text-white/90 text-lg sm:text-xl font-display italic leading-relaxed mb-6">"{t.quote}"</p>
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover mx-auto mb-3 border-2 border-gold" />
                <p className="text-gold font-semibold text-sm">{t.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
