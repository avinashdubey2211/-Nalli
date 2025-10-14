import React from "react";

const Voucher = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10 bg-white">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://www.nalli.com/cdn/shop/files/Gift-Voucher-Banner_Desktop_784x696px_1.webp?v=1757472441&width=750"
          alt="Gift Voucher"
          className="w-[100%] md:w-[90%] rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Gift Voucher
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Celebrate every occasion with the gift of choice <br />
          <span className="text-sm text-gray-500">
            *Gift Vouchers can only be redeemed on Nalli Showrooms within India
          </span>
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
          Buy Gift Card
        </button>
      </div>
    </div>
  );
};

export default Voucher;
