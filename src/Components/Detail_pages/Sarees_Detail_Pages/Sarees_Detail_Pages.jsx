
// import React, { useState, forwardRef } from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaPinterestP,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaGlobe,
// } from "react-icons/fa";
// import {
//   Dialog,
//   DialogContent,
//   Slide,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemText,
//   Checkbox,
//   FormControlLabel,
//   Slider,
//   Collapse,
// } from "@mui/material";
// import { FaFilter, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

// // ✅ Slide Transitions
// const TransitionDown = forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });
// const TransitionRight = forwardRef(function Transition(props, ref) {
//   return <Slide direction="right" ref={ref} {...props} />;
// });

// // ✅ Products Data
// const products = [
//   {
//     name: "Aaradhya-Pink with Maroon Dual Tone Kanchipuram Silk Saree",
//     price: "₹8,959.00",
//     img: "https://www.nalli.com/cdn/shop/files/nf2811121_m.jpg?v=1756223850&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/nf2811121_pp.jpg?v=1756223850&width=300",
//   },
//   {
//     name: "Rekha-Off White Kanchipuram Silk Saree",
//     price: "₹17,762.00",
//     img: "https://www.nalli.com/cdn/shop/files/NF2907344_M.jpg?v=1759235659&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/HB2469039_C.jpg?v=1759730206&width=300",
//   },
//   {
//     name: "Aabha-Pink with Green Half and Half Kanchipuram Silk Saree",
//     price: "₹26,219.00",
//     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396977_M.jpg?v=1758278793&width=300",
//   },
//   {
//     name: "Rukmini-Off White Kanchipuram Silk Saree",
//     price: "₹21,145.00",
//     img: "https://www.nalli.com/cdn/shop/files/NF2904129_M.jpg?v=1759235676&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=300",
//   },
//   {
//     name: "Vaani-Mustard Yellow Kanchipuram Silk Saree",
//     price: "₹18,500.00",
//     img: "https://www.nalli.com/cdn/shop/files/NS4656880_M.jpg?v=1759235588&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396979_M.jpg?v=1758281484&width=300",
//   },
//   {
//     name: "Shobha-Arraku Red Kanchipuram Silk Saree",
//     price: "₹7,999.00",
//     img: "https://www.nalli.com/cdn/shop/files/NS4671447_M.jpg?v=1759235371&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/BE1398206_M.jpg?v=1758281333&width=300",
//   },
//   {
//     name: "Dark Blue Banarasi Silk Saree",
//     price: "₹15,299.00",
//     img: "https://www.nalli.com/cdn/shop/files/NF2907400_M.jpg?v=1758777003&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396983_M.jpg?v=1758281224&width=300",
//   },
//   {
//     name: "Swarnika-Pink Kanchipuram Silk Saree",
//     price: "₹19,999.00",
//     img: "https://www.nalli.com/cdn/shop/files/NS4668527_M.jpg?v=1759235369&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/bs3265007_pp.jpg?v=1756671370&width=300",
//   },
//   {
//     name: "Rose pink Kanchipuram Silk Saree",
//     price: "₹22,000.00",
//     img: "https://www.nalli.com/cdn/shop/files/NF2903836_M.jpg?v=1758776992&width=1946",
//     hoverImg: "https://www.nalli.com/cdn/shop/files/AH5164314_BO.jpg?v=1760075301&width=300",
//   },
// ];

// const allProducts = Array(19 * 48)
//   .fill(0)
//   .map((_, i) => products[i % products.length]);

// // ✅ Main Component
// const Sarees_Detail_Pages = () => {
//   const [openSort, setOpenSort] = useState(false);
//   const [openFilter, setOpenFilter] = useState(false);
//   const [expanded, setExpanded] = useState({});
//   const [page, setPage] = useState(1);

//   const perPage = 48;
//   const totalPages = 19;
//   const currentProducts = allProducts.slice((page - 1) * perPage, page * perPage);

//   const handleToggle = (key) =>
//     setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

//   const handleSortOpen = () => setOpenSort(true);
//   const handleSortClose = () => setOpenSort(false);
//   const handleFilterOpen = () => setOpenFilter(true);
//   const handleFilterClose = () => setOpenFilter(false);

//   const sortOptions = [
//     "Featured",
//     "Best selling",
//     "Alphabetically, A-Z",
//     "Alphabetically, Z-A",
//     "Price, low to high",
//     "Price, high to low",
//     "Date, old to new",
//     "Date, new to old",
//   ];

//   return (
//     <>
//     <div className="min-h-screen bg-white">
//       {/* Breadcrumb */}
//       <div className="max-w-7xl mx-auto px-4 py-2 text-sm text-gray-600 flex items-center space-x-2">
//         <span className="cursor-pointer hover:underline">Home</span>
//         <span>|</span>
//         <span className="font-semibold">Kanchipuram Pure Sarees</span>
//       </div>

//       {/* Title */}
//       <h1 className="text-center text-2xl sm:text-3xl font-bold mt-6 mb-2">
//         Kanchipuram Pure Sarees
//       </h1>
//       <div className="border-t border-gray-300 w-full mt-3"></div>

//       {/* Filters + Sort */}
//      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center border-b border-gray-300 gap-2">
//   {/* Filter Button */}
//   <div
//     onClick={handleFilterOpen}
//     className="flex items-center space-x-2 text-gray-800 font-medium cursor-pointer hover:text-black text-sm sm:text-base"
//   >
//     <FaFilter className="text-lg sm:text-xl" />
//     <span>Show Filters</span>
//   </div>

//   {/* Item Count */}
//   <div className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-0">
//     904 ITEMS
//   </div>

//   {/* Sort Button */}
//   <div className="relative mt-1 sm:mt-0">
//     <button
//       onClick={handleSortOpen}
//       className="flex items-center space-x-1 text-black font-semibold text-sm sm:text-base"
//     >
//       <span>FEATURED</span>
//       <FaChevronDown className="ml-1 text-gray-700" />
//     </button>
//   </div>
// </div>


//      <Dialog
//   open={openSort}
//   onClose={handleSortClose}
//   TransitionComponent={TransitionDown}
//   fullWidth
//   maxWidth="xs" // MUI responsive width
//   PaperProps={{
//     sx: {
//       borderRadius: "12px",
//       position: "fixed",
//       right: { xs: "0", sm: "auto", md: 20 }, // mobile: full width, desktop: 20px from right
//       left: { xs: 0, sm: "50%", md: "auto" }, // center on tablet
//       top: { xs: "auto", sm: "50%", md: "50%" }, // vertically centered for tablet & desktop
//       bottom: { xs: 0, sm: "auto", md: "auto" }, // mobile bottom
//       transform: {
//         xs: "none", // no translate on mobile
//         sm: "translate(-50%, -50%)",
//         md: "translateY(-50%)",
//       },
//       width: { xs: "100%", sm: 300, md: 300 }, // full width on mobile, fixed on larger screens
//       m: 0,
//     },
//   }}
// >
//   <DialogContent className="p-0">
//     <div className="flex justify-between items-end px-4 py-3 border-b">
//       <h3 className="font-semibold text-gray-800">Sort By</h3>
//       <IconButton onClick={handleSortClose} size="small">
//         <FaTimes />
//       </IconButton>
//     </div>
//     <List>
//       {sortOptions.map((option, index) => (
//         <ListItemButton key={index} onClick={handleSortClose}>
//           <ListItemText primary={option} />
//         </ListItemButton>
//       ))}
//     </List>
//   </DialogContent>
// </Dialog>


//     {/* --- Filter Dialog --- */}
// <Dialog
//   open={openFilter}
//   onClose={handleFilterClose}
//   TransitionComponent={TransitionRight}
//   keepMounted
//   PaperProps={{
//     sx: {
//       position: "fixed",
//       left: { xs: 0, sm: 20, md: 20 },           // Mobile: full screen left, tablet/laptop small left gap
//       top: { xs: "auto", sm: 20, md: 20 },       // Mobile: from bottom, others: 20px from top
//       bottom: { xs: 0, sm: "auto", md: "auto" }, // Mobile: bottom 0, tablet/laptop auto
//       m: 0,
//       height: { xs: "70vh", sm: "90vh", md: "100vh" }, // Mobile shorter, tablet taller, laptop full
//       width: { xs: "100%", sm: 400, md: 400 },   // Mobile full width, others fixed
//       borderRadius: { xs: "12px 12px 0 0", sm: 0, md: 0 }, // Mobile rounded top, others square
//       overflow: "hidden",
//     },
//   }}
// >
//   <DialogContent className="p-0 bg-white">
//     {/* Header */}
//     <div className="flex justify-between items-center px-4 py-3 border-b">
//       <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Filter</h3>
//       <IconButton onClick={handleFilterClose}>
//         <FaTimes />
//       </IconButton>
//     </div>

//     {/* Scrollable Filter Sections */}
//     <div className="overflow-y-auto px-4 py-2 space-y-4 h-[calc(100vh-60px)] sm:h-[calc(90vh-56px)] md:h-[calc(100vh-56px)]">
//       {/* CATEGORY */}
//       <Section title="Category" expanded={expanded} onToggle={handleToggle}>
//         {[
//           "Kanchipuram Brocade - Half Fine/Without Zari",
//           "Kanchipuram Brocade - Pure Zari",
//           "Kanchipuram Butta - Half Fine/Without Zari",
//           "Kanchipuram Butta - Pure Zari",
//           "Kanchipuram Jacquard - Half Fine/Without Zari",
//           "Kanchipuram Jacquard - Pure Zari",
//           "Kanchipuram Plain Body, Koadu Kattam And Half & Half - Half Fine/Without Zari",
//           "Kanchipuram Plain Body, Koadu Kattam And Half & Half - Pure Zari",
//           "Kanchipuram Without Border",
//         ].map((item, i) => (
//           <FormControlLabel key={i} control={<Checkbox size="small" />} label={item} />
//         ))}
//       </Section>

//       {/* BLOUSE */}
//       <Section title="Blouse" expanded={expanded} onToggle={handleToggle}>
//         {["Contrast", "Matching", "No Blouse"].map((item, i) => (
//           <FormControlLabel key={i} control={<Checkbox size="small" />} label={item} />
//         ))}
//       </Section>

//       {/* BORDER */}
//       <Section title="Border" expanded={expanded} onToggle={handleToggle}>
//         {["Attached Border", "Checks Border", "Fancy Border", "Ganga Jamuna Border", "Plain Border", "Temple Border"].map(
//           (item, i) => <FormControlLabel key={i} control={<Checkbox size="small" />} label={item} />
//         )}
//       </Section>

//       {/* PRICE */}
//       <Section title="Price" expanded={expanded} onToggle={handleToggle}>
//         <div className="px-2">
//           <Slider defaultValue={[0, 312375]} min={0} max={312375} sx={{ color: "blue" }} />
//           <div className="flex justify-between text-sm text-gray-700">
//             <span>₹0</span>
//             <span>₹312,375</span>
//           </div>
//         </div>
//       </Section>

//       {/* COLOR */}
//       <Section title="Color" expanded={expanded} onToggle={handleToggle}>
//         {["Beige", "Black", "Blue", "Bottle Green", "Brick Orange", "Bronze"].map(
//           (item, i) => <FormControlLabel key={i} control={<Checkbox size="small" />} label={item} />
//         )}
//       </Section>
//     </div>
// </DialogContent>
// </Dialog>

//       {/* --- Product Grid --- */}
//       <div className="max-w-7xl mx-auto px-4 py-10">
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             {/* <h2 className="text-2xl font-bold">Diwali Edit</h2> */}
//             {/* <p className="text-gray-600">Festive sarees for every moment of celebration.</p> */}
//           </div>
          
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {currentProducts.map((product, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow hover:shadow-xl transition hover:scale-105 overflow-hidden"
//             >
//               <div className="relative group">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-full h-[420px] object-cover transition-opacity duration-500 group-hover:opacity-0"
//                 />
//                 <img
//                   src={product.hoverImg}
//                   alt={`${product.name} hover`}
//                   className="absolute inset-0 w-full h-[420px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                 />
//               </div>
//               <div className="p-3">
//                 <h3 className="font-semibold text-base mb-1 hover:text-blue-600 transition">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-700 font-medium">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//        <div className="flex justify-center mt-10 gap-2">
//   <button
//     onClick={() => setPage((p) => Math.max(1, p - 1))}
//     disabled={page === 1}
//     className={`px-3 py-1 rounded ${
//       page === 1 ? "bg-gray-100 text-gray-400" : "bg-gray-200 hover:bg-gray-300"
//     }`}
//   >
//     Prev
//   </button>

//   {Array.from({ length: totalPages }, (_, i) => i + 1)
//     .filter(
//       (p) =>
//         p === 1 ||
//         p === totalPages ||
//         (p >= page - 2 && p <= page + 2)
//     )
//     .reduce((acc, p, i, arr) => {
//       if (i > 0 && arr[i - 1] !== p - 1) acc.push("...");
//       acc.push(p);
//       return acc;
//     }, [])
//     .map((p, i) =>
//       p === "..." ? (
//         <span key={i} className="px-2 text-gray-500">
//           ...
//         </span>
//       ) : (
//         <button
//           key={p}
//           onClick={() => setPage(p)}
//           className={`px-3 py-1 rounded ${
//             page === p
//               ? "bg-[#aa2829] text-white"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           {p}
//         </button>
//       )
//     )}

//   <button
//     onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//     disabled={page === totalPages}
//     className={`px-3 py-1 rounded ${
//       page === totalPages
//         ? "bg-gray-100 text-gray-400"
//         : "bg-gray-200 hover:bg-gray-300"
//     }`}
//   >
//     Next
//   </button>
// </div>

//       </div>
//     </div>

//     {/* newslater */}
//       <section className="bg-[#f9f6f2] py-12 px-4 flex flex-col items-center text-center">
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

//     {/* fooder */}
//      <footer className="bg-black text-gray-300 py-12 px-6 font-sans">
//            {/* ===== Top Section ===== */}
//            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-sm text-center sm:text-left">
//              {/* Quick Links */}
//              <div>
//                <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                  Quick Links
//                </h3>
//                <ul className="space-y-2">
//                  <li>Gift Vouchers</li>
//                  <li>Collections</li>
//                  <li>Sarees</li>
//                  <li>Career</li>
//                </ul>
//              </div>
     
//              {/* About Us */}
//              <div>
//                <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                  About Us
//                </h3>
//                <ul className="space-y-2">
//                  <li>Our History</li>
//                  <li>The Nalli Promise (Blog)</li>
//                  <li>Lookbook</li>
//                  <li>Campaigns</li>
//                  <li>Press</li>
//                  <li>Product Care</li>
//                </ul>
//              </div>
     
//              {/* Client Care */}
//              <div>
//                <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                  Client Care
//                </h3>
//                <ul className="space-y-2">
//                  <li>Help / FAQs</li>
//                  <li>Shipping & Payment</li>
//                  <li>Returns & Exchange Policy</li>
//                  <li>Customs, Duties & Taxes</li>
//                  <li>Terms & Conditions</li>
//                  <li>Privacy Policy</li>
//                  <li>Cookie Policy</li>
//                  <li>Disclaimer</li>
//                </ul>
//              </div>
     
//              {/* Track & Contact */}
//              <div>
//                <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                  Support
//                </h3>
//                <ul className="space-y-3">
//                  <li className="flex items-center justify-center sm:justify-start gap-2">
//                    <FaMapMarkerAlt className="text-white" />
//                    <span>Track Order</span>
//                  </li>
//                  <li className="flex items-center justify-center sm:justify-start gap-2">
//                    <FaPhoneAlt className="text-white" />
//                    <span>Contact Customer Care</span>
//                  </li>
//                </ul>
//              </div>
     
//              {/* Store & Currency */}
//              <div>
//                <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                  Store Info
//                </h3>
//                <ul className="space-y-3">
//                  <li className="flex items-center justify-center sm:justify-start gap-2">
//                    <FaMapMarkerAlt className="text-white" />
//                    <span>Store Locator</span>
//                  </li>
//                  <li className="flex items-center justify-center sm:justify-start gap-2">
//                    <FaGlobe className="text-white" />
//                    <span>INR - ₹</span>
//                  </li>
//                </ul>
//              </div>
     
//              {/* Social Links */}
//              <div>
//                <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
//                  Follow Us
//                </h3>
//                <div className="flex items-center justify-center sm:justify-start gap-5 text-white text-lg">
//                  <FaInstagram className="cursor-pointer hover:text-[#d97706] transition" />
//                  <FaFacebookF className="cursor-pointer hover:text-[#d97706] transition" />
//                  <FaPinterestP className="cursor-pointer hover:text-[#d97706] transition" />
//                </div>
//              </div>
//            </div>
     
//            {/* ===== Bottom Line ===== */}
//            <div className="border-t border-gray-700 mt-10 pt-5 text-xs text-center text-gray-400">
//              © 1928–2024 Nalli Silk Sarees Pvt. Ltd. All Rights Reserved.
//            </div>
//          </footer>
//     </>
//   );
// };

// // ✅ Collapsible Filter Section
// const Section = ({ title, children, expanded, onToggle }) => (
//   <div className="border-b pb-2">
//     <div
//       className="flex justify-between items-center cursor-pointer py-2"
//       onClick={() => onToggle(title)}
//     >
//       <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
//       {expanded[title] ? <FaChevronUp /> : <FaChevronDown />}
//     </div>
//     <Collapse in={expanded[title]}>
//       <div className="pl-2 mt-1">{children}</div>
//     </Collapse>
//   </div>
// );

// export default Sarees_Detail_Pages;

import React, { useState, forwardRef, useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  Slide,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Checkbox,
  FormControlLabel,
  Slider,
  Collapse,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Slide Transitions
const TransitionDown = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const TransitionRight = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

// ✅ Products Data
const products = [
  {
    name: "Aaradhya-Pink with Maroon Dual Tone Kanchipuram Silk Saree",
    price: "₹8,959.00",
    img: "https://www.nalli.com/cdn/shop/files/nf2811121_m.jpg?v=1756223850&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/nf2811121_pp.jpg?v=1756223850&width=300",
  },
  {
    name: "Rekha-Off White Kanchipuram Silk Saree",
    price: "₹17,762.00",
    img: "https://www.nalli.com/cdn/shop/files/NF2907344_M.jpg?v=1759235659&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/HB2469039_C.jpg?v=1759730206&width=300",
  },
  {
    name: "Aabha-Pink with Green Half and Half Kanchipuram Silk Saree",
    price: "₹26,219.00",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396977_M.jpg?v=1758278793&width=300",
  },
  {
    name: "Rukmini-Off White Kanchipuram Silk Saree",
    price: "₹21,145.00",
    img: "https://www.nalli.com/cdn/shop/files/NF2904129_M.jpg?v=1759235676&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=300",
  },
  {
    name: "Vaani-Mustard Yellow Kanchipuram Silk Saree",
    price: "₹18,500.00",
    img: "https://www.nalli.com/cdn/shop/files/NS4656880_M.jpg?v=1759235588&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396979_M.jpg?v=1758281484&width=300",
  },
  {
    name: "Shobha-Arraku Red Kanchipuram Silk Saree",
    price: "₹7,999.00",
    img: "https://www.nalli.com/cdn/shop/files/NS4671447_M.jpg?v=1759235371&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1398206_M.jpg?v=1758281333&width=300",
  },
  {
    name: "Dark Blue Banarasi Silk Saree",
    price: "₹15,299.00",
    img: "https://www.nalli.com/cdn/shop/files/NF2907400_M.jpg?v=1758777003&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/BE1396983_M.jpg?v=1758281224&width=300",
  },
  {
    name: "Swarnika-Pink Kanchipuram Silk Saree",
    price: "₹19,999.00",
    img: "https://www.nalli.com/cdn/shop/files/NS4668527_M.jpg?v=1759235369&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/bs3265007_pp.jpg?v=1756671370&width=300",
  },
  {
    name: "Rose pink Kanchipuram Silk Saree",
    price: "₹22,000.00",
    img: "https://www.nalli.com/cdn/shop/files/NF2903836_M.jpg?v=1758776992&width=1946",
    hoverImg: "https://www.nalli.com/cdn/shop/files/AH5164314_BO.jpg?v=1760075301&width=300",
  },
];

const allProducts = Array(19 * 48).fill(0).map((_, i) => products[i % products.length]);

const animations = ["fade-up","fade-down","fade-left","fade-right","flip-left","flip-right","zoom-in","zoom-in-up","zoom-in-down"];

// ✅ Main Component
const Sarees_Detail_Pages = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const [openSort, setOpenSort] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [page, setPage] = useState(1);

  const perPage = 48;
  const totalPages = 19;
  const currentProducts = allProducts.slice((page - 1) * perPage, page * perPage);

  const handleToggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  const handleSortOpen = () => setOpenSort(true);
  const handleSortClose = () => setOpenSort(false);
  const handleFilterOpen = () => setOpenFilter(true);
  const handleFilterClose = () => setOpenFilter(false);

  const sortOptions = [
    "Featured","Best selling","Alphabetically, A-Z","Alphabetically, Z-A",
    "Price, low to high","Price, high to low","Date, old to new","Date, new to old"
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-2 text-sm text-gray-600 flex items-center space-x-2" data-aos={animations[0]}>
          <span className="cursor-pointer hover:underline">Home</span>
          <span>|</span>
          <span className="font-semibold">Kanchipuram Pure Sarees</span>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl font-bold mt-6 mb-2" data-aos={animations[1]}>
          Kanchipuram Pure Sarees
        </h1>
        <div className="border-t border-gray-300 w-full mt-3" data-aos={animations[2]}></div>

        {/* Filters + Sort */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center border-b border-gray-300 gap-2" data-aos={animations[3]}>
          <div onClick={handleFilterOpen} className="flex items-center space-x-2 text-gray-800 font-medium cursor-pointer hover:text-black text-sm sm:text-base">
            <FaFilter className="text-lg sm:text-xl" />
            <span>Show Filters</span>
          </div>
          <div className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-0">904 ITEMS</div>
          <div className="relative mt-1 sm:mt-0">
            <button onClick={handleSortOpen} className="flex items-center space-x-1 text-black font-semibold text-sm sm:text-base">
              <span>FEATURED</span>
              <FaChevronDown className="ml-1 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Sort Dialog */}
        <Dialog open={openSort} onClose={handleSortClose} TransitionComponent={TransitionDown} fullWidth maxWidth="xs" PaperProps={{ sx: { borderRadius: "12px", position: "fixed", right: { xs: "0", sm: "auto", md: 20 }, left: { xs: 0, sm: "50%", md: "auto" }, top: { xs: "auto", sm: "50%", md: "50%" }, bottom: { xs: 0, sm: "auto", md: "auto" }, transform: { xs: "none", sm: "translate(-50%, -50%)", md: "translateY(-50%)" }, width: { xs: "100%", sm: 300, md: 300 }, m: 0 } }}>
          <DialogContent className="p-0">
            <div className="flex justify-between items-end px-4 py-3 border-b">
              <h3 className="font-semibold text-gray-800">Sort By</h3>
              <IconButton onClick={handleSortClose} size="small"><FaTimes /></IconButton>
            </div>
            <List>
              {sortOptions.map((option, index) => (
                <ListItemButton key={index} onClick={handleSortClose}><ListItemText primary={option} /></ListItemButton>
              ))}
            </List>
          </DialogContent>
        </Dialog>

        {/* Filter Dialog */}
        <Dialog open={openFilter} onClose={handleFilterClose} TransitionComponent={TransitionRight} keepMounted PaperProps={{ sx: { position: "fixed", left: { xs: 0, sm: 20, md: 20 }, top: { xs: "auto", sm: 20, md: 20 }, bottom: { xs: 0, sm: "auto", md: "auto" }, m: 0, height: { xs: "70vh", sm: "90vh", md: "100vh" }, width: { xs: "100%", sm: 400, md: 400 }, borderRadius: { xs: "12px 12px 0 0", sm: 0, md: 0 }, overflow: "hidden" } }}>
          <DialogContent className="p-0 bg-white">
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Filter</h3>
              <IconButton onClick={handleFilterClose}><FaTimes /></IconButton>
            </div>
            <div className="overflow-y-auto px-4 py-2 space-y-4 h-[calc(100vh-60px)] sm:h-[calc(90vh-56px)] md:h-[calc(100vh-56px)]">
              <Section title="Category" expanded={expanded} onToggle={handleToggle}>
                {["Kanchipuram Brocade - Half Fine/Without Zari","Kanchipuram Brocade - Pure Zari","Kanchipuram Butta - Half Fine/Without Zari","Kanchipuram Butta - Pure Zari","Kanchipuram Jacquard - Half Fine/Without Zari","Kanchipuram Jacquard - Pure Zari","Kanchipuram Plain Body, Koadu Kattam And Half & Half - Half Fine/Without Zari","Kanchipuram Plain Body, Koadu Kattam And Half & Half - Pure Zari","Kanchipuram Without Border"].map((item, i) => <FormControlLabel key={i} control={<Checkbox size="small" />} label={item} />)}
              </Section>
              <Section title="Blouse" expanded={expanded} onToggle={handleToggle}>
                {["Contrast", "Matching", "No Blouse"].map((item, i) => <FormControlLabel key={i} control={<Checkbox size="small" />} label={item} />)}
              </Section>
              <Section title="Border" expanded={expanded} onToggle={handleToggle}>
                {["Attached Border","Checks Border","Fancy Border","Ganga Jamuna Border","Plain Border","Temple Border"].map((item, i) => <FormControlLabel key={i} control={<Checkbox size="small" />} label={item} />)}
              </Section>
              <Section title="Price" expanded={expanded} onToggle={handleToggle}>
                <div className="px-2"><Slider defaultValue={[0,312375]} min={0} max={312375} sx={{ color: "blue" }} />
                  <div className="flex justify-between text-sm text-gray-700"><span>₹0</span><span>₹312,375</span></div>
                </div>
              </Section>
              <Section title="Color" expanded={expanded} onToggle={handleToggle}>
                {["Beige","Black","Blue","Bottle Green","Brick Orange","Bronze"].map((item, i) => <FormControlLabel key={i} control={<Checkbox size="small" />} label={item} />)}
              </Section>
            </div>
          </DialogContent>
        </Dialog>

        {/* --- Product Grid --- */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-8"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-xl transition hover:scale-105 overflow-hidden" data-aos={animations[index % animations.length]}>
                <div className="relative group">
                  <img src={product.img} alt={product.name} className="w-full h-[420px] object-cover transition-opacity duration-500 group-hover:opacity-0" />
                  <img src={product.hoverImg} alt={`${product.name} hover`} className="absolute inset-0 w-full h-[420px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-base mb-1 hover:text-blue-600 transition">{product.name}</h3>
                  <p className="text-gray-700 font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2">
            <button onClick={() => setPage((p) => Math.max(1,p-1))} disabled={page===1} className={`px-3 py-1 rounded ${page===1?"bg-gray-100 text-gray-400":"bg-gray-200 hover:bg-gray-300"}`}>Prev</button>
            {Array.from({length:totalPages},(_,i)=>i+1).filter(p=>p===1||p===totalPages||(p>=page-2&&p<=page+2)).reduce((acc,p,i,arr)=>{if(i>0&&arr[i-1]!==p-1) acc.push("..."); acc.push(p); return acc;},[]).map((p,i)=>
              p==="..."? <span key={i} className="px-2 text-gray-500">...</span> :
              <button key={p} onClick={()=>setPage(p)} className={`px-3 py-1 rounded ${page===p?"bg-[#aa2829] text-white":"bg-gray-200 hover:bg-gray-300"}`}>{p}</button>
            )}
            <button onClick={() => setPage((p) => Math.min(totalPages,p+1))} disabled={page===totalPages} className={`px-3 py-1 rounded ${page===totalPages?"bg-gray-100 text-gray-400":"bg-gray-200 hover:bg-gray-300"}`}>Next</button>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <section className="bg-[#f9f6f2] py-12 px-4 flex flex-col items-center text-center" data-aos={animations[4]}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">Enter the world of Nalli</h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-xl px-2">Be the first to know about our latest collections, events and news.</p>
        <form className="w-full max-w-lg flex flex-col sm:flex-row items-center justify-center gap-3 px-2">
          <input type="email" placeholder="Enter your email address" required className="flex-1 border border-gray-300 rounded-md px-4 py-3 w-full text-sm sm:text-base focus:outline-none focus:border-[#d97706] transition" />
          <button type="submit" className="bg-[#d97706] text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto text-sm sm:text-base hover:bg-[#b45309] transition">Subscribe</button>
        </form>
        <p className="text-xs text-gray-500 mt-6 max-w-md px-2 leading-relaxed">By entering your email address, you are accepting our <span className="underline cursor-pointer hover:text-[#d97706]">Terms & Conditions</span> and <span className="underline cursor-pointer hover:text-[#d97706]">Privacy & Cookie Policy</span>.</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 px-6 font-sans" data-aos={animations[5]}>
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-sm text-center sm:text-left">
          {/* Quick Links */}
          <div><h3 className="text-white font-semibold mb-4 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-2"><li>Gift Vouchers</li><li>Collections</li><li>Sarees</li><li>Career</li></ul>
          </div>
          {/* About Us */}
          <div><h3 className="text-white font-semibold mb-4 tracking-wide uppercase">About Us</h3>
            <ul className="space-y-2"><li>Our History</li><li>The Nalli Promise (Blog)</li><li>Lookbook</li><li>Campaigns</li><li>Press</li><li>Product Care</li></ul>
          </div>
          {/* Client Care */}
          <div><h3 className="text-white font-semibold mb-4 tracking-wide uppercase">Client Care</h3>
            <ul className="space-y-2"><li>Help / FAQs</li><li>Shipping & Payment</li><li>Returns & Exchange Policy</li><li>Customs, Duties & Taxes</li><li>Terms & Conditions</li><li>Privacy Policy</li><li>Cookie Policy</li><li>Disclaimer</li></ul>
          </div>
          {/* Support */}
          <div><h3 className="text-white font-semibold mb-4 tracking-wide uppercase">Support</h3>
            <ul className="space-y-3"><li className="flex items-center justify-center sm:justify-start gap-2"><FaMapMarkerAlt className="text-white"/><span>Track Order</span></li><li className="flex items-center justify-center sm:justify-start gap-2"><FaPhoneAlt className="text-white"/><span>Contact Customer Care</span></li></ul>
          </div>
          {/* Store Info */}
          <div><h3 className="text-white font-semibold mb-4 tracking-wide uppercase">Store Info</h3>
            <ul className="space-y-3"><li className="flex items-center justify-center sm:justify-start gap-2"><FaMapMarkerAlt className="text-white"/><span>Store Locator</span></li><li className="flex items-center justify-center sm:justify-start gap-2"><FaGlobe className="text-white"/><span>INR - ₹</span></li></ul>
          </div>
          {/* Social */}
          <div><h3 className="text-white font-semibold mb-4 tracking-wide uppercase">Follow Us</h3>
            <div className="flex items-center justify-center sm:justify-start gap-5 text-white text-lg"><FaInstagram className="cursor-pointer hover:text-[#d97706] transition"/><FaFacebookF className="cursor-pointer hover:text-[#d97706] transition"/><FaPinterestP className="cursor-pointer hover:text-[#d97706] transition"/></div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-5 text-xs text-center text-gray-400">© 1928–2024 Nalli Silk Sarees Pvt. Ltd. All Rights Reserved.</div>
      </footer>
    </>
  );
};

// ✅ Collapsible Filter Section
const Section = ({ title, children, expanded, onToggle }) => (
  <div className="border-b pb-2">
    <div className="flex justify-between items-center cursor-pointer py-2" onClick={() => onToggle(title)}>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      {expanded[title] ? <FaChevronUp /> : <FaChevronDown />}
    </div>
    <Collapse in={expanded[title]}>
      <div className="pl-2 mt-1">{children}</div>
    </Collapse>
  </div>
);

export default Sarees_Detail_Pages;
