import React from "react";
import "./card.css"; 

export default function Card({ title, description, imageUrl }) {
  return (
    <div
      className="card relative h-[40vh] w-[35vh] flex flex-col items-center justify-end p-4 bg-cover bg-center shadow-lg rounded-lg overflow-hidden transform"
      style={{ backgroundImage: `url('https://i.postimg.cc/ZnmFTwD6/Card.png')` }} // Background for card
    >
      <div className="image-container relative w-full h-full flex justify-center items-center">
        <img
          src={imageUrl}  // Member's image
          alt={title}
          className="image h-full w-full object-contain transition-transform duration-200 ease-in-out transform hover:scale-110" 
        />
      </div>

     
      <div
        className="hover-container absolute bottom-2 left-0 w-full h-[25%] bg-cover bg-center flex flex-col items-center justify-center transition-transform ease-out transform translate-y-full hover:translate-y-0 sm:translate-y-0"
        style={{ backgroundImage: `url('https://i.postimg.cc/G3PxM1HK/Vector.png')` }}
      >
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}
