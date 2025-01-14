import React from 'react';

const AboutUs = () => {
  return (
    <>
        <div className="aboutImg flex justify-center items-center">
            <img src="https://i.postimg.cc/7ZpR078Y/Group-48096073.png" alt="" />
        </div>
        <section className="relative text-white py-16 px-8">
        <div className="flex flex-col lg:flex-row justify-around items-center">

        <div className="max-w-[775px]">
          <p className="text-[22px] leading-[28px] font-lexend text-justify">
          The Electronics & Communication Society is the branch society which represents the department of ECE. The prime purpose of this society is to make the students familiar with the branch. Besides that, a number of exciting events take place under ECS. Starting from the branch Orientation, several events take place including Utkrishtha, the Freshers', the Spectrum that is the annual flagship event, Spectrum Fit for different indoor and outdoor activities and lastly, Dehleez, the farewell.
          </p>
        </div>

        <img src="https://i.postimg.cc/13bqBvBN/Profilemsg.png" alt="" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute -top-[91px] -rotate-[140deg] -left-52 h-[3px] w-[50%] bg-gradient-to-r from-[#0066FF] to-transparent"></div>
      <div className="absolute top-[33px]  rotate-[40deg] -left-[140px] h-[3px] w-[20%] bg-gradient-to-l from-[#0066FF] to-transparent"></div>
    </section>
    </>
  );
};

export default AboutUs;
