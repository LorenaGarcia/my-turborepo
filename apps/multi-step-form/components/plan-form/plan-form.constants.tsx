import IconArcade from "@/public/images/icon-arcade";
import IconAdvanced from "@/public/images/icon-advanced";
import IconPro from "@/public/images/icon-pro";

const PLANS = [
  {
    id: "arcade",
    name: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
    icon: <IconArcade />,
  },
  {
    id: "advanced",
    name: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
    icon: <IconAdvanced />,
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
    icon: <IconPro />,
  },
];

export { PLANS };
