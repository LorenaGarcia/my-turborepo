"use client";

import { useState, useMemo, useEffect } from "react";
import { StatisticsCards } from "./components/statistics-cards/statistics-cards";
import { HeaderCards } from "./components/header-cards";
import Flashcard from "./components/flashcard/flashcard";
import { FLASHCARDS_DATA } from "./study-mode.constants";

function StudyMode() {
  const [cards, setCards] = useState(FLASHCARDS_DATA);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [hideMastered, setHideMastered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const filteredCards = useMemo(() => {
    let result = cards;
    if (selectedCategories.length > 0) {
      result = result.filter(card => selectedCategories.includes(card.category));
    }
    if (hideMastered) {
      result = result.filter(card => card.knownCount < 5);
    }
    return result;
  }, [cards, selectedCategories, hideMastered]);


  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategories, hideMastered]);

  const currentCard = filteredCards[currentIndex];

  const handleShuffle = () => {
    setCards(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleKnowThis = () => {
    if (!currentCard) return;
    setCards(prev => prev.map(card => 
      card.id === currentCard.id 
        ? { ...card, knownCount: Math.min(card.knownCount + 1, 5) }
        : card
    ));
    if (currentIndex < filteredCards.length - 1) {
       handleNext();
    }
  };

  const handleResetProgress = () => {
    if (!currentCard) return;
    setCards(prev => prev.map(card => 
      card.id === currentCard.id 
        ? { ...card, knownCount: 0 }
        : card
    ));
  };

  
  const stats = useMemo(() => {
    const total = cards.length;
    const mastered = cards.filter(c => c.knownCount >= 5).length;
    const inProgress = cards.filter(c => c.knownCount > 0 && c.knownCount < 5).length;
    const notStarted = cards.filter(c => c.knownCount === 0).length;
    return { total, mastered, inProgress, notStarted };
  }, [cards]);

  return (
    <div className="grid w-full h-full max-h-[calc(100vh-140px)] flex-1 grid-cols-1 gap-8 lg:grid-cols-[1fr_392px] min-h-0 overflow-hidden">
      <div className="flex flex-col h-full border-t border-l border-r-[3px] border-b-[3px] border-[#2E1401] rounded-[16px] bg-white overflow-y-auto overflow-x-hidden scrollbar-hide">
        <HeaderCards 
          selectedCategories={selectedCategories}
          onCategoryChange={setSelectedCategories}
          hideMastered={hideMastered}
          onToggleHideMastered={setHideMastered}
          onShuffle={handleShuffle}
        />
        
        <div className="flex-1 flex flex-col justify-center ">
          {currentCard ? (
            <div className="w-full flex-1 min-h-0 flex flex-col gap-8 p-[20px]">
              <Flashcard 
                key={currentCard.id} 
                category={currentCard.category}
                question={currentCard.question}
                answer={currentCard.answer}
                knownCount={currentCard.knownCount}
              />

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full px-4 md:px-0 mt-2">
                <button 
                  onClick={handleKnowThis}
                  className="flex items-center justify-center gap-2 w-full md:w-fit px-8 py-3 rounded-full border-[2px] border-black bg-[#ffcc00] font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-none"
                >
                  <CheckIcon className="w-5 h-5" />
                  I Know This
                </button>
                <button 
                  onClick={handleResetProgress}
                  className="flex items-center justify-center gap-2 w-full md:w-fit px-8 py-3 rounded-full border-[2px] border-black bg-white font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[2px] active:shadow-none"
                >
                  <ResetIcon className="w-5 h-5" />
                  Reset Progress
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center gap-4">
              <p className="text-xl font-bold">No cards match your filters</p>
              <button 
                onClick={() => {setSelectedCategories([]); setHideMastered(false);}}
                className="px-6 py-2 rounded-full border border-black bg-yellow-400 font-bold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      
        <div className="border-t border-[#2E1401] p-[20px] flex items-center justify-between bg-[#fffaf5]">
          {/* Previous Button */}
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center justify-center h-12 w-12 md:w-fit md:h-auto md:px-6 md:py-3 rounded-full border-[2px] border-black bg-white font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:opacity-30 disabled:shadow-none transition-all active:translate-y-[1px] hover:bg-gray-50 flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden md:inline ml-3">Previous</span>
          </button>
          
          <span className="font-bold text-[#2e1401]/60 text-center flex-1">
            Card {currentIndex + 1} of {filteredCards.length}
          </span>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            disabled={currentIndex >= filteredCards.length - 1}
            className="flex items-center justify-center h-12 w-12 md:w-fit md:h-auto md:px-6 md:py-3 rounded-full border-[2px] border-black bg-white font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:opacity-30 disabled:shadow-none transition-all active:translate-y-[1px] hover:bg-gray-50 flex-shrink-0"
          >
            <span className="hidden md:inline mr-3">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* <div className="flex h-full flex-col rounded-[16px] border-t border-l border-r-[3px] border-b-[3px] border-[#2E1401] bg-white overflow-y-auto overflow-x-hidden scrollbar-hide"> */}
      <div className="flex h-full flex-col rounded-[16px] border-t border-l border-r-[3px] border-b-[3px] border-[#2E1401] bg-white overflow-y-auto overflow-x-hidden scrollbar-hide">
        <StatisticsCards {...stats} />
      </div>
    </div>
  );
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ResetIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export { StudyMode };
