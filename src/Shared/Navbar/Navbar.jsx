

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
//             <div className="flex items-center gap-3">
//               <img
//                 src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
//                 alt="Nalli Logo"
//                 className="w-16 h-11 md:w-24"
//               />
//               {/* Icons next to logo on mobile */}
//               <div className="flex sm:hidden items-center gap-3 text-gray-700 text-lg">
//                 <FaSearch onClick={() => setSearchOpen(true)} className="cursor-pointer hover:text-[#9c2d2b]" />
//                 <FaUser className="cursor-pointer hover:text-[#9c2d2b]" />
//                 <FaHeart className="cursor-pointer hover:text-[#9c2d2b]" />
//                 <FaShoppingBag className="cursor-pointer hover:text-[#9c2d2b]" />
//               </div>
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

//             {/* Right section for desktop */}
//             <div className="hidden sm:flex items-center gap-4">
//               <FaSearch className="hover:text-[#9c2d2b] cursor-pointer" onClick={() => setSearchOpen(true)} />
//               <FaUser className="hover:text-[#9c2d2b] cursor-pointer" />
//               <FaHeart className="hover:text-[#9c2d2b] cursor-pointer" />
//               <FaShoppingBag className="hover:text-[#9c2d2b] cursor-pointer" />
//             </div>

//             {/* Hamburger for mobile */}
//             <div className="sm:hidden text-gray-700 text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//               {mobileMenuOpen ? <FaTimes /> : <FaBars />}
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










// import React, { useState } from "react";
// import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// import { Dialog, DialogContent, TextField, Card, CardMedia, CardContent, Typography } from "@mui/material";
// import Navbar_Menu from "../Navbar_Menu/Navbar_Menu";
// import { useNavigate } from "react-router-dom";


// const menuItems = [
//   "NEW ARRIVALS ",
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
//     const navigate = useNavigate();

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [menuDialogOpen, setMenuDialogOpen] = useState(false);
//   const [selectedMenu, setSelectedMenu] = useState("");
//   const [query, setQuery] = useState("");

//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <>
//       <div className="sticky top-0 z-50 bg-white shadow-sm">

//         <header className="w-full">
//         <div className="bg-[#9c2d2b] text-white text-xs md:text-sm text-center py-1 md:py-2 px-4">
//         Free shipping on orders over ₹4,999 within India and ₹39,999 internationally* | Customs charges as applicable * | T&C apply.
//       </div>
//           <nav className="flex items-center justify-between px-4 md:px-8 py-3 relative">
//             {/* Logo and mobile icons */}
//             <div className="flex items-center gap-3">
//               <img
//                 src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
//                 alt="Nalli Logo"
//                 className="w-16 h-11 md:w-24"
//                               onClick={() => navigate("/")}

//               />
//               {/* Icons on mobile next to logo */}
//               <div className="flex sm:hidden items-center gap-3 text-gray-700 text-lg">
//                 <FaSearch onClick={() => setSearchOpen(true)} className="cursor-pointer hover:text-[#9c2d2b]" />
//                 <FaUser className="cursor-pointer hover:text-[#9c2d2b]" />
//                 <FaHeart className="cursor-pointer hover:text-[#9c2d2b]" />
//                 <FaShoppingBag className="cursor-pointer hover:text-[#9c2d2b]" />
//               </div>
//             </div>

//             {/* Desktop / Tablet Menu */}
//             <ul className="hidden sm:flex md:flex items-center gap-4 lg:gap-6 text-sm md:text-[12px] font-semibold text-gray-800 flex-wrap">
//               {menuItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 whitespace-nowrap"
//                   onClick={() => {
//                     setSelectedMenu(item);
//                     setMenuDialogOpen(true);
//                   }}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             {/* Right section for desktop */}
//             <div className="hidden sm:flex items-center gap-4">
//               <FaSearch className="hover:text-[#9c2d2b] cursor-pointer" onClick={() => setSearchOpen(true)} />
//               <FaUser className="hover:text-[#9c2d2b] cursor-pointer" />
//               <FaHeart className="hover:text-[#9c2d2b] cursor-pointer" />
//               <FaShoppingBag className="hover:text-[#9c2d2b] cursor-pointer" />
//             </div>

//             {/* Hamburger for mobile */}
//             <div className="sm:hidden text-gray-700 text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//               {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//             </div>

//             {/* Mobile Menu Drawer */}
//             {mobileMenuOpen && (
//               <div className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden z-50">
//                 <ul className="flex flex-col gap-4 p-4 text-gray-800">
//                   {menuItems.map((item, index) => (
//                     <li
//                       key={index}
//                       className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 border-b border-gray-200 pb-2"
//                       onClick={() => {
//                         setSelectedMenu(item);
//                         setMenuDialogOpen(true);
//                         setMobileMenuOpen(false); // close mobile menu on click
//                       }}
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </nav>
//         </header>
//       </div>

//       {/* Menu Dialog */}
//       <Navbar_Menu
//         open={menuDialogOpen}
//         handleClose={() => setMenuDialogOpen(false)}
//         menuItems={menuItems}
//         selectedMenu={selectedMenu}
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
// import { Dialog, DialogContent, TextField, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
// import Navbar_Menu from "../Navbar_Menu/Navbar_Menu";
// import { useNavigate } from "react-router-dom";

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
//   const navigate = useNavigate();

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [menuDialogOpen, setMenuDialogOpen] = useState(false);
//   const [selectedMenu, setSelectedMenu] = useState("");
//   const [query, setQuery] = useState("");
//   const [accountOpen, setAccountOpen] = useState(false); // new state for account dropdown

//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <>
//       <div className="sticky top-0 z-50 bg-white shadow-sm">
//         <header className="w-full">
//           <div className="bg-[#9c2d2b] text-white text-xs md:text-sm text-center py-1 md:py-2 px-4">
//             Free shipping on orders over ₹4,999 within India and ₹39,999 internationally* | Customs charges as applicable * | T&C apply.
//           </div>
//           <nav className="flex items-center justify-between px-4 md:px-8 py-3 relative">
//             {/* Logo and mobile icons */}
//             <div className="flex items-center gap-3">
//               <img
//                 src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
//                 alt="Nalli Logo"
//                 className="w-16 h-11 md:w-24 cursor-pointer"
//                 onClick={() => navigate("/")}
//               />
//               {/* Icons on mobile next to logo */}
//               <div className="flex sm:hidden items-center gap-3 text-gray-700 text-lg">
//                 <FaSearch onClick={() => setSearchOpen(true)} className="cursor-pointer hover:text-[#9c2d2b]" />
//                 <FaUser
//                   className="cursor-pointer hover:text-[#9c2d2b]"
//                   onClick={() => setAccountOpen(!accountOpen)}
//                 />
//                 <FaHeart className="cursor-pointer hover:text-[#9c2d2b]" />
//                 <FaShoppingBag className="cursor-pointer hover:text-[#9c2d2b]" />
//               </div>
//             </div>

//             {/* Desktop / Tablet Menu */}
//             <ul className="hidden sm:flex md:flex items-center gap-4 lg:gap-6 text-sm md:text-[12px] font-semibold text-gray-800 flex-wrap">
//               {menuItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 whitespace-nowrap"
//                   onClick={() => {
//                     setSelectedMenu(item);
//                     setMenuDialogOpen(true);
//                   }}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             {/* Right section for desktop */}
//             <div className="hidden sm:flex items-center gap-4 relative">
//               <FaSearch className="hover:text-[#9c2d2b] cursor-pointer" onClick={() => setSearchOpen(true)} />
//               <FaUser
//                 className="hover:text-[#9c2d2b] cursor-pointer"
//                 onClick={() => setAccountOpen(!accountOpen)}
//               />
//               <FaHeart className="hover:text-[#9c2d2b] cursor-pointer" />
//               <FaShoppingBag className="hover:text-[#9c2d2b] cursor-pointer" />

//               {/* Account Dropdown */}
//               {accountOpen && (
//                 <Box className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded z-50 p-3">
//                   <Typography variant="subtitle1" className="mb-2">Account</Typography>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     className="bg-[#9c2d2b] hover:bg-[#7a1d1b] mb-2 py-4"
//                   >
//                     Sign In
//                   </Button>
//                   <div className="flex gap-2 py-4">
//                     <Button variant="outlined" fullWidth>
//                       Orders
//                     </Button>
//                     <Button variant="outlined" fullWidth>
//                       Profile
//                     </Button>
//                   </div>
//                 </Box>
//               )}
//             </div>

//             {/* Hamburger for mobile */}
//             <div
//               className="sm:hidden text-gray-700 text-2xl cursor-pointer"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//             </div>

//             {/* Mobile Menu Drawer */}
//             {mobileMenuOpen && (
//               <div className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden z-50">
//                 <ul className="flex flex-col gap-4 p-4 text-gray-800">
//                   {menuItems.map((item, index) => (
//                     <li
//                       key={index}
//                       className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 border-b border-gray-200 pb-2"
//                       onClick={() => {
//                         setSelectedMenu(item);
//                         setMenuDialogOpen(true);
//                         setMobileMenuOpen(false);
//                       }}
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </nav>
//         </header>
//       </div>

//       {/* Menu Dialog */}
//       <Navbar_Menu
//         open={menuDialogOpen}
//         handleClose={() => setMenuDialogOpen(false)}
//         menuItems={menuItems}
//         selectedMenu={selectedMenu}
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
// import {
//   FaSearch,
//   FaUser,
//   FaHeart,
//   FaShoppingBag,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import {
//   Dialog,
//   DialogContent,
//   TextField,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Box,
// } from "@mui/material";
// import Navbar_Menu from "../Navbar_Menu/Navbar_Menu";
// import { useNavigate } from "react-router-dom";

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
//   {
//     id: 1,
//     name: "Product 1",
//     price: "$10",
//     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: "$15",
//     img: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=1946",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: "$20",
//     img: "https://www.nalli.com/cdn/shop/files/BE1396976_PB.jpg?v=1758281746&width=1946",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     price: "$25",
//     img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946",
//   },
// ];

// const Navbar = () => {
//   const navigate = useNavigate();

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [menuDialogOpen, setMenuDialogOpen] = useState(false);
//   const [selectedMenu, setSelectedMenu] = useState("");
//   const [query, setQuery] = useState("");

//   const [desktopAccountOpen, setDesktopAccountOpen] = useState(false); // desktop/tablet
//   const [mobileAccountOpen, setMobileAccountOpen] = useState(false); // mobile

//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <>
//       <div className="sticky top-0 z-50 bg-white shadow-sm">
//         <header className="w-full">
//           {/* Top Banner */}
//           <div className="bg-[#9c2d2b] text-white text-xs md:text-sm text-center py-1 md:py-2 px-4">
//             Free shipping on orders over ₹4,999 within India and ₹39,999
//             internationally* | Customs charges as applicable * | T&C apply.
//           </div>

//           <nav className="flex items-center justify-between px-4 md:px-8 py-3 relative">
//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <img
//                 src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
//                 alt="Nalli Logo"
//                 className="w-16 h-11 md:w-24 cursor-pointer"
//                 onClick={() => navigate("/")}
//               />
//               {/* Mobile Icons next to logo */}
//               <div className="flex sm:hidden items-center gap-3 text-gray-700 text-lg">
//                 <FaSearch
//                   onClick={() => setSearchOpen(true)}
//                   className="cursor-pointer hover:text-[#9c2d2b]"
//                 />
//                 <FaUser
//                   className="cursor-pointer hover:text-[#9c2d2b]"
//                   onClick={() => setMobileAccountOpen(!mobileAccountOpen)}
//                 />
//                 {/* <FaHeart className="cursor-pointer hover:text-[#9c2d2b]" /> */}
//                 <FaShoppingBag className="cursor-pointer hover:text-[#9c2d2b]" />
//               </div>
//             </div>

//             {/* Desktop / Tablet Menu */}
//             <ul className="hidden sm:flex md:flex items-center gap-4 lg:gap-6 text-sm md:text-[12px] font-semibold text-gray-800 flex-wrap">
//               {menuItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 whitespace-nowrap"
//                   onClick={() => {
//                     setSelectedMenu(item);
//                     setMenuDialogOpen(true);
//                   }}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             {/* Right Section Desktop/Tablet */}
//             <div className="hidden sm:flex items-center gap-4 relative">
//               <FaSearch
//                 className="hover:text-[#9c2d2b] cursor-pointer"
//                 onClick={() => setSearchOpen(true)}
//               />
//               <FaUser
//                 className="hover:text-[#9c2d2b] cursor-pointer"
//                 onClick={() => setDesktopAccountOpen(!desktopAccountOpen)}
//               />
//               {/* <FaHeart className="hover:text-[#9c2d2b]" /> */}
//               <FaShoppingBag className="hover:text-[#9c2d2b]" />

//               {/* Desktop Account Dropdown */}
//               {desktopAccountOpen && (
//                 <Box className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded z-50 p-3">
//                   <Typography variant="subtitle1" className="mb-2">
//                     Account
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     className="bg-[#9c2d2b] hover:bg-[#7a1d1b] mb-2 py-4"
//                   >
//                     Sign In
//                   </Button>
//                   <div className="flex gap-2 py-4">
//                     <Button variant="outlined" fullWidth>
//                       Orders
//                     </Button>
//                     <Button variant="outlined" fullWidth>
//                       Profile
//                     </Button>
//                   </div>
//                 </Box>
//               )}
//             </div>

//             {/* Hamburger for Mobile */}
//             <div
//               className="sm:hidden text-gray-700 text-2xl cursor-pointer"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//             </div>

//             {/* Mobile Menu Drawer */}
//             {mobileMenuOpen && (
//               <div className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden z-50">
//                 <ul className="flex flex-col gap-4 p-4 text-gray-800">
//                   {menuItems.map((item, index) => (
//                     <li
//                       key={index}
//                       className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 border-b border-gray-200 pb-2"
//                       onClick={() => {
//                         setSelectedMenu(item);
//                         setMenuDialogOpen(true);
//                         setMobileMenuOpen(false);
//                       }}
//                     >
//                       {item}
//                     </li>
//                   ))}
//                   {/* Mobile Account */}
//                   <li className="pt-2">
//                     <Button
//                       variant="contained"
//                       fullWidth
//                       className="bg-[#9c2d2b] hover:bg-[#7a1d1b] mb-2 py-2"
//                       onClick={() =>
//                         setMobileAccountOpen(!mobileAccountOpen)
//                       }
//                     >
//                       Account
//                     </Button>
//                     {mobileAccountOpen && (
//                       <Box className="mt-2 flex flex-col gap-2">
//                         <Button variant="outlined" fullWidth>
//                           Orders
//                         </Button>
//                         <Button variant="outlined" fullWidth>
//                           Profile
//                         </Button>
//                       </Box>
//                     )}
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </nav>
//         </header>
//       </div>

//       {/* Menu Dialog */}
//       <Navbar_Menu
//         open={menuDialogOpen}
//         handleClose={() => setMenuDialogOpen(false)}
//         menuItems={menuItems}
//         selectedMenu={selectedMenu}
//       />

//       {/* Search Dialog */}
//       <Dialog
//         open={searchOpen}
//         onClose={() => setSearchOpen(false)}
//         fullWidth
//         maxWidth="sm"
//       >
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
//               <Card
//                 key={product.id}
//                 className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-12px)]"
//               >
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
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Drawer,
} from "@mui/material";
import Navbar_Menu from "../Navbar_Menu/Navbar_Menu";
import { useNavigate } from "react-router-dom";

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
  {
    id: 1,
    name: "Peach Banarasi Silk Saree",
    price: "$10",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_0990.jpg?v=1758278793&width=1946",
  },
  {
    id: 2,
    name: "Aaradhya-Pink with Maroon Dual Tone Kanchipuram Silk Saree",
    price: "$15",
    img: "https://www.nalli.com/cdn/shop/files/BE1396978_M.jpg?v=1758281612&width=1946",
  },
  {
    id: 3,
    name: "Magenta Kanchipuram Silk Saree",
    price: "$20",
    img: "https://www.nalli.com/cdn/shop/files/BE1396976_PB.jpg?v=1758281746&width=1946",
  },
  {
    id: 4,
    name: "Dark Blue Soft Silk Saree",
    price: "$25",
    img: "https://www.nalli.com/cdn/shop/files/Copy_of_Nalli_Diwali_2025_1020.jpg?v=1758280967&width=1946",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuDialogOpen, setMenuDialogOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [query, setQuery] = useState("");
  const [desktopAccountOpen, setDesktopAccountOpen] = useState(false);
  const [mobileAccountOpen, setMobileAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <header className="w-full">
          {/* Top Banner */}
          <div className="bg-[#9c2d2b] text-white text-xs md:text-sm text-center py-1 md:py-2 px-4">
            Free shipping on orders over ₹4,999 within India and ₹39,999
            internationally* | Customs charges as applicable * | T&C apply.
          </div>

          <nav className="flex items-center justify-between px-4 md:px-8 py-3 relative">
            {/* Logo */}
        <div className="flex items-center justify-between px-2 md:px-4">
  {/* Mobile Icons */}
  <div className="flex sm:hidden items-center gap-4 text-gray-700 text-lg">
    <FaSearch
      onClick={() => setSearchOpen(true)}
      className="cursor-pointer hover:text-[#9c2d2b]"
    />
    <FaUser
      className="cursor-pointer hover:text-[#9c2d2b]"
      onClick={() => setMobileAccountOpen(!mobileAccountOpen)}
    />
    <FaShoppingBag
      className="cursor-pointer hover:text-[#9c2d2b]"
      onClick={() => setCartOpen(true)}
    />
  </div>

  {/* Logo Centered */}
  <div className="flex-1  px-4 flex justify-center">
    <img
      src="https://www.nalli.com/cdn/shop/files/Logo_1.webp?height=55&v=1752222706"
      alt="Nalli Logo"
      className="w-16 h-11 md:w-24 cursor-pointer"
      onClick={() => navigate("/")}
    />
  </div>
</div>


            {/* Desktop / Tablet Menu */}
            <ul className="hidden sm:flex md:flex items-center gap-4 lg:gap-6 text-sm md:text-[12px] font-semibold text-gray-800 flex-wrap">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-[#9c2d2b] cursor-pointer transition-colors duration-200 whitespace-nowrap"
                  onClick={() => {
                    setSelectedMenu(item);
                    setMenuDialogOpen(true);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Right Section Desktop */}
            <div className="hidden sm:flex items-center gap-4 relative">
              <FaSearch
                className="hover:text-[#9c2d2b] cursor-pointer"
                onClick={() => setSearchOpen(true)}
              />
              <FaUser
                className="hover:text-[#9c2d2b] cursor-pointer"
                onClick={() => setDesktopAccountOpen(!desktopAccountOpen)}
              />
              <FaShoppingBag
                className="hover:text-[#9c2d2b]"
                onClick={() => setCartOpen(true)}
              />

              {/* Desktop Account Dropdown */}
              {(desktopAccountOpen || mobileAccountOpen) && (
                <Box className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded z-50 p-3">
                  <Typography variant="subtitle1" className="mb-2">
                    Account
                  </Typography>
                  <Button
                                          onClick={() => navigate("/login")}

                    variant="contained"
                    fullWidth

                    className="bg-[#9c2d2b] hover:bg-[#7a1d1b] mb-2 py-4"
                  >
                    Sign In
                    
                  </Button>

                  <div className="flex gap-2 py-4 flex-col sm:flex-row">
                    <Button variant="outlined" fullWidth>
                      Orders
                    </Button>
                    <Button variant="outlined" fullWidth>
                      Profile
                    </Button>
                  </div>
                </Box>
              )}
            </div>

            {/* Hamburger for Mobile */}
            <div
              className="sm:hidden text-gray-700 text-2xl cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
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
                      onClick={() => {
                        setSelectedMenu(item);
                        setMenuDialogOpen(true);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                  {/* Mobile Account */}
                  <li className="pt-2">
                    <Button
                      variant="contained"
                      fullWidth
                      className="bg-[#9c2d2b] hover:bg-[#7a1d1b] mb-2 py-2"
                      onClick={() =>
                        setMobileAccountOpen(!mobileAccountOpen)
                      }
                    >
                      Account
                    </Button>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </header>
      </div>

      {/* Menu Dialog */}
      <Navbar_Menu
        open={menuDialogOpen}
        handleClose={() => setMenuDialogOpen(false)}
        menuItems={menuItems}
        selectedMenu={selectedMenu}
      />

      {/* Search Dialog */}
      <Dialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        fullWidth
        maxWidth="sm"
      >
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
              <Card
                key={product.id}
                className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-12px)]"
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.img}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6 text-xs">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Shopping Bag Drawer */}
    <Drawer
  anchor="right"
  open={cartOpen}
  onClose={() => setCartOpen(false)}
>
  <Box className="flex flex-col items-center w-[90vw] max-w-sm p-6 text-center h-full">
    {/* Top Title with border */}
    <Typography
      variant="h5"
      className="w-full text-left font-semibold border-b border-gray-300 pb-2 mb-6"
    >
      Shopping Bag
    </Typography>

    <FaShoppingBag className="text-6xl items-center py-20 text-gray-400 mb-4" />
    <Typography variant="h4" className="mb-2">
      Your cart is empty
    </Typography>
    <Typography variant="body1" className="mb-6">
      Have an account? Log in to see your saved items.
    </Typography>

    <Button
      variant="contained"
      fullWidth
      className="bg-[#a42829] hover:bg-[#7a1d1b] py-3"
    >
      Continue Shopping
    </Button>
  </Box>
</Drawer>

    </>
  );
};

export default Navbar;
