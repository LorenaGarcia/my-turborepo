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
    <div className="flex h-full flex-col overflow-hidden rounded-[20px] border-[2px] border-[#2e1401] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="line-clamp-2 text-xl font-extrabold text-[#2e1401]">
          {question}
        </h3>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-black tracking-wider text-[#2e1401]/40 uppercase">
            Answer:
          </span>
          <p className="line-clamp-3 font-medium text-[#2e1401]">{answer}</p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t-[2px] border-[#2e1401]/10 bg-[#fffaf5]/30 px-6 py-4">
        <div className="flex flex-1 items-center gap-3 overflow-hidden">
          <span className="truncate rounded-full border border-[#2e1401]/20 bg-white px-3 py-1 text-xs font-black text-[#2e1401]">
            {category}
          </span>

          {isMastered ? (
            <div className="flex items-center gap-1.5 rounded-full border border-[#2e1401] bg-[#4fd9c7] px-3 py-1 text-xs font-black text-[#2e1401]">
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#2e1401]">
                <div className="h-1 w-1.5 bg-[#4fd9c7]" />
              </div>
              Mastered 5/5
            </div>
          ) : (
            <div className="flex flex-1 items-center gap-2">
              <div className="h-2 w-16 overflow-hidden rounded-full border border-[#2e1401]/20 bg-white md:w-20">
                <div
                  className="h-full bg-[#2e1401] transition-all duration-300"
                  style={{ width: `${(knownCount / 5) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-black text-[#2e1401]/40">
                {knownCount}/5
              </span>
            </div>
          )}
        </div>

        <div className="relative ml-2">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="rounded-full p-1 transition-colors hover:bg-[#2e1401]/5"
          >
            <ThreeDotsIcon className="h-5 w-5 text-[#2e1401]" />
          </button>

          {showMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowMenu(false)}
              />
              <div className="absolute top-full right-0 z-20 mt-2 w-32 overflow-hidden rounded-lg border-[2px] border-[#2e1401] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <button
                  onClick={() => {
                    onEdit?.();
                    setShowMenu(false);
                  }}
                  className="flex w-full items-center gap-2 border-b-[2px] border-[#2e1401]/10 px-4 py-2 text-sm font-bold text-[#2e1401] transition-colors hover:bg-[#f5efe9]"
                >
                  <EditIcon className="h-4 w-4" />
                  Edit
                </button>
                <button
                  onClick={() => {
                    onDelete?.();
                    setShowMenu(false);
                  }}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm font-bold text-red-500 transition-colors hover:bg-red-50"
                >
                  <DeleteIcon className="h-4 w-4" />
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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const DeleteIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

export default FlashcardListItem;
