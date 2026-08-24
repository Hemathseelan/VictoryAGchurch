export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-center overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-gradient" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full pt-16">
        <p className="eyebrow text-gold mb-4" data-aos="fade-up">{eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white" data-aos="fade-up" data-aos-delay="100">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 mt-4 max-w-xl" data-aos="fade-up" data-aos-delay="200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
