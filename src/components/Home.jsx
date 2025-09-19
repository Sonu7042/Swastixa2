import React, { useEffect, useState } from "react";
import img1 from '../assets/Home_pics/img1.jpg';
import img2 from "../assets/Home_pics/img2.jpg";
import img3 from "../assets/Home_pics/img3.jpg";

function Home() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);
  const delay = 2000; // 2 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, delay);
    return () => clearInterval(timer); // cleanup timer on unmount
  }, []);

  return (
    <>
      <section className="relative w-full min-h-[600px] flex flex-col md:flex-row bg-[#f5fafa] z-0">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center py-10 px-6 md:px-20">
          {/* <div className="flex items-center mb-8">
            <span className="text-2xl text-[#284181] mr-2">🏠</span>
            <span className="text-base font-semibold text-gray-700">Real Estate Agency</span>
          </div> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23313b] mb-6 leading-tight sm:leading-snug">
            Luxury Homes, <br /> Crafted for You
            {/* Find Your Dream <br /> House By Us */}
          </h1>
          <p className="border-l-2 border-gray-200 pl-4 text-gray-500 text-base sm:text-lg mb-10 max-w-md">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />
            sed do eiusmod tempor incididunt ut labore. */}
            Experience top-quality design and construction with unmatched attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-md">
            <button className="bg-[#284181] hover:bg-[#284181] text-white font-semibold py-4 px-10 rounded-md shadow-md transition w-full sm:w-auto">
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
            src={images[current]}
            alt="Living Room"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Form overlapping bottom half */}
        <form
          className="
            absolute bottom-0 left-0 right-0
            md:left-[182px] md:right-auto
            transform translate-y-1/2
            w-[90%] md:w-[70%]
            mx-auto md:mx-0
            flex flex-col md:flex-row items-center justify-center gap-6
            bg-white z-20 p-4 rounded-md shadow-lg
          "
        >
          <div className="w-full md:w-64">
            <select className="w-full h-10 px-6 font-semibold text-[#23313b] bg-white border border-gray-200 rounded-sm shadow-sm appearance-none focus:ring-[#284181] focus:border-[#284181] transition">
              <option>Choose Area</option>
            </select>
          </div>

          <div className="w-full md:w-64">
            <select className="w-full h-10 px-6 font-semibold text-[#23313b] bg-white border border-gray-200 rounded-sm shadow-sm appearance-none focus:ring-[#284181] focus:border-[#284181] transition">
              <option>Property Status</option>
            </select>
          </div>

          <div className="w-full md:w-64">
            <select className="w-full h-10 px-6 font-semibold text-[#23313b] bg-white border border-gray-200 rounded-sm shadow-sm appearance-none focus:ring-[#284181] focus:border-[#284181] transition">
              <option>Property Type</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full md:w-40 h-10 bg-[#284181] text-white font-semibold text-lg rounded-sm shadow-sm hover:bg-[#284181] transition"
          >
            FIND NOW
          </button>
        </form>
      </section>
    </>
  );
}  

export default Home;     
