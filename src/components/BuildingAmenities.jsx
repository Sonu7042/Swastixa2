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
    {/* Top banner */}
    <div className="max-w-7xl mx-auto rounded-md overflow-hidden bg-[#f6fbfc] relative mt-10">
      <div className="relative h-52 sm:h-64 md:h-72 w-full flex items-center bg-gray-800">
        <img src={img3} alt="Banner" className="absolute h-full w-full object-cover opacity-70" />
        <div className="relative z-10 px-4 sm:px-8 py-4 sm:py-8">
          <span className="text-white text-xs font-semibold block mb-2 opacity-90">Client'S Testimonial</span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight">
            See What,s Our Client <br className="block sm:hidden" />
            Says About Us
          </h2>
        </div>
        <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 flex gap-3 z-20">
          <button className="bg-[#284181] w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center text-white text-lg sm:text-xl shadow">←</button>
          <button className="bg-white w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center text-[#212121] text-lg sm:text-xl shadow border border-gray-300">→</button>
        </div>
      </div>

      {/* Cards stacked vertically with overlap */}
      <div className="relative flex flex-wrap justify-center items-start gap-x-6 gap-y-8 px-4 sm:px-6 lg:px-0 mt-[-4rem] sm:mt-[-6rem] z-50">
  {testimonials.map((item, i) => (
    <div
      key={i} 
      className="bg-white rounded-lg shadow-md px-5 py-6 w-full max-w-sm flex flex-col gap-2 items-start"
    >
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
