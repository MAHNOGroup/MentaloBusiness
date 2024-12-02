import React, { useState } from 'react';
import NavbarLink from './NavbarLink';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422A3 3 0 1118 12l-6 3.316L6 12l-.84-.422A3 3 0 117.84 6.578L12 9.5l4.16-2.922A3 3 0 0118 6l6 3.316L12 14z"
            />
          </svg>
          <span className="text-2xl font-bold text-green-600">HealthCare</span>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <NavbarLink label="Home" href="/" />
          <NavbarLink label="Services" href="/services" />
          <NavbarLink label="Doctors" href="/doctors" />
          <NavbarLink label="About" href="/about" />
          <NavbarLink label="Contact" href="/contact" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden text-green-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavbarLink label="Home" href="/" />
            <NavbarLink label="Services" href="/services" />
            <NavbarLink label="Doctors" href="/doctors" />
            <NavbarLink label="About" href="/about" />
            <NavbarLink label="Contact" href="/contact" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
