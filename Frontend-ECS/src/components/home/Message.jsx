import React, {useRef, useEffect, useState} from "react";
import "./Message.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Message = () => {

  const [buttonImagePrev, setButtonImagePrev] = useState(
    "https://i.postimg.cc/9M1cQJMN/Property-1-Default-1.png"
  );
  const handleMouseEnterPrev = () => {
    setButtonImagePrev("https://i.postimg.cc/wMdD9x1k/Property-1-Variant2-1.png");
  };
  const handleMouseLeavePrev = () => {
    setButtonImagePrev("https://i.postimg.cc/9M1cQJMN/Property-1-Default-1.png");
  };

const [buttonImageNext, setButtonImageNext] = useState(
    "https://i.postimg.cc/gjJmX8Lc/Property-1-Default.png"
  );
  const handleMouseEnterNext = () => {
    setButtonImageNext("https://i.postimg.cc/hjm9FQtj/Property-1-Variant2.png");
  };
  const handleMouseLeaveNext = () => {
    setButtonImageNext("https://i.postimg.cc/gjJmX8Lc/Property-1-Default.png");
  };
  
  const slides = [
    {
      image: "https://i.postimg.cc/13bqBvBN/Profilemsg.png",
      name: "Dr. Wasim Arif",
      content: "Slide 1: This is an example content for the first slide.",
      designation: "-FACULTY ADVISOR, ECS",
    },
    {
      image: "https://i.postimg.cc/13bqBvBN/Profilemsg.png",
      name: "#",
      content: "Slide 2: Here is some more descriptive text for the second slide.",
      designation: "##",
    },
    {
      image: "https://i.postimg.cc/13bqBvBN/Profilemsg.png",
      name: "#",
      content: "Slide 3: A third slide with another piece of content.",
      designation: "##",
    },
  ];

  return (

    
    <div className="max-w-6xl mx-auto items-center p-5">
      <div className="message border border-transparent p-5 h-max text-center space-y-6">
                <div className="msgImg flex justify-center items-center">
                    <img src="https://i.postimg.cc/hGJ1bPRD/Group-15.png" alt="" />
                </div>        
                
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        loop
        className="rounded-lg !pb-12" // Adds padding below Swiper to separate arrows from content
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex space-x-4 mx-20">
              {/* Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-[285.39px] h-[346.76px] rounded-lg object-cover hover:scale-[103%] transition-transform duration-300 hover:shadow-2xl shadow-blue-700"
              />
            <div className="mt-4">
              <h1 id="naam" className="text-[32px] text-left text-blueNeon">{slide.name}</h1>
              <p className="text-[22px] flex flex-wrap text-justify mb-5">{slide.content} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa debitis vel et non blanditiis facilis hic dolor perspiciatis dicta officia molestias, repudiandae animi dolorem quod itaque! Vitae et perspiciatis nulla ipsa hic optio necessitatibus commodi, doloribus assumenda accusamus amet magni. ipsum dolor sit, amet consectetur adipisicing elit. Non ab error beatae veniam rem laborum culpa molestias deserunt et voluptates consequuntur eius, cupiditate enim perferendis doloremque ut ipsam illo minus.</p>
              <h1 id="naam2" className="text-[36px] text-right">{slide.name}</h1>
              <h2 className="text-[20px] text-right">{slide.designation}</h2>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev-custom" onMouseEnter={handleMouseEnterPrev} onMouseLeave={handleMouseLeavePrev}>
        <img src={buttonImagePrev} alt="Prev" />
      </button>
      <button className="swiper-button-next-custom" onMouseEnter={handleMouseEnterNext} onMouseLeave={handleMouseLeaveNext}>
        <img src={buttonImageNext} alt="Next" />
      </button>
      </div>
    </div>
  );
};

export default Message;





