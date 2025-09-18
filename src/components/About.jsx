import React from "react";
import aboutImg from "../assets/Home_pics/img1.jpg";
import img2 from "../assets/Home_pics/img2.jpg";

function About() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5f9fd] to-white py-16 mt-5 " >
      <p className="text-[#ff6240] font-semibold mb-0 text-3xl text-center">About Us</p>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 mt-6">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img 
            src={img2} 
            className="absolute top-10 left-0 w-72 h-[22rem] bg-[#eaeef4] z-0 rounded-lg hidden sm:block" 
            alt="Background"
          />
          <img
            src={aboutImg}
            alt="Room"
            className="relative w-96 h-[28rem] object-cover rounded-lg shadow-lg z-10"
          />
        </div>
        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-bold text-3xl sm:text-4xl text-[#23313b] leading-snug mb-2">
            {/* Dream Living Spaces<br /> Setting New Build */}
            Building Dreams, One <br /> Home at a Time

          </h2>
          <div className="text-gray-500 text-base mb-8">
            At Oxford Realtors, we create modern, elegant homes with uncompromising quality. Our team of expert architects and engineers delivers projects that blend innovative design, sustainable practices, and on-time execution.
            From luxury apartments to custom villas, we turn your vision into reality with transparent processes and a customer-first approach.
          </div>
          {/* Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-6 border border-gray-200 rounded-md p-6 bg-white">
              <span className="text-[#ff6240]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3.001a1 1 0 01-1-1V13a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"/>
                </svg>
              </span>
              <div>
                <h4 className="text-lg font-bold text-[#23313b] mb-2">Innovative Design & Architecture</h4>
                <p className="text-gray-500 text-sm">Global trends blended with local excellence.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-6 border border-gray-200 rounded-md p-6 bg-white">
              <span className="text-[#ff6240]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 110 7.75M8 3.13a4 4 0 110 7.75"/>
                </svg>
              </span>
              <div>
                <h4 className="text-lg font-bold text-[#23313b] mb-2">Quality Construction</h4>
                <p className="text-gray-500 text-sm">Superior materials and meticulous execution.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-6 border border-gray-200 rounded-md p-6 bg-white">
              <span className="text-[#ff6240]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7V6a1 1 0 011-1h16a1 1 0 011 1v1M3 7v13a1 1 0 001 1h16a1 1 0 001-1V7M3 7h18"/>
                </svg>
              </span>
              <div>
                <h4 className="text-lg font-bold text-[#23313b] mb-2">Customer-Centric Approach</h4>
                <p className="text-gray-500 text-sm"> Transparent processes and timely delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
