import React, { useState } from "react";

const Events = () => {
  // HeroSection Component
  const HeroSection = () => {
    return (
      <div
        className="relative w-[100vw] overflow-x-hidden h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-bl-[40px] sm:rounded-bl-[60px] rounded-br-[40px] sm:rounded-br-[60px] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-white px-4 sm:px-8">
          <div className="flex justify-center items-center mb-[20px]">
            <img
              src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736692146/Group_15_cphybt.png"
              alt="events"
            />
          </div>
          <p className="text-md sm:text-lg leading-relaxed mt-4 max-w-4xl mx-auto p-8 pt-0 text-white">
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
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
      <div className="relative w-full mb-6 sm:w-[200px] lg:w-[450px] text-white rounded-[1.5rem]">
        <div
          className="relative w-[350px] p-4 bg-gradient-to-b from-[#0f1347] to-[#103360] shadow-lg"
          style={{
            clipPath:
              "polygon(10% 0, 94% 0, 100% 0, 100% 93%, 93% 100%, 3% 100%, 0 100%, 0 7%)",
            border: "2px solid #008bff",
            borderRadius: "20px",
          }}
        >
          <div>
            <img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-56 object-cover"
              style={{
                clipPath:
                  "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
                border: "2px solid #008bff",
              }}
            />
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-[#00d1ff]">
              {title}
            </h2>
            <p className="mt-3 text-sm sm:text-md text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap justify-center items-center">
            <button
              className="flex justify-center mx-auto z-20"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={buttonImage} alt="Component 2" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Card data array
  const categories = [
    {cards: Array(3).fill({
      title: "Spectrum",
      description:
        "This is a LIT event focusing on literature and creative arts.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg",
    }),},
    {
      title: "LIT",
      cards: Array(6).fill({
        title: "Spectrum",
        description:
          "This is a LIT event focusing on literature and creative arts.",
        image:
          "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg",
      }),
    },
    {
      title: "FIT",
      cards: Array(6).fill({
        title: "Fit Challenge",
        description: "Engage in fun fitness activities and challenges.",
        image:
          "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg",
      }),
    },
    {
      title: "TECH",
      cards: Array(3).fill({
        title: "Tech Innovation",
        description: "Explore cutting-edge technology and innovation.",
        image:
          "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg",
      }),
    },
  ];

  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      {categories.map((category, index) => (
        <div key={index} className="w-full px-4 sm:px-8 py-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center hover:text-red-600 text-[#00d1ff] mb-6 relative">
            <span className="relative z-10 ">{category.title}</span>
            <div className="absolute top-[50%] left-0 w-[30%] h-[2px] bg-[#00d1ff] transform -translate-y-1/2"></div>
            <div className="absolute top-[50%] right-0 w-[30%] h-[2px] bg-[#00d1ff] transform -translate-y-1/2"></div>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {category.cards.map((card, idx) => (
              <Card
                key={idx}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
 