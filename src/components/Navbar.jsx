import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/locations", label: "Locations" },
  { to: "/watch", label: "Watch" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
  <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold shadow-gold shrink-0 bg-white">
  <img
  src="/logo.png"
  alt="VICTORY A.G. CHURCH Logo"
  className="w-full h-full object-contain scale-125"
/>
</div>
          <div className="leading-tight">
            <p className="font-display font-semibold text-sm tracking-wide text-primary">VICTORY A.G. CHURCH</p>
            <p className="text-[10px] tracking-[0.2em] text-gold-deep">CUDDALORE N.T</p>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  isActive ? "text-primary" : "text-ink hover:text-primary"
                } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gold after:transition-all ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="lg:hidden text-2xl text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white shadow-soft mt-3 mx-4 rounded-2xl overflow-hidden">
          <nav className="flex flex-col p-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium ${isActive ? "bg-primary/5 text-primary" : "text-ink hover:bg-surface"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
