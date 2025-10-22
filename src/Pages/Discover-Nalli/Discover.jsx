
import React, { useState } from "react";

const Discover = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      name: "Our History",
      img: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Our-History-_About-us.png",
    },
    {
      name: "Nalli Promise",
      img: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Nalli-Promise.png",
    },
    {
      name: "LookBook",
      img: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Lookbook-Picture.jpg",
    },
    {
      name: "Press",
      img: "https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Press-_PR.jpg",
    },
  ];

  return (
    <div className="bg-white py-8 md:py-12 px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">
        Discover Nalli
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-8 md:mb-10 text-center md:text-left">
        First & The Finest Since 1928
      </p>

      {/* Interactive Image Row */}
      <div className="flex flex-wrap md:flex-nowrap gap-2 h-[250px] sm:h-[300px] md:h-[400px]">
        {items.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onTouchStart={() => setActiveIndex(index)}
            onTouchEnd={() => setActiveIndex(null)}
            className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-in-out cursor-pointer
              ${activeIndex === index ? "flex-[2] scale-105" : activeIndex === null ? "flex-1" : "flex-[0.6] opacity-70"}
              `}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 py-2 sm:py-3">
              <p className="text-white text-center font-semibold text-xs sm:text-sm md:text-base">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
