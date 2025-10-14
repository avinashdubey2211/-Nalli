
import React from "react";

const products = [
  { name: "Under ₹5k", img: "https://www.nalli.com/cdn/shop/files/2_5---4-k.webp?v=1752473660" },
  { name: "₹5k - ₹10k", img: "https://www.nalli.com/cdn/shop/files/4---6k.webp?v=1752473660" },
  { name: "₹10k - ₹20k", img: "https://www.nalli.com/cdn/shop/files/6---10k.webp?v=1752473660" },
  { name: "₹10k - ₹20k ", img: "https://www.nalli.com/cdn/shop/files/10--20-k_3.webp?v=1752473660" },
  { name: "₹10k - ₹20k ", img: "https://www.nalli.com/cdn/shop/files/20--30-k.webp?v=1752473660" },
  { name: "₹50k - 1L", img: "https://www.nalli.com/cdn/shop/files/above-50-k_1.webp?v=1752473660" },
  
];

const  Price = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="mb-8 text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
Shop by Price        </h2>
        <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
Sarees for every occasion — from everyday elegance to heirloom treasures


        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <div key={index} className="text-left">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-800">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default  Price;
