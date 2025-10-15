// import React, { useState, useEffect } from 'react';

// const images = [
//   "https://www.nalli.com/cdn/shop/files/New_Arrivals_desktop-100.jpg?v=1759328680&width=1500",
//   "https://www.nalli.com/cdn/shop/files/Diwali_desktop-100.jpg?v=1759328785&width=1500",
//   "https://www.nalli.com/cdn/shop/files/Home-Banner-2.jpg?v=1759926309&width=1500",
//   "https://www.nalli.com/cdn/shop/files/Sheer_Desktop.png?v=1759328932&width=1500",
//   "https://www.nalli.com/cdn/shop/files/Home-Banner_Fabrics_Desktop.jpg?v=1757480277&width=1500"
// ];

// const ImageCourcel = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto slide every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent(prev => (prev + 1) % images.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => setCurrent((current + 1) % images.length);
//   const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

//   return (
//     <div className="relative w-full overflow-hidden">
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt={`slide-${index}`}
//           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
//             ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}
//           `}
//         />
//       ))}

//       {/* Left arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 text-xl sm:text-2xl md:text-3xl rounded hover:bg-opacity-70 transition"
//       >
//         &lt;
//       </button>

//       {/* Right arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-2 text-xl sm:text-2xl md:text-3xl rounded hover:bg-opacity-70 transition"
//       >
//         &gt;
//       </button>

//       {/* Responsive height */}
//       <style>
//         {`
//           .relative.w-full {
//             height: 300px; /* mobile */
//           }
//           @media (min-width: 640px) {
//             .relative.w-full {
//               height: 400px; /* tablet */
//             }
//           }
//           @media (min-width: 1024px) {
//             .relative.w-full {
//               height: 500px; /* laptop/desktop */
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ImageCourcel;



import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const images = [
  {
    img: "https://www.nalli.com/cdn/shop/files/New_Arrivals_desktop-100.jpg?v=1759328680&width=1500",
    path: "/sarees_detail_pages",
  },
  {
    img: "https://www.nalli.com/cdn/shop/files/Diwali_desktop-100.jpg?v=1759328785&width=1500",
    path: "/sarees_detail_pages",
  },
  {
    img: "https://www.nalli.com/cdn/shop/files/Home-Banner-2.jpg?v=1759926309&width=1500",
    path: "/sarees_detail_pages",
  },
  {
    img: "https://www.nalli.com/cdn/shop/files/Sheer_Desktop.png?v=1759328932&width=1500",
    path: "/sarees_detail_pages",
  },
  {
    img: "https://www.nalli.com/cdn/shop/files/Home-Banner_Fabrics_Desktop.jpg?v=1757480277&width=1500",
    path: "/sarees_detail_pages",
  },
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative w-full overflow-hidden">
      {images.map((item, index) => (
        <img
          key={index}
          src={item.img}
          alt={`slide-${index}`}
          onClick={() => item.path && navigate(item.path)}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}
          `}
        />
      ))}

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 text-xl sm:text-2xl md:text-3xl rounded hover:bg-opacity-70 transition"
      >
        &lt;
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-2 text-xl sm:text-2xl md:text-3xl rounded hover:bg-opacity-70 transition"
      >
        &gt;
      </button>

      {/* Responsive height */}
      <style>
        {`
          .relative.w-full {
            height: 300px; /* mobile */
          }
          @media (min-width: 640px) {
            .relative.w-full {
              height: 400px; /* tablet */
            }
          }
          @media (min-width: 1024px) {
            .relative.w-full {
              height: 500px; /* laptop/desktop */
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageCarousel;
