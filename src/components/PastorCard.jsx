import { pastor } from "../data/siteData";

export default function PastorCard() {
  return (
    <div
      className="mt-16  grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-soft bg-white"
      data-aos="fade-up"
    >
      <div className="h-96 lg:h-auto">
        <img
          src={pastor.image}
          alt={pastor.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8 lg:p-12 flex flex-col justify-center">

        {/* Pastor Name */}
        <h3
          className="text-4xl font-bold text-primary-dark mb-6"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          {pastor.name}
        </h3>

        {/* Description */}
        <p className="text-ink/70 leading-8 text-justify mb-6">
          {pastor.description}
        </p>

        {/* Vision */}
        <div className="mt-2 pl-5 border-l-4 border-gold">
          <h4 className="font-semibold text-primary-dark mb-2">
            Vision
          </h4>

          <p className="text-ink/70 italic leading-7">
            "{pastor.vision}"
          </p>
        </div>
      </div>
    </div>
  );
}