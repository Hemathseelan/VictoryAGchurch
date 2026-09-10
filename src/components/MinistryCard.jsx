import * as Fa6 from "react-icons/fa6";
import { GiPrayerBeads } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const iconMap = {
  GiPrayerBeads,
  FaFire: Fa6.FaFire ?? Fa6.FaChurch,
  FaFemale: Fa6.FaPersonDress ?? Fa6.FaChurch,
  FaMale: Fa6.FaPerson ?? Fa6.FaChurch,
  FaChild: Fa6.FaChild ?? Fa6.FaChurch,
  FaBookReader: Fa6.FaBookOpenReader ?? Fa6.FaChurch,
  FaMusic: Fa6.FaMusic ?? Fa6.FaChurch,
  FaHandsHelping: Fa6.FaHandshakeAngle ?? Fa6.FaChurch,
  FaBible: Fa6.FaBookBible ?? Fa6.FaChurch,
};

export default function MinistryCard({ ministry, index }) {
  const navigate = useNavigate();

  const Icon = iconMap[ministry.icon] || Fa6.FaChurch;

  return (
    <div
      onClick={() => navigate("/ministries")}
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      className="group relative cursor-pointer rounded-2xl bg-white border border-primary/5 shadow-card hover:shadow-soft hover:-translate-y-1.5 transition-all duration-300 p-4 sm:p-7 overflow-hidden"
    >
      {/* Top Hover Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

      {/* Icon */}
      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-primary/5 group-hover:bg-primary flex items-center justify-center mb-3 sm:mb-5 transition-colors duration-300">
        <Icon
          className="text-primary group-hover:text-gold transition-colors duration-300"
          size={20}
        />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-primary-dark mb-2">
        {ministry.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-ink/70 leading-relaxed">
        {ministry.desc}
      </p>
    </div>
  );
}