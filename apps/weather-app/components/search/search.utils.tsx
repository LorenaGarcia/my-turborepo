import { GeocodingResult } from "@/services/weather";
import React from "react";

function handleSelect(
  result: GeocodingResult,
  onSelectLocation: (lat: number, lon: number, name: string) => void,
  setQuery: (query: string) => void,
  setResults: (results: GeocodingResult[]) => void,
  setIsOpen: (isOpen: boolean) => void
) {
  const name = `${result.name}, ${result.admin1 || result.country}`;
  onSelectLocation(result.latitude, result.longitude, name);
  setQuery("");
  setResults([]);
  setIsOpen(false);
}

function handleSubmit(
  e: React.FormEvent,
  results: GeocodingResult[],
  onSelect: (result: GeocodingResult) => void
) {
  e.preventDefault();
  if (results.length > 0) {
    onSelect(results[0]);
  }
}

export { handleSelect, handleSubmit };
