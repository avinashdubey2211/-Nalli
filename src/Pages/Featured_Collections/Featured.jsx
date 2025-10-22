


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  { name: "Social Media Collection", img: "https://www.nalli.com/cdn/shop/files/26x268px_6_1.webp?v=1757178649", path: "/sarees_detail_pages" },
  { name: "Wedding Sarees", img: "https://www.nalli.com/cdn/shop/files/wedding_collection_1_1.webp?v=1757178798", path: "/sarees_detail_pages" },
  { name: "Regional Sarees", img: "https://www.nalli.com/cdn/shop/files/Regional_1.webp?v=1757178841", path: "/sarees_detail_pages" },
  { name: "Festive Collection", img: "https://www.nalli.com/cdn/shop/files/festive_Collection_1.webp?v=1757178912", path: "/sarees_detail_pages" },
  { name: "Party Wear Sarees", img: "https://www.nalli.com/cdn/shop/files/party_wear_collection_1.webp?v=1757178967", path: "/sarees_detail_pages" },
  { name: "Gifting Moments", img: "https://www.nalli.com/cdn/shop/files/Gifting_Collection_1.webp?v=1757179030", path: "/sarees_detail_pages" },
];

const animations = [
  "fade-up",
  "fade-down",
  "fade-left",
  "fade-right",
  "flip-left",
  "flip-right",
  "zoom-in",
  "zoom-in-up",
  "zoom-in-down",
];

const Featured = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="mb-8 text-left" data-aos="fade-up">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Featured Collections
        </h2>
        <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
          Curated for every moment
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {products.map((product, index) => {
          const animationType = animations[index % animations.length]; // cycle animations
          return (
            <div
              key={index}
              className="text-left"
              data-aos={animationType}
            >
              <img
                src={product.img}
                alt={product.name}
                onClick={() => product.path && navigate(product.path)}
                className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
              <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-800">
                {product.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
