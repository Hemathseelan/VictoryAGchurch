import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center bg-white px-5">
        <div className="text-center">
          <p className="font-display text-8xl font-semibold text-primary/10">404</p>
          <h1 className="font-display text-3xl font-semibold text-primary-dark -mt-6 mb-4">Page Not Found</h1>
          <p className="text-ink/70 mb-8">The page you're looking for doesn't exist or has moved.</p>
          <Link to="/" className="inline-block px-7 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
