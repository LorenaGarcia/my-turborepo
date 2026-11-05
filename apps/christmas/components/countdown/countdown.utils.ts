export interface CountdownSummary {
  daysRemaining: number;
  titleLabel: string;
  targetText: string;
  posadasText: string;
}

export const calculateDaysUntilChristmasEve = (
  referenceDate: Date = new Date()
): number => {
  const year = referenceDate.getFullYear();
  const christmasEve = new Date(year, 11, 24);
  const startOfToday = new Date(
    year,
    referenceDate.getMonth(),
    referenceDate.getDate()
  );

  if (startOfToday > christmasEve) {
    christmasEve.setFullYear(year + 1);
  }

  const diffMs = christmasEve.getTime() - startOfToday.getTime();
  return Math.max(0, Math.round(diffMs / (1000 * 60 * 60 * 24)));
};

export const getPosadasDaysCount = (): number => 9;

export const getCountdownSummary = (
  referenceDate: Date = new Date()
): CountdownSummary => {
  const daysRemaining = calculateDaysUntilChristmasEve(referenceDate);
  const posadasDays = getPosadasDaysCount();

  return {
    daysRemaining,
    titleLabel: "CUENTA REGRESIVA",
    targetText: "días para Nochebuena & Navidad",
    posadasText: `${posadasDays} Días de Posadas`,
  };
};

