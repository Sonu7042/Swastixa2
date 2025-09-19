import React from "react";
import img3 from '../assets/Home_pics/img3.jpg'

// Dummy testimonial data
const testimonials = [
  {
    name: "Jacob William",
    role: "SELLING AGENTS",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
  },
  {
    name: "Jacob William",
    role: "SELLING AGENTS",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
  },
];

const amenities = [
  { id: "01", name: "Parking Space", desc: "Enimad minim veniam quis no exercitation ullamco lab", icon: "🚗" },
  { id: "02", name: "Swimming Pool", desc: "Enimad minim veniam quis no exercitation ullamco lab", icon: "🏊" },
  { id: "03", name: "Private Security", desc: "Enimad minim veniam quis no exercitation ullamco lab", icon: "🛡️" },
  { id: "04", name: "Medical Center", desc: "Enimad minim veniam quis no exercitation ullamco lab", icon: "🩺" },
  { id: "05", name: "Library Area", desc: "Enimad minim veniam quis no exercitation ullamco lab", icon: "📚" },
  { id: "06", name: "King Size Beds", desc: "Enimad minim veniam quis no exercitation ullamco lab", icon: "🛏️" },
  { id: "07", name: "Smart Homes", desc: "Enimad minim veniam quis no exercitation ullamco lab", icon: "🏠" },
  { id: "08", name: "Kid’s Playland", desc: "Enimad minim veniam quis no exercitation ullamco lab", icon: "🎠" },
];

// Star rating component
const StarRating = ({ count }) => (
  <div className="flex gap-1 ml-2">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-yellow-400 text-lg">★</span>
    ))}
  </div>
);

const BuildingAmenities = () => (
  <section className="py-12 bg-white relative">
    {/* Building Amenities grid below testimonial */}
    <div className="mt-32">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-[#ff5a3c] text-sm font-semibold block mb-2">Our Amenities</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-8">Building Aminities</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {amenities.map((item) => (
            <div key={item.id} className="bg-white shadow rounded-lg p-7 flex flex-col items-start text-left transition hover:shadow-lg">
              <div className="bg-[#ffe7e3] text-[#ff5a3c] mb-6 rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                {item.icon}
              </div>
              <div className="text-[#ff5a3c] text-sm font-semibold mb-1">{item.id}</div>
              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              <p className="text-[#888c94] text-sm font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Top banner */}
    <div className="max-w-7xl mx-auto rounded-md overflow-hidden bg-[#f6fbfc] relative mt-10">
      <div className="relative h-52 sm:h-64 md:h-72 w-full flex items-center bg-gray-800">
        {/* Background image - replace with your image source */}
        <img src={img3} alt="Banner" className="absolute h-full w-full object-cover opacity-70" />
        <div className="relative z-10 px-4 sm:px-8 py-4 sm:py-8">
          <span className="text-white text-xs font-semibold block mb-2 opacity-90">Client'S Testimonial</span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight">
            See What,s Our Client <br className="block sm:hidden" /> {/* Break on small */}
            Says About Us
          </h2>
        </div>
        {/* Arrows */}
        <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 flex gap-3 z-20">
          <button className="bg-[#ff534a] w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center text-white text-lg sm:text-xl shadow">
            &#8592;
          </button>
          <button className="bg-white w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center text-[#212121] text-lg sm:text-xl shadow border border-gray-300">
            &#8594;
          </button>
        </div>
      </div>
      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center absolute w-full left-0 top-[60%] sm:top-[70%] md:top-[75%] px-4 sm:px-6 lg:px-0">
        {testimonials.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md px-5 py-6 w-full max-w-sm flex flex-col gap-2 items-start">
            <div className="flex items-center gap-3 mb-3">
              <img src={item.avatar} alt={item.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white" />
              <div>
                <div className="font-bold text-[#212121] text-sm sm:text-base">{item.name}</div>
                <div className="text-xs sm:text-sm text-[#888c94] font-medium">{item.role}</div>
              </div>
              <StarRating count={item.stars} />
            </div>
            <div className="text-[#888c94] text-xs sm:text-sm">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BuildingAmenities;
