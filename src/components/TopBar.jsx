import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { churchInfo } from "../data/siteData";

export default function TopBar() {
  const { phone, email, address, social } = churchInfo;
  return (
    <div className="hidden md:flex justify-between items-center bg-primary-dark text-white text-xs px-6 lg:px-10 py-2">
      <div className="flex items-center gap-5">
        <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
          <FaPhoneAlt size={11} /> {phone}
        </a>
        <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
          <FaEnvelope size={11} /> {email}
        </a>
        <span className="flex items-center gap-2 text-white/80">
          <FaMapMarkerAlt size={11} /> {address}
        </span>
      </div>
      <div className="flex items-center gap-3">
        {[
          [FaFacebookF, social.facebook],
          [FaInstagram, social.instagram],
          [FaYoutube, social.youtube],
          [FaWhatsapp, social.whatsapp],
        ].map(([Icon, href], i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 hover:bg-gold hover:text-primary-dark transition-colors"
          >
            <Icon size={11} />
          </a>
        ))}
      </div>
    </div>
  );
}
