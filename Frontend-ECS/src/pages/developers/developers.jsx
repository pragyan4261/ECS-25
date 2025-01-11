import React from "react";
import Card from "../cards/Card";
import "./developers.css";

import cardsData from "./developerData"; // Import the cardsData array

export default function Developers() {
  const seniorDeveloper = cardsData[0]; // Assuming the first card is the senior developer
  const juniorDevelopers = cardsData.slice(1); // The rest are junior developers

  const rows = [];
  const cardsPerRow = 3;

  for (let i = 0; i < juniorDevelopers.length; i += cardsPerRow) {
    rows.push(juniorDevelopers.slice(i, i + cardsPerRow));
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10">
      {/* Background Section */}
      <aside className="main h-[89vh] bg-[url('https://i.postimg.cc/hjt1Bfbp/bgImage.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center text-center"></aside>

      <div className="developers p-5 text-center">
        <div className="Title flex justify-center items-center">
          <img
            src="https://i.postimg.cc/N08H4tBS/Group-15-1.png"
            alt="Developers"
          />
        </div>

        {/* Senior Developer Section */}
        <div className="senior-developer p-6 mt-[80px] text-center flex items-center justify-center">
          <Card
            title={seniorDeveloper.title}
            description={seniorDeveloper.description}
            imageUrl={seniorDeveloper.imageUrl}
          />
        </div>

        {/* Junior Developers Section */}
        <div className="junior-developers space-y-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="row mt-[80px] p-4 w-full flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-y-0 sm:gap-x-[5vw]"
            >
              {row.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
