import React from "react";


// EventsPage Component
const Events = () => {
  // HeroSection Component
  const HeroSection = () => {
    return (
      <div
        className="relative w-[90vw] overflow-hidden h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-bl-[40px] sm:rounded-bl-[60px] rounded-br-[40px] sm:rounded-br-[60px] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
            backgroundImage: 'url(https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg)',
        }}
      >
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
        {/* Title and Description */}
        <div className="relative z-10 text-white px-4 sm:px-8">
          <div className="relative inline-block">
            {/* Faded Background Text */}
            <h1 className="absolute text-[6rem] sm:text-[5rem] md:text-[6rem] lg:text-[13rem] font-extrabold uppercase  opacity-40 tracking-widest blur-[2px] lg:-translate-x-48 lg:-translate-y-20 lg:text-border sm:text-border sm:-translate-y-10">
              EVENTS
            </h1>
  
            {/* Foreground Text */}
            <h1 className="relative text-[5rem] sm:text-[2rem] md:text-[1rem] lg:text-[7rem] font-extrabold uppercase text-white tracking-widest drop-shadow-[0_0_20px_rgba(0,0,0,0.7)] lg:text-border sm:text-border">
              EVENTS
            </h1>
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
    return (
      <div className="relative w-full sm:w-[400px] lg:w-[450px] text-white rounded-[1.5rem] p-4">
        {/* Outer Glow Effect */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            clipPath:
              "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
            boxShadow: "0 0 12px 3px #008bff",
          }}
        ></div>

        {/* Main Card Content */}
        <div
          className="relative p-4 bg-gradient-to-b from-[#0f1347] to-[#103360] shadow-lg"
          style={{
            clipPath:
              "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
            border: "2px solid #008bff",
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
          <div className="mt-6 flex justify-center">
            <button
              className="relative group px-6 sm:px-8 py-3 text-sm sm:text-lg font-bold text-white uppercase transition-all duration-300 ease-in-out"
              style={{
                width: "100%",
                clipPath:
                  "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
                background: "linear-gradient(50deg, #6c1eb1, #008bff)",
                border: "2px solid #008bff",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath:
                    "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
                  background: "linear-gradient(50deg, #2c3e50, #2a4b66)",
                }}
              ></span>
              <span className="relative z-10">View More →</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Card data array
  const cardData = Array(10).fill({
    id: Math.random(),
    title: "Spectrum",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.",
    image: Image,
  });

  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <HeroSection />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 my-12">
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