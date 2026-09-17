import {
  FaHandsPraying,
  FaFire,
  FaPersonDress,
  FaPerson,
  FaChild,
  FaBookOpenReader,
  FaMusic,
  FaHandshakeAngle,
  FaBookBible,
} from "react-icons/fa6";

import { GiPrayerBeads } from "react-icons/gi";

/**
 * NOTE ON IMAGES
 * Each ministry below has an `image` field with a placeholder photo
 * (picsum.photos, seeded so it stays consistent on reload). Swap these
 * for real photos of your congregation — actual faces and gatherings
 * from VICTORY A.G. CHURCH will read as far more credible and warm
 * than any stock photography. Recommended size: 1200x900 or larger,
 * landscape orientation, ideally in .jpg or .webp.
 */
const ministryDetails = [
  {
    id: "prayer",
    title: "Prayer Ministry",
    icon: GiPrayerBeads,
    image: "https://picsum.photos/seed/victory-prayer/1200/900",
    imageAlt: "Congregation members gathered in prayer",

    intro:
      "Prayer is at the heart of everything we do at VICTORY A.G. CHURCH. We seek God through prayer, intercession and fasting, believing that prayer strengthens believers and brings the church together.",

    whatWeDo:
      "We pray for the church, families, individuals, our city and our nation through prayer meetings, intercession and special seasons of prayer.",

    purpose:
      "Our purpose is to build a strong culture of prayer and encourage every believer to develop a consistent personal prayer life.",

    vision:
      "Our vision is to become a praying church where people continually seek God, trust His Word and depend on Him in every situation.",
  },

  {
    id: "youth",
    title: "Youth Fellowship",
    icon: FaFire,
    image: "https://picsum.photos/seed/victory-youth/1200/900",
    imageAlt: "Young people worshipping together at youth fellowship",

    intro:
      "The Youth Fellowship encourages young people to know Jesus Christ personally and live boldly for Him. We believe every young person has a unique purpose and an important place in God's plan.",

    whatWeDo:
      "We provide opportunities for worship, prayer, Bible study, fellowship and outreach while helping young people discover and use their God-given gifts.",

    purpose:
      "Our purpose is to help young people build a strong foundation in Christ, grow in faith and live according to biblical values.",

    vision:
      "Our vision is to raise a passionate generation rooted in God's Word and ready to serve, lead and witness for Jesus Christ.",
  },

  {
    id: "women",
    title: "Women's Fellowship",
    icon: FaPersonDress,
    image: "https://picsum.photos/seed/victory-women/1200/900",
    imageAlt: "Women gathered for fellowship and Bible study",

    intro:
      "The Women's Fellowship brings women together in faith, prayer, fellowship and encouragement. We believe every woman has a valuable place in God's purpose and can make a difference in her family and community.",

    whatWeDo:
      "Through prayer meetings, Bible studies, fellowship gatherings and special programs, women grow spiritually and encourage one another.",

    purpose:
      "Our purpose is to strengthen women in their relationship with Jesus Christ and help them grow in wisdom, faith, love and service.",

    vision:
      "Our vision is to build a strong community of women who walk faithfully with Christ and influence their families and communities through God's love.",
  },

  {
    id: "men",
    title: "Men's Fellowship",
    icon: FaPerson,
    image: "https://picsum.photos/seed/victory-men/1200/900",
    imageAlt: "Men gathered together for fellowship",

    intro:
      "The Men's Fellowship provides a place for men to grow together in faith, friendship and spiritual maturity. We believe godly men have an important role in strengthening their families and serving the church.",

    whatWeDo:
      "Our fellowship includes prayer, Bible study, discussions, fellowship gatherings and opportunities to serve God and support one another.",

    purpose:
      "Our purpose is to equip men to become responsible, faithful and godly leaders in their homes, church and communities.",

    vision:
      "Our vision is to raise men who love God, lead with integrity and serve others with humility wherever God has placed them.",
  },

  {
    id: "children",
    title: "Children Ministry",
    icon: FaChild,
    image: "https://picsum.photos/seed/victory-children/1200/900",
    imageAlt: "Children learning together at church",

    intro:
      "The Children Ministry helps children know and love Jesus from an early age. We believe every child is precious to God and that childhood is an important season for building a strong foundation of faith.",

    whatWeDo:
      "Children learn God's Word through Bible stories, worship, prayer, Scripture memory and age-appropriate activities in a joyful and safe environment.",

    purpose:
      "Our purpose is to nurture children spiritually and help them understand God's love, His Word and His plan for their lives.",

    vision:
      "Our vision is to raise children who know Jesus, love God's Word and grow into faithful followers of Christ throughout their lives.",
  },

  {
    id: "sunday-school",
    title: "Sunday School",
    icon: FaBookOpenReader,
    image: "https://picsum.photos/seed/victory-sundayschool/1200/900",
    imageAlt: "Bible study class in session",

    intro:
      "Sunday School helps believers understand the Bible and grow in their knowledge of God's Word. It provides biblical teaching suited to different age groups and stages of spiritual growth.",

    whatWeDo:
      "Through Bible lessons, Scripture study, discussions and practical teaching, we help believers understand and apply God's Word to everyday life.",

    purpose:
      "Our purpose is to establish believers on the foundation of God's Word and help them develop a deeper understanding of Scripture.",

    vision:
      "Our vision is to see every generation rooted and established in God's Word, living confidently according to His truth.",
  },





];

export default function Ministries() {
  return (
    <main className="bg-surface">
      {/* Hero */}
      <section className="relative py-20 sm:py-24 lg:py-28 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <p className="eyebrow text-gold mb-3">VICTORY A.G. CHURCH</p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
            Our Ministries
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-white/70 text-sm sm:text-base leading-7">
            Serving God, strengthening people and sharing the love of Jesus
            Christ through every ministry.
          </p>
        </div>
      </section>

      {/* Quick navigation */}
      <nav
        aria-label="Jump to a ministry"
        className="sticky top-0 z-20 bg-surface/95 backdrop-blur border-b border-primary/10"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <ul className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {ministryDetails.map((ministry) => (
              <li key={ministry.id} className="shrink-0">
                <a
                  href={`#${ministry.id}`}
                  className="inline-flex items-center rounded-full border border-primary/15 px-4 py-1.5 text-sm text-ink/70 hover:border-primary/40 hover:text-primary-dark transition-colors"
                >
                  {ministry.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Ministry Details */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 space-y-20 sm:space-y-24 lg:space-y-28">
          {ministryDetails.map((ministry, index) => {
            const Icon = ministry.icon;
            const imageOnRight = index % 2 === 1;

            return (
              <article
                key={ministry.id}
                id={ministry.id}
                data-aos="fade-up"
                className="scroll-mt-20"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Image */}
                  <div
                    className={`lg:col-span-5 ${
                      imageOnRight ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                      <img
                        src={ministry.image}
                        alt={ministry.imageAlt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                        <Icon className="text-primary" size={22} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-7 ${
                      imageOnRight ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-dark">
                      {ministry.title}
                    </h2>

                    <p className="mt-4 text-ink/70 text-sm sm:text-base leading-7 sm:leading-8">
                      {ministry.intro}
                    </p>

                    <dl className="mt-7 space-y-5 border-l-2 border-gold/40 pl-5 sm:pl-6">
                      <div>
                        <dt className="font-display text-base sm:text-lg font-semibold text-primary-dark">
                          What We Do
                        </dt>
                        <dd className="mt-1.5 text-ink/70 text-sm sm:text-base leading-7">
                          {ministry.whatWeDo}
                        </dd>
                      </div>

                      <div>
                        <dt className="font-display text-base sm:text-lg font-semibold text-primary-dark">
                          Our Purpose
                        </dt>
                        <dd className="mt-1.5 text-ink/70 text-sm sm:text-base leading-7">
                          {ministry.purpose}
                        </dd>
                      </div>

                      <div>
                        <dt className="font-display text-base sm:text-lg font-semibold text-primary-dark">
                          Our Vision
                        </dt>
                        <dd className="mt-1.5 text-ink/70 text-sm sm:text-base leading-7">
                          {ministry.vision}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}