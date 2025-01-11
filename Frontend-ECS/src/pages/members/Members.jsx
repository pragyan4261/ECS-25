import React from "react";
import Card from "../cards/Card";
import "./members.css";
import cardsData from "./membersData"; // Import the cardsData array

export default function Members() {
  const rows = [];
  const cardsPerRow = 3;

  for (let i = 0; i < cardsData.length; i += cardsPerRow) {
    rows.push(cardsData.slice(i, i + cardsPerRow));
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10">
      <aside className="main h-[89vh] bg-[url('https://i.postimg.cc/hjt1Bfbp/bgImage.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center text-center"></aside>

      <div className="members p-5 text-center">
        <div className="membersTitle flex justify-center items-center">
          <img src="https://i.postimg.cc/nzSYcp3Z/members.png" alt="Members" />
        </div>

        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="row flex flex-col gap-4 sm:flex-row mt-[110px]  p-4 h-auto w-full items-center justify-center gap-x-[18vw]"
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
