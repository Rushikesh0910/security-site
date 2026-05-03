import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-brand-accent text-brand-navy font-bold px-4 py-2 rounded-md shadow-md transition-all"
      : "text-white font-medium px-4 py-2 rounded-md hover:bg-white/10 hover:text-brand-accent transition-all";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "block px-4 py-3 rounded-md text-base font-bold text-brand-navy bg-brand-accent shadow-md transition-all"
      : "block px-4 py-3 rounded-md text-base font-medium text-white hover:bg-white/10 hover:text-brand-accent transition-all";

  return (
    <nav
      data-aos="fade-down"
      className="fixed w-full z-50 bg-brand-navy shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Area - Adjusted translate for perfect vertical alignment */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="JMD Human Capital"
                className="h-20 md:h-28 w-auto object-contain transform -translate-y-3 md:-translate-y-5 transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Center Links */}
          <div className="hidden lg:flex space-x-1 text-lg items-center">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/clients" className={navLinkClass}>
              Clients
            </NavLink>
            <NavLink to="/careers" className={navLinkClass}>
              Careers
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden lg:flex items-center ml-2">
            <Link
              to="/contact"
              className="bg-transparent border-2 border-brand-accent text-brand-accent px-5 py-2 rounded font-bold hover:bg-brand-accent hover:text-brand-navy transition-all transform hover:scale-105 text-sm"
            >
              Request Guards
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-brand-accent focus:outline-none transition-colors"
            >
              {isOpen ? (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-brand-charcoal border-t border-gray-700 shadow-2xl overflow-y-auto max-h-screen">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <NavLink onClick={toggleMenu} to="/" className={mobileNavLinkClass}>
              Home
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/about"
              className={mobileNavLinkClass}
            >
              About Us
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/services"
              className={mobileNavLinkClass}
            >
              Services
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/clients"
              className={mobileNavLinkClass}
            >
              Clients
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/careers"
              className={mobileNavLinkClass}
            >
              Careers
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/contact"
              className={mobileNavLinkClass}
            >
              Contact
            </NavLink>

            <Link
              onClick={toggleMenu}
              to="/contact"
              className="block mt-6 text-center bg-transparent border-2 border-brand-accent text-brand-accent px-6 py-4 rounded font-bold hover:bg-brand-accent hover:text-brand-navy transition-colors shadow-md"
            >
              Request Guards
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
