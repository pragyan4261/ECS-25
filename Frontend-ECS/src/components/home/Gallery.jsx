import React, { useState, useEffect } from "react";

const Gallery = () => {
  const slides = [
    { color: "bg-pink-500", id: 1 },
    { color: "bg-black", id: 2 },
    { color: "bg-blue-900", id: 3 },
    { color: "bg-black", id: 4 },
    { color: "bg-pink-500", id: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Center slide
  const [isLoaded, setIsLoaded] = useState(false); // To control initial animation

  useEffect(() => {
    // Delay the gallery content's initial appearance by 3 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    // Auto-slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

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
      <h1 className={`text-3xl md:text-5xl font-bold tracking-widest opacity-90 mb-8 md:mb-12 z-10 ${isLoaded ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
        GALLERY
      </h1>

      {/* Left Projector Light */}
      <div className="absolute left-0 transform -translate-x-1/2 flex items-center justify-center z-0">
        <div className="w-40 h-40 md:w-96 md:h-96 bg-gradient-to-r from-blue-500 to-transparent opacity-30 rounded-full blur-3xl"></div>
        <div className="w-20 h-20 md:w-48 md:h-48 bg-blue-300 opacity-60 rounded-full blur-md"></div>
      </div>

      {/* Right Projector Light */}
      <div className="absolute right-0 transform translate-x-1/2 flex items-center justify-center z-0">
        <div className="w-40 h-40 md:w-96 md:h-96 bg-gradient-to-l from-blue-500 to-transparent opacity-30 rounded-full blur-3xl"></div>
        <div className="w-20 h-20 md:w-48 md:h-48 bg-blue-300 opacity-60 rounded-full blur-md"></div>
      </div>

      {/* Gallery Content */}
      <div className={`relative flex items-center justify-center space-x-4 md:space-x-6 z-10 ${isLoaded ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
        {/* Left Arrow */}
        <div
          onClick={handleLeftClick}
          className="text-3xl md:text-4xl text-white opacity-75 cursor-pointer transform transition-transform hover:scale-110"
        >
          <img src="https://i.postimg.cc/zvKhPnyz/Group-48096101.png" alt="prev"/>
        </div>

        {/* Gallery Slider */}
        <div className="relative flex items-center justify-center space-x-2 md:space-x-3">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${
                index === currentIndex
                  ? "w-40 h-56 md:w-60 md:h-80 scale-110 shadow-xl shadow-blue-900"
                  : "w-10 h-40 md:w-24 md:h-60 opacity-60"
              } rounded-lg ${slide.color} transition-all duration-500 ease-in-out transform hover:scale-105`}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          onClick={handleRightClick}
          className="text-3xl md:text-4xl text-white opacity-75 cursor-pointer transform transition-transform hover:scale-110"
        >
          <img src="https://i.postimg.cc/gcXHZhkB/Group-48096103.png" alt="next"/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
