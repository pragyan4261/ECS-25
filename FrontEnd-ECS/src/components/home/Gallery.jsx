import React, { useState } from "react";

const Gallery = () => {
  const slides = [
    { color: "bg-pink-500", id: 1 },
    { color: "bg-black", id: 2 },
    { color: "bg-blue-900", id: 3 },
    { color: "bg-black", id: 4 },
    { color: "bg-pink-500", id: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Center slide

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white relative overflow-hidden">
      {/* Gallery Title */}
      <h1 className="text-5xl font-bold tracking-widest opacity-90 mb-12 z-10">GALLERY</h1>

      {/* Left Projector Light */}
      <div className="absolute left-0 transform -translate-x-1/2 flex items-center justify-center z-0">
        <div className="w-96 h-96 bg-gradient-to-r from-blue-500 to-transparent opacity-30 rounded-full blur-3xl"></div>
        <div className="w-48 h-48 bg-blue-300 opacity-60 rounded-full blur-md"></div>
      </div>

      {/* Right Projector Light */}
      <div className="absolute right-0 transform translate-x-1/2 flex items-center justify-center z-0">
        <div className="w-96 h-96 bg-gradient-to-l from-blue-500 to-transparent opacity-30 rounded-full blur-3xl"></div>
        <div className="w-48 h-48 bg-blue-300 opacity-60 rounded-full blur-md"></div>
      </div>

      {/* Gallery Content */}
      <div className="relative flex items-center justify-center space-x-6 z-10">
        {/* Left Arrow */}
        <div
          onClick={handleLeftClick}
          className="text-4xl text-white opacity-75 cursor-pointer transform transition-transform hover:scale-110"
        >
          &lt;&lt;
        </div>

        {/* Gallery Slider */}
        <div className="relative flex items-center justify-center space-x-3">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${
                index === currentIndex
                  ? "w-60 h-80 scale-110 shadow-xl shadow-blue-900"
                  : "w-32 h-60 opacity-60"
              } rounded-lg ${slide.color} transition-all duration-500 ease-in-out transform hover:scale-105`}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          onClick={handleRightClick}
          className="text-4xl text-white opacity-75 cursor-pointer transform transition-transform hover:scale-110"
        >
          &gt;&gt;
        </div>
      </div>
    </div>
  );
};

export default Gallery;