import React from "react";

const rows = [
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
  { residence: "TOWER NAME", bedrooms: "3", bathroom: "3", sqft: "1,200", price: "$3,500", details: "+ Available" },
];

const AvailabilityTable = () => (
  <section className="py-8 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <span className="text-[#ff5a3c] text-sm block mb-2 font-medium">Available Spaces</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-8 leading-tight">
        Select Availability
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[#888c94] text-sm font-medium">
              <th className="text-left pb-3 px-4 font-normal">Residence</th>
              <th className="text-left pb-3 px-4 font-normal">Bedrooms</th>
              <th className="text-left pb-3 px-4 font-normal">Bathroom</th>
              <th className="text-left pb-3 px-4 font-normal">SQ.FT</th>
              <th className="text-left pb-3 px-4 font-normal">Rent Price</th>
              <th className="text-left pb-3 px-4 font-normal">Details</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 1 ? "bg-[#f6fbfc]" : "bg-white"} text-[#212121] text-base`}
              >
                <td className="px-4 py-3">{row.residence}</td>
                <td className="px-4 py-3">{row.bedrooms}</td>
                <td className="px-4 py-3">{row.bathroom}</td>
                <td className="px-4 py-3">{row.sqft}</td>
                <td className="px-4 py-3">{row.price}</td>
                <td className="px-4 py-3 text-[#ff5a3c] font-medium">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default AvailabilityTable;
