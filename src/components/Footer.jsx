import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { churchInfo, services } from "../data/siteData";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
   { to: "/watch", label: "Watch" },
   {
  to: "/ministries",
  label: "Ministries"
},
   { to: "/locations", label: "Locations" },
   { to: "/watch", label: "Watch" },
  { to: "/gallery", label: "Gallery" },
 
 
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.9fr_1fr] gap-4 lg:gap-5 mb-10">

        {/* ================= LOGO + SUNDAY TIMINGS ================= */}

        <div>

          {/* LOGO */}

          <div className="flex items-center gap-3 mb-4">

            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold shadow-gold shrink-0 bg-white">

              <img
                src="/logo.png"
                alt="VICTORY A.G. CHURCH Logo"
                className="w-full h-full object-contain scale-125"
              />

            </div>

            <div>
              <p className="font-display font-semibold text-sm">
                VICTORY A.G. CHURCH
              </p>

              <p className="text-[10px] tracking-[0.2em] text-gold">
                CUDDALORE N.T
              </p>
            </div>

          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {churchInfo.tagline}
          </p>


          {/* SUNDAY TIMINGS */}

          <div>

            <h4 className="font-display text-lg font-semibold mb-4">
              Services Timings on Sunday
            </h4>

         <ul className="space-y-3">

  {services.map((s) => (
    <li
      key={s.id}
      className="text-sm text-white/60 whitespace-nowrap"
    >
      <span className="text-gold font-semibold">
        {s.name}:{" "}
      </span>

      {s.timings[0].time}
    </li>
  ))}

</ul>

          </div>

        </div>


        {/* ================= QUICK LINKS ================= */}

   <div className="lg:ml-10">

          <h4 className="font-display text-lg font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2.5">

            {quickLinks.map((l) => (
              <li key={l.to}>

                <NavLink
                  to={l.to}
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  {l.label}
                </NavLink>

              </li>
            ))}

          </ul>

        </div>


        {/* ================= MAP ================= */}

      <div className="lg:col-span-1 lg:-ml-6">
          <div className="w-full h-[270px] rounded-2xl overflow-hidden border border-white/10">

      <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15624.326704495443!2d79.7496434!3d11.7592968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54988d0919c719%3A0x63f8bbff7759a917!2sVictory%20AG%20Church!5e0!3m2!1sen!2sin!4v1789032275049!5m2!1sen!2sin"
  title="Victory A.G. Church Location"
  className="w-full h-full border-0"
  loading="lazy"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
/>
          </div>

        </div>


        {/* ================= GET IN TOUCH ================= */}

        <div>

          <h4 className="font-display text-lg font-semibold mb-4">
            Get in Touch
          </h4>

          <p className="flex items-center gap-2 text-white/60 text-sm mb-3">

            <FaPhoneAlt size={12} />

            {churchInfo.phone}

          </p>

          <p className="flex items-center gap-2 text-white/60 text-sm mb-5">

            <FaEnvelope size={12} />

            {churchInfo.email}

          </p>


          {/* SOCIAL ICONS */}

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


      {/* ================= COPYRIGHT ================= */}

      <div className="border-t border-white/10 pt-6">

        <p className="text-center text-white/40 text-xs">
          © {new Date().getFullYear()} VICTORY A.G. CHURCH, Cuddalore N.T.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}