import React, { useState } from "react";
import oxford_logo from '../assets/oxford_logo.png';
import oxford_text2 from '../assets/oxford_text2.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    home: false,
    about: false,
    property: false,
    news: false,
  });

  const toggleSubMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMenus({
      home: false,
      about: false,
      property: false,
      news: false,
    });
  };


  const desktopSubMenu = (items = []) => (
    <div className="absolute left-0 z-10 w-48 bg-white shadow-lg rounded-b-sm border-t-4 border-[#fd5a3e] mt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-150">
      <ul className="py-4 space-y-5">
        {items.map(({ href, label }, idx) => (
          <li key={idx}>
            <a href={href} className="block px-6 text-gray-400 hover:text-[#23313b]">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const mobileSubMenu = (menuKey, items = []) => (
    openMenus[menuKey] && (
      <div className="ml-4 mt-1 border-t-4 border-[#fd5a3e] bg-white rounded-b-sm shadow-lg">
        <ul className="py-2 space-y-3">
          {items.map(({ href, label }, idx) => (
            <li key={idx}>
              <a href={href} className="block px-4 text-gray-400 hover:text-[#23313b]" onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );

  return (
    <header className="bg-white shadow-sm px-6 py-2 md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
        <img
            src={oxford_text2}
            alt="Oxford Logo"
            className="w-48 sm:w-60 h-auto transform transition-transform duration-300 hover:scale-110"
        />
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-[#23313b] font-medium text-base">
          <div className="relative group">
            <a href="#home" className="flex items-center hover:text-gray-700 cursor-pointer">
              Home<span className="ml-1">+</span>
            </a>
            {desktopSubMenu([
              { href: "#home1", label: "Home Style 01" },
              { href: "#home2", label: "Home Style 02" },
              { href: "#home3", label: "Home Style 03" },
              { href: "#home4", label: "Home Style 04" },
            ])}
          </div>

          <div className="relative group">
            <a href="#about" className="flex items-center hover:text-gray-700 cursor-pointer">
              About<span className="ml-1">+</span>
            </a>
            {desktopSubMenu([
              { href: "#about1", label: "About Style 01" },
              { href: "#about2", label: "About Style 02" },
            ])}
          </div>

          <div className="relative group">
            <a href="#property" className="flex items-center hover:text-gray-700 cursor-pointer">
              Property<span className="ml-1">+</span>
            </a>
            {desktopSubMenu([
              { href: "#property1", label: "Property Style 01" },
              { href: "#property2", label: "Property Style 02" },
            ])}
          </div>

          <div className="relative group">
            <a href="#news" className="flex items-center hover:text-gray-700 cursor-pointer">
              Services<span className="ml-1">+</span>
            </a>
            {desktopSubMenu([
              { href: "#news1", label: "News Style 01" },
              { href: "#news2", label: "News Style 02" },
            ])}
          </div>

          {/* <div className="relative group">
            <a href="#pages" className="flex items-center hover:text-gray-700 cursor-pointer">
              Pages<span className="ml-1">+</span>
            </a>
            {desktopSubMenu([
              { href: "#pages1", label: "Page Style 01" },
              { href: "#pages2", label: "Page Style 02" },
            ])}
          </div> */}

          {/* <a href="#contact" className="hover:text-gray-700">Contact</a> */}
        </nav>

        {/* Add Listing Button (hidden on small) */}
        <div className="hidden md:block">
          <button
            className="bg-[#fd5a3e] text-white py-3 px-8 rounded shadow-md font-semibold hover:bg-[#fd5a3e] transition"
            type="button"
          >
            Contact Us
          </button>
        </div>



        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center text-[#fd5a3e]"
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
          {["home", "about", "property", "news", ].map((menu) => (
            <div key={menu}>
              <button
                className="w-full text-left flex items-center justify-between hover:text-gray-700"
                onClick={() => toggleSubMenu(menu)}
              >
                <span className="capitalize">{menu} +</span>    
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${openMenus[menu] ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSubMenu(menu, {
                home: [
                  { href: "#home1", label: "Home Style 01" },
                  { href: "#home2", label: "Home Style 02" },
                  { href: "#home3", label: "Home Style 03" },
                  { href: "#home4", label: "Home Style 04" },
                ],
                about: [
                  { href: "#about1", label: "About Style 01" },
                  { href: "#about2", label: "About Style 02" },
                ],
                property: [
                  { href: "#property1", label: "Property Style 01" },
                  { href: "#property2", label: "Property Style 02" },
                ],
                news: [
                  { href: "#news1", label: "News Style 01" },
                  { href: "#news2", label: "News Style 02" },
                ],
              }[menu])}
            </div>
          ))}
          {/* <a href="#contact" className="block hover:text-gray-700" onClick={closeMenu}>
            Contact
          </a> */}
          <button
            className="w-full bg-[#fd5a3e] text-white py-3 rounded shadow-md font-semibold hover:bg-[#fd5a3e] transition"
            type="button"
            onClick={closeMenu}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
  