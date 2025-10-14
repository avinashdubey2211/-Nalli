// import React from 'react'

// const Featured = () => {
//   return (
//     <div>Featured</div>
//   )
// }

// export default Featured




import React from "react";

const products = [
  { name: "Social Media Collection", img: "https://www.nalli.com/cdn/shop/files/26x268px_6_1.webp?v=1757178649" },
  { name: "Wedding Sarees", img: "https://www.nalli.com/cdn/shop/files/wedding_collection_1_1.webp?v=1757178798" },
  { name: "Regional Sarees", img: "https://www.nalli.com/cdn/shop/files/Regional_1.webp?v=1757178841" },
  { name: "Festive Collection ", img: "https://www.nalli.com/cdn/shop/files/festive_Collection_1.webp?v=1757178912" },
  { name: "Party Wear Sarees", img: "https://www.nalli.com/cdn/shop/files/party_wear_collection_1.webp?v=1757178967" },
  { name: "Gifting Moments", img: "https://www.nalli.com/cdn/shop/files/Gifting_Collection_1.webp?v=1757179030" },
  
];

const  Featured = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="mb-8 text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
Featured Collections
        </h2>
        <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
Curated for every moment

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

export default  Featured;
