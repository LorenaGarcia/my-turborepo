type UnitState = {
  temp: "c" | "f";
  wind: "kmh" | "mph";
  precip: "mm" | "in";
};

interface UnitsDropdownProps {
  units: UnitState;
  onChangeUnits: (newUnits: UnitState) => void;
}

export type { UnitState, UnitsDropdownProps };