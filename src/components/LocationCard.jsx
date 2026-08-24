import { FaLocationDot, FaPhone, FaDiamondTurnRight } from "react-icons/fa6";

export default function LocationCard({ service }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-soft bg-white border border-primary/5" data-aos="fade-up">
      <div className="h-64 w-full">
      <iframe
  title={service.name}
  src={service.iframe}
  className="w-full h-full border-0"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl font-semibold text-primary-dark mb-4">{service.name}</h3>
        <p className="flex items-start gap-2 text-sm text-ink/70 mb-3">
          <FaLocationDot className="text-primary mt-0.5 shrink-0" /> {service.address}
        </p>
        <p className="flex items-center gap-2 text-sm text-ink/70 mb-6">
         <FaPhone className="text-primary shrink-0" /> {service.phone}
        </p>
        <a
         href={service.mapLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
        >
          <FaDiamondTurnRight /> Navigate
        </a>
      </div>
    </div>
  );
}
