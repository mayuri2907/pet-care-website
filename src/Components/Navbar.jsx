import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, PawPrint, CalendarDays } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Gallery", path: "/gallery" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadbc8] bg-[#fffaf3]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6f4e37] text-white shadow-md transition duration-300 group-hover:rotate-6 group-hover:scale-105">
            <PawPrint size={25} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#4b3024]">
              PawCare
            </h1>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a765d]">
              Pet Wellness
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#6f4e37] text-white shadow-md"
                    : "text-[#6b5142] hover:bg-[#f1e3d2] hover:text-[#4b3024]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Appointment Button */}
        <Link
          to="/appointment"
          className="hidden items-center gap-2 rounded-full bg-[#c9825b] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#b96f49] hover:shadow-lg lg:flex"
        >
          <CalendarDays size={18} />
          Book Appointment
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl bg-[#f1e3d2] p-2.5 text-[#5b3d2e] transition hover:bg-[#e5d2bd] lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#eadbc8] bg-[#fffaf3] px-5 pb-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#6f4e37] text-white"
                      : "text-[#6b5142] hover:bg-[#f1e3d2]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/appointment"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#c9825b] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#b96f49]"
            >
              <CalendarDays size={18} />
              Book Appointment
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;