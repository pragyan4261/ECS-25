import React, { useState, useEffect } from "react";
import "./More.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const sliderData = [
  "https://res.cloudinary.com/nikks/image/upload/v1736972286/a1_zvmjuk.jpg",
  "https://res.cloudinary.com/nikks/image/upload/v1736972285/a3_xtsce0.jpg",
  "https://res.cloudinary.com/nikks/image/upload/v1736972285/a2_d07h2e.jpg",
  "https://res.cloudinary.com/nikks/image/upload/v1736972285/a5_oinkxp.jpg",
  "https://res.cloudinary.com/nikks/image/upload/v1736972285/a4_vhhoi5.jpg"
];

const More = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section className="relative max-w-7xl mx-auto items-center p-5 mb-[60px]">
      <div className="message border border-transparent p-5 h-max text-center space-y-6">
        <div className="msgImg flex justify-center items-center">
          <img
            src="https://i.postimg.cc/m2Y3yyMs/Group-48096106-1.png"
            alt="More Section"
          />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".more-button-next-custom",
            prevEl: ".more-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          loop={true}
          slidesPerView={isMobile ? 1 : 2.5}
          spaceBetween={isMobile ? 20 : 35}
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
                className="w-[467px] h-[307px] mobile:h-[25vh] object-cover rounded-[10px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {!isMobile && (
          <>
            <button
              className="more-button-prev-custom"
              onMouseEnter={handleMouseEnterPrev}
              onMouseLeave={handleMouseLeavePrev}
            >
              <img src={buttonImagePrev} alt="Prev" />
            </button>
            <button
              className="more-button-next-custom"
              onMouseEnter={handleMouseEnterNext}
              onMouseLeave={handleMouseLeaveNext}
            >
              <img src={buttonImageNext} alt="Next" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default More;
