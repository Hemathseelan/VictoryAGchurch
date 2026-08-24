import PageHero from "../components/PageHero";
import LocationCard from "../components/LocationCard";
import { services } from "../data/siteData";

export default function Locations() {
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="Our Locations"
        subtitle="Two congregations, one family in Christ."
        image="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="pt-10 pb-8 lg:py-28 bg-surface">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <LocationCard key={s.id} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
