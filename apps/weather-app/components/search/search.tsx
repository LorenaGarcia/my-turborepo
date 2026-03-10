import { searchLocations, GeocodingResult } from "@/services/weather";
import React, { useState, useEffect, useRef } from "react";
import { handleSelect, handleSubmit } from "./search.utils";

interface SearchProps {
  onSelectLocation: (lat: number, lon: number, name: string) => void;
}

function Search({ onSelectLocation }: SearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GeocodingResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 2) {
        const data = await searchLocations(query);
        setResults(data);
        setIsOpen(data.length > 0);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    };

    const timer = setTimeout(fetchResults, 100);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSelect = (result: GeocodingResult) => {
    handleSelect(result, onSelectLocation, setQuery, setResults, setIsOpen);
  };

  const onSubmit = (e: React.FormEvent) => {
    handleSubmit(e, results, onSelect);
  };

  return (
    <div
      className="relative w-full max-w-2xl mx-auto mb-10 md:mb-12"
      ref={dropdownRef}
    >
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row gap-3 md:gap-4"
      >
        <div className="flex-1 flex items-center gap-3 bg-[#1D1C35]/50 backdrop-blur-md rounded-[20px] px-4 md:px-5 py-3 md:py-3.5 border border-white/5 transition-all focus-within:bg-white/10 group">
          <svg
            width="20"
            height="20"
            className="md:w-6 md:h-6 text-zinc-400 group-focus-within:text-white transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() =>
              query.length > 2 && results.length > 0 && setIsOpen(true)
            }
            placeholder="Search for a place..."
            className="bg-transparent text-white placeholder-zinc-400 outline-none w-full text-base md:text-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-[#4C5CDE] hover:bg-[#4352C9] transition-all text-white font-medium rounded-[20px] px-6 md:px-10 py-3 md:py-3.5 shadow-lg active:scale-95 flex items-center justify-center whitespace-nowrap"
        >
          Search
        </button>
      </form>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 sm:right-1/4 mt-2 bg-[#252440] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl backdrop-blur-xl max-h-[300px] overflow-y-auto custom-scrollbar">
          {results.map((result: GeocodingResult) => (
            <div
              key={result.id}
              onClick={() => onSelect(result)}
              className="px-5 py-3.5 hover:bg-white/10 cursor-pointer border-b border-white/5 last:border-none group"
            >
              <div className="flex flex-col">
                <span className="text-white font-medium group-hover:text-[#4C5CDE] transition-colors">
                  {result.name}
                </span>
                <span className="text-zinc-400 text-sm">
                  {result.admin1 ? `${result.admin1}, ` : ""}
                  {result.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { Search };
