import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
  to: "/ministries",
  label: "Ministries"
},
  { to: "/locations", label: "Locations" },
  { to: "/watch", label: "Watch" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Mobile menu reference
  const menuRef = useRef(null);

  // Menu button reference
  const buttonRef = useRef(null);

  // Close menu when clicking/touching outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!open) return;

      const clickedInsideMenu =
        menuRef.current?.contains(event.target);

      const clickedMenuButton =
        buttonRef.current?.contains(event.target);

      if (!clickedInsideMenu && !clickedMenuButton) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "touchstart",
        handleOutsideClick
      );
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg py-2.5 border-b border-gray-100">

      {/* ================= NAVBAR ================= */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">

        {/* LOGO */}

        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold shadow-gold shrink-0 bg-white">

            <img
              src="/logo.png"
              alt="VICTORY A.G. CHURCH Logo"
              className="w-full h-full object-contain scale-125"
            />

          </div>

          <div className="leading-tight">

            <p className="font-display font-semibold text-sm tracking-wide text-primary">
              VICTORY A.G. CHURCH
            </p>

            <p className="text-[10px] tracking-[0.2em] text-gold-deep">
              CUDDALORE N.T
            </p>

          </div>
        </NavLink>


        {/* ================= DESKTOP MENU ================= */}

        <nav className="hidden lg:flex items-center gap-8">

          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? "text-primary"
                    : "text-ink hover:text-primary"
                } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gold after:transition-all ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

        </nav>


        {/* ================= MOBILE BUTTON ================= */}

        <button
          ref={buttonRef}
          className="lg:hidden text-2xl text-primary"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      {open && (
        <div
          ref={menuRef}
          className="lg:hidden bg-white shadow-soft mt-3 mx-4 rounded-2xl overflow-hidden"
        >

          <nav className="flex flex-col p-3">

            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "text-ink hover:bg-surface"
                  }`
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