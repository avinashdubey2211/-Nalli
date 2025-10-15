

// import React, { useRef } from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; 


// const products = [
//   {
//     name: "Aaradhya-Pink with Maroon Dual Tone Kanchipuram Silk Saree",
//     price: "₹8,959.00",
//     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0061.jpg?v=1758277152&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/BE1397584_M.jpg?v=1758277152&width=300"
//         ,path: "/productdetail"

//   },
//   {
//     name: "Rekha-Off White Kanchipuram Silk Saree",
//     price: "₹17,762.00",
//     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0982.jpg?v=1758281746&width=1946",
//     hoverImg: " https://www.nalli.com/cdn/shop/files/BE1396976_M.jpg?v=1758281746&width=300"
//         ,path: "/productdetail"

//   },
//   {
//     name: "Aabha-Pink with Green Half and Half Kanchipuram Silk Saree",
//     price: "₹26,219.00",
//     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396977_M.jpg?v=1758278793&width=300 "    ,path: "/productdetail"

//   },
//   {
//     name: "Rukmini-Off White Kanchipuram Silk Saree",
//     price: "₹21,145.00",
//     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0829.jpg?v=1758281612&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=300 "    ,path: "/productdetail"

//   },
//   {
//     name: "Vaani-Mustard Yellow Kanchipuram Silk Saree",
//     price: "₹18,500.00",
//     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0610.jpg?v=1758281484&width=1946",
//     hoverImg: " https://www.nalli.com/cdn/shop/files/BE1396979_M.jpg?v=1758281484&width=300"    ,path: "/productdetail"

//   },
//   {
//     name: "Shobha-Arraku Red Kanchipuram Silk Saree",
//     price: "₹7,999.00",
//     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1294.jpg?v=1758281333&width=1946",
//     hoverImg: " https://www.nalli.com/cdn/shop/files/BE1398206_M.jpg?v=1758281333&width=300"    ,path: "/productdetail"

//   },
//    { name: "Dark Blue Banarasi Silk Saree",
//      price: "₹15,299.00", 
//      img: " https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1204.jpg?v=1758281224&width=1946",
//         hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396983_M.jpg?v=1758281224&width=300 "    ,path: "/productdetail"

//  },

//   { name: "Swarnika-Pink Kanchipuram Silk Saree",
//      price: "₹19,999.00", 
//      img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946",
//         hoverImg: " https://www.nalli.com/cdn/shop/files/bs3265007_pp.jpg?v=1756671370&width=300"    ,path: "/productdetail"

//  },

//   { name: "Rose pink Kanchipuram Silk Saree",
//      price: "₹22,000.00", 
//      img: "https://www.nalli.com/cdn/shop/files/nf2879561_m.jpg?v=1756371368&width=1946 ",
//         hoverImg: " https://www.nalli.com/cdn/shop/files/AH5164314_BO.jpg?v=1760075301&width=300"    ,path: "/productdetail"

//  }
// ];

// const FeaturedProducts = () => {
//   const carouselRef = useRef(null);
//       const navigate = useNavigate(); 
  

//   const scrollNext = () => {
//     const width = carouselRef.current.offsetWidth;
//     carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
//   };

//   const scrollPrev = () => {
//     const width = carouselRef.current.offsetWidth;
//     carouselRef.current.scrollBy({ left: -width, behavior: "smooth" });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-6">
//         <div className="w-full sm:w-auto">
//           <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">
//             Diwali Edit
//           </h2>
//           <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
//           Festive sarees for every moment of celebration.

//           </p>
//         </div>
//         <button 
//                   onClick={() => navigate("/sarees_detail_pages")}

//         className="flex items-center text-[#aa2829] font-semibold hover:underline mt-2 sm:mt-0 text-sm sm:text-base md:text-lg">
//           View all <FaArrowRight className="ml-1" />
//         </button>
//       </div>

//       {/* Carousel */}
//       <div className="relative">
//         <div
//           ref={carouselRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-2"
//         >
//           {products.map((product, index) => (
//             <div
//               key={index}
//                             onClick={() => product.path && navigate(product.path)} //  navigate  use 

//               className="flex-shrink-0 w-full sm:w-[45%] md:w-[32%] lg:w-[24%] snap-start bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
//             >
//               {/* Image hover switch */}
//               <div className="relative overflow-hidden rounded-t-xl group">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[430px] object-cover transition-opacity duration-500 group-hover:opacity-0"
//                 />
//                 <img
//                   src={product.hoverImg}
//                   alt={`${product.name} hover`}
//                   className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                 />
//               </div>

//               <div className="p-3 sm:p-4">
//                 <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 transition-all duration-300 ease-in-out hover:text-blue-600">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-700 font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:text-gray-900">
//                   {product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Scroll Buttons */}
//         <div className="absolute bottom-2 right-2 flex gap-2">
//           <button
//             onClick={scrollPrev}
//             className="bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             onClick={scrollNext}
//             className="bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;



import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    name: "Aaradhya-Pink with Maroon Dual Tone Kanchipuram Silk Saree",
    price: "₹8,959.00",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0061.jpg?v=1758277152&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1397584_M.jpg?v=1758277152&width=300",
    path: "/productdetail",
  },
  {
    name: "Rekha-Off White Kanchipuram Silk Saree",
    price: "₹17,762.00",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0982.jpg?v=1758281746&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396976_M.jpg?v=1758281746&width=300",
    path: "/productdetail",
  },
  {
    name: "Aabha-Pink with Green Half and Half Kanchipuram Silk Saree",
    price: "₹26,219.00",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396977_M.jpg?v=1758278793&width=300",
    path: "/productdetail",
  },
  {
    name: "Rukmini-Off White Kanchipuram Silk Saree",
    price: "₹21,145.00",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0829.jpg?v=1758281612&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=300",
    path: "/productdetail",
  },
  {
    name: "Vaani-Mustard Yellow Kanchipuram Silk Saree",
    price: "₹18,500.00",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0610.jpg?v=1758281484&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396979_M.jpg?v=1758281484&width=300",
    path: "/productdetail",
  },
  {
    name: "Shobha-Arraku Red Kanchipuram Silk Saree",
    price: "₹7,999.00",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1294.jpg?v=1758281333&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1398206_M.jpg?v=1758281333&width=300",
    path: "/productdetail",
  },
  {
    name: "Dark Blue Banarasi Silk Saree",
    price: "₹15,299.00",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1204.jpg?v=1758281224&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396983_M.jpg?v=1758281224&width=300",
    path: "/productdetail",
  },
  {
    name: "Swarnika-Pink Kanchipuram Silk Saree",
    price: "₹19,999.00",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/bs3265007_pp.jpg?v=1756671370&width=300",
    path: "/productdetail",
  },
  {
    name: "Rose pink Kanchipuram Silk Saree",
    price: "₹22,000.00",
    img: "https://www.nalli.com/cdn/shop/files/nf2879561_m.jpg?v=1756371368&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/AH5164314_BO.jpg?v=1760075301&width=300",
    path: "/productdetail",
  },
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

const FeaturedProducts = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">Diwali Edit</h2>
          <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
            Festive sarees for every moment of celebration.
          </p>
        </div>
        <button
          onClick={() => navigate("/sarees_detail_pages")}
          className="flex items-center text-[#aa2829] font-semibold hover:underline mt-2 sm:mt-0 text-sm sm:text-base md:text-lg"
        >
          View all <FaArrowRight className="ml-1" />
        </button>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-2"
        >
          {products.map((product, index) => {
            const animationType = animations[index % animations.length]; // cycle through animations
            return (
              <div
                key={index}
                onClick={() => product.path && navigate(product.path)}
                className="flex-shrink-0 w-full sm:w-[45%] md:w-[32%] lg:w-[24%] snap-start bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
                data-aos={animationType}
              >
                {/* Image hover switch */}
                <div className="relative overflow-hidden rounded-t-xl group">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[430px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverImg}
                    alt={`${product.name} hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
            );
          })}
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
