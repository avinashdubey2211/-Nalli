import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#f9f6f2] py-12 px-4 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        Enter the world of Nalli
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-xl px-2">
        Be the first to know about our latest collections, events and news.
      </p>

      {/* Email Input + Button */}
      <form className="w-full max-w-lg flex flex-col sm:flex-row items-center justify-center gap-3 px-2">
        <input
          type="email"
          placeholder="Enter your email address"
          required
          className="flex-1 border border-gray-300 rounded-md px-4 py-3 w-full text-sm sm:text-base focus:outline-none focus:border-[#d97706] transition"
        />
        <button
          type="submit"
          className="bg-[#d97706] text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto text-sm sm:text-base hover:bg-[#b45309] transition"
        >
          Subscribe
        </button>
      </form>

      {/* Legal Text */}
      <p className="text-xs text-gray-500 mt-6 max-w-md px-2 leading-relaxed">
        By entering your email address, you are accepting our{" "}
        <span className="underline cursor-pointer hover:text-[#d97706]">
          Terms & Conditions
        </span>{" "}
        and{" "}
        <span className="underline cursor-pointer hover:text-[#d97706]">
          Privacy & Cookie Policy
        </span>
        .
      </p>
    </section>
  );
};

export default Newsletter;
