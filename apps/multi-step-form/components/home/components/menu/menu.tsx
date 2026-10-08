import React from "react";
import BackgroundMenu from "@/public/images/background-menu";
import BackgroundMenuMobile from "@/public/images/background-menu-mobile";
import { STEPS } from "./menu.constants";

interface MenuProps {
  currentStep: number;
}

function Menu({ currentStep }: MenuProps) {
  return (
    <>
      <div className="relative flex h-[172px] w-full justify-center md:hidden">
        <BackgroundMenuMobile className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative z-10 mt-10 flex gap-4">
          {STEPS.map((step) => {
            const active = step.num === currentStep;
            return (
              <div
                key={step.num}
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold transition-colors ${
                  active
                    ? "border-blue-200 bg-blue-200 text-blue-950"
                    : "border-white bg-transparent text-white"
                }`}
              >
                {step.num}
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative hidden w-[274px] shrink-0 overflow-hidden rounded-[10px] md:block md:min-h-[568px] bg-[#483EFF]">
        <BackgroundMenu className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-x-0 top-0 flex flex-col gap-8 p-10">
          {STEPS.map((step) => {
            const active = step.num === currentStep;
            return (
              <div key={step.num} className="flex items-center gap-4">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold transition-colors ${
                    active
                      ? "border-blue-200 bg-blue-200 text-blue-950"
                      : "border-white bg-transparent text-white"
                  }`}
                >
                  {step.num}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium tracking-wide text-[#ABAAFF]">
                    STEP {step.num}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-white">
                    {step.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { Menu };
