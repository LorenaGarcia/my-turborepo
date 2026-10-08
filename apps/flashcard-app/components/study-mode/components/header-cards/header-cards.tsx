"use client";

import { useState, useRef, useEffect } from "react";

import Arrow from "@/public/assets/arrow";
import Shuffle from "@/public/assets/shuffle";
import RightIcon from "@/public/assets/right-icon";

import { CATEGORIES } from "./header-cards.constants";

interface HeaderCardsProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  hideMastered: boolean;
  onToggleHideMastered: (checked: boolean) => void;
  onShuffle: () => void;
}

function HeaderCards({
  selectedCategories,
  onCategoryChange,
  hideMastered,
  onToggleHideMastered,
  onShuffle,
}: HeaderCardsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSelection = (id: string) => {
    const newSelected = selectedCategories.includes(id)
      ? selectedCategories.filter((item) => item !== id)
      : [...selectedCategories, id];
    onCategoryChange(newSelected);
  };

  return (
    <div className="flex flex-col gap-4 border-b border-[#2E1401] p-[20px]">
      {/* First Row: Categories and Shuffle */}
      <div className="flex w-full items-center justify-between gap-4">
        <div
          ref={dropdownRef}
          className="relative w-[180px] font-sans md:w-[200px]"
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full cursor-pointer items-center justify-between rounded-[100px] border border-[#2E1401] bg-white px-4 py-2.5 text-base font-bold text-black md:text-lg"
          >
            <span className="truncate">All Categories</span>
            <span
              className={`${isOpen ? "rotate-180" : "rotate-0"} ml-2 flex-shrink-0 font-mono text-xl transition-transform`}
            >
              <Arrow />
            </span>
          </div>

          {isOpen && (
            <div className="absolute z-20 mt-2 w-[260px] overflow-hidden rounded-[8px] border border-[#2E1401] bg-white shadow-xl">
              <div className="flex flex-col">
                {CATEGORIES.map((category) => {
                  const isSelected = selectedCategories.includes(category.id);

                  return (
                    <label
                      key={category.id}
                      className="group flex cursor-pointer items-center gap-3 border-b border-[#2E1401] px-4 py-3 transition-colors last:border-b-0 hover:bg-[#f5efe9]"
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isSelected}
                        onChange={() => toggleSelection(category.id)}
                      />

                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 border-[#2E1401] transition-all">
                        {isSelected ? <Arrow /> : null}
                      </div>

                      <div className="flex items-baseline gap-1 text-black select-none">
                        <span className="text-lg leading-none font-semibold">
                          {category.label}
                        </span>
                        <span className="text-lg font-medium text-gray-500">
                          ({category.count})
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Hide Mastered - Desktop only in this row */}
        <label className="group hidden cursor-pointer items-center gap-3 md:flex">
          <input
            type="checkbox"
            className="sr-only"
            checked={hideMastered}
            onChange={(e) => onToggleHideMastered(e.target.checked)}
          />
          <div
            className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 border-[#2E1401] transition-all ${
              hideMastered && "bg-yellow-500"
            }`}
          >
            {hideMastered ? <RightIcon /> : null}
          </div>
          <span className="text-base font-bold whitespace-nowrap text-black select-none md:text-lg">
            Hide Mastered
          </span>
        </label>

        <div
          onClick={onShuffle}
          className="flex h-[48px] cursor-pointer items-center gap-2 rounded-[100px] border border-[#2E1401] bg-white px-4 shadow-md hover:bg-gray-50 active:translate-y-[1px] lg:ml-0"
        >
          <Shuffle />
          <span className="font-bold">Shuffle</span>
        </div>
      </div>

      {/* Second Row: Hide Mastered - Mobile only */}
      <div className="flex items-center md:hidden">
        <label className="group flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            className="sr-only"
            checked={hideMastered}
            onChange={(e) => onToggleHideMastered(e.target.checked)}
          />
          <div
            className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 border-[#2E1401] transition-all ${
              hideMastered && "bg-yellow-500"
            }`}
          >
            {hideMastered ? <RightIcon /> : null}
          </div>
          <span className="text-base font-bold whitespace-nowrap text-black select-none md:text-lg">
            Hide Mastered
          </span>
        </label>
      </div>
    </div>
  );
}

export { HeaderCards };
