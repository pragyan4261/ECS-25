import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const sponsors = [
  { id: 1, name: "Asus", image: "/asus-logo.png" },
  { id: 2, name: "Sponsor 1", image: "/sponsor1.png" },
  { id: 3, name: "Sponsor 2", image: "/sponsor2.png" },
];

const SponsorSlider: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % sponsors.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  return (
    <div className="bg-lime-400 text-center py-10 relative">
      <h2 className="text-4xl font-extrabold text-black drop-shadow-md">
        PREVIOUS SPONSORS
      </h2>

      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handlePrev}
          className="bg-black text-white p-3 rounded-full hover:bg-gray-800"
        >
          <FaChevronLeft />
        </button>
        <div className="mx-4 flex items-center">
          <div
            className="flex-shrink-0 w-40 h-40 bg-pink-200 border-2 border-black rounded-xl shadow-lg mx-2"
            style={{
              transform: "rotate(-15deg)",
            }}
          >
            <img
              src={sponsors[(current - 1 + sponsors.length) % sponsors.length].image}
              alt="Previous Sponsor"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-64 h-64 bg-pink-200 border-4 border-black rounded-xl shadow-lg">
            <img
              src={sponsors[current].image}
              alt={sponsors[current].name}
              className="w-full h-full object-contain"
            />
            <p className="mt-2 text-black">{sponsors[current].name}</p>
          </div>

          <div
            className="flex-shrink-0 w-40 h-40 bg-pink-200 border-2 border-black rounded-xl shadow-lg mx-2"
            style={{
              transform: "rotate(15deg)",
            }}
          >
            <img
              src={sponsors[(current + 1) % sponsors.length].image}
              alt="Next Sponsor"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <button
          onClick={handleNext}
          className="bg-black text-white p-3 rounded-full hover:bg-gray-800"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SponsorSlider;
