import React from "react";
import aboutImg from "../assets/Home_pics/img1.jpg";
import img2 from "../assets/Home_pics/img2.jpg";
import img3 from "../assets/Home_pics/img3.jpg";
import AvailabilityTable from "./AvailabilityTable";
import UpcomingProject from "./UpcomingProject";

function About() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5f9fd] to-white py-16 mt-5 " >
      <p className="text-[#fd5a3e] font-semibold mb-0 text-3xl text-center">About Us</p>
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
              <span className="text-[#fd5a3e]">
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
              <span className="text-[#fd5a3e]">
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
              <span className="text-[#fd5a3e]">
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


    <AvailabilityTable/>  
    <UpcomingProject/>

   <div className="flex flex-col md:flex-row min-h-screen bg-[#f6fbfc] mt-10">
  {/* Left Column */}
  <div className="flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-24">
    <span className="text-[#fd5a3e] font-semibold mb-3">Building Facilities</span>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-snug">
      Making living spaces <br /> More Beautiful
    </h1>
    <p className="mb-7 text-[#5a6973] text-base max-w-xl">
      Over 39,000 people work for us in more than 70 countries all over the world. 
      This breadth of global coverage, combined with specialist services.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <ul className="space-y-3">
        {/* <span className="bg-[#F5DFDC] rounded-2xl text-[#ff5a3c]" >✔</span>  */}
        <li>✔ Living rooms are pre-wired for Surround</li>
        <li>✔ Nestled in the Buckhead Vinings communities</li>
        <li>✔ A rare combination of inspired architecture</li>
      </ul>
      <ul className="space-y-3">
        <li>✔ Luxurious interior design and amenities</li>
        <li>✔ Private balconies with stunning views</li>
        <li>✔ Outdoor grilling with dining court</li>
      </ul>
    </div>
  </div>
  {/* Right Column */}
  <div className="flex-1 relative min-h-[250px] h-64 md:h-auto">
    <img
      src={img3}
      alt="Living room"
      className="w-full h-full object-cover md:min-h-screen min-h-[250px]"
    />
    <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#fd5a3e] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
      <span className="inline-block w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[22px] md:border-l-[24px] border-l-white ml-2"></span>
    </div>
  </div>
</div>



    </section>
  );
}

export default About;
