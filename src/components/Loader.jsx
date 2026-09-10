import { useState, useEffect } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/30 backdrop-blur-md overflow-hidden">

      {/* Soft Glass Glow */}

      <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full bg-white/50 blur-3xl" />

      {/* Loader Content */}

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Logo */}

        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-gold bg-white/80 backdrop-blur-md shadow-[0_8px_35px_rgba(0,0,0,0.12)] animate-pulse overflow-hidden">
  <img
    src="/logo.png"
    alt="VICTORY A.G. CHURCH Logo"
    className="w-full h-full object-contain scale-110"
  />
</div>


        {/* Decorative Line */}

        <div className="flex items-center gap-4 mt-8">

          <span className="w-14 sm:w-20 h-[2px] bg-gold/70" />

          <span className="w-3 h-3 rounded-full bg-gold" />

          <span className="w-14 sm:w-20 h-[2px] bg-gold/70" />

        </div>


        {/* Praise The Lord */}

        <p className="mt-7 text-gold-deep text-xl sm:text-2xl font-semibold tracking-[0.35em] uppercase">
  Praise the Lord
</p>


        {/* Welcome */}

        <h1 className="mt-4 text-primary-dark font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Welcome to
        </h1>


        {/* Church Name */}

        <p className="mt-2 text-primary-dark text-base sm:text-xl lg:text-2xl font-semibold tracking-[0.2em]">
          VICTORY A.G. CHURCH
        </p>


        {/* Location */}

        <p className="mt-2 text-ink/60 text-sm sm:text-base tracking-[0.15em] uppercase">
          Cuddalore N.T
        </p>


        {/* Loading Dots */}

        <div className="flex items-center gap-2 mt-8">

          <span className="w-2.5 h-2.5 rounded-full bg-gold animate-bounce" />

          <span className="w-2.5 h-2.5 rounded-full bg-gold animate-bounce [animation-delay:150ms]" />

          <span className="w-2.5 h-2.5 rounded-full bg-gold animate-bounce [animation-delay:300ms]" />

        </div>

      </div>

    </div>
  );
}