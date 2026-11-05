export interface SnowflakeData {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

export const generateSnowflakes = (count: number = 42): SnowflakeData[] => {
  return Array.from({ length: count }, (_, index) => {
    const seed = (index * 37) % 100;
    return {
      id: index,
      left: (seed * 1.03) % 100,
      size: 3 + (index % 5) * 1.6,
      duration: 8 + (index % 7) * 1.8,
      delay: (index % 9) * 0.85,
      opacity: 0.45 + (index % 5) * 0.12,
      drift: (index % 2 === 0 ? 1 : -1) * (12 + (index % 4) * 8),
    };
  });
};

