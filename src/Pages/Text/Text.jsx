import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ritika Saha",
    text: "Coming from a Bengali background, finding the perfect Banarasi saree for my wedding day was of utmost importance. I desired a lightweight saree that could be effortlessly worn not only on my Wedding-Day but also on various other occasions. The Katan silk Banarasi saree surpassed my expectations, adorned with exquisite zari motifs, complementing the vibrant dual tones of raani pink and bright red. For years, @nallisilksarees has been our preferred destination for saree shopping. I am delighted that it played a significant role on my special day and will continue to hold a cherished place in my heart and the generations to come.",
  },
  {
    name: "Tara",
    text: "Nalli has always been my trusted source for sarees, but receiving this exquisite gift from my mentor was truly special. Wearing it during Durga Puja garnered many compliments - the perfect choice. To me, a saree epitomizes beauty and grace. Its universal appeal, adaptable across social classes, reflects its transformation from India's initial seamless garment to an emblem of femininity.",
  },
  {
    name: "Priya",
    text: "f Nallis sarees. Our recent Sadabhishekam celebration bmemories, draped in exquisite Kanjeevaram sarees. My mother, sister, daughter, and I shared the joy, each donning a unique piece from Nallis. The pink Kanjeevaram I wore became a radiant symbol of our enduring connection with this beautiful tradition. Gratitude, Nallis, for dressing our family milestones!",
  },
  {
    name: "Niharika Kapoor",
    text: "When my in-laws visited Chennai, we ventured into the heart of tradition, Nalli Chinnaswamy Chetty, for a Kanchipuram Silk saree. The warmth of the store felt more inclusive and prioritized by the customer service. In just 20 minutes, we found the perfect light blue saree that blended elegance with timelessness. Wearing it to my Delhi office, I was overwhelmed with compliments, rivaling those of my wedding attire! As the head of Communications at a TVS group company, I appreciate authenticity. Nalli’s sarees are a true reflection. Excitedly planning my next visit to Nalli Chennai for more silk treasures!",
  },
  {
    name: "Surabhi Jha",
    text: "I’ve recently delved into the world of sarees, exploring various fabrics, colours, and styles, which is a newfound passion of mine. With our family's tradition of wearing new clothes on Ashtami during Durga Puja, I opted for a cotton silk saree from Nalli. It made me feel elegant and allowed me to comfortably hop between pandals while turning heads with the look I put together :)",
  },
  {
    name: "Sona",
    text: "Nalli's reverence during Diwali transcends into every weave, creating sarees that carry stories of tradition and grace. This Kanjeevaram beauty holds a special place - worn 25 years ago for my vidai. A gift from my mum-in-law, it was too gorgeous to wait for assistance. I shocked many by dressing myself! Happy and cherishing sweet memories.",
  },
];

const Text= () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 relative text-center">
      <div className="bg-gray-100 p-8 md:p-12 rounded-xl shadow-lg">
        <p className="text-gray-700 text-sm md:text-base mb-6 relative">
          <span className="absolute left-2 top-0 text-2xl md:text-3xl text-gray-400">“</span>
          {testimonials[index].text}
          <span className="absolute right-2 bottom-0 text-2xl md:text-3xl text-gray-400">”</span>
        </p>
        <p className="font-semibold text-gray-900 mt-4">- {testimonials[index].name}</p>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevTestimonial}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded-full transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded-full transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-8 h-1 rounded-full transition-all duration-300 ${
              i === index ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Text;
