import React from "react";
import img1 from "../assets/Home_pics/img1.jpg";
import img2 from "../assets/Home_pics/img2.jpg";
import img3 from "../assets/Home_pics/img3.jpg";

const services = [
  {
    title: "Buy a home",
    description:
      "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    link: "Find A Home →",
    icon: (
      // Replace below SVGs with your actual icons/images
      <svg
        className="w-16 h-16 mx-auto text-[#ff5a3c]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="21" stroke="#ff5a3c" strokeWidth="8" />
        <path
          d="M12 24l12-12 12 12"
          stroke="#ff5a3c"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="18"
          y="24"
          width="12"
          height="12"
          stroke="#ff5a3c"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    highlight: true,
  },
  {
    title: "Rent a home",
    description:
      "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    link: "Find A Home →",
    icon: (
      <svg
        className="w-16 h-16 mx-auto text-[#ff5a3c]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="21" stroke="#ff5a3c" strokeWidth="8" />
        <path
          d="M18 28h12M18 24h10"
          stroke="#ff5a3c"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="18"
          y="24"
          width="12"
          height="12"
          stroke="#ff5a3c"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Sell a home",
    description:
      "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    link: "Find A Home →",
    icon: (
      <svg
        className="w-16 h-16 mx-auto text-[#ff5a3c]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="21" stroke="#ff5a3c" strokeWidth="8" />
        <path d="M16 32l8-8 8 8" stroke="#ff5a3c" strokeWidth="2" fill="none" />
        <rect
          x="18"
          y="24"
          width="12"
          height="12"
          stroke="#ff5a3c"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    highlight: false,
  },
];


const Services = () => {
  const plans = [
    "The Studio",
    "Deluxe Portion",
    "Penthouse",
    "Top Garden",
    "Double Height",
  ];


 


  return (
    <>
      <section className="py-10 px-4 sm:px-8 bg-white">
        <p className="text-[#ff5a3c] font-semibold mb-0 text-3xl text-center">
          Our Services
        </p>
        <div className="text-center mb-6 mt-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-6">
            Our Main Focus
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className={`bg-white rounded-lg shadow-lg p-8 text-center flex flex-col justify-between transition
            ${
              svc.highlight
                ? "border-b-4 border-[#ff5a3c]"
                : "border-b-4 border-transparent"
            }`}
            >
              <div>
                <div className="mb-5">{svc.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-[#212121]">
                  {svc.title}
                </h3>
                <p className="text-gray-500 mb-8">{svc.description}</p>
              </div>
              <a
                href="#"
                className={`font-semibold text-[#ff5a3c] hover:underline transition duration-150`}
              >
                {svc.link}
              </a>
            </div>
          ))}
        </div>
      </section>


      <section className="py-12 bg-white h-[100vh] ">
        {/* Background Section */}
        <div className="relative w-full mx-auto">
          {/* Main Background Image + Text Overlay */}
          <div className="flex items-center h-[423px] justify-center bg-gray-800 rounded-lg overflow-hidden min-h-[260px] relative">
            <img
              src={img1} // Replace with your actual background image path
              alt="Project background"
              className="absolute w-full h-full object-cover opacity-70"
            />
            <div className="relative z-10 flex flex-col md:flex-row  w-full px-7 py-8 ">
              <div className="flex-1 text-white md:pl-12">
                <span className="text-xs font-semibold uppercase mb-2 block">
                  Upcoming Projects
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  Dream Living Space
                </h2>
                <h3 className="text-xl md:text-2xl font-bold mb-0">
                  Setting New Standards
                </h3>
              </div>
              {/* Arrows on Right */}
              <div className="flex items-center space-x-2 md:pr-10 mt-6 md:mt-0 ml-auto">
                <button className="w-8 h-8 flex items-center justify-center bg-[#ff5a3c] rounded">
                  <span className="text-white text-lg">&#8592;</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-[#fff] border border-gray-300 rounded">
                  <span className="text-gray-700 text-lg">&#8594;</span>
                </button>
              </div>
            </div>
          </div>
          {/* Floating Card */}
          <div className="md:absolute md:top-2/3 left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[800px] mx-auto bg-white rounded-lg shadow-xl overflow-hidden md:flex mt-8 md:mt-0">
            <div className="md:w-2/5">
              <img
                src={img2} // Replace with your actual room image path
                alt="Project Room"
                className="w-full h-full object-cover min-h-[200px]"
              />
            </div>
            <div className="md:w-3/5 px-7 py-6 bg-[#f8fbfb] flex flex-col justify-center">
              <span className="font-semibold text-[#ff5a3c] text-sm mb-2">
                About Projects
              </span>
              <h3 className="text-2xl font-bold mb-6">Upcoming Projects</h3>
              <ul className="text-gray-700 text-sm mb-5 space-y-1">
                <li>
                  1. Project Name:{" "}
                  <span className="font-semibold">Quarter</span>
                </li>
                <li>
                  2. Project Type:{" "}
                  <span className="font-semibold">Apartment / Home</span>
                </li>
                <li>
                  3. Building Location:{" "}
                  <span className="font-semibold">New York, USA</span>
                </li>
                <li>
                  4. No. Of Apartments:{" "}
                  <span className="font-semibold">568</span>
                </li>
                <li>
                  5. Total Investment:{" "}
                  <span className="font-semibold">$14,500,00</span>
                </li>
              </ul>
              <button className="bg-[#ff5a3c] text-white font-semibold px-5 py-2 rounded hover:bg-[#ef4325] transition">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-1 bg-white">
        <p className="text-[#ff5a3c] font-semibold mb-0 text-2xl text-center">
          Apartment Sketch
        </p>

        <div className="text-center mb-6 sm:mb-10 px-4 mt-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#212121]">
            Apartments Plan
          </h2>
        </div>
        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-7 mb-8 sm:mb-10 text-sm sm:text-base font-medium">
          {plans.map((plan) => (
            <button
              key={plan}
              className={`pb-1 ${
                plan === "Double Height"
                  ? "text-[#ff5a3c] border-b-2 border-[#ff5a3c]"
                  : "text-[#212121] hover:text-[#ff5a3c]"
              } transition`}
            >
              {plan}
            </button>
          ))}
        </div>
        {/* Main Content */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-center justify-center px-4 sm:px-0">
          {/* Info Section */}
          <div className="bg-[#f6fbfc] rounded-lg p-6 sm:p-8 w-full lg:w-1/2 shadow-sm mb-6 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Double Height
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-5 leading-relaxed">
              Enimad minim veniam quis nostrud exercitation ullamco laboris.
              Lorem ipsum dolor sit amet cons. Aetetur adipisicing elit, sed do
              eiusmod tempor. Incididunt labore et dolore magna aliqua, sed avid
              minim veniam.
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              {[
                ["Total Area", "2800 Sq. Ft"],
                ["Bedroom", "150 Sq. Ft"],
                ["Bathroom", "45 Sq. Ft"],
                ["Balcony/Pets", "Allowed"],
                ["Lounge", "650 Sq. Ft"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-dashed border-gray-300 pb-1"
                >
                  <span>{label}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Blueprint Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={img1} // Replace with your actual plan image/SVG path
              alt="Apartment Sketch"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </section>

   
    </>
  );
};

export default Services;
