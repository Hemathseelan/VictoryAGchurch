import { useState, useEffect } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 900);
    return () => clearTimeout(t);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-primary-dark flex flex-col items-center justify-center transition-opacity">
      <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center animate-pulse">
        <span className="text-gold font-display font-bold text-2xl">V</span>
      </div>
      <p className="text-white/60 text-xs tracking-[0.3em] mt-5 uppercase">VICTORY A.G. CHURCH</p>
    </div>
  );
}
