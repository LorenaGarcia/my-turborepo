import React from "react";
import CardsStack from "@/public/assets/cards-stack";
import Brain from "@/public/assets/brain";
import Book from "@/public/assets/book";
import Inbox from "@/public/assets/inbox";

interface StatCardProps {
  label: string;
  count: number;
  icon: React.ReactNode;
  iconBgColor: string;
}

const StatCard = ({ label, count, icon, iconBgColor }: StatCardProps) => (
  <div className="flex w-full overflow-hidden rounded-[12px] border-t border-l border-r-[3px] border-b-[3px] border-[#2E1401]">
    <div className="flex flex-1 flex-col p-4">
      <span className="text-lg font-bold text-[#2E1401]">{label}</span>
      <span className="mt-1 text-4xl font-extrabold text-[#2E1401]">{count}</span>
    </div>
    <div
      className="flex w-24 items-center justify-center border-l border-[#2E1401]"
      style={{ backgroundColor: iconBgColor }}
    >
      <div className="text-[#2E1401] scale-[1.5]">
        {icon}
      </div>
    </div>
  </div>
);

interface StatisticsCardsProps {
  total: number;
  mastered: number;
  inProgress: number;
  notStarted: number;
}

export const StatisticsCards = ({
  total,
  mastered,
  inProgress,
  notStarted,
}: StatisticsCardsProps) => {
  const stats = [
    { label: "Total Cards", count: total, icon: <CardsStack />, iconBgColor: "#94b2f2" },
    { label: "Mastered", count: mastered, icon: <Brain />, iconBgColor: "#4fd9c7" },
    { label: "In Progress", count: inProgress, icon: <Book />, iconBgColor: "#f27da1" },
    { label: "Not Started", count: notStarted, icon: <Inbox />, iconBgColor: "#ff9ff3" },
  ];

  return (
    <div className="flex flex-col h-full gap-4 p-[20px]">
      <h2 className="mb-2 text-2xl font-extrabold text-[#2E1401]">Study Statistics</h2>
      <div className="flex flex-col flex-1 justify-between gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};
