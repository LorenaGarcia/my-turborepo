import { UnitState } from "./units-dropdown.types";

const UNITS: UnitState = {
  temp: "c",
  wind: "kmh",
  precip: "mm",
};

const UNITS_IMPERIAL: UnitState = {
  temp: "f",
  wind: "mph",
  precip: "in",
};

export { UNITS, UNITS_IMPERIAL };
