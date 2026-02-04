import React, { useState } from "react";

interface FlashcardListItemProps {
  category: string;
  question: string;
  answer: string;
  knownCount: number;
  onEdit?: () => void;
  onDelete?: () => void;
}

const FlashcardListItem = ({
  category,
  question,
  answer,
  knownCount,
  onEdit,
  onDelete,
}: FlashcardListItemProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const isMastered = knownCount >= 5;

  return (
    <div className="flex flex-col rounded-[20px] border-[2px] border-[#2e1401] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden h-full">
      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="text-xl font-extrabold text-[#2e1401] line-clamp-2">
          {question}
        </h3>
        
        <div className="flex flex-col gap-1">
          <span className="text-xs font-black uppercase tracking-wider text-[#2e1401]/40">Answer:</span>
          <p className="text-[#2e1401] font-medium line-clamp-3">
            {answer}
          </p>
        </div>
      </div>

      <div className="border-t-[2px] border-[#2e1401]/10 px-6 py-4 flex items-center justify-between bg-[#fffaf5]/30 mt-auto">
        <div className="flex items-center gap-3 flex-1 overflow-hidden">
          <span className="rounded-full border border-[#2e1401]/20 bg-white px-3 py-1 text-xs font-black text-[#2e1401] truncate">
            {category}
          </span>

          {isMastered ? (
            <div className="flex items-center gap-1.5 rounded-full bg-[#4fd9c7] border border-[#2e1401] px-3 py-1 text-xs font-black text-[#2e1401]">
               <div className="w-3 h-3 rounded-full bg-[#2e1401] flex items-center justify-center">
                  <div className="w-1.5 h-1 bg-[#4fd9c7]" />
               </div>
               Mastered 5/5
            </div>
          ) : (
            <div className="flex items-center gap-2 flex-1">
              <div className="h-2 w-16 md:w-20 rounded-full border border-[#2e1401]/20 bg-white overflow-hidden">
                <div 
                  className="h-full bg-[#2e1401] transition-all duration-300" 
                  style={{ width: `${(knownCount / 5) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-black text-[#2e1401]/40">{knownCount}/5</span>
            </div>
          )}
        </div>

        <div className="relative ml-2">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 hover:bg-[#2e1401]/5 rounded-full transition-colors"
          >
            <ThreeDotsIcon className="w-5 h-5 text-[#2e1401]" />
          </button>

          {showMenu && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setShowMenu(false)}
              />
              <div className="absolute top-full right-0 mt-2 w-32 rounded-lg border-[2px] border-[#2e1401] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 overflow-hidden">
                <button 
                  onClick={() => { onEdit?.(); setShowMenu(false); }}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm font-bold text-[#2e1401] hover:bg-[#f5efe9] transition-colors border-b-[2px] border-[#2e1401]/10"
                >
                  <EditIcon className="w-4 h-4" />
                  Edit
                </button>
                <button 
                   onClick={() => { onDelete?.(); setShowMenu(false); }}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
                >
                  <DeleteIcon className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ThreeDotsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);

const EditIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const DeleteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

export default FlashcardListItem;
