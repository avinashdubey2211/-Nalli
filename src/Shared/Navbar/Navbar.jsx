
// // import React, { useState } from "react";
// // import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// // import { IoIosArrowDown } from "react-icons/io";
// // import {
// //   Dialog,
// //   DialogContent,
// //   TextField,
// //   Card,
// //   CardMedia,
// //   CardContent,
// //   Typography,
// // } from "@mui/material";

// // const countries = [
// //   { code: "INR", name: "India", flag: "https://flagcdn.com/w20/in.png" },
// //   { code: "USD", name: "USA", flag: "https://flagcdn.com/w20/us.png" },
// //   { code: "GBP", name: "UK", flag: "https://flagcdn.com/w20/gb.png" },
// //   { code: "EUR", name: "Germany", flag: "https://flagcdn.com/w20/de.png" },
// //   { code: "AUD", name: "Australia", flag: "https://flagcdn.com/w20/au.png" },
// //   { code: "CAD", name: "Canada", flag: "https://flagcdn.com/w20/ca.png" },
// //   { code: "SGD", name: "Singapore", flag: "https://flagcdn.com/w20/sg.png" },
// //   { code: "JPY", name: "Japan", flag: "https://flagcdn.com/w20/jp.png" },
// //   { code: "CNY", name: "China", flag: "https://flagcdn.com/w20/cn.png" },
// //   { code: "CHF", name: "Switzerland", flag: "https://flagcdn.com/w20/ch.png" },
// //   { code: "AED", name: "UAE", flag: "https://flagcdn.com/w20/ae.png" },
// //   { code: "SAR", name: "Saudi Arabia", flag: "https://flagcdn.com/w20/sa.png" },
// //   { code: "NZD", name: "New Zealand", flag: "https://flagcdn.com/w20/nz.png" },
// //   { code: "MYR", name: "Malaysia", flag: "https://flagcdn.com/w20/my.png" },
// //   { code: "THB", name: "Thailand", flag: "https://flagcdn.com/w20/th.png" },
// //   { code: "KRW", name: "South Korea", flag: "https://flagcdn.com/w20/kr.png" },
// //   { code: "IDR", name: "Indonesia", flag: "https://flagcdn.com/w20/id.png" },
// //   { code: "BRL", name: "Brazil", flag: "https://flagcdn.com/w20/br.png" },
// //   { code: "MXN", name: "Mexico", flag: "https://flagcdn.com/w20/mx.png" },
// //   { code: "ZAR", name: "South Africa", flag: "https://flagcdn.com/w20/za.png" },
// // ];

// // const products = [
// //   { id: 1, name: "Product 1", price: "$10", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946" },
// //   { id: 2, name: "Product 2", price: "$15", img: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=1946" },
// //   { id: 3, name: "Product 3", price: "$20", img: "https://www.nalli.com/cdn/shop/files/BE1396976_PB.jpg?v=1758281746&width=1946" },
// //   { id: 4, name: "Product 4", price: "$25", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946" },
// // ];

// // const Navbar = () => {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [currencyOpen, setCurrencyOpen] = useState(false);
// //   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
// //   const [searchOpen, setSearchOpen] = useState(false);
// //   const [query, setQuery] = useState("");

// //   const menuItems = [
// //     "NEW ARRIVALS",
// //     "KANCHIPURAM",
// //     "BANARASI",
// //     "OCCASIONS",
// //     "NALLI EXCLUSIVE",
// //     "SHOP ALL",
// //     "FABRICS",
// //     "OUR STORY",
// //     "STORES",
// //   ];

// //   const filteredProducts = products.filter((p) =>
// //     p.name.toLowerCase().includes(query.toLowerCase())
// //   );

// //   return (
// //     <>
// // <div className="sticky top-0 z-50 bg-white">
// //     <header className="w-full ">
// //       {/* Top Red Info Bar */}
// //       <div className="bg-[#9c2d2b] text-white text-xs md:text-sm text-center py-1 md:py-2 px-4">
// //         Free shipping on orders over ₹4,999 within India and ₹39,999 internationally* | Customs charges as applicable * | T&C apply.
// //       </div>

// //       {/* Main Navbar */}
// //       <nav className="flex items-center justify-between bg-white px-4 md:px-8 py-3 shadow-sm relative">
// //         {/* Logo */}
// //         <div className="flex-shrink-0">
// //           <img
// //             src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
// //             alt="Nalli Logo"
// //             className="w-16 h-11 md:w-24"
// //           />
// //         </div>

// //         {/* Menu - Tablet & Desktop */}
// //         <ul className="hidden sm:flex md:flex items-center gap-4 lg:gap-6 text-sm md:text-[12px] font-semibold text-gray-800 flex-wrap">
// //           {menuItems.map((item, index) => (
// //             <li key={index} className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 whitespace-nowrap">
// //               {item}
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Right Section */}
// //         <div className="flex items-center gap-3 sm:gap-4 relative">
// //           {/* Currency Dropdown */}
// //           <div className="relative">
// //             <div
// //               className="flex items-center gap-1 sm:gap-2 border rounded-lg px-2 sm:px-3 py-1 shadow-sm cursor-pointer hover:bg-gray-50 transition"
// //               onClick={() => setCurrencyOpen(!currencyOpen)}
// //             >
// //               <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-4 h-3 sm:w-5 sm:h-3 object-cover" />
// //               <span className="text-xs sm:text-sm font-medium text-gray-700">{selectedCountry.code}</span>
// //               <IoIosArrowDown className={`text-gray-500 text-[10px] sm:text-xs transition-transform ${currencyOpen ? "rotate-180" : ""}`} />
// //             </div>

// //             {currencyOpen && (
// //               <div className="absolute top-full right-0 w-40 sm:w-48 bg-white border shadow-lg mt-1 rounded-md max-h-64 overflow-y-auto z-50">
// //                 {countries.map((country, index) => (
// //                   <div
// //                     key={index}
// //                     className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
// //                     onClick={() => {
// //                       setSelectedCountry(country);
// //                       setCurrencyOpen(false);
// //                     }}
// //                   >
// //                     <img src={country.flag} alt={country.name} className="w-5 h-3 object-cover" />
// //                     <span className="text-sm text-gray-800">{country.name}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Icons - Tablet & Desktop */}
// //           <div className="hidden sm:flex items-center gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg cursor-pointer">
// //             <FaSearch className="hover:text-[#9c2d2b] transition-colors duration-200" onClick={() => setSearchOpen(true)} />
// //             <FaUser className="hover:text-[#9c2d2b] transition-colors duration-200" />
// //             <FaHeart className="hover:text-[#9c2d2b] transition-colors duration-200" />
// //             <FaShoppingBag className="hover:text-[#9c2d2b] transition-colors duration-200" />
// //           </div>

// //           {/* Hamburger for Mobile */}
// //           <div className="sm:hidden text-gray-700 text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// //             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {mobileMenuOpen && (
// //           <div className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden z-50">
// //             <ul className="flex flex-col gap-4 p-4 text-gray-800">
// //               {menuItems.map((item, index) => (
// //                 <li
// //                   key={index}
// //                   className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 border-b border-gray-200 pb-2"
// //                 >
// //                   {item}
// //                 </li>
// //               ))}
                
// //               {/* Mobile Icons */}
// //               <div className="flex items-center gap-4 mt-4 text-gray-700 text-lg px-2">
// //                 <FaSearch className="hover:text-[#9c2d2b] transition-colors duration-200" onClick={() => setSearchOpen(true)} />
// //                 <FaUser className="hover:text-[#9c2d2b] transition-colors duration-200" />
// //                 <FaHeart className="hover:text-[#9c2d2b] transition-colors duration-200" />
// //                 <FaShoppingBag className="hover:text-[#9c2d2b] transition-colors duration-200" />
// //               </div>
// //             </ul>
// //           </div>
// //         )}
// //       </nav>

// //       {/* Search Dialog */}
// //       <Dialog open={searchOpen} onClose={() => setSearchOpen(false)} fullWidth maxWidth="sm">
// //         <DialogContent>
// //           <TextField
// //             fullWidth
// //             variant="outlined"
// //             placeholder="Search..."
// //             value={query}
// //             onChange={(e) => setQuery(e.target.value)}
// //             sx={{ mb: 3 }}
// //           />

// //           {/* Flex container for cards */}
// //           <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-start">
// //             {filteredProducts.map((product) => (
// //               <Card key={product.id} className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-12px)]">
// //                 <CardMedia
// //                   component="img"
// //                   height="140"
// //                   image={product.img}
// //                   alt={product.name}
// //                 />
// //                 <CardContent>
// //                   <Typography variant="h6">{product.name}</Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     {product.price}
// //                   </Typography>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </DialogContent>
// //       </Dialog>
// //     </header>
// //     </div>
// //     </>
// //   );
// // };

// // export default Navbar;




// import React, { useState } from "react";
// import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import {
//   Dialog,
//   DialogContent,
//   TextField,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
// } from "@mui/material";

// const countries = [
//   { code: "INR", name: "India", flag: "https://flagcdn.com/w20/in.png" },
//   { code: "USD", name: "USA", flag: "https://flagcdn.com/w20/us.png" },
//   { code: "GBP", name: "UK", flag: "https://flagcdn.com/w20/gb.png" },
//   { code: "EUR", name: "Germany", flag: "https://flagcdn.com/w20/de.png" },
//   { code: "AUD", name: "Australia", flag: "https://flagcdn.com/w20/au.png" },
//   { code: "CAD", name: "Canada", flag: "https://flagcdn.com/w20/ca.png" },
//   { code: "SGD", name: "Singapore", flag: "https://flagcdn.com/w20/sg.png" },
//   { code: "JPY", name: "Japan", flag: "https://flagcdn.com/w20/jp.png" },
//   { code: "CNY", name: "China", flag: "https://flagcdn.com/w20/cn.png" },
//   { code: "CHF", name: "Switzerland", flag: "https://flagcdn.com/w20/ch.png" },
//   { code: "AED", name: "UAE", flag: "https://flagcdn.com/w20/ae.png" },
//   { code: "SAR", name: "Saudi Arabia", flag: "https://flagcdn.com/w20/sa.png" },
//   { code: "NZD", name: "New Zealand", flag: "https://flagcdn.com/w20/nz.png" },
//   { code: "MYR", name: "Malaysia", flag: "https://flagcdn.com/w20/my.png" },
//   { code: "THB", name: "Thailand", flag: "https://flagcdn.com/w20/th.png" },
//   { code: "KRW", name: "South Korea", flag: "https://flagcdn.com/w20/kr.png" },
//   { code: "IDR", name: "Indonesia", flag: "https://flagcdn.com/w20/id.png" },
//   { code: "BRL", name: "Brazil", flag: "https://flagcdn.com/w20/br.png" },
//   { code: "MXN", name: "Mexico", flag: "https://flagcdn.com/w20/mx.png" },
//   { code: "ZAR", name: "South Africa", flag: "https://flagcdn.com/w20/za.png" },
// ];

// const products = [
//   { id: 1, name: "Product 1", price: "$10", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946" },
//   { id: 2, name: "Product 2", price: "$15", img: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=1946" },
//   { id: 3, name: "Product 3", price: "$20", img: "https://www.nalli.com/cdn/shop/files/BE1396976_PB.jpg?v=1758281746&width=1946" },
//   { id: 4, name: "Product 4", price: "$25", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946" },
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currencyOpen, setCurrencyOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const menuItems = [
//     "NEW ARRIVALS",// esko
//     "KANCHIPURAM",
//     "BANARASI",
//     "OCCASIONS",
//     "NALLI EXCLUSIVE",
//     "SHOP ALL",
//     "FABRICS",
//     "OUR STORY",
//     "STORES",
//   ];

//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <>
// <div className="sticky top-0 z-50 bg-white">
//     <header className="w-full ">
//       {/* Top Red Info Bar */}
//       <div className="bg-[#9c2d2b] text-white text-xs md:text-sm text-center py-1 md:py-2 px-4">
//         Free shipping on orders over ₹4,999 within India and ₹39,999 internationally* | Customs charges as applicable * | T&C apply.
//       </div>

//       {/* Main Navbar */}
//       <nav className="flex items-center justify-between bg-white px-4 md:px-8 py-3 shadow-sm relative">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img
//             src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
//             alt="Nalli Logo"
//             className="w-16 h-11 md:w-24"
//           />
//         </div>

//         {/* Menu - Tablet & Desktop */}
//         <ul className="hidden sm:flex md:flex items-center gap-4 lg:gap-6 text-sm md:text-[12px] font-semibold text-gray-800 flex-wrap">
//           {menuItems.map((item, index) => (
//             <li key={index} className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 whitespace-nowrap">
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Right Section */}
//         <div className="flex items-center gap-3 sm:gap-4 relative">
//           {/* Currency Dropdown */}
//           <div className="relative">
//             <div
//               className="flex items-center gap-1 sm:gap-2 border rounded-lg px-2 sm:px-3 py-1 shadow-sm cursor-pointer hover:bg-gray-50 transition"
//               onClick={() => setCurrencyOpen(!currencyOpen)}
//             >
//               <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-4 h-3 sm:w-5 sm:h-3 object-cover" />
//               <span className="text-xs sm:text-sm font-medium text-gray-700">{selectedCountry.code}</span>
//               <IoIosArrowDown className={`text-gray-500 text-[10px] sm:text-xs transition-transform ${currencyOpen ? "rotate-180" : ""}`} />
//             </div>

//             {currencyOpen && (
//               <div className="absolute top-full right-0 w-40 sm:w-48 bg-white border shadow-lg mt-1 rounded-md max-h-64 overflow-y-auto z-50">
//                 {countries.map((country, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => {
//                       setSelectedCountry(country);
//                       setCurrencyOpen(false);
//                     }}
//                   >
//                     <img src={country.flag} alt={country.name} className="w-5 h-3 object-cover" />
//                     <span className="text-sm text-gray-800">{country.name}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Icons - Tablet & Desktop */}
//           <div className="hidden sm:flex items-center gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg cursor-pointer">
//             <FaSearch className="hover:text-[#9c2d2b] transition-colors duration-200" onClick={() => setSearchOpen(true)} />
//             <FaUser className="hover:text-[#9c2d2b] transition-colors duration-200" />
//             <FaHeart className="hover:text-[#9c2d2b] transition-colors duration-200" />
//             <FaShoppingBag className="hover:text-[#9c2d2b] transition-colors duration-200" />
//           </div>

//           {/* Hamburger for Mobile */}
//           <div className="sm:hidden text-gray-700 text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden z-50">
//             <ul className="flex flex-col gap-4 p-4 text-gray-800">
//               {menuItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 border-b border-gray-200 pb-2"
//                 >
//                   {item}
//                 </li>
//               ))}
                
//               {/* Mobile Icons */}
//               <div className="flex items-center gap-4 mt-4 text-gray-700 text-lg px-2">
//                 <FaSearch className="hover:text-[#9c2d2b] transition-colors duration-200" onClick={() => setSearchOpen(true)} />
//                 <FaUser className="hover:text-[#9c2d2b] transition-colors duration-200" />
//                 <FaHeart className="hover:text-[#9c2d2b] transition-colors duration-200" />
//                 <FaShoppingBag className="hover:text-[#9c2d2b] transition-colors duration-200" />
//               </div>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* Search Dialog */}
//       <Dialog open={searchOpen} onClose={() => setSearchOpen(false)} fullWidth maxWidth="sm">
//         <DialogContent>
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             sx={{ mb: 3 }}
//           />

//           {/* Flex container for cards */}
//           <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-start">
//             {filteredProducts.map((product) => (
//               <Card key={product.id} className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-12px)]">
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={product.img}
//                   alt={product.name}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">{product.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.price}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </header>
//     </div>
//     </>
//   );
// };

// export default Navbar;








// import React, { useState } from "react";
// import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { Dialog, DialogContent, TextField, Card, CardMedia, CardContent, Typography } from "@mui/material";
// import Navbar_Menu from "../Navbar_Menu/Navbar_Menu";
// // import Navbar_Menu from './Shared/Navbar_Menu/Navbar_Menu'

// const menuItems = [
//   "NEW ARRIVALS",
//   "KANCHIPURAM",
//   "BANARASI",
//   "OCCASIONS",
//   "NALLI EXCLUSIVE",
//   "SHOP ALL",
//   "FABRICS",
//   "OUR STORY",
//   "STORES",
// ];

// const products = [
//   { id: 1, name: "Product 1", price: "$10", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946" },
//   { id: 2, name: "Product 2", price: "$15", img: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=1946" },
//   { id: 3, name: "Product 3", price: "$20", img: "https://www.nalli.com/cdn/shop/files/BE1396976_PB.jpg?v=1758281746&width=1946" },
//   { id: 4, name: "Product 4", price: "$25", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946" },
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const [menuDialogOpen, setMenuDialogOpen] = useState(false);

//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <>
//       <div className="sticky top-0 z-50 bg-white">
//         <header className="w-full ">
//           {/* Main Navbar */}
//           <nav className="flex items-center justify-between bg-white px-4 md:px-8 py-3 shadow-sm relative">
//             <div className="flex-shrink-0">
//               <img
//                 src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
//                 alt="Nalli Logo"
//                 className="w-16 h-11 md:w-24"
//               />
//             </div>

//             <ul className="hidden sm:flex md:flex items-center gap-4 lg:gap-6 text-sm md:text-[12px] font-semibold text-gray-800 flex-wrap">
//               {menuItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 whitespace-nowrap"
//                   onClick={() => setMenuDialogOpen(true)} // Open dialog on click
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             {/* Right icons and mobile menu */}
//             <div className="flex items-center gap-3 sm:gap-4 relative">
//               <FaSearch className="hidden sm:block hover:text-[#9c2d2b] cursor-pointer" onClick={() => setSearchOpen(true)} />
//               <FaUser className="hidden sm:block hover:text-[#9c2d2b] cursor-pointer" />
//               <FaHeart className="hidden sm:block hover:text-[#9c2d2b] cursor-pointer" />
//               <FaShoppingBag className="hidden sm:block hover:text-[#9c2d2b] cursor-pointer" />
//               <div className="sm:hidden text-gray-700 text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                 {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>

//       {/* Menu Dialog */}
//       <Navbar_Menu
//         open={menuDialogOpen}
//         handleClose={() => setMenuDialogOpen(false)}
//         menuItems={menuItems}
//       />

//       {/* Search Dialog */}
//       <Dialog open={searchOpen} onClose={() => setSearchOpen(false)} fullWidth maxWidth="sm">
//         <DialogContent>
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             sx={{ mb: 3 }}
//           />
//           <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-start">
//             {filteredProducts.map((product) => (
//               <Card key={product.id} className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-12px)]">
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={product.img}
//                   alt={product.name}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">{product.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.price}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";
// import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// import { Dialog, DialogContent, TextField, Card, CardMedia, CardContent, Typography } from "@mui/material";
// import Navbar_Menu from "../Navbar_Menu/Navbar_Menu";

// const menuItems = [
//   "NEW ARRIVALS",
//   "KANCHIPURAM",
//   "BANARASI",
//   "OCCASIONS",
//   "NALLI EXCLUSIVE",
//   "SHOP ALL",
//   "FABRICS",
//   "OUR STORY",
//   "STORES",
// ];

// const products = [
//   { id: 1, name: "Product 1", price: "$10", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946" },
//   { id: 2, name: "Product 2", price: "$15", img: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=1946" },
//   { id: 3, name: "Product 3", price: "$20", img: "https://www.nalli.com/cdn/shop/files/BE1396976_PB.jpg?v=1758281746&width=1946" },
//   { id: 4, name: "Product 4", price: "$25", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946" },
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [menuDialogOpen, setMenuDialogOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <>
//       <div className="sticky top-0 z-50 bg-white shadow-sm">
//         <header className="w-full">
//           <nav className="flex items-center justify-between px-4 md:px-8 py-3 relative">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <img
//                 src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
//                 alt="Nalli Logo"
//                 className="w-16 h-11 md:w-24"
//               />
//             </div>

//             {/* Desktop / Tablet Menu */}
//             <ul className="hidden sm:flex md:flex items-center gap-4 lg:gap-6 text-sm md:text-[12px] font-semibold text-gray-800 flex-wrap">
//               {menuItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 whitespace-nowrap"
//                   onClick={() => setMenuDialogOpen(true)}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             {/* Icons and Hamburger */}
//             <div className="flex items-center gap-3 sm:gap-4 relative">
//               <FaSearch className="hidden sm:block hover:text-[#9c2d2b] cursor-pointer" onClick={() => setSearchOpen(true)} />
//               <FaUser className="hidden sm:block hover:text-[#9c2d2b] cursor-pointer" />
//               <FaHeart className="hidden sm:block hover:text-[#9c2d2b] cursor-pointer" />
//               <FaShoppingBag className="hidden sm:block hover:text-[#9c2d2b] cursor-pointer" />

//               {/* Mobile Hamburger */}
//               <div className="sm:hidden text-gray-700 text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                 {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//               </div>
//             </div>

//             {/* Mobile Menu Drawer */}
//             {mobileMenuOpen && (
//               <div className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden z-50">
//                 <ul className="flex flex-col gap-4 p-4 text-gray-800">
//                   {menuItems.map((item, index) => (
//                     <li
//                       key={index}
//                       className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 border-b border-gray-200 pb-2"
//                       onClick={() => setMenuDialogOpen(true)}
//                     >
//                       {item}
//                     </li>
//                   ))}
//                   {/* Mobile Icons */}
//                   <div className="flex items-center gap-4 mt-4 text-gray-700 text-lg px-2">
//                     <FaSearch className="hover:text-[#9c2d2b]" onClick={() => setSearchOpen(true)} />
//                     <FaUser className="hover:text-[#9c2d2b]" />
//                     <FaHeart className="hover:text-[#9c2d2b]" />
//                     <FaShoppingBag className="hover:text-[#9c2d2b]" />
//                   </div>
//                 </ul>
//               </div>
//             )}
//           </nav>
//         </header>
//       </div>

//       {/* Desktop Menu Dialog */}
//       <Navbar_Menu
//         open={menuDialogOpen}
//         handleClose={() => setMenuDialogOpen(false)}
//         menuItems={menuItems}
//       />

//       {/* Search Dialog */}
//       <Dialog open={searchOpen} onClose={() => setSearchOpen(false)} fullWidth maxWidth="sm">
//         <DialogContent>
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             sx={{ mb: 3 }}
//           />
//           <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-start">
//             {filteredProducts.map((product) => (
//               <Card key={product.id} className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-12px)]">
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={product.img}
//                   alt={product.name}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">{product.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.price}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { Dialog, DialogContent, TextField, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Navbar_Menu from "../Navbar_Menu/Navbar_Menu";

const menuItems = [
  "NEW ARRIVALS",
  "KANCHIPURAM",
  "BANARASI",
  "OCCASIONS",
  "NALLI EXCLUSIVE",
  "SHOP ALL",
  "FABRICS",
  "OUR STORY",
  "STORES",
];

const products = [
  { id: 1, name: "Product 1", price: "$10", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946" },
  { id: 2, name: "Product 2", price: "$15", img: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=1946" },
  { id: 3, name: "Product 3", price: "$20", img: "https://www.nalli.com/cdn/shop/files/BE1396976_PB.jpg?v=1758281746&width=1946" },
  { id: 4, name: "Product 4", price: "$25", img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuDialogOpen, setMenuDialogOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <header className="w-full">
          <nav className="flex items-center justify-between px-4 md:px-8 py-3 relative">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
                alt="Nalli Logo"
                className="w-16 h-11 md:w-24"
              />
              {/* Icons next to logo on mobile */}
              <div className="flex sm:hidden items-center gap-3 text-gray-700 text-lg">
                <FaSearch onClick={() => setSearchOpen(true)} className="cursor-pointer hover:text-[#9c2d2b]" />
                <FaUser className="cursor-pointer hover:text-[#9c2d2b]" />
                <FaHeart className="cursor-pointer hover:text-[#9c2d2b]" />
                <FaShoppingBag className="cursor-pointer hover:text-[#9c2d2b]" />
              </div>
            </div>

            {/* Desktop / Tablet Menu */}
            <ul className="hidden sm:flex md:flex items-center gap-4 lg:gap-6 text-sm md:text-[12px] font-semibold text-gray-800 flex-wrap">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 whitespace-nowrap"
                  onClick={() => setMenuDialogOpen(true)}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Right section for desktop */}
            <div className="hidden sm:flex items-center gap-4">
              <FaSearch className="hover:text-[#9c2d2b] cursor-pointer" onClick={() => setSearchOpen(true)} />
              <FaUser className="hover:text-[#9c2d2b] cursor-pointer" />
              <FaHeart className="hover:text-[#9c2d2b] cursor-pointer" />
              <FaShoppingBag className="hover:text-[#9c2d2b] cursor-pointer" />
            </div>

            {/* Hamburger for mobile */}
            <div className="sm:hidden text-gray-700 text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden z-50">
                <ul className="flex flex-col gap-4 p-4 text-gray-800">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 border-b border-gray-200 pb-2"
                      onClick={() => setMenuDialogOpen(true)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </header>
      </div>

      {/* Desktop Menu Dialog */}
      <Navbar_Menu
        open={menuDialogOpen}
        handleClose={() => setMenuDialogOpen(false)}
        menuItems={menuItems}
      />

      {/* Search Dialog */}
      <Dialog open={searchOpen} onClose={() => setSearchOpen(false)} fullWidth maxWidth="sm">
        <DialogContent>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{ mb: 3 }}
          />
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-start">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-12px)]">
                <CardMedia
                  component="img"
                  height="140"
                  image={product.img}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
