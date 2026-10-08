"use client";

import React from "react";
import { useFormikContext } from "formik";
import { INITIAL_VALUES } from "../step-form/step-form.constants";
import { PLANS } from "../plan-form/plan-form.constants";
import { ADD_ONS } from "../add-ons-form/add-ons-form.constants";

interface SummaryProps {
  onBack: () => void;
  onChangePlan: () => void;
}

function Summary({ onBack, onChangePlan }: SummaryProps) {
  const formik = useFormikContext<typeof INITIAL_VALUES>();
  const { values, handleSubmit } = formik;
  const { plan: selectedPlanId, isYearly, selectedAddOns } = values;

  const planDetails = PLANS.find((p) => p.id === selectedPlanId) || PLANS[0];
  const planPrice = isYearly
    ? planDetails.priceYearly
    : planDetails.priceMonthly;

  const addOnsDetails = ADD_ONS.filter((addon) =>
    selectedAddOns.includes(addon.id)
  );

  const addOnsTotalPrice = addOnsDetails.reduce((sum, addon) => {
    const price = isYearly ? addon.priceYearly : addon.priceMonthly;
    return sum + price;
  }, 0);

  const totalPrice = planPrice + addOnsTotalPrice;
  const billingSuffix = isYearly ? "yr" : "mo";

  return (
    <div className="flex flex-1 flex-col px-1 pt-2 md:pl-20 md:pr-16 md:pt-10">
      <h1 className="mb-2 text-3xl font-bold text-[#02295A]">Finishing up</h1>
      <p className="mb-6 text-[16px] text-gray-400 md:mb-10">
        Double-check everything looks OK before confirming.
      </p>

      <div className="rounded-lg bg-[#F8F9FF] p-5 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-[#02295A]">
              {planDetails.name} ({isYearly ? "Yearly" : "Monthly"})
            </span>
            <button
              type="button"
              onClick={onChangePlan}
              className="text-left text-[14px] text-gray-400 no-underline transition-colors hover:text-[#483EFF] hover:underline"
            >
              Change
            </button>
          </div>
          <span className="font-bold text-[#02295A]">
            ${planPrice}/{billingSuffix}
          </span>
        </div>

        {addOnsDetails.length > 0 && (
          <div className="my-4 border-t border-gray-200" />
        )}

        <div className="flex flex-col gap-4">
          {addOnsDetails.map((addon) => {
            const price = isYearly ? addon.priceYearly : addon.priceMonthly;
            return (
              <div
                key={addon.id}
                className="flex items-center justify-between text-[14px]"
              >
                <span className="text-gray-400">{addon.title}</span>
                <span className="text-[#02295A]">
                  +${price}/{billingSuffix}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between p-5 md:px-6">
        <span className="text-[14px] text-gray-400">
          Total (per {isYearly ? "year" : "month"})
        </span>
        <span className="text-lg font-bold text-[#483EFF] md:text-xl">
          +${totalPrice}/{billingSuffix}
        </span>
      </div>

      <div className="mt-auto hidden items-center justify-between pb-4 pt-16 md:flex">
        <button
          onClick={onBack}
          type="button"
          className="font-medium text-gray-400 transition-colors hover:text-[#02295A]"
        >
          Go Back
        </button>
        <button
          onClick={() => handleSubmit()}
          type="button"
          className="rounded-lg bg-[#483EFF] px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export { Summary };
