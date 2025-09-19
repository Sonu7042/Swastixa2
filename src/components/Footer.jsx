import React from "react";

const Footer = () => (
  <footer className="bg-[#171922] text-white py-12 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      {/* Logo and Contact */}
      <div className="lg:col-span-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#ea857d] text-2xl">🏠</span>
          <span className="font-bold text-xl">Quarter</span>
        </div>
        <p className="text-sm text-[#cccccc] mb-3">
          Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
        </p>
        <ul className="text-sm mt-4 space-y-2">
          <li className="flex items-center gap-2">
            <span>📍</span>
            Brooklyn, New York, United States
          </li>
          <li className="flex items-center gap-2">
            <span>📞</span>
            +0123-456789
          </li>
          <li className="flex items-center gap-2">
            <span>✉️</span>
            example@example.com
          </li>
        </ul>
      </div>
      
      {/* Company */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Company</h4>
        <ul className="space-y-2 text-sm">
          <li>About</li>
          <li>Blog</li>
          <li>All Products</li>
          <li>Locations Map</li>
          <li>FAQ</li>
        </ul>
      </div>
      
      {/* Services */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Services</h4>
        <ul className="space-y-2 text-sm">
          <li>Order tracking</li>
          <li>Wish List</li>
          <li>Login</li>
          <li>My account</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      
      {/* Customer Care */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Customer Care</h4>
        <ul className="space-y-2 text-sm">
          <li>Login</li>
          <li>My account</li>
          <li>Wish List</li>
          <li>Order tracking</li>
          <li>FAQ</li>
        </ul>
      </div>
      
      {/* Newsletter */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Newsletter</h4>
        <p className="text-sm text-[#cccccc] mb-4">
          Subscribe to our weekly Newsletter and receive updates via email.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Email*"
            className="rounded-l px-3 py-2 outline-none text-[#282828] w-full"
          />
          <button
            type="submit"
            className="bg-[#284181] px-4 py-2 rounded-r text-white text-lg font-bold flex items-center"
          >
            <span>➤</span>
          </button>
        </form>
      </div>
    </div>
    {/* Optional: We Accept section can be added below if needed */}
  </footer>
);

export default Footer;
