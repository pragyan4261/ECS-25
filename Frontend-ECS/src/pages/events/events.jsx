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
          With the vast array of events going on under it, ECS truely proves to be a versatile society. Throughout the calendar year, a number of exciting events are organised by this thriving society. The events can be both technical, as well as non-technical. These events are meant for the goodwill of the students of the branch. The events also include competitions to level up the competitive spirit of a student. These competitions can be broadly classified into LIT-FIT-TECH. LIT stands for Literary, FIT for Fitness and TECH for Technology. Let us find out more about the events.
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
      <div className="relative w-full mb-6 sm:w-[200px] lg:w-[450px] text-white">
        <div
          className="relative w-[350px] p-4 bg-gradient-to-b from-[#0f1347] to-[#103360] shadow-lg rounded-[20px] border-2 border-[#008bff]"
        >
          <div>
            <img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-56 object-cover rounded-[20px] border-2 border-[#008bff] shadow-md"
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
    {
      title: "",
      cards: [
        {
          title: "ECE Orientation",
          description: "This is a LIT event focusing on literature and creative arts.",
          image:
            "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
        },
        {
          title: "Utkrishtha",
          description: "Join us for an evening of artistic expression and creativity.",
          image:
            "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg",
        },
        {
          title: "Speaker Sessions",
          description: "Explore the intersection of art, literature, and culture.",
          image:
            "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg",
        },
        {
          title: "Dehleez",
          description: "Explore the intersection of art, literature, and culture.",
          image:
            "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg",
        },
        {
          title: "Spectre-Annual Magazine",
          description: "Explore the intersection of art, literature, and culture.",
          image:
            "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1735998472/beautiful-urban-view-daytime_jsxoxa.jpg",
        },
      ],
    },
    {
      title: "SPECTRUM-FIT",
      cards: [
        {
          title: "Chess",
          description: "The chess competition under the Spectrum FIT domain fosters critical thinking, strategy, and mental agility. It serves as a platform for participants to showcase their intellectual prowess and decision-making skills",
          image:
            "https://i.postimg.cc/Y9SzsKqH/Whats-App-Image-2025-01-14-at-13-45-59-387cf123.jpg",
        },
        {
          title: "Table Tennis",
          description: "Table tennis under Spectrum FIT highlights agility, reflexes, and quick decision-making. The competition fosters both individual and team skills, requiring intense focus and coordination for success",
          image:
            "https://i.postimg.cc/43P1PNGP/Whats-App-Image-2025-01-14-at-13-46-00-a92c5ee1.jpg",
        },
        {
          title: "Badminton",
          description: "Badminton promotes agility, endurance,& control over rapid movements. The competition encourages both individual excellence & team collaboration, testing players' reflexes and strategic thinking.",
          image:
            "https://i.postimg.cc/43s5pHDn/Whats-App-Image-2025-01-14-at-13-46-01-501cd8e6.jpg",
        },
        {
          title: "Cricket",
          description: "Cricket under Spectrum fosters teamwork, strategy, and skillful play in both batting and bowling. The competition provides a dynamic environment for participants to showcase their abilities and compete at a high level.",
          image:
            "https://i.postimg.cc/L5WrC3tH/19-20250115-115513-0002.png",
        },
        {
          title: "Futsal",
          description: "Futsal, as a football competition, comes under Spectrum FIT, promoting teamwork, agility, and tactical skills in a dynamic, fast-paced environment. It provides players with a platform to enhance their coordination and strategic thinking.",
          image:
            "https://i.postimg.cc/3rb5xYPP/18-20250115-115513-0001.png",
        },
        {
          title: "Relay",
          description: "Relay, as a competition under Spectrum FIT, focuses on teamwork, speed, and coordination. It challenges participants to work together efficiently, passing the baton while maintaining peak performance throughout the race.",
          image:
            "https://i.postimg.cc/hj2FxBhQ/17-20250115-115513-0000.png",
        },
      ],
    },
    {
      title: "SPECTRUM-TECH",
      cards: [
        {
          title: "Fastweb",
          description: "Fast Web under Spectrum is an exciting web development hackathon where participants race against time to build innovative and functional websites. With creativity, coding skills, and teamwork, developers will tackle challenges and create solutions in a fast-paced environment.",
          image:
            "https://i.postimg.cc/C1DkthT9/Whats-App-Image-2025-01-14-at-14-09-17-62f6c946.jpg",
        },
        {
          title: "Byte the Code",
          description: "Byte the Code under Spectrum is a thrilling competition for coding enthusiasts. It’s a platform where programmers can showcase their skills by solving complex problems, optimizing algorithms, and creating innovative solutions. Whether you're a beginner or a pro, it's the perfect opportunity",
          image:
            "https://i.postimg.cc/N0ZRpyV1/Whats-App-Image-2025-01-14-at-14-09-19-6d448a8c.jpg",
        },
        {
          title: "Eniac",
          description: "Eniac under Spectrum is a competitive programming contest that brings together the brightest minds in coding. Participants tackle complex algorithmic challenges, race against time, and demonstrate their problem-solving prowess. It’s a true test of logic, speed, and programming skills.",
          image:
            "https://i.postimg.cc/mksCWvTk/Whats-App-Image-2025-01-14-at-14-09-20-3a322487.jpg",
        },
        {
          title: "Smartdroid",
          description: "Smartdroid under Spectrum is an exciting Android development hackathon where participants innovate and build cutting-edge mobile applications. Using their knowledge of Android development, coders race against the clock to create functional and user-friendly apps, solving real-world problems.",
          image:
            "https://i.postimg.cc/pdmDfQ0W/Whats-App-Image-2025-01-14-at-14-09-21-a703fd53.jpg",
        },
      ],
    },
    {
      title: "SPECTRUM- LIT",
      cards: [
        {
          title: "Poesis",
          description: "Poetry holds the extraordinary power to touch hearts profoundly. It gives voice to emotions and feelings through words. Spectrum  proudly presents POESIS, a stage to celebrate and showcase talented poets",
          image:
            "https://i.postimg.cc/13Lnwkbt/Whats-App-Image-2025-01-15-at-18-09-07-8295c63e.jpg",
        },
        {
          title: "Moments",
          description: "Photographers are silent storytellers, capturing emotions and tales too intricate for words.Spectrum proudly presents Moments, a dedicated segment to showcase these timeless snapshots.",
          image:
            "https://i.postimg.cc/Zqp9cfhL/Whats-App-Image-2025-01-15-at-18-09-06-5c1f0a83.jpg",
        },
        {
          title: "Minimalist",
          description: "Spectrum proudly presents Minimalist, a creative doodling contest where simplicity meets imagination. Let your ideas flow through minimal strokes and shapes, proving that less can indeed speak volumes.",
          image:
            "https://i.postimg.cc/g05tP2wD/Whats-App-Image-2025-01-14-at-14-09-18-cc315aa1.jpg",
        },
        {
          title: "Knock Your Heads",
          description: "Knock Your Heads is an exciting quiz competition under Spectrum, designed to challenge your intellect and test your knowledge across diverse domains.",
          image:
            "https://i.postimg.cc/6QTbSvQq/Whats-App-Image-2025-01-14-at-14-09-18-5d2cbd4e.jpg",
        },
        {
          title: "Memecraft",
          description: "Get ready to tickle funny bones with Memecraft, the ultimate meme competition! Unleash your creativity, and humor to craft memes that speak louder than words. ",
          image:
            "https://i.postimg.cc/13mjGThp/Whats-App-Image-2025-01-14-at-14-09-18-a7a58cbe.jpg",
        },
        {
          title: "Electrohunt",
          description: "Gear up for Electrohunt, the thrilling treasure hunt competition! Put your problem-solving skills to the test as you decode clues, unravel mysteries, and chase hidden treasures.",
          image:
            "https://i.postimg.cc/1XDjB13K/Whats-App-Image-2025-01-14-at-14-09-22-4be01527.jpg",
        },
        {
          title: "IPL Auction",
          description: "IPL Auction is an exciting event under Spectrum, where strategy and sportsmanship collide! Teams bid, talents are discovered, and the thrill of cricket takes center stage.",
          image:
            "https://i.postimg.cc/rwfYQJM7/Whats-App-Image-2025-01-14-at-14-09-19-9decc442.jpg",
        },
        {
          title: "Open Mic",
          description: "Open Mic under Spectrum is the perfect platform to express your creativity in your own unique way. Whether through poetry, storytelling, music, or comedy, it's your moment to shine.",
          image:
            "https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/420032096_17895477107953783_1002736532792049271_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Mn9BoZfyQAgQ7kNvgH0Vqb2&_nc_gid=13bececef4534dff9981aff198a2d601&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzI4MTMxODE1MzE2MTcyOTY2NA%3D%3D.3-ccb7-5&oh=00_AYBBG9Cq_mMkFWxbI5ov2oC07zQTjDozX5dVND08ztsrKA&oe=678D920A&_nc_sid=fc8dfb",
        },
        {
          title: "Chamber of Secrets",
          description: "Chamber of Secrets under Spectrum is an exhilarating puzzle competition where participants must decode a website-crashing mystery. Dive into a world of cryptic clues",
          image:
            "https://i.postimg.cc/ry43MxNt/Whats-App-Image-2025-01-14-at-14-09-21-f249a60f.jpg",
        },
        {
          title: "Get Hired",
          description: "Get Hired under Spectrum is more than just an interview competition. It’s a dynamic challenge that tests your overall professional skills, from communication and problem-solving to creativity and teamwork.",
          image:
            "https://i.postimg.cc/jdQ1JT9x/Whats-App-Image-2025-01-14-at-14-09-20-6d798c7c.jpg",
        },
      ],
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