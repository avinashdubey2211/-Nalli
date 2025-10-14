
// import React, { useState,useRef } from "react";
// import { FaHeart, FaShippingFast, FaInfoCircle, FaTshirt } from "react-icons/fa";
// import { FiChevronRight } from "react-icons/fi";
// import { FaStar } from "react-icons/fa";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// import {
//   FaInstagram,
//   FaFacebookF,
//   FaPinterestP,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaGlobe,
// } from "react-icons/fa";



// const products1 = [
//   { name: "Navy Blue Tussar Saree", price: "₹8,959.00", img: "https://www.nalli.com/cdn/shop/files/MV3535954_M.jpg?v=1759733147&width=1946"
//  },
//   { name: "Red Banarasi Silk Saree", price: "₹17,762.00", img: "https://www.nalli.com/cdn/shop/files/MV3538283_M.jpg?v=1759733140&width=500" },
//   { name: "Purple Banarasi Silk Saree", price: "₹26,219.00", img: "https://www.nalli.com/cdn/shop/files/MV3538143_M.jpg?v=1759733138&width=1946" },
//   { name: "Pink Banarasi Silk Saree", price: "₹21,145.00", img: "https://www.nalli.com/cdn/shop/files/MV3533599_M.jpg?v=1759236178&width=1946" },
//   { name: "Purple Banarasi Silk Saree", price: "₹18,500.00", img: "https://www.nalli.com/cdn/shop/files/MV3538143_M.jpg?v=1759733138&width=1946" },
//   { name: "Pink Banarasi Silk Saree", price: "₹7,999.00", img: "https://www.nalli.com/cdn/shop/files/bs3304105_m.jpg?v=1756415599&width=1946" },
//   { name: "Dark Blue Banarasi Silk Saree", price: "₹15,299.00", img: "https://www.nalli.com/cdn/shop/files/MV3539105_M.jpg?v=1759733135&width=1800" },
//   { name: "Purple Kanchipuram Silk Saree", price: "₹19,999.00", img: "https://www.nalli.com/cdn/shop/files/BS3334961_M.jpg?v=1760169664&width=1650" },
//   { name: "Turquoise Kanchipuram Silk Saree", price: "₹9,500.00", img: "https://www.nalli.com/cdn/shop/files/BS3334726_M.jpg?v=1760169662&width=1800" },
//   { name: "Light Green Kanchipuram Silk Saree", price: "₹22,000.00", img: "https://www.nalli.com/cdn/shop/files/BS3351393_M.jpg?v=1760169645&width=1800" }
// ];

// const products = [
//   {
//     name: "Aaradhya-Pink with Maroon Dual Tone Kanchipuram Silk Saree",
//     price: "₹8,959.00",
//     img: "https://www.nalli.com/cdn/shop/files/HB2471091_M.jpg?v=1760007772",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/HB2471091_C.jpg?v=1760007772&width=300"
//   },
//   {
//     name: "Rekha-Off White Kanchipuram Silk Saree",
//     price: "₹17,762.00",
//     img: "https://www.nalli.com/cdn/shop/files/AH5164794_M.jpg?v=1760428397",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/HB2471088_C.jpg?v=1760007769&width=300"
//   },
//   {
//     name: "Aabha-Pink with Green Half and Half Kanchipuram Silk Saree",
//     price: "₹26,219.00",
//     img: "https://www.nalli.com/cdn/shop/files/bs3263671_m.jpg?v=1756487216",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/HB2470253_C.jpg?v=1760007768&width=300 "
//   },
//   {
//     name: "Rukmini-Off White Kanchipuram Silk Saree",
//     price: "₹21,145.00",
//     img: "https://www.nalli.com/cdn/shop/files/ah4787841_m.jpg?v=1756566319",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/HB2471796_C.jpg?v=1760007766&width=300"
//   },
//   {
//     name: "Vaani-Mustard Yellow Kanchipuram Silk Saree",
//     price: "₹18,500.00",
//     img: "https://www.nalli.com/cdn/shop/files/HB2469338_M.jpg?v=1759730270",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/HB2473994_C.jpg?v=1760007756&width=300"
//   },
//   {
//     name: "Shobha-Arraku Red Kanchipuram Silk Saree",
//     price: "₹7,999.00",
//     img: "https://www.nalli.com/cdn/shop/files/AH5164794_M.jpg?v=1760428397",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/MV3544864_BO.jpg?v=1760170948&width=300"
//   },
//    { name: "Dark Blue Banarasi Silk Saree",
//      price: "₹15,299.00", 
//      img: "https://www.nalli.com/cdn/shop/files/HB2471091_M.jpg?v=1760007772&width=1650",
//         hoverImg: "https://www.nalli.com/cdn/shop/files/MV3546972_BO.jpg?v=1760170946&width=300 "
//  },

//   { name: "Swarnika-Pink Kanchipuram Silk Saree",
//      price: "₹19,999.00", 
//      img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946",
//         hoverImg: " https://www.nalli.com/cdn/shop/files/bs3265007_pp.jpg?v=1756671370&width=300"
//  },

//   { name: "Rose pink Kanchipuram Silk Saree",
//      price: "₹22,000.00", 
//      img: "https://www.nalli.com/cdn/shop/files/nf2879561_m.jpg?v=1756371368&width=1946 ",
//         hoverImg: " https://www.nalli.com/cdn/shop/files/AH5164314_BO.jpg?v=1760075301&width=300"
//  }
// ];
// const product = {
//   title: "Magenta Kanchipuram Silk Saree",
//   price: "₹16,414.00",
//   images: [
//     "https://www.nalli.com/cdn/shop/files/AH5146888_M.jpg?v=1758777162",
//     "https://www.nalli.com/cdn/shop/files/HB2471091_PB.jpg?v=1760007772&width=1800",
//     "https://www.nalli.com/cdn/shop/files/HB2471091_PP.jpg?v=1760007772&width=1946",
//     "https://www.nalli.com/cdn/shop/files/HB2471091_PP.jpg?v=1760007772&width=1800",
//     "https://www.nalli.com/cdn/shop/files/HB2471091_B.jpg?v=1760007772&width=1946",
//     "https://www.nalli.com/cdn/shop/files/HB2471091_PB.jpg?v=1760007772&width=1800",
//   ],
// };



// const tabs = [
//   {
//     id: "details",
//     title: "Product Details",
//     content: (
//       <ul className="list-disc ml-5 space-y-2 text-gray-700 mt-2">
//         <li>Magenta Kanchipuram Silk Saree with Zari Butta on the body.</li>
//         <li>Includes unstitched blouse and Zari Border design.</li>
//       </ul>
//     ),
//   },
//   {
//     id: "specifications",
//     title: "Specifications",
//     content: (
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-gray-800 mt-2">
//         {[
//           { label: "Color", value: "Magenta" },
//           { label: "MRP", value: "₹29,545.00" },
//           { label: "Blouse Color", value: "Blue" },
//           { label: "Blouse Size", value: "0.80 X 1.20 Meters" },
//           { label: "Saree Size", value: "5.30 X 1.20 Meters" },
//           { label: "Zari Type", value: "Half-fine Zari" },
//           { label: "Technique", value: "Woven Design" },
//           { label: "Pattern", value: "Zari Butta" },
//           { label: "Fabric Purity", value: "Pure" },
//           { label: "Border Type", value: "Contrast" },
//           { label: "Blouse", value: "Contrast" },
//           { label: "Material", value: "Silk" },
//           { label: "Border", value: "Zari Border" },
//         ].map((spec, index) => (
//           <div key={index} className="border-b border-gray-300 pb-2">
//             <p className="text-gray-500 text-sm font-medium">{spec.label}</p>
//             <p className="text-gray-900 text-sm">{spec.value}</p>
//           </div>
//         ))}
//       </div>
//     ),
//   },
//   {
//     id: "wash",
//     title: "Wash Care & Mark of Handloom",
//     content: (
//       <ul className="list-disc ml-5 space-y-2 text-gray-700 mt-2">
//         <li>Always dry clean for the first wash.</li>
//         <li>Air dry the saree in shade; avoid direct sunlight.</li>
//         <li>Do not store silk without dry cleaning.</li>
//         <li>Expose silk fabrics periodically to fresh air.</li>
//         <li>Use silica gel sachets in your cupboard.</li>
//         <li>Iron at medium heat only.</li>
//       </ul>
//     ),
//   },
//   {
//     id: "shipping",
//     title: "Shipping & Returns",
//     content: (
//       <ul className="list-disc ml-5 space-y-2 text-gray-700 mt-2">
//         <li>All prices include GST.</li>
//         <li>Shipping charges are shown at checkout.</li>
//         <li>International buyers bear VAT/Import Duties locally.</li>
//         <li>No return/exchange once fall & pico are done.</li>
//       </ul>
//     ),
//   },
//   {
//     id: "info",
//     title: "More Info",
//     icon: <FaInfoCircle size={24} />,
//     content: (
//       <ul className="list-disc ml-5 space-y-2 text-gray-700 mt-2">
//         <li>Manufacturer: Nalli Silk Sarees Pvt Ltd</li>
//         <li>Address: 100, Usman Road, T.Nagar, Chennai TN, 600017</li>
//         <li>Country of Origin: India</li>
//         <li>Net Quantity: 1 Unit</li>
//       </ul>
//     ),
//   },
// ];

// const ProductDetail = () => {
//    const carouselRef = useRef(null);

//   const scrollNext = () => {
//     const width = carouselRef.current.offsetWidth;
//     carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
//   };

//   const scrollPrev = () => {
//     const width = carouselRef.current.offsetWidth;
//     carouselRef.current.scrollBy({ left: -width, behavior: "smooth" });
//   };
//   const [activeTabs, setActiveTabs] = useState([]);
//   const toggleTab = (id) =>
//     setActiveTabs((prev) =>
//       prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
//     );

//   return (
//     <>
//     <div className="h-full w-full">
//     <div className="flex flex-col md:flex-row gap-10 p-8 max-w-7xl mx-auto h-[90vh]">
//       {/* LEFT SECTION (Sticky) */}
//       <div className="w-full md:w-1/2 sticky top-0 self-start overflow-y-auto h-[90vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
//         <div className="grid grid-cols-2 gap-3">
//           {product.images.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`Thumbnail ${idx}`}
//               className="h-[420px] w-full object-cover rounded-lg border border-gray-200 hover:border-red-600 transition"
//             />
//           ))}
//         </div>
//       </div>

//       {/* RIGHT SECTION (Scrollable) */}
//       <div className="w-full md:w-1/2 flex flex-col gap-6 overflow-y-scroll h-[90vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-2">
//         {/* Product Info */}
//         <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
//         <h4 className="text-sm text-gray-500">Product SKU: HB2471091</h4>
//         <p className="text-gray-700 leading-relaxed">
//           Magenta Kanchipuram Silk Saree with Zari Butta on the body and Zari Border.
//           Includes unstitched blouse.
//         </p>
//         <p className="text-2xl font-semibold text-red-700">{product.price}</p>
//         <p className="text-sm text-gray-500">
//           Inclusive of all taxes (For customers in India)
//         </p>

//         {/* Quantity Selector */}
//         <div className="flex flex-col gap-2">
//           <h2 className="text-xl font-semibold text-gray-800">Quantity</h2>
//           <div className="flex items-center gap-3">
//             <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded text-lg font-semibold hover:bg-gray-300 transition">
//               -
//             </button>
//             <span className="px-3 text-lg font-medium">1</span>
//             <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded text-lg font-semibold hover:bg-gray-300 transition">
//               +
//             </button>
//           </div>
//           <p className="text-red-500 text-xs">Only 1 piece left in stock.</p>
//         </div>

//         {/* Add to Bag */}
//         <button className="bg-red-700 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition">
//           Add to Bag
//         </button>

//         {/* Expandable Tabs */}
//         <div className="flex flex-col gap-4 mt-6">
//           {tabs.map((tab) => (
//             <div key={tab.id} className="border-b border-gray-300 pb-2">
//               <div
//                 className="flex items-center justify-between cursor-pointer py-3 hover:text-red-700 transition"
//                 onClick={() => toggleTab(tab.id)}
//               >
//                 <div className="flex items-center gap-3">
//                   {tab.icon}
//                   <h3 className="text-lg font-semibold">{tab.title}</h3>
//                 </div>
//                 <FiChevronRight
//                   className={`transition-transform duration-300 ${
//                     activeTabs.includes(tab.id) ? "rotate-90 text-red-700" : ""
//                   }`}
//                   size={22}
//                 />
//               </div>

//               <div
//                 className={`overflow-hidden transition-all duration-500 ${
//                   activeTabs.includes(tab.id)
//                     ? "max-h-[500px] opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <div className="pl-2 mt-2 text-sm">{tab.content}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>



//     {/* Customer Reviews */}
//      <div className="max-w-7xl mx-auto py-12 px-4">
//       {/* Title */}
//       <h2 className="text-3xl py-16 md:text-4xl font-bold text-center mb-6">
//         Customer Reviews
//       </h2>

//       {/* Review Section */}
//       <div className="flex flex-col px-80 md:flex-row items-center justify-between bg-white p-6 rounded-xl shadow-md gap-4">
//         {/* Left: Stars + text */}
//         <div className="flex flex-col  md:flex-col items-center gap-4">
//           {/* 5 Red Stars */}
//           <div className="flex gap-1">
//             {[...Array(5)].map((_, idx) => (
//               <FaStar key={idx} className="text-red-600 w-5 h-5" />
//             ))}
//           </div>
//           <p className="text-gray-700 text-center md:text-left">
//             Be the first to write a review
//           </p>
//         </div>

//         {/* Right: Write Review Button */}
//         <button className="bg-[#811314] hover:bg-red-800 text-white px-8 py-2  text-sm md:text-base transition">
//           Write a Review
//         </button>
//       </div>
//     </div>

//     {/*  Similar Tone */}
//      <div className="max-w-7xl mx-auto px-4 py-8">
//           {/* Header */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-6">
//             <div className="w-full sm:w-auto">
//               <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">
//                 Similar Tone </h2>
//               <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
//               Your Handpicked Favorites </p>
//             </div>
//             <button className="flex items-center text-[#aa2829] font-semibold hover:underline mt-2 sm:mt-0 text-sm sm:text-base md:text-lg">
//               View all <FaArrowRight className="ml-1" />
//             </button>
//           </div>
//            {/* Carousel */}
//           <div className="relative">
//             <div
//               ref={carouselRef}
//               className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-2"
//             >
//               {products.map((product, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-full sm:w-[45%] md:w-[32%] lg:w-[24%] snap-start bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
//                 >
//                   {/* Image hover switch */}
//                   <div className="relative overflow-hidden rounded-t-xl group">
//                     <img
//                       src={product.img}
//                       alt={product.name}
//                       className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[430px] object-cover transition-opacity duration-500 group-hover:opacity-0"
//                     />
//                     <img
//                       src={product.hoverImg}
//                       alt={`${product.name} hover`}
//                       className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                     />
//                   </div>
//                    <div className="p-3 sm:p-4">
//                     <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 transition-all duration-300 ease-in-out hover:text-blue-600">
//                       {product.name}
//                     </h3>
//                     <p className="text-gray-700 font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:text-gray-900">
//                       {product.price}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
    
//             {/* Scroll Buttons */}
//             <div className="absolute bottom-2 right-2 flex gap-2">
//               <button
//                 onClick={scrollPrev}
//                 className="bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
//               >
//                 <FaArrowLeft />
//               </button>
//               <button
//                 onClick={scrollNext}
//                 className="bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
//               >
//                 <FaArrowRight />
//               </button>
//             </div>
//           </div>
//         </div>


// {/* Similar Items
//  */}
//             <div className="max-w-7xl mx-auto px-4 py-8">
//               {/* Header */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-6">
//                 <div className="w-full sm:w-auto">
//                   <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">
//                     Similar Items                  </h2>
//                   <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">
//                   Your Handpicked Favorites </p>
//                 </div>
//                 <button className="flex items-center text-[#aa2829] font-semibold hover:underline mt-2 sm:mt-0 text-sm sm:text-base md:text-lg">
//                   View all <FaArrowRight className="ml-1" />
//                 </button>
//               </div>
        
//               {/* Carousel */}
//               <div className="relative">
//                 <div
//                   ref={carouselRef}
//                   className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-2"
//                 >
//                   {products.map((products1, index) => (
//                     <div
//                       key={index}
        
        
//                       className="flex-shrink-0 w-full sm:w-[45%] md:w-[32%] lg:w-[24%] snap-start bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
//                     >
//                       <div className="overflow-hidden rounded-t-xl">
//                         <img
//                           src={products1.img}
//                           alt={products1.name}
//                           className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[430px] object-cover transition-transform duration-500 transform hover:scale-110"
//                         />
//                       </div>
//                       <div className="p-3 sm:p-4">
//                         <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 transition-all duration-300 ease-in-out hover:text-blue-600">
//                           {products1.name}
//                         </h3>
//                         <p className="text-gray-700 font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:text-gray-900">
//                           {products1.price}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
        
//                 {/* Scroll Buttons */}
//                 <div className="absolute bottom-2 right-2 flex gap-2">
//                   <button
//                     onClick={scrollPrev}
//                     className="bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
//                   >
//                     <FaArrowLeft />
//                   </button>
//                   <button
//                     onClick={scrollNext}
//                     className="bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
//                   >
//                     <FaArrowRight />
//                   </button>
//                 </div>
//               </div>
        
              
//             </div>


//             {/* newsLetter */}
//               <section className="bg-[#f9f6f2] py-12 px-4 flex flex-col items-center text-center">
//       {/* Heading */}
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
//         Enter the world of Nalli
//       </h2>

//       {/* Subtext */}
//       <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-xl px-2">
//         Be the first to know about our latest collections, events and news.
//       </p>

//       {/* Email Input + Button */}
//       <form className="w-full max-w-lg flex flex-col sm:flex-row items-center justify-center gap-3 px-2">
//         <input
//           type="email"
//           placeholder="Enter your email address"
//           required
//           className="flex-1 border border-gray-300 rounded-md px-4 py-3 w-full text-sm sm:text-base focus:outline-none focus:border-[#d97706] transition"
//         />
//         <button
//           type="submit"
//           className="bg-[#d97706] text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto text-sm sm:text-base hover:bg-[#b45309] transition"
//         >
//           Subscribe
//         </button>
//       </form>

//       {/* Legal Text */}
//       <p className="text-xs text-gray-500 mt-6 max-w-md px-2 leading-relaxed">
//         By entering your email address, you are accepting our{" "}
//         <span className="underline cursor-pointer hover:text-[#d97706]">
//           Terms & Conditions
//         </span>{" "}
//         and{" "}
//         <span className="underline cursor-pointer hover:text-[#d97706]">
//           Privacy & Cookie Policy
//         </span>
//         .
//       </p>
//     </section>

//     {/* Fooder */}
//     <footer className="bg-black text-gray-300 py-12 px-6 font-sans">
//           {/* ===== Top Section ===== */}
//           <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-sm text-center sm:text-left">
//             {/* Quick Links */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                 Quick Links
//               </h3>
//               <ul className="space-y-2">
//                 <li>Gift Vouchers</li>
//                 <li>Collections</li>
//                 <li>Sarees</li>
//                 <li>Career</li>
//               </ul>
//             </div>
    
//             {/* About Us */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                 About Us
//               </h3>
//               <ul className="space-y-2">
//                 <li>Our History</li>
//                 <li>The Nalli Promise (Blog)</li>
//                 <li>Lookbook</li>
//                 <li>Campaigns</li>
//                 <li>Press</li>
//                 <li>Product Care</li>
//               </ul>
//             </div>
    
//             {/* Client Care */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                 Client Care
//               </h3>
//               <ul className="space-y-2">
//                 <li>Help / FAQs</li>
//                 <li>Shipping & Payment</li>
//                 <li>Returns & Exchange Policy</li>
//                 <li>Customs, Duties & Taxes</li>
//                 <li>Terms & Conditions</li>
//                 <li>Privacy Policy</li>
//                 <li>Cookie Policy</li>
//                 <li>Disclaimer</li>
//               </ul>
//             </div>
    
//             {/* Track & Contact */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                 Support
//               </h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center justify-center sm:justify-start gap-2">
//                   <FaMapMarkerAlt className="text-white" />
//                   <span>Track Order</span>
//                 </li>
//                 <li className="flex items-center justify-center sm:justify-start gap-2">
//                   <FaPhoneAlt className="text-white" />
//                   <span>Contact Customer Care</span>
//                 </li>
//               </ul>
//             </div>
    
//             {/* Store & Currency */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                 Store Info
//               </h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center justify-center sm:justify-start gap-2">
//                   <FaMapMarkerAlt className="text-white" />
//                   <span>Store Locator</span>
//                 </li>
//                 <li className="flex items-center justify-center sm:justify-start gap-2">
//                   <FaGlobe className="text-white" />
//                   <span>INR - ₹</span>
//                 </li>
//               </ul>
//             </div>
    
//             {/* Social Links */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                 Follow Us
//               </h3>
//               <div className="flex items-center justify-center sm:justify-start gap-5 text-white text-lg">
//                 <FaInstagram className="cursor-pointer hover:text-[#d97706] transition" />
//                 <FaFacebookF className="cursor-pointer hover:text-[#d97706] transition" />
//                 <FaPinterestP className="cursor-pointer hover:text-[#d97706] transition" />
//               </div>
//             </div>
//           </div>
    
//           {/* ===== Bottom Line ===== */}
//           <div className="border-t border-gray-700 mt-10 pt-5 text-xs text-center text-gray-400">
//             © 1928–2024 Nalli Silk Sarees Pvt. Ltd. All Rights Reserved.
//           </div>
//         </footer>
//     </div>
//     </>
//   );
// };

// export default ProductDetail;





import React, { useState, useRef } from "react";
import { FaHeart, FaShippingFast, FaInfoCircle, FaTshirt, FaStar, FaArrowRight, FaArrowLeft, FaInstagram, FaFacebookF, FaPinterestP, FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

// Sample products

const products1 = [
  { name: "Navy Blue Tussar Saree", price: "₹8,959.00", img: "https://www.nalli.com/cdn/shop/files/MV3535954_M.jpg?v=1759733147&width=1946"
 },
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


const products = [
  {
    name: "Aaradhya-Pink with Maroon Dual Tone Kanchipuram Silk Saree",
    price: "₹8,959.00",
    img: "https://www.nalli.com/cdn/shop/files/HB2471091_M.jpg?v=1760007772",
    hoverImg: "https://www.nalli.com/cdn/shop/files/HB2471091_C.jpg?v=1760007772&width=300"
  },
  {
    name: "Rekha-Off White Kanchipuram Silk Saree",
    price: "₹17,762.00",
    img: "https://www.nalli.com/cdn/shop/files/AH5164794_M.jpg?v=1760428397",
    hoverImg: "https://www.nalli.com/cdn/shop/files/HB2471088_C.jpg?v=1760007769&width=300"
  },
  {
    name: "Aabha-Pink with Green Half and Half Kanchipuram Silk Saree",
    price: "₹26,219.00",
    img: "https://www.nalli.com/cdn/shop/files/bs3263671_m.jpg?v=1756487216",
    hoverImg: "https://www.nalli.com/cdn/shop/files/HB2470253_C.jpg?v=1760007768&width=300 "
  },
  {
    name: "Rukmini-Off White Kanchipuram Silk Saree",
    price: "₹21,145.00",
    img: "https://www.nalli.com/cdn/shop/files/ah4787841_m.jpg?v=1756566319",
    hoverImg: "https://www.nalli.com/cdn/shop/files/HB2471796_C.jpg?v=1760007766&width=300"
  },
  {
    name: "Vaani-Mustard Yellow Kanchipuram Silk Saree",
    price: "₹18,500.00",
    img: "https://www.nalli.com/cdn/shop/files/HB2469338_M.jpg?v=1759730270",
    hoverImg: "https://www.nalli.com/cdn/shop/files/HB2473994_C.jpg?v=1760007756&width=300"
  },
  {
    name: "Shobha-Arraku Red Kanchipuram Silk Saree",
    price: "₹7,999.00",
    img: "https://www.nalli.com/cdn/shop/files/AH5164794_M.jpg?v=1760428397",
    hoverImg: "https://www.nalli.com/cdn/shop/files/MV3544864_BO.jpg?v=1760170948&width=300"
  },
   { name: "Dark Blue Banarasi Silk Saree",
     price: "₹15,299.00", 
     img: "https://www.nalli.com/cdn/shop/files/HB2471091_M.jpg?v=1760007772&width=1650",
        hoverImg: "https://www.nalli.com/cdn/shop/files/MV3546972_BO.jpg?v=1760170946&width=300 "
 },

  { name: "Swarnika-Pink Kanchipuram Silk Saree",
     price: "₹19,999.00", 
     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946",
        hoverImg: " https://www.nalli.com/cdn/shop/files/bs3265007_pp.jpg?v=1756671370&width=300"
 },

  { name: "Rose pink Kanchipuram Silk Saree",
     price: "₹22,000.00", 
     img: "https://www.nalli.com/cdn/shop/files/nf2879561_m.jpg?v=1756371368&width=1946 ",
        hoverImg: " https://www.nalli.com/cdn/shop/files/AH5164314_BO.jpg?v=1760075301&width=300"
 }
];
const product = {
  title: "Magenta Kanchipuram Silk Saree",
  price: "₹16,414.00",
  images: [
    "https://www.nalli.com/cdn/shop/files/AH5146888_M.jpg?v=1758777162",
    "https://www.nalli.com/cdn/shop/files/HB2471091_PB.jpg?v=1760007772&width=1800",
    "https://www.nalli.com/cdn/shop/files/HB2471091_PP.jpg?v=1760007772&width=1946",
    "https://www.nalli.com/cdn/shop/files/HB2471091_PP.jpg?v=1760007772&width=1800",
    "https://www.nalli.com/cdn/shop/files/HB2471091_B.jpg?v=1760007772&width=1946",
    "https://www.nalli.com/cdn/shop/files/HB2471091_PB.jpg?v=1760007772&width=1800",
  ],
};

const tabs = [
  {
    id: "details",
    title: "Product Details",
    content: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 mt-2">
        <li>Magenta Kanchipuram Silk Saree with Zari Butta on the body.</li>
        <li>Includes unstitched blouse and Zari Border design.</li>
      </ul>
    ),
  },
  {
    id: "specifications",
    title: "Specifications",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-gray-800 mt-2">
        {[
          { label: "Color", value: "Magenta" },
          { label: "MRP", value: "₹29,545.00" },
          { label: "Blouse Color", value: "Blue" },
          { label: "Blouse Size", value: "0.80 X 1.20 Meters" },
          { label: "Saree Size", value: "5.30 X 1.20 Meters" },
          { label: "Zari Type", value: "Half-fine Zari" },
          { label: "Technique", value: "Woven Design" },
          { label: "Pattern", value: "Zari Butta" },
          { label: "Fabric Purity", value: "Pure" },
          { label: "Border Type", value: "Contrast" },
          { label: "Blouse", value: "Contrast" },
          { label: "Material", value: "Silk" },
          { label: "Border", value: "Zari Border" },
        ].map((spec, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <p className="text-gray-500 text-sm font-medium">{spec.label}</p>
            <p className="text-gray-900 text-sm">{spec.value}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "wash",
    title: "Wash Care & Mark of Handloom",
    content: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 mt-2">
        <li>Always dry clean for the first wash.</li>
        <li>Air dry the saree in shade; avoid direct sunlight.</li>
        <li>Do not store silk without dry cleaning.</li>
        <li>Expose silk fabrics periodically to fresh air.</li>
        <li>Use silica gel sachets in your cupboard.</li>
        <li>Iron at medium heat only.</li>
      </ul>
    ),
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    content: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 mt-2">
        <li>All prices include GST.</li>
        <li>Shipping charges are shown at checkout.</li>
        <li>International buyers bear VAT/Import Duties locally.</li>
        <li>No return/exchange once fall & pico are done.</li>
      </ul>
    ),
  },
  {
    id: "info",
    title: "More Info",
    icon: <FaInfoCircle size={24} />,
    content: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 mt-2">
        <li>Manufacturer: Nalli Silk Sarees Pvt Ltd</li>
        <li>Address: 100, Usman Road, T.Nagar, Chennai TN, 600017</li>
        <li>Country of Origin: India</li>
        <li>Net Quantity: 1 Unit</li>
      </ul>
    ),
  },
];
const ProductDetail = () => {
  const leftCarouselRef = useRef(null);
  const rightCarouselRefTone = useRef(null);
  const rightCarouselRefItems = useRef(null);

  // Scroll functions for Similar Tone
  const scrollNextTone = () => {
    const width = rightCarouselRefTone.current.offsetWidth;
    rightCarouselRefTone.current.scrollBy({ left: width, behavior: "smooth" });
  };
  const scrollPrevTone = () => {
    const width = rightCarouselRefTone.current.offsetWidth;
    rightCarouselRefTone.current.scrollBy({ left: -width, behavior: "smooth" });
  };

  // Scroll functions for Similar Items
  const scrollNextItems = () => {
    const width = rightCarouselRefItems.current.offsetWidth;
    rightCarouselRefItems.current.scrollBy({ left: width, behavior: "smooth" });
  };
  const scrollPrevItems = () => {
    const width = rightCarouselRefItems.current.offsetWidth;
    rightCarouselRefItems.current.scrollBy({ left: -width, behavior: "smooth" });
  };

  const [activeTabs, setActiveTabs] = useState([]);
  const toggleTab = (id) =>
    setActiveTabs((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );

  return (
    <div className="h-full w-full">
      <div className="flex flex-col md:flex-row gap-10 p-8 max-w-7xl mx-auto h-[90vh]">
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 sticky top-0 overflow-y-auto h-[90vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="grid grid-cols-2 gap-3">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className="h-[420px] w-full object-cover rounded-lg border border-gray-200 hover:border-red-600 transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 overflow-y-scroll h-[90vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-2">
          <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
          <h4 className="text-sm text-gray-500">Product SKU: HB2471091</h4>
          <p className="text-gray-700 leading-relaxed">
            Magenta Kanchipuram Silk Saree with Zari Butta on the body and Zari Border. Includes unstitched blouse.
          </p>
          <p className="text-2xl font-semibold text-red-700">{product.price}</p>

          {/* Quantity */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-gray-800">Quantity</h2>
            <div className="flex items-center gap-3">
              <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded text-lg font-semibold hover:bg-gray-300 transition">-</button>
              <span className="px-3 text-lg font-medium">1</span>
              <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded text-lg font-semibold hover:bg-gray-300 transition">+</button>
            </div>
            <p className="text-red-500 text-xs">Only 1 piece left in stock.</p>
          </div>

          <button className="bg-red-700 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition">
            Add to Bag
          </button>

          {/* Tabs */}
          <div className="flex flex-col gap-4 mt-6">
            {tabs.map((tab) => (
              <div key={tab.id} className="border-b border-gray-300 pb-2">
                <div
                  className="flex items-center justify-between cursor-pointer py-3 hover:text-red-700 transition"
                  onClick={() => toggleTab(tab.id)}
                >
                  <div className="flex items-center gap-3">
                    {tab.icon}
                    <h3 className="text-lg font-semibold">{tab.title}</h3>
                  </div>
                  <FiChevronRight
                    className={`transition-transform duration-300 ${
                      activeTabs.includes(tab.id) ? "rotate-90 text-red-700" : ""
                    }`}
                    size={22}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeTabs.includes(tab.id) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-2 mt-2 text-sm">{tab.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl py-16 md:text-4xl font-bold text-center mb-6">Customer Reviews</h2>
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-xl shadow-md gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className="text-red-600 w-5 h-5" />
              ))}
            </div>
            <p className="text-gray-700 text-center md:text-left">Be the first to write a review</p>
          </div>
          <button className="bg-[#811314] hover:bg-red-800 text-white px-8 py-2 text-sm md:text-base transition">Write a Review</button>
        </div>
      </div>

      {/* Similar Tone */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-6">
          <div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">Similar Tone</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">Your Handpicked Favorites</p>
          </div>
          <button className="flex items-center text-[#aa2829] font-semibold hover:underline mt-2 sm:mt-0 text-sm sm:text-base md:text-lg">
            View all <FaArrowRight className="ml-1" />
          </button>
        </div>
        <div className="relative">
          <div ref={rightCarouselRefTone} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-2">
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-[45%] md:w-[32%] lg:w-[24%] snap-start bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-t-xl group">
                  <img src={product.img} alt={product.name} className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[430px] object-cover transition-opacity duration-500 group-hover:opacity-0" />
                  <img src={product.hoverImg} alt={`${product.name} hover`} className="absolute inset-0 w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[430px] object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                <div className="px-3 py-2">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">{product.name}</h4>
                  <p className="text-red-700 font-bold mt-1">{product.price}</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <FaHeart className="w-4 h-4 cursor-pointer hover:text-red-600 transition" />
                    <FaShippingFast className="w-4 h-4 cursor-pointer hover:text-red-600 transition" />
                    <FaInfoCircle className="w-4 h-4 cursor-pointer hover:text-red-600 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll buttons */}
          <button onClick={scrollPrevTone} className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition z-10">
            <FaArrowLeft />
          </button>
          <button onClick={scrollNextTone} className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition z-10">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Similar Items */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-6">
          <div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">Similar Items</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base md:text-lg">Other Popular Picks</p>
          </div>
          <button className="flex items-center text-[#aa2829] font-semibold hover:underline mt-2 sm:mt-0 text-sm sm:text-base md:text-lg">
            View all <FaArrowRight className="ml-1" />
          </button>
        </div>
        <div className="relative">
          <div ref={rightCarouselRefItems} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-2">
            {products1.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-[45%] md:w-[32%] lg:w-[24%] snap-start bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-t-xl group">
                  <img src={product.img} alt={product.name} className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[430px] object-cover" />
                </div>
                <div className="px-3 py-2">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">{product.name}</h4>
                  <p className="text-red-700 font-bold mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll buttons */}
          <button onClick={scrollPrevItems} className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition z-10">
            <FaArrowLeft />
          </button>
          <button onClick={scrollNextItems} className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition z-10">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
