import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md text-center">
        {/* Logo */}
        <img
          src="https://cdn.shopify.com/s/files/1/0944/8862/5451/files/Logo_1_200x60@2x.webp?v=1752222706.webp"
          alt="Logo"
          className="mx-auto mb-6 w-24 sm:w-28 md:w-20 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3">
          Sign in
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Enter your email and we'll send you a verification code
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 sm:py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[#9c2d2b] text-sm sm:text-base"
        />

        {/* Continue Button */}
        <button className="w-full bg-[#9c2d2b] text-white font-medium py-2 sm:py-3 rounded-md hover:bg-[#7a1d1b] transition-all text-sm sm:text-base">
          Continue
        </button>

        {/* Privacy and Terms */}
        <p className="text-xs sm:text-sm text-gray-500 mt-6 leading-relaxed px-2">
          By continuing, you agree to our{" "}
          <span className="text-[#9c2d2b] hover:underline cursor-pointer">
            Privacy Policy
          </span>{" "}
          and{" "}
          <span className="text-[#9c2d2b] hover:underline cursor-pointer">
            Terms of Service
          </span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
