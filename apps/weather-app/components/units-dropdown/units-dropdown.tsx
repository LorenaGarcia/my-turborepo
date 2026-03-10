"use client";

import { useState, useRef, useEffect } from "react";
import { UnitState, UnitsDropdownProps } from "./units-dropdown.types";
import { UNITS, UNITS_IMPERIAL } from "./units-dropdown.constants";

function UnitsDropdown({ units, onChangeUnits }: UnitsDropdownProps) {
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleUnit = (category: keyof UnitState, value: string) => {
    onChangeUnits({ ...units, [category]: value });
  };

  const isImperial =
    units.temp === "f" && units.wind === "mph" && units.precip === "in";

  const switchToImperial = () => {
    onChangeUnits(UNITS_IMPERIAL);
  };

  const switchToMetric = () => {
    onChangeUnits(UNITS);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[10px] px-4 py-3 rounded-[8px] bg-[#262540] hover:bg-[#25254d] transition-all text-white font-medium text-base shadow-sm"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span className="text-[16px]">Units</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-[8px] p-3 flex flex-col gap-3 shadow-2xl z-50 bg-[#262540]">
          <button
            onClick={isImperial ? switchToMetric : switchToImperial}
            className="w-full py-2 px-3 rounded-[6px] bg-white/5 text-white hover:bg-white/10 transition-all text-left font-medium text-sm"
          >
            {isImperial ? "Switch to Metric" : "Switch to Imperial"}
          </button>

          <section className="flex flex-col">
            <h3 className="text-zinc-500 text-[11px] font-bold px-2 py-2 uppercase tracking-tight">
              Temperature
            </h3>
            <button
              onClick={() => toggleUnit("temp", "c")}
              className={`flex items-center justify-between px-3 py-2 rounded-[6px] transition-all ${
                units.temp === "c"
                  ? "bg-[#302F4A] text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <span className="text-sm">Celsius (°C)</span>
              {units.temp === "c" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 text-white"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
            <button
              onClick={() => toggleUnit("temp", "f")}
              className={`flex items-center justify-between px-3 py-2 rounded-[6px] transition-all ${
                units.temp === "f"
                  ? "bg-[#302F4A] text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <span className="text-sm">Fahrenheit (°F)</span>
              {units.temp === "f" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 text-white"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          </section>

          <div className="h-[1px] bg-white/5 mx-2" />

          <section className="flex flex-col">
            <h3 className="text-zinc-500 text-[11px] font-bold px-2 py-2 uppercase tracking-tight">
              Wind Speed
            </h3>
            <button
              onClick={() => toggleUnit("wind", "kmh")}
              className={`flex items-center justify-between px-3 py-2 rounded-[6px] transition-all ${
                units.wind === "kmh"
                  ? "bg-[#302F4A] text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <span className="text-sm">km/h</span>
              {units.wind === "kmh" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 text-white"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
            <button
              onClick={() => toggleUnit("wind", "mph")}
              className={`flex items-center justify-between px-3 py-2 rounded-[6px] transition-all ${
                units.wind === "mph"
                  ? "bg-[#302F4A] text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <span className="text-sm">mph</span>
              {units.wind === "mph" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 text-white"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          </section>

          <div className="h-[1px] bg-white/5 mx-2" />

          <section className="flex flex-col">
            <h3 className="text-zinc-500 text-[11px] font-bold px-2 py-2 uppercase tracking-tight">
              Precipitation
            </h3>
            <button
              onClick={() => toggleUnit("precip", "mm")}
              className={`flex items-center justify-between px-3 py-2 rounded-[6px] transition-all ${
                units.precip === "mm"
                  ? "bg-[#302F4A] text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <span className="text-sm">Millimeters (mm)</span>
              {units.precip === "mm" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 text-white"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
            <button
              onClick={() => toggleUnit("precip", "in")}
              className={`flex items-center justify-between px-3 py-2 rounded-[6px] transition-all ${
                units.precip === "in"
                  ? "bg-[#302F4A] text-white"
                  : "text-white/60 hover:bg-white/5"
              }`}
            >
              <span className="text-sm">Inches (in)</span>
              {units.precip === "in" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 text-white"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export { UnitsDropdown };
