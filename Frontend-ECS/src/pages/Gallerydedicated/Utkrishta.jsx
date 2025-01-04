import React, {useState} from "react";
import "./Utkrishta.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const sliderData = [
  "https://i.postimg.cc/BbxgyxS0/ARY-0100.jpg",
  "https://i.postimg.cc/h4dcvhZR/MJ-9663.jpg",
  "https://i.postimg.cc/L5LcTCnB/Spectrumfit.jpg",
  "https://i.postimg.cc/Lsx6t7jd/Dehleezpic.jpg",
];

const Utkrishta = () => {

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

  return (
    <section className="relative max-w-7xl mx-auto items-center p-5">
      <div className="message border border-transparent p-5 h-max text-center space-y-6">
                <div className="msgImg flex justify-center items-center">
                    <img src="https://i.postimg.cc/ZKtFNMWH/Group-48096103-1.png" alt="" />
                </div>
      <Swiper
         modules={[Navigation, Pagination, Autoplay]}
         navigation={{
            nextEl: ".orientation-button-next-custom",
            prevEl: ".orientation-button-prev-custom",
          }}
         pagination={{ 
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
         }}
         loop={true}
         slidesPerView={2.5}
         spaceBetween={35}
         speed={1000}
         autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
         className="rounded-[10px] !pb-12"
      >
        {sliderData.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-[467px] h-[307px] object-cover rounded-[10px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="orientation-button-prev-custom" onMouseEnter={handleMouseEnterPrev} onMouseLeave={handleMouseLeavePrev}>
        <img src={buttonImagePrev} alt="Prev" />
      </button>
      <button className="orientation-button-next-custom" onMouseEnter={handleMouseEnterNext} onMouseLeave={handleMouseLeaveNext}>
        <img src={buttonImageNext} alt="Next" />
      </button>
    </div>
    </section>
  );
};

export default Utkrishta;
