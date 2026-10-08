import React, { useState } from "react";

interface FlashcardProps {
  category: string;
  question: string;
  answer: string;
  knownCount: number;
}

const Flashcard = ({
  category,
  question,
  answer,
  knownCount,
}: FlashcardProps) => {
  return (
    <div className="perspective-1000 relative h-full min-h-[400px] w-full cursor-pointer">
      <div className="preserve-3d relative h-full w-full transition-transform duration-500">
        <div className="absolute inset-0 overflow-hidden rounded-[20px] border-[2px] border-black bg-[#ff9ff3] p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] backface-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative flex h-full flex-col items-center justify-center text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-[100px] border border-black bg-white px-4 py-1.5 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {category}
            </div>

            <StarIcon className="absolute top-4 right-4 h-8 w-8 text-blue-300" />
            <StarIcon className="absolute bottom-4 left-4 h-8 w-8 text-yellow-300" />

            <h2 className="mb-4 text-3xl font-extrabold text-[#2e1401] md:text-5xl">
              {question}
            </h2>
            <p className="font-medium text-[#2e1401]/60">
              Click to reveal answer
            </p>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
              <div className="h-2 w-16 overflow-hidden rounded-full border border-black bg-white md:w-24">
                <div
                  className="h-full bg-black transition-all duration-300"
                  style={{ width: `${(knownCount / 5) * 100}%` }}
                />
              </div>
              <span className="text-sm font-black text-[#2e1401]">
                {knownCount}/5
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex rotate-y-180 flex-col items-center justify-center overflow-hidden rounded-[20px] border-[2px] border-black bg-white p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] backface-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 0)",
              backgroundSize: "15px 15px",
            }}
          />
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm font-black tracking-wider text-black/40 uppercase">
            Answer
          </div>
          <p className="text-2xl font-bold text-[#2e1401] md:text-3xl">
            {answer}
          </p>
          <p className="mt-8 text-sm font-medium text-black/40">
            Click to flip back
          </p>
        </div>
      </div>
    </div>
  );
};

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="black"
    strokeWidth="1.5"
    className={className}
  >
    <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" />
  </svg>
);

export default Flashcard;
