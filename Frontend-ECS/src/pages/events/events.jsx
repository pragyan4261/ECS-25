import React from "react";
import { useState } from "react";


// EventsPage Component
const Events = () => {
  // HeroSection Component
  const HeroSection = () => {
    return (
      <div
        className="relative w-[100vw] overflow-x-hidden h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-bl-[40px] sm:rounded-bl-[60px] rounded-br-[40px] sm:rounded-br-[60px] flex flex-col justify-center items-center text-center bg-cover bg-center "
        style={{
            backgroundImage: 'url(https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg)',
        }}
      >
        {/* Semi-transparent Overlay */}
        <div className="absolute overflow-x-hidden inset-0 bg-black bg-opacity-40"></div>
  
        {/* Title and Description */}
        <div className="relative z-10 text-white px-4 sm:px-8 overflow-y-hidden overflow-x-hidden">
          <div className="relative inline-block">
            {/* Faded Background Text */}
            <div className="flex justify-center items-center mb-[20px]">
                    <img src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736692146/Group_15_cphybt.png" alt="events" />
                </div>
          </div>
  
          {/* Description Text */}
          <p className="text-md sm:text-lg leading-relaxed mt-4 max-w-4xl mx-auto p-8 pt-0 text-white">
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
            elit sed risus. Gorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
            ut interdum tellus elit sed risus.
          </p>
        </div>
      </div>
    );
  };
  
  
  // Card Component
  const Card = ({ title, description, image }) => {
    const [buttonImage, setButtonImage] = useState(
      "https://i.postimg.cc/mgjNYYv7/Component-2.png"
    );
    const handleMouseEnter = () => {
      setButtonImage("https://i.postimg.cc/Px3Qjwss/Group-48096106.png");
    };
    const handleMouseLeave = () => {
      setButtonImage("https://i.postimg.cc/mgjNYYv7/Component-2.png");
    };

    return (
      <div className="relative w-full mb-6 sm:w-[200px] lg:w-[450px] text-white rounded-[1.5rem] ">
       
        {/* Main Card Content */}
        <div
          className="relative w-[350px] p-4 bg-gradient-to-b from-[#0f1347] to-[#103360] shadow-lg"
          style={{
            clipPath:
              "clip-path: polygon(10% 0, 94% 0, 100% 0, 100% 93%, 93% 100%, 3% 100%, 0 100%, 0 7%);",
            border: "2px solid #008bff",
            borderRadius:"20px"
          }}
        >
          {/* Placeholder Image */}
          <div>
            <img
              src='https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg'
              alt={title}
              className="w-full h-48 sm:h-56 object-cover"
              style={{
                clipPath:
                  "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
                border: "2px solid #008bff",
              }}
            />
          </div>

          {/* Card Content */}
          <div className="mt-6 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-[#00d1ff]">
              {title}
            </h2>
            <p className="mt-3 text-sm sm:text-md text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Button */}
          <div className="mt-0 flex flex-wrap justify-center">
          <button
          className="flex justify-center mx-auto z-20"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={buttonImage} alt="Component 2" />
      </button>
            <button
              className="relative group px-6 sm:px-8 py-3 text-sm sm:text-lg font-bold text-white uppercase transition-all duration-300 ease-in-out"
              style={{
                
                width: "80%",
                clipPath:
                  "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
                background: "linear-gradient(50deg, #6c1eb1, #008bff)",
                border: "2px solid #008bff",
                boxShadow: "0 0 10px 2px #007bff, inset 0 0 5px #007bff"
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath:
                    "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
                  background: "linear-gradient(50deg, #2c3e50, #2a4b66)",
                  boxShadow: "0 0 10px 2px #007bff, inset 0 0 5px #007bff"
                }}
              ></span>
              <span className="relative z-10">Register→</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Card data array
  const cardData = Array(9).fill({
    id: Math.random(),
    title: "Spectrum",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.",
    image: Image,
  });

  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Cards Grid */}
      <div className=" pt-10 ml-[0vw] flex w-[90%] flex-wrap justify-center align-items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
      </div>
  
  );
};

export default Events;