import React, { useState } from "react";
import logo from '../assets/Swastixa_logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm px-6 py-6 md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <img src={logo} alt="Swastixa Logo" className="w-16 h-16" />
          <span className="font-bold text-[#23313b] text-3xl">Quarter</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-[#23313b] font-medium text-base">
          <a href="#home" className="flex items-center hover:text-gray-700">
            Home<span className="ml-1">+</span>
          </a>
          <a href="#about" className="flex items-center hover:text-gray-700">
            About<span className="ml-1">+</span>
          </a>
          <a href="#property" className="flex items-center hover:text-gray-700">
            Property<span className="ml-1">+</span>
          </a>
          <a href="#news" className="flex items-center hover:text-gray-700">
            News<span className="ml-1">+</span>
          </a>
          <a href="#pages" className="flex items-center hover:text-gray-700">
            Pages<span className="ml-1">+</span>
          </a>
          <a href="#contact" className="hover:text-gray-700">
            Contact
          </a>
        </nav>

        {/* Add Listing Button (hidden on small) */}
        <div className="hidden md:block">
          <button
            className="bg-[#ff6240] text-white py-3 px-8 rounded shadow-md font-semibold hover:bg-[#e55a2b] transition"
            type="button"
          >
            Add Listing
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center text-[#ff6240]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 border-t border-gray-200 pt-4 text-[#23313b] font-medium text-base">
          <a href="#home" className="block hover:text-gray-700" onClick={() => setMenuOpen(false)}>
            Home +
          </a>
          <a href="#about" className="block hover:text-gray-700" onClick={() => setMenuOpen(false)}>
            About +
          </a>
          <a href="#property" className="block hover:text-gray-700" onClick={() => setMenuOpen(false)}>
            Property +
          </a>
          <a href="#news" className="block hover:text-gray-700" onClick={() => setMenuOpen(false)}>
            News +
          </a>
          <a href="#pages" className="block hover:text-gray-700" onClick={() => setMenuOpen(false)}>
            Pages +
          </a>
          <a href="#contact" className="block hover:text-gray-700" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <button
            className="w-full bg-[#ff6240] text-white py-3 rounded shadow-md font-semibold hover:bg-[#e55a2b] transition"
            type="button"
            onClick={() => setMenuOpen(false)}
          >
            Add Listing
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
