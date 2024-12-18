import React from 'react';

const AboutUs = () => {
  return (
    <>
        <div className="aboutImg flex justify-center items-center">
            <img src="https://i.postimg.cc/7ZpR078Y/Group-48096073.png" alt="" />
        </div>
        <section className="relative text-white py-16 px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">

        <div className="max-w-[775px]">
          <p className="text-[22px] leading-[28px] font-lexend text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi cumque, ex expedita laborum neque unde commodi delectus praesentium laboriosam perspiciatis est voluptatem illum aliquam quibusdam tenetur officia accusamus inventore in assumenda necessitatibus hic laudantium temporibus. Totam nobis magnam suscipit sed! Eos, tempore aspernatur. Commodi fugiat dolorem labore ex nemo nostrum, facilis et numquam iusto suscipit, ratione voluptate sapiente quas illum sequi. Quae, voluptate sit? Error beatae perferendis esse aperiam fugit placeat! Ratione minus blanditiis reiciendis ipsam. Modi, odit eum!
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
