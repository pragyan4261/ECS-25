import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

const Annual = () => {
  
  const data = [
    {
      title: "Spectrum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
      image:
        "https://i.postimg.cc/L5WrC3tH/19-20250115-115513-0002.png",
    },
    {
      title: "Radiance",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Aurora",
      description:
        "The passage is attributed to a section 1.10.32 of 'de Finibus Bonorum et Malorum' by Cicero, written in 45 BC.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Eclipse",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Eclipse",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
      title: "Radiance",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Aurora",
      description:
        "The passage is attributed to a section 1.10.32 of 'de Finibus Bonorum et Malorum' by Cicero, written in 45 BC.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    ,
    {
      title: "Eclipse",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
      title: "Radiance",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Aurora",
      description:
        "The passage is attributed to a section 1.10.32 of 'de Finibus Bonorum et Malorum' by Cicero, written in 45 BC.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },,
    {
      title: "Eclipse",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
      title: "Radiance",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
    {
      title: "Aurora",
      description:
        "The passage is attributed to a section 1.10.32 of 'de Finibus Bonorum et Malorum' by Cicero, written in 45 BC.",
      image:
        "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg",
    },
  ];

  return (
    <div className=" overflow-hidden">
      <div className="galImg relative w-full mobile:scale-150 z-10 flex justify-center items-center mb-[5vh]">
        <img
          src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736675717/Group_48096075_jdlhkt.png"
          alt="Gallery"
        />
      </div>

      <div className="w-full h-full mx-auto relative">
        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            // Adjust for desktop view
            1024: {
              slidesPerView: 3, // 3 cards in view for desktop
              spaceBetween: 20,
            },
          }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-[90%]  mx-auto p-4 bg-gradient-to-b from-[#0f1347] to-[#103360] shadow-lg rounded-[20px]  border-blue-500"
              >
                <div
                 className="mx-auto mt-6 h-48 w-full bg-cover bg-center rounded-[20px]"
                 style={{
                 backgroundImage: `url(${item.image})`,
                 border: "2px solid #007bff",
                 boxShadow: "0 0 10px 2px #007bff, inset 0 0 5px #007bff",
                  }}
                  ></div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-400 text-center">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-sm mt-3 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Annual;