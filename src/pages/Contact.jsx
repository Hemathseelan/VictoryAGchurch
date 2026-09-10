import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa6";

import PageHero from "../components/PageHero";
import PrayerForm from "../components/PrayerForm";
import { churchInfo } from "../data/siteData";

export default function Contact() {
  return (
    <>
      {/* ================= CONTACT HERO ================= */}

      <PageHero
        eyebrow="Reach Out"
        title="Contact Us"
        subtitle="We would love to hear from you and pray with you."
        image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2000&auto=format&fit=crop"
      />


      {/* ================= VISIT US ================= */}

  {/* ================= VISIT US ================= */}

<section className="py-8 lg:py-10 bg-white">
  <div className="max-w-7xl mx-auto px-5 lg:px-10">

    {/* Heading */}
    <div
      className="text-center mb-6 lg:mb-8"
      data-aos="fade-up"
    >
      <p className="eyebrow mb-3">
        Visit Us
      </p>

      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">
        Come Worship With Us
      </h2>
    </div>


    {/* IMAGE + INFO */}
    <div
      className="grid lg:py-0 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-soft"
      data-aos="fade-up"
    >

      {/* ================= IMAGE ================= */}

      <div className="h-[320px] sm:h-[400px] lg:h-[520px]">
        <img
          src="/gallery/work.jpeg"
          alt="VICTORY A.G. CHURCH"
          className="w-full h-full object-cover object-center"
        />
      </div>


      {/* ================= INFORMATION ================= */}

      <div className="h-[520px] bg-surface p-7 sm:p-10 lg:p-12 flex flex-col justify-center">

        <p className="eyebrow text-gold-deep mb-3">
          VICTORY A.G. CHURCH
        </p>

        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary-dark mb-7">
          We Are Happy To Welcome You
        </h3>


        <div className="space-y-5">

          {/* ADDRESS */}
          <div className="flex items-start gap-4">

            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <FaLocationDot
                className="text-primary"
                size={15}
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-primary-dark mb-1">
                Address
              </p>

              <p className="text-sm text-ink/65 leading-relaxed">
                {churchInfo.address}
              </p>
            </div>

          </div>


          {/* PHONE */}
          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <FaPhone
                className="text-primary"
                size={14}
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-primary-dark mb-1">
                Phone
              </p>

              <a
                href={`tel:${churchInfo.phone}`}
                className="text-sm text-ink/65 hover:text-primary transition-colors"
              >
                {churchInfo.phone}
              </a>
            </div>

          </div>


          {/* EMAIL */}
          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <FaEnvelope
                className="text-primary"
                size={14}
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-primary-dark mb-1">
                Email
              </p>

              <a
                href={`mailto:${churchInfo.email}`}
                className="text-sm text-ink/65 hover:text-primary transition-colors"
              >
                {churchInfo.email}
              </a>
            </div>

          </div>


          {/* OFFICE HOURS */}
          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <FaClock
                className="text-primary"
                size={14}
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-primary-dark mb-1">
                Office Hours
              </p>

              <p className="text-sm text-ink/65">
                {churchInfo.officeHours}
              </p>
            </div>

          </div>

        </div>


        {/* SOCIAL ICONS */}

        <div className="flex gap-3 mt-7 pt-6 border-t border-primary/10">

          {[
            [FaFacebookF, churchInfo.social.facebook],
            [FaInstagram, churchInfo.social.instagram],
            [FaYoutube, churchInfo.social.youtube],
            [FaWhatsapp, churchInfo.social.whatsapp],
          ].map(([Icon, href], index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-colors"
            >
              <Icon size={13} />
            </a>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>


      {/* ================= JOIN US ================= */}

<section className="py-8 lg:py-8 bg-surface">
  <div className="max-w-7xl mx-auto px-5 lg:px-10">

    {/* Heading */}

    <div
      className="text-center mb-6 lg:mb-8"
      data-aos="fade-up"
    >
      <p className="eyebrow mb-3">
        Join Us
      </p>

      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">
        You Are Always Welcome
      </h2>
    </div>


    {/* ================= MOBILE ================= */}

    <div
      className="block lg:hidden rounded-3xl overflow-hidden shadow-card bg-white"
      data-aos="fade-up"
    >

      {/* IMAGE */}

      <div className="h-[300px] sm:h-[380px] w-full">
        <img
          src="/gallery/jo.jpg"
          alt="Church fellowship"
          className="w-full h-full object-cover object-center"
        />
      </div>


      {/* MOBILE CONTENT */}

      <div className="p-6 sm:p-8">

        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary-dark mb-5">
          JOIN CHURCH
        </h3>

        <p className="text-sm sm:text-base text-ink/70 leading-7">
          VICTORY A.G. CHURCH is a welcoming place where
          people come together to worship Jesus Christ,
          grow in faith, and encourage one another.
        </p>

        <p className="mt-4 text-sm sm:text-base text-ink/70 leading-7">
          Whether you are visiting for the first time or
          looking for a church family, you are always
          welcome to join us in worship and fellowship.
        </p>

        <p className="mt-4 text-sm sm:text-base text-ink/70 leading-7">
          Join us as we worship together, listen to God's
          Word, pray together, and grow in our relationship
          with Jesus Christ.
        </p>

        <p className="mt-4 text-sm sm:text-base text-ink/70 leading-7">
          We look forward to welcoming you and your family
          to VICTORY A.G. CHURCH.
        </p>

      </div>

    </div>


    {/* ================= DESKTOP ================= */}

    <div
      className="hidden lg:grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-card"
      data-aos="fade-up"
    >

      {/* CONTENT */}

      <div className="bg-white p-10 xl:p-6 flex items-center">

        <div>

          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary-dark mb-5">
            JOIN CHURCH
          </h3>

          <p className="text-sm sm:text-base text-ink/70 leading-7">
            VICTORY A.G. CHURCH is a place where people
            come together to worship Jesus Christ, grow
            in faith, and encourage one another. We believe
            that the church is more than just a building;
            it is a family where everyone is welcomed,
            loved, and encouraged in their walk with God.
          </p>

          <p className="mt-4 text-sm sm:text-base text-ink/70 leading-7">
            Whether you are visiting for the first time,
            searching for a church family, or looking for
            a place to grow deeper in your relationship
            with Jesus, we would be happy to welcome you
            into our fellowship.
          </p>

          <p className="mt-4 text-sm sm:text-base text-ink/70 leading-7">
            Join us as we worship together, listen to
            God's Word, spend time in prayer, and build
            meaningful relationships with one another.
            There is a place for you and your family here
            at VICTORY A.G. CHURCH.
          </p>

          <p className="mt-4 text-sm sm:text-base text-ink/70 leading-7">
            Come with an open heart and experience the
            joy of worshipping Jesus Christ together.
            We look forward to meeting you and sharing
            God's love with you.
          </p>

        </div>

      </div>


      {/* IMAGE */}

      <div className="h-[460px]">

        <img
          src="/gallery/jo.jpg"
          alt="Church fellowship"
          className="w-full h-full object-cover object-center"
        />

      </div>

    </div>

  </div>
</section>


      {/* ================= CONTACT US ================= */}

      <section className="py-12 lg:py-10 bg-white">

        <div className="max-w-3xl mx-auto px-5 lg:px-10">

          {/* Heading */}

          <div
            className="text-center mb-10"
            data-aos="fade-up"
          >

            <p className="eyebrow mb-3">
              Contact Us
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">
              We'd Love To Hear From You
            </h2>

            <p className="mt-3 text-sm sm:text-base text-ink/60">
              Have a prayer request or want to connect with us?
              Send us a message.
            </p>

          </div>


          {/* CENTER FORM */}

          <div
            className="bg-surface rounded-3xl p-6 sm:p-8 lg:p-8 shadow-card"
            data-aos="fade-up"
          >
            <PrayerForm />
          </div>

        </div>

      </section>

    </>
  );
}





// import {
//   FaLocationDot,
//   FaPhone,
//   FaEnvelope,
//   FaInstagram,
//   FaFacebookF,
//   FaYoutube,
//   FaWhatsapp,
//   FaClock,
// } from "react-icons/fa6";

// import PageHero from "../components/PageHero";
// import PrayerForm from "../components/PrayerForm";
// import { churchInfo } from "../data/siteData";

// export default function Contact() {
//   return (
//     <>
//       {/* ================= CONTACT HERO ================= */}

//       <PageHero
//         eyebrow="Reach Out"
//         title="Contact Us"
//         subtitle="We would love to hear from you and pray with you."
//         image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2000&auto=format&fit=crop"
//       />


//       {/* ================= VISIT US ================= */}

//       <section className="py-12 lg:py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-5 lg:px-10">

//           {/* Heading */}
//           <div className="text-center mb-8 lg:mb-10" data-aos="fade-up">
//             <p className="eyebrow mb-2">Visit Us</p>

//             <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">
//               Come Worship With Us
//             </h2>
//           </div>


//           {/* IMAGE + INFO */}
//           <div
//             className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-soft border border-primary/5"
//             data-aos="fade-up"
//           >

//             {/* ================= IMAGE ================= */}
//             <div className="h-[280px] sm:h-[340px] lg:h-[460px]">
//               <img
//                 src="/gallery/con.jpeg"
//                 alt="VICTORY A.G. CHURCH"
//                 className="w-full h-full object-cover object-center"
//               />
//             </div>


//             {/* ================= INFORMATION ================= */}
//             <div className="lg:h-[460px] bg-surface p-6 sm:p-8 lg:p-10 flex flex-col justify-center">

//               <p className="eyebrow text-gold-deep mb-2">
//                 VICTORY A.G. CHURCH
//               </p>

//               <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary-dark mb-5">
//                 We Are Happy To Welcome You
//               </h3>


//               <div className="space-y-4">

//                 {/* ADDRESS */}
//                 <div className="flex items-start gap-3">
//                   <div className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
//                     <FaLocationDot className="text-primary" size={14} />
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-primary-dark mb-0.5">
//                       Address
//                     </p>
//                     <p className="text-sm text-ink/65 leading-relaxed">
//                       {churchInfo.address}
//                     </p>
//                   </div>
//                 </div>


//                 {/* PHONE */}
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
//                     <FaPhone className="text-primary" size={13} />
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-primary-dark mb-0.5">
//                       Phone
//                     </p>
//                     <a
//                       href={`tel:${churchInfo.phone}`}
//                       className="text-sm text-ink/65 hover:text-primary transition-colors"
//                     >
//                       {churchInfo.phone}
//                     </a>
//                   </div>
//                 </div>


//                 {/* EMAIL */}
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
//                     <FaEnvelope className="text-primary" size={13} />
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-primary-dark mb-0.5">
//                       Email
//                     </p>
//                     <a
//                       href={`mailto:${churchInfo.email}`}
//                       className="text-sm text-ink/65 hover:text-primary transition-colors"
//                     >
//                       {churchInfo.email}
//                     </a>
//                   </div>
//                 </div>


//                 {/* OFFICE HOURS */}
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
//                     <FaClock className="text-primary" size={13} />
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-primary-dark mb-0.5">
//                       Office Hours
//                     </p>
//                     <p className="text-sm text-ink/65">
//                       {churchInfo.officeHours}
//                     </p>
//                   </div>
//                 </div>

//               </div>


//               {/* SOCIAL ICONS */}
//               <div className="flex gap-3 mt-6 pt-5 border-t border-primary/10">
//                 {[
//                   [FaFacebookF, churchInfo.social.facebook],
//                   [FaInstagram, churchInfo.social.instagram],
//                   [FaYoutube, churchInfo.social.youtube],
//                   [FaWhatsapp, churchInfo.social.whatsapp],
//                 ].map(([Icon, href], index) => (
//                   <a
//                     key={index}
//                     href={href}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-colors"
//                   >
//                     <Icon size={13} />
//                   </a>
//                 ))}
//               </div>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* ================= JOIN US ================= */}

//       <section className="py-12 lg:py-16 bg-surface">
//         <div className="max-w-7xl mx-auto px-5 lg:px-10">

//           {/* Heading */}
//           <div className="text-center mb-8 lg:mb-10" data-aos="fade-up">
//             <p className="eyebrow mb-2">Join Us</p>

//             <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">
//               You Are Always Welcome
//             </h2>
//           </div>


//           {/* JOIN CONTENT */}
//           <div
//             className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-card border border-primary/5"
//             data-aos="fade-up"
//           >

//             {/* CONTENT */}
//             <div className="bg-white p-7 sm:p-9 lg:p-12 flex items-center">
//               <div>
//                 <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary-dark mb-4">
//                   JOIN CHURCH
//                 </h3>

//                 <p className="text-sm sm:text-base text-ink/70 leading-7">
//                   VICTORY A.G. CHURCH is a place where people
//                   come together to worship Jesus Christ, grow
//                   in faith, and encourage one another.
//                 </p>

//                 <p className="mt-3 text-sm sm:text-base text-ink/70 leading-7">
//                   Whether you are visiting for the first time
//                   or looking for a church family, we would be
//                   happy to welcome you and worship together.
//                 </p>
//               </div>
//             </div>


//             {/* IMAGE */}
//             <div className="h-[260px] lg:h-[340px]">
//               <img
//                 src="/gallery/join.jpg"
//                 alt="Church fellowship"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//           </div>

//         </div>
//       </section>


//       {/* ================= CONTACT US ================= */}

//       <section className="py-12 lg:py-16 bg-white">
//         <div className="max-w-3xl mx-auto px-5 lg:px-10">

//           {/* Heading */}
//           <div className="text-center mb-8" data-aos="fade-up">
//             <p className="eyebrow mb-2">Contact Us</p>

//             <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">
//               We'd Love To Hear From You
//             </h2>

//             <p className="mt-2 text-sm sm:text-base text-ink/60">
//               Have a prayer request or want to connect with us?
//               Send us a message.
//             </p>
//           </div>


//           {/* CENTER FORM */}
//           <div
//             className="bg-surface rounded-3xl p-6 sm:p-8 lg:p-9 shadow-card border border-primary/5"
//             data-aos="fade-up"
//           >
//             <PrayerForm />
//           </div>

//         </div>
//       </section>

//     </>
//   );
// }