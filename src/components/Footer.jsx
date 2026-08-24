import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { churchInfo, services } from "../data/siteData";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/watch", label: "Watch" },
  { to: "/locations", label: "Locations" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
           <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold shadow-gold shrink-0 bg-white">
  <img
    src="/logo.png"
    alt="VICTORY A.G. CHURCH Logo"
    className="w-full h-full object-contain scale-125"
  />
</div>
            <div>
              <p className="font-display font-semibold text-sm">VICTORY A.G. CHURCH</p>
              <p className="text-[10px] tracking-[0.2em] text-gold">CUDDALORE N.T</p>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">{churchInfo.tagline}</p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="text-white/60 hover:text-gold text-sm transition-colors">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Sunday Timings</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.id} className="text-sm text-white/60">
                <span className="text-gold font-semibold">{s.name}: </span>
                {s.timings[0].time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
          <p className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <FaPhoneAlt size={12} /> {churchInfo.phone}
          </p>
          <p className="flex items-center gap-2 text-white/60 text-sm mb-5">
            <FaEnvelope size={12} /> {churchInfo.email}
          </p>
          <div className="flex gap-3">
            {[
              [FaFacebookF, churchInfo.social.facebook],
              [FaInstagram, churchInfo.social.instagram],
              [FaYoutube, churchInfo.social.youtube],
              [FaWhatsapp, churchInfo.social.whatsapp],
            ].map(([Icon, href], i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-gold hover:text-primary-dark transition-colors"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <p className="text-center text-white/40 text-xs">
          © {new Date().getFullYear()} VICTORY A.G. CHURCH, Cuddalore N.T. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
