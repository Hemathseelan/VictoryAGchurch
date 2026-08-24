import Hero from "../components/Hero";
import MonthlyVerse from "../components/MonthlyVerse";
import LatestMessage from "../components/LatestMessage";
import MinistryCard from "../components/MinistryCard";
import ServiceCard from "../components/ServiceCard";
import PosterSlider from "../components/PosterSlider";
import GalleryPreview from "../components/GalleryPreview";
import YearlyVerse from "../components/YearlyVerse";
import PreviousMonthlyVerses from "../components/PreviousMonthlyVerses";
import { ministries, services } from "../data/siteData";

export default function Home() {
  return (
    <>
      <Hero />
      <MonthlyVerse />
      <PreviousMonthlyVerses />
      <LatestMessage />

      <section className="py-10 lg:py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-8" data-aos="fade-up">
            <p className="eyebrow mb-3">Get Involved</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">Church Ministries</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((m, i) => (
              <MinistryCard key={m.id} ministry={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-8" data-aos="fade-up">
            <p className="eyebrow mb-3">Join Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">Sunday Service Timings</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>
      <YearlyVerse />
    </>
  );
}
