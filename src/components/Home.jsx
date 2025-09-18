import React from "react";
import img1 from '../assets/Home_pics/img1.jpg';
import img2 from "../assets/Home_pics/img2.jpg";
import img3 from "../assets/Home_pics/img3.jpg";

function Home() {
  return (
    <section className="w-full min-h-[600px] flex flex-col md:flex-row bg-[#f5fafa]">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center py-10 px-6 md:px-20">
        <div className="flex items-center mb-8">
          <span className="text-2xl text-[#ff6240] mr-2">🏠</span>
          <span className="text-base font-semibold text-gray-700">Real Estate Agency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23313b] mb-6 leading-tight sm:leading-snug">
          Find Your Dream <br /> House By Us
        </h1>
        <p className="border-l-2 border-gray-200 pl-4 text-gray-500 text-base sm:text-lg mb-10 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />
          sed do eiusmod tempor incididunt ut labore.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-md">
          <button className="bg-[#ff6240] hover:bg-[#e55a2b] text-white font-semibold py-4 px-10 rounded-md shadow-md transition w-full sm:w-auto">
            OUR SERVICES
          </button>
          <button className="bg-white text-[#23313b] font-semibold py-4 px-10 rounded-md shadow-md border transition hover:bg-gray-50 w-full sm:w-auto">
            LEARN MORE
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 relative overflow-hidden h-[300px] sm:h-[420px] md:h-auto">
        <img
          src={img1}
          alt="Living Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex gap-3 sm:gap-4">
          <img
            src={img1}
            alt="thumb1"
            className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded shadow"
          />
          <img
            src={img2}
            alt="thumb2"
            className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded shadow"
          />
          <img
            src={img3}
            alt="thumb3"
            className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
