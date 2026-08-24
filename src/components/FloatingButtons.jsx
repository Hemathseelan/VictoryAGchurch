import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { churchInfo } from "../data/siteData";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* <a
        href={churchInfo.social.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-soft flex items-center justify-center hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={20} />
      </a> */}
      <a
        href={`tel:${churchInfo.phone}`}
        aria-label="Call the church"
        className="w-12 h-12 rounded-full bg-primary text-white shadow-soft flex items-center justify-center hover:scale-110 transition-transform"
      >
        <FaPhone size={16} />
      </a>
    </div>
  );
}
