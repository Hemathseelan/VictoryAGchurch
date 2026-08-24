import { galleryImages } from "../data/siteData";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" data-aos="fade-up">
          <div>
            <p className="eyebrow mb-3">Moments</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-dark">Gallery Preview</h2>
          </div>
          <a href="/gallery" className="text-primary font-semibold text-sm hover:text-gold-deep transition-colors">
            View Full Gallery →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {preview.map((img, i) => (
            <div
              key={img.id}
              data-aos="zoom-in"
              data-aos-delay={(i % 3) * 100}
              className="relative overflow-hidden rounded-2xl aspect-square group"
            >
           {img.type === "video" ? (
  <video
    src={img.src}
    controls
    preload="metadata"
    className="w-full h-full object-cover"
  />
) : (
  <img
    src={img.src}
    alt={img.category}
    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
  />
)}
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
