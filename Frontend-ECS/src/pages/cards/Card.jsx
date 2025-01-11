import React from "react";
import "./card.css";

export default function Card({ title, description, imageUrl }) {
  return (
    <div
      className="card group relative h-[40vh] w-[35vh] flex flex-col items-center justify-end p-4 bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
      style={{ backgroundImage: `url('https://i.postimg.cc/ZnmFTwD6/Card.png')` }} // Background for card
    >
      {/* Image Container */}
      <div className="image-container relative w-full h-full flex justify-center items-center">
        <img
          src={imageUrl} // Member's image
          alt={title}
          className="image h-full w-full object-contain sm:transition-transform sm:duration-200 sm:ease-in-out sm:transform group-hover:scale-110"
        />
      </div>

      {/* Hover Text Container */}
      <div
        className="hover-container absolute bottom-2 left-0 w-full h-[25%] bg-cover bg-center flex flex-col items-center justify-center sm:transition-transform sm:duration-300 sm:ease-out sm:transform sm:translate-y-full group-hover:translate-y-0"
        style={{ backgroundImage: `url('https://i.postimg.cc/G3PxM1HK/Vector.png')` }}
      >
        <h2 className="text-lg font-bold text-white group-hover:opacity-100 group-hover:translate-y-0 sm:opacity-0 sm:translate-y-2 sm:transition-all sm:duration-300">
          {title}
        </h2>
        <p className="text-sm text-gray-200 group-hover:opacity-100 group-hover:translate-y-0 sm:opacity-0 sm:translate-y-2 sm:transition-all sm:duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
