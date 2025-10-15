

// import React from "react";
// import { useNavigate } from "react-router-dom"; 


// const products = [
//   { name: "Pure Zari Kanchipuram", img: "https://www.nalli.com/cdn/shop/files/01_Fc-Pure-Zari-Kanchipuram_4.webp?v=1752469581" ,path: "/sarees_detail_pages" },
//   { name: "Half-Fine Zari Kanchipuram", img: "https://www.nalli.com/cdn/shop/files/02_Fc-Half-fine-zari-kanchipurma.webp?v=1752469580",path: "/sarees_detail_pages" },
//   { name: "Brocade Kanchipuram", img: "https://www.nalli.com/cdn/shop/files/03_Fc-Brocade-kanchipuram.webp?v=1752469580",path: "/sarees_detail_pages" },
//   { name: "Kanchipuram Tissue Silk", img: "https://www.nalli.com/cdn/shop/files/04_Fc-Contemporay-Kanchipuram.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Banarasi Katan Silk", img: "https://www.nalli.com/cdn/shop/files/05_Fc-Banarasi-Katan.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Banarasi Silk", img: "https://www.nalli.com/cdn/shop/files/06_Fc-Banarasi.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Soft Silks", img: "https://www.nalli.com/cdn/shop/files/07_Fc-Soft-Silks.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Cotton", img: "https://www.nalli.com/cdn/shop/files/15_Fc-Cotton.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Crepe", img: "https://www.nalli.com/cdn/shop/files/14_Fc-Crepe.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Tussar", img: "https://www.nalli.com/cdn/shop/files/17_Fc-Tussar.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Silk Cotton", img: "https://www.nalli.com/cdn/shop/files/09_Fc-Silk-Cotton.webp?v=1752469579" },
//   { name: "Organza", img: "https://www.nalli.com/cdn/shop/files/11_Fc-Organza.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Chiffon", img: "https://www.nalli.com/cdn/shop/files/13_Fc-Chiffon.webp?v=1752469580",path: "/sarees_detail_pages" },
//   { name: "Ikats", img: "https://www.nalli.com/cdn/shop/files/18_Fc-Ikat.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Georgette", img: "https://www.nalli.com/cdn/shop/files/12_Fc-Georgette.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Bangalore Silk", img: "https://www.nalli.com/cdn/shop/files/08_Fc-Bnagalore-Silk.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Chanderi", img: "https://www.nalli.com/cdn/shop/files/10_Fc-Chanderi.webp?v=1752469579",path: "/sarees_detail_pages" },
//   { name: "Pure Linen", img: "https://www.nalli.com/cdn/shop/files/16_Fc-Pure-Linen.webp?v=1752469579" ,path: "/sarees_detail_pages"},
// ];

// const Shop = () => {
//       const navigate = useNavigate(); 
  
//   return (
//     <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">
//       {/* Header Section */}
//       <div className="mb-8 text-left">
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
//           Shop by Category
//         </h2>
//         <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
//           Every weave tells a story — explore silks across traditions and find your perfect match.
//         </p>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
//         {products.map((product, index) => (
//           <div key={index} className="text-left">
//             <img
//               src={product.img}
//               alt={product.name}
//                             onClick={() => product.path && navigate(product.path)} //  navigate  use 

//               className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
//             />
//             <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-800">
//               {product.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  { name: "Pure Zari Kanchipuram", img: "https://www.nalli.com/cdn/shop/files/01_Fc-Pure-Zari-Kanchipuram_4.webp?v=1752469581", path: "/sarees_detail_pages" },
  { name: "Half-Fine Zari Kanchipuram", img: "https://www.nalli.com/cdn/shop/files/02_Fc-Half-fine-zari-kanchipurma.webp?v=1752469580", path: "/sarees_detail_pages" },
  { name: "Brocade Kanchipuram", img: "https://www.nalli.com/cdn/shop/files/03_Fc-Brocade-kanchipuram.webp?v=1752469580", path: "/sarees_detail_pages" },
  { name: "Kanchipuram Tissue Silk", img: "https://www.nalli.com/cdn/shop/files/04_Fc-Contemporay-Kanchipuram.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Banarasi Katan Silk", img: "https://www.nalli.com/cdn/shop/files/05_Fc-Banarasi-Katan.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Banarasi Silk", img: "https://www.nalli.com/cdn/shop/files/06_Fc-Banarasi.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Soft Silks", img: "https://www.nalli.com/cdn/shop/files/07_Fc-Soft-Silks.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Cotton", img: "https://www.nalli.com/cdn/shop/files/15_Fc-Cotton.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Crepe", img: "https://www.nalli.com/cdn/shop/files/14_Fc-Crepe.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Tussar", img: "https://www.nalli.com/cdn/shop/files/17_Fc-Tussar.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Silk Cotton", img: "https://www.nalli.com/cdn/shop/files/09_Fc-Silk-Cotton.webp?v=1752469579" },
  { name: "Organza", img: "https://www.nalli.com/cdn/shop/files/11_Fc-Organza.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Chiffon", img: "https://www.nalli.com/cdn/shop/files/13_Fc-Chiffon.webp?v=1752469580", path: "/sarees_detail_pages" },
  { name: "Ikats", img: "https://www.nalli.com/cdn/shop/files/18_Fc-Ikat.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Georgette", img: "https://www.nalli.com/cdn/shop/files/12_Fc-Georgette.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Bangalore Silk", img: "https://www.nalli.com/cdn/shop/files/08_Fc-Bnagalore-Silk.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Chanderi", img: "https://www.nalli.com/cdn/shop/files/10_Fc-Chanderi.webp?v=1752469579", path: "/sarees_detail_pages" },
  { name: "Pure Linen", img: "https://www.nalli.com/cdn/shop/files/16_Fc-Pure-Linen.webp?v=1752469579", path: "/sarees_detail_pages" },
];

const Shop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 150,
    });
  }, []);

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

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8 text-left" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Shop by Category
        </h2>
        <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
          Every weave tells a story — explore silks across traditions and find your perfect match.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="text-left cursor-pointer"
            data-aos={animations[index % animations.length]}
            data-aos-delay={index * 50}
            data-aos-offset={200}
            data-aos-easing="ease-in-sine"
            onClick={() => product.path && navigate(product.path)}
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-36 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
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

export default Shop;
