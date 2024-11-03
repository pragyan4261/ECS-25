import React, { useState } from "react";

const Gallery = () => {
  const slides = [
    { color: "bg-blue-900", id: 1 },
    { color: "bg-pink-500", id: 2 },
    { color: "bg-black", id: 3 },
    { color: "bg-pink-500", id: 4 },
    { color: "bg-blue-900", id: 5 },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the main (center) slide

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Gallery Title */}
      <h1 className="text-4xl font-bold tracking-widest opacity-90 mb-10">
        GALLERY
      </h1>

      {/* Gallery Content */}
      <div className="flex items-center justify-center space-x-5">
        {/* Left Arrow */}
        <div
          onClick={handleLeftClick}
          className="text-3xl text-white opacity-75 cursor-pointer transform transition-transform hover:scale-110"
        >
          &lt;&lt;
        </div>

        {/* Gallery Slider */}
        <div className="relative flex items-center justify-center space-x-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-20 h-40 rounded-lg ${
                index === currentIndex
                  ? `${slide.color} w-32 h-48`
                  : slide.color
              } transition-all duration-300 ease-in-out`}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          onClick={handleRightClick}
          className="text-3xl text-white opacity-75 cursor-pointer transform transition-transform hover:scale-110"
        >
          &gt;&gt;
        </div>
      </div>
    </div>
  );
};

export default Gallery;
