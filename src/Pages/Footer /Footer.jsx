import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 font-sans">
      {/* ===== Top Section ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-sm text-center sm:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>Gift Vouchers</li>
            <li>Collections</li>
            <li>Sarees</li>
            <li>Career</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
            About Us
          </h3>
          <ul className="space-y-2">
            <li>Our History</li>
            <li>The Nalli Promise (Blog)</li>
            <li>Lookbook</li>
            <li>Campaigns</li>
            <li>Press</li>
            <li>Product Care</li>
          </ul>
        </div>

        {/* Client Care */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
            Client Care
          </h3>
          <ul className="space-y-2">
            <li>Help / FAQs</li>
            <li>Shipping & Payment</li>
            <li>Returns & Exchange Policy</li>
            <li>Customs, Duties & Taxes</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Track & Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
            Support
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt className="text-white" />
              <span>Track Order</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaPhoneAlt className="text-white" />
              <span>Contact Customer Care</span>
            </li>
          </ul>
        </div>

        {/* Store & Currency */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
            Store Info
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt className="text-white" />
              <span>Store Locator</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaGlobe className="text-white" />
              <span>INR - ₹</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide uppercase">
            Follow Us
          </h3>
          <div className="flex items-center justify-center sm:justify-start gap-5 text-white text-lg">
            <FaInstagram className="cursor-pointer hover:text-[#d97706] transition" />
            <FaFacebookF className="cursor-pointer hover:text-[#d97706] transition" />
            <FaPinterestP className="cursor-pointer hover:text-[#d97706] transition" />
          </div>
        </div>
      </div>

      {/* ===== Bottom Line ===== */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-xs text-center text-gray-400">
        © 1928–2024 Nalli Silk Sarees Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
