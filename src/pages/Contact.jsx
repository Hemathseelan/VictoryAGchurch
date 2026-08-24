import { FaLocationDot, FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaClock } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import PrayerForm from "../components/PrayerForm";
import { churchInfo } from "../data/siteData";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Reach Out"
        title="Contact Us"
        subtitle="We would love to hear from you and pray with you."
        image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 rounded-3xl bg-primary text-white p-8 lg:p-10" data-aos="fade-up">
            <p className="eyebrow text-gold mb-3">Get in Touch</p>
            <h3 className="font-display text-2xl font-semibold mb-8">Church Information</h3>

            <div className="space-y-6 mb-10">
              <p className="flex items-start gap-3 text-sm text-white/80">
                <FaLocationDot className="text-gold mt-1 shrink-0" /> {churchInfo.address}
              </p>
              <p className="flex items-center gap-3 text-sm text-white/80">
                <FaPhone className="text-gold shrink-0" /> {churchInfo.phone}
              </p>
              <p className="flex items-center gap-3 text-sm text-white/80">
                <FaEnvelope className="text-gold shrink-0" /> {churchInfo.email}
              </p>
              <p className="flex items-center gap-3 text-sm text-white/80">
                <FaClock className="text-gold shrink-0" /> {churchInfo.officeHours}
              </p>
            </div>

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
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-gold hover:text-primary-dark transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <PrayerForm />
          </div>
        </div>
      </section>
    </>
  );
}
