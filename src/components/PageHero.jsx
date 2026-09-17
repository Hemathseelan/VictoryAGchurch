export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section
      className="
        relative
        min-h-[250px]
        sm:min-h-[290px]
        lg:min-h-[340px]
        flex items-center
        overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="
          absolute inset-0
          w-full h-full
          object-cover
          scale-105
        "
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/75 to-primary-dark/35" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-gold/10 blur-3xl" />

      {/* Content */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-5 sm:px-8 lg:px-10
          w-full
          pt-10 sm:pt-12 lg:pt-16
        "
      >
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-3 sm:mb-4"
          data-aos="fade-up"
        >
          <span className="w-8 sm:w-10 h-[2px] bg-gold" />

          <p className="eyebrow text-gold tracking-[0.18em]">
            {eyebrow}
          </p>
        </div>

        {/* Heading */}
        <h1
          className="
            font-display
            text-[32px]
            leading-[1.08]
            sm:text-5xl
            lg:text-6xl
            font-semibold
            text-white
            max-w-3xl
          "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="
              text-white/80
              text-sm sm:text-base
              leading-relaxed
              mt-3 sm:mt-4
              max-w-xl
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {subtitle}
          </p>
        )}

        {/* Gold Line */}
        <div
          className="mt-5 sm:mt-6 w-14 sm:w-20 h-[2px] bg-gold/80"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
    </section>
  );
}