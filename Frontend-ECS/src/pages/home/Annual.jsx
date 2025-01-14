import React, { useState, useEffect } from "react";

const Annual = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [buttonImage, setButtonImage] = useState(
    "https://i.postimg.cc/mgjNYYv7/Component-2.png"
  );

  const handleMouseEnter = () => {
    setButtonImage("https://i.postimg.cc/Px3Qjwss/Group-48096106.png");
  };

  const handleMouseLeave = () => {
    setButtonImage("https://i.postimg.cc/mgjNYYv7/Component-2.png");
  };

  const data = [
    {
      title: "Spectrum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Spectrum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Spectrum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Spectrum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Spectrum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
  ];

  const handleNext = () => {
    const cardsPerView = isDesktop ? 3 : 1; // 3 for desktop, 1 for mobile
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - cardsPerView ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    const cardsPerView = isDesktop ? 3 : 1; // 3 for desktop, 1 for mobile
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - cardsPerView : prevIndex - 1
    );
  };

  // Adjust for desktop or mobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-10 text-white">
      <div className="galImg flex justify-center items-center mb-[50px]">
        <img
          src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736675717/Group_48096075_jdlhkt.png"
          alt=""
        />
      </div>

      <div className="relative flex items-center justify-between">
        {/* Left Button */}
        <button
          className="absolute left-2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full shadow-lg"
          onClick={handlePrev}
        >
          &#8249;
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden w-full px-5 md:px-10">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (isDesktop ? 33.33 : 100)
              }%)`,
            }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[33.33%] px-4"
              >
                {/* Card Component */}
                <div
                  className="relative w-full md:w-[350px] p-4 mx-auto bg-gradient-to-b from-[#0f1347] to-[#103360] shadow-lg"
                  style={{
                    clipPath:
                      "clip-path: polygon(10% 0, 94% 0, 100% 0, 100% 93%, 93% 100%, 3% 100%, 0 100%, 0 7%);",
                    border: "2px solid #008bff",
                    borderRadius: "20px",
                  }}
                >
                  {/* Square Image Shape */}
                  <div
                     className="mx-auto mt-6 h-48 w-full md:w-[300px] bg-cover bg-center"
                      style={{
                           backgroundImage: `url(${item.image})`,
                            border: "2px solid #007bff",
                            borderRadius: "20px",
                            boxShadow: "0 0 10px 2px #007bff, inset 0 0 5px #007bff",
                           }}
                  ></div>


                  {/* Card Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-blue-400 text-center">
                      {item.title}
                    </h2>
                    <p className="text-gray-300 text-sm mt-3 text-center">
                      {item.description}
                    </p>
                    <div className="mt-5">
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          className="absolute right-2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full shadow-lg"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-8">
        {isDesktop
          ? Array(3)
              .fill(null)
              .map((_, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
                    index === currentIndex % 3 ? "bg-[#000aad]" : "bg-gray-500"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))
          : data.map((_, index) => (
              <span
                key={index}
                className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-[#000aad]" : "bg-gray-500"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
      </div>
    </div>
  );
};

export default Annual;