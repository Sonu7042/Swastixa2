import React from "react";
import img1 from '../assets/Home_pics/img1.jpg'
import img2 from '../assets/Home_pics/img2.jpg'
import img3 from '../assets/Home_pics/img3.jpg'

const newsFeeds = [
  {
    img: img1, // Replace with your images
    category: "Room",
    title: "10 Brilliant Ways To Decorate Your Home",
    date: "June 24, 2024",
  },
  {
    img: img2, // Replace with your images
    category: "Interior",
    title: "The Most Inspiring Interior Design Of 2024",
    date: "June 21, 2024",
  },
  {
    img: img3, // Replace with your images
    category: "Estate",
    title: "Recent Commercial Real Estate Transactions",
    date: "June 22, 2024",
  },
];

const NewsFeed = () => (
  <section className="bg-[#f6fbfc] py-12  md:mt-20">
    <div className="max-w-7xl mx-auto px-4">
      <span className="text-[#284181] text-sm font-medium block mb-2">News & Blogs</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-8">Leatest News Feeds</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsFeeds.map((feed, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg overflow-hidden flex flex-col transition hover:shadow-lg">
            <img src={feed.img} alt={feed.title} className="w-full h-44 sm:h-48 object-cover" />
            <div className="px-6 py-5 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2 text-[#284181] text-xs font-medium">
                <span>by: Admin</span>
                <span className="mx-2">•</span>
                <span>{feed.category}</span>
              </div>
              <div className="font-bold text-lg mb-4 text-[#212121]">{feed.title}</div>
              <div className="flex items-center justify-between text-sm text-[#284181] mt-auto">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  <span className="text-[#888c94]">{feed.date}</span>
                </div>
                <a href="#" className="font-semibold hover:underline">READ MORE</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsFeed;
