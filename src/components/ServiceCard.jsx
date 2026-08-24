import { FaClock, FaLocationDot } from "react-icons/fa6";

export default function ServiceCard({ service }) {
  return (
    <div
      data-aos="fade-up"
      className="rounded-3xl bg-white shadow-card hover:shadow-soft transition-shadow p-8 lg:p-10 border border-primary/5"
    >
      {/* Church Name */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-gold rounded-full" />

        <h3 className="font-display text-2xl font-semibold text-primary-dark">
          {service.name}
        </h3>
      </div>

      {/* Address */}
      <p className="flex items-start gap-2 text-sm text-ink/70 mb-6">
        <FaLocationDot className="text-primary mt-0.5 shrink-0" />

        <span>{service.address}</span>
      </p>

      {/* Service Timings */}
      <div className="space-y-3 mb-8">
        {service.timings.map((t) => (
          <div
            key={t.label}
            className="flex items-center justify-between border-b border-surface pb-3"
          >
            <span className="flex items-center gap-2 text-sm text-ink/80">
              <FaClock
                className="text-gold-deep"
                size={13}
              />

              {t.label}
            </span>

            <span className="text-sm font-semibold text-primary-dark">
              {t.time}
            </span>
          </div>
        ))}
      </div>

      {/* Google Maps */}
      <a
        href={service.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
      >
        Get Directions
      </a>
    </div>
  );
}