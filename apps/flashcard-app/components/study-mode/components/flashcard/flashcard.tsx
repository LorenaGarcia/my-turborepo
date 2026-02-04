import React, { useState } from "react";

interface FlashcardProps {
  category: string;
  question: string;
  answer: string;
  knownCount: number;
}

const Flashcard = ({ category, question, answer, knownCount }: FlashcardProps) => {
  

  return (
    <div 
      className="relative h-full min-h-[400px] w-full perspective-1000 cursor-pointer"
     
    >
      <div 
        className="relative h-full w-full transition-transform duration-500 preserve-3d"
      >
       
        <div className="absolute inset-0 backface-hidden rounded-[20px] border-[2px] border-black bg-[#ff9ff3] p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '20px 20px' }} 
          />
          
          <div className="relative h-full flex flex-col items-center justify-center text-center">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-[100px] border border-black bg-white px-4 py-1.5 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {category}
            </div>

           
            <StarIcon className="absolute top-4 right-4 text-blue-300 w-8 h-8" />
            <StarIcon className="absolute bottom-4 left-4 text-yellow-300 w-8 h-8" />

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2e1401] mb-4">
              {question}
            </h2>
            <p className="text-[#2e1401]/60 font-medium">Click to reveal answer</p>

            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="h-2 w-16 md:w-24 rounded-full border border-black bg-white overflow-hidden">
                <div 
                  className="h-full bg-black transition-all duration-300" 
                  style={{ width: `${(knownCount / 5) * 100}%` }}
                />
              </div>
              <span className="text-sm font-black text-[#2e1401]">{knownCount}/5</span>
            </div>
          </div>
        </div>

        
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[20px] border-[2px] border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center overflow-hidden">
           <div className="absolute inset-0 opacity-5 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '15px 15px' }} 
          />
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm font-black uppercase tracking-wider text-black/40">
            Answer
          </div>
          <p className="text-2xl md:text-3xl font-bold text-[#2e1401]">
            {answer}
          </p>
          <p className="mt-8 text-sm font-medium text-black/40">Click to flip back</p>
        </div>
      </div>
    </div>
  );
};

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="1.5" className={className}>
    <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" />
  </svg>
);

export default Flashcard;
