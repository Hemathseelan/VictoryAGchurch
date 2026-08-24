import PageHero from "../components/PageHero";
import PastorCard from "../components/PastorCard";
import { timeline } from "../data/siteData";

const values = [
  { title: "Vision", desc: "To be a Spirit-filled church that transforms Cuddalore and beyond through the Gospel of Jesus Christ." },
  { title: "Mission", desc: "Winning souls, discipling believers, and equipping every generation to live out their God-given calling." },
  { title: "Core Values", desc: "Prayer, biblical truth, authentic worship, generous love and bold evangelism." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About VICTORY A.G. CHURCH"
        subtitle="A community built on faith, family and the unshakable love of Christ."
        image="https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={v.title} data-aos="fade-up" data-aos-delay={i * 100} className="rounded-2xl bg-surface p-8 border border-primary/5">
              <p className="eyebrow mb-3">{`0${i + 1}`}</p>
              <h3 className="font-display text-xl font-semibold text-primary-dark mb-3">{v.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="eyebrow mb-3">Our Journey</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">Church Timeline</h2>
          </div>
          <div className="relative pl-8 border-l-2 border-gold/40 space-y-12">
            {timeline.map((t, i) => (
              <div key={t.year} data-aos="fade-up" data-aos-delay={i * 100} className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-gold border-4 border-white shadow-gold" />
                <p className="font-display text-2xl font-semibold text-primary-dark">{t.year}</p>
                <p className="font-semibold text-gold-deep mt-1 mb-2">{t.title}</p>
                <p className="text-sm text-ink/70 leading-relaxed max-w-lg">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14" data-aos="fade-up">
            <p className="eyebrow mb-3">Leadership</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">Our Pastor</h2>
          </div>
          <PastorCard />
        </div>
      </section>
    </>
  );
}
