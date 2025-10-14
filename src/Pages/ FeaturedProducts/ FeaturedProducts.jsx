
// import React, { useRef } from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const products = [
//   {
//     name: "Navy Blue Tussar Saree",
//     price: "₹8,959.00",
//      img: "https://www.nalli.com/cdn/shop/files/MV3535954_M.jpg?v=1759733147&width=1946"
//   },
//   {
//     name: "Red Banarasi Silk Saree",
//     price: "₹17,762.00",
//     img: "https://www.nalli.com/cdn/shop/files/MV3538283_M.jpg?v=1759733140&width=500"
//   },
//   {
//     name: "Purple Banarasi Silk Saree",
//     price: "₹26,219.00",
//     img: "https://www.nalli.com/cdn/shop/files/MV3538143_M.jpg?v=1759733138&width=1946"
//   },
//   {
//     name: "Pink Banarasi Silk Saree",
//     price: "₹21,145.00",
//     img: "https://www.nalli.com/cdn/shop/files/MV3533599_M.jpg?v=1759236178&width=1946"
//   },
//   {
//     name: "Purple Banarasi Silk Saree",
//     price: "₹18,500.00",
//     img: "https://www.nalli.com/cdn/shop/files/MV3538143_M.jpg?v=1759733138&width=1946"
//   },
//   {
//     name: "Pink Banarasi Silk Saree",
//     price: "₹7,999.00",
//     img: "https://www.nalli.com/cdn/shop/files/bs3304105_m.jpg?v=1756415599&width=1946"
//   },
//   {
//     name: "Dark Blue Banarasi Silk Saree",
//     price: "₹15,299.00",
//     img: "https://www.nalli.com/cdn/shop/files/MV3539105_M.jpg?v=1759733135&width=1800"
//   },
//   {
//     name: "Purple Kanchipuram Silk Saree",
//     price: "₹19,999.00",
//     img: "https://www.nalli.com/cdn/shop/files/BS3334961_M.jpg?v=1760169664&width=1650"
//   },
//   {
//     name: "Turquoise Kanchipuram Silk Saree",
//     price: "₹9,500.00",
//     img: "https://www.nalli.com/cdn/shop/files/BS3334726_M.jpg?v=1760169662&width=1800"
//   },
//   {
//     name: "Light Green Kanchipuram Silk Saree",
//     price: "₹22,000.00",
//     img: "https://www.nalli.com/cdn/shop/files/BS3351393_M.jpg?v=1760169645&width=1800"
//   }
// ];

// const FeaturedProducts = () => {
//   const carouselRef = useRef(null);

//   const scrollNext = () => {
//     carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   const scrollPrev = () => {
//     carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 relative">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6 flex-wrap">
//         <div>
//           <h2 className="text-2xl font-bold">Featured products</h2>
//           <p className="text-gray-600">
//             Fresh weaves, added daily — discover sarees handwoven just for you
//           </p>
//         </div>
//         <button className="flex items-center text-blue-600 font-semibold hover:underline mt-4 sm:mt-0">
//           View all <FaArrowRight className="ml-1" />
//         </button>
//       </div>

//       {/* Horizontal Carousel */}
//       <div className="overflow-x-auto scrollbar-hide" ref={carouselRef}>
//         <div className="flex gap-6 w-max">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow min-w-[220px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[300px]"
//             >
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="w-full h-[430px] object-cover transform hover:scale-105 transition-transform duration-300"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
//                 <p className="text-gray-700 font-medium">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll Buttons */}
//       <div className="absolute bottom-4 right-4 flex gap-2">
//         <button
//           onClick={scrollPrev}
//           className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={scrollNext}
//           className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;


import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const products = [
  { name: "Navy Blue Tussar Saree", price: "₹8,959.00", img: "https://www.nalli.com/cdn/shop/files/MV3535954_M.jpg?v=1759733147&width=1946" },
  { name: "Red Banarasi Silk Saree", price: "₹17,762.00", img: "https://www.nalli.com/cdn/shop/files/MV3538283_M.jpg?v=1759733140&width=500" },
  { name: "Purple Banarasi Silk Saree", price: "₹26,219.00", img: "https://www.nalli.com/cdn/shop/files/MV3538143_M.jpg?v=1759733138&width=1946" },
  { name: "Pink Banarasi Silk Saree", price: "₹21,145.00", img: "https://www.nalli.com/cdn/shop/files/MV3533599_M.jpg?v=1759236178&width=1946" },
  { name: "Purple Banarasi Silk Saree", price: "₹18,500.00", img: "https://www.nalli.com/cdn/shop/files/MV3538143_M.jpg?v=1759733138&width=1946" },
  { name: "Pink Banarasi Silk Saree", price: "₹7,999.00", img: "https://www.nalli.com/cdn/shop/files/bs3304105_m.jpg?v=1756415599&width=1946" },
  { name: "Dark Blue Banarasi Silk Saree", price: "₹15,299.00", img: "https://www.nalli.com/cdn/shop/files/MV3539105_M.jpg?v=1759733135&width=1800" },
  { name: "Purple Kanchipuram Silk Saree", price: "₹19,999.00", img: "https://www.nalli.com/cdn/shop/files/BS3334961_M.jpg?v=1760169664&width=1650" },
  { name: "Turquoise Kanchipuram Silk Saree", price: "₹9,500.00", img: "https://www.nalli.com/cdn/shop/files/BS3334726_M.jpg?v=1760169662&width=1800" },
  { name: "Light Green Kanchipuram Silk Saree", price: "₹22,000.00", img: "https://www.nalli.com/cdn/shop/files/BS3351393_M.jpg?v=1760169645&width=1800" }
];

const FeaturedProducts = () => {
  const carouselRef = useRef(null);

  const scrollNext = () => {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: -width, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-6">
        <div className="w-full sm:w-auto">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">
            Featured Products
          </h2>
          <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
            Fresh weaves, added daily — discover sarees handwoven just for you
          </p>
        </div>
        <button className="flex items-center text-[#aa2829] font-semibold hover:underline mt-2 sm:mt-0 text-sm sm:text-base md:text-lg">
          View all <FaArrowRight className="ml-1" />
        </button>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-2"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[45%] md:w-[32%] lg:w-[24%] snap-start bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[430px] object-cover transition-transform duration-500 transform hover:scale-110"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 transition-all duration-300 ease-in-out hover:text-blue-600">
                  {product.name}
                </h3>
                <p className="text-gray-700 font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <div className="absolute bottom-2 right-2 flex gap-2">
          <button
            onClick={scrollPrev}
            className="bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollNext}
            className="bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
