"use client";

import React from "react";
import { useFormikContext } from "formik";
import { INITIAL_VALUES } from "../step-form/step-form.constants";
import { ADD_ONS } from "./add-ons-form.constants";

interface AddOnsFormProps {
  onBack: () => void;
}

function AddOnsForm({ onBack }: AddOnsFormProps) {
  const formik = useFormikContext<typeof INITIAL_VALUES>();
  const { values, setFieldValue, isValid, handleSubmit } = formik;
  const isYearly = values.isYearly;
  const selectedAddOns = values.selectedAddOns;

  const toggleAddOn = (id: string) => {
    const isSelected = selectedAddOns.includes(id);
    setFieldValue("selectedAddOns", isSelected ? [] : [id]);
  };

  return (
    <div className="flex flex-1 flex-col px-1 pt-2 md:pl-20 md:pr-16 md:pt-10">
      <h1 className="mb-2 text-3xl font-bold text-[#02295A]">Pick add-ons</h1>
      <p className="mb-6 text-[16px] text-gray-400 md:mb-10">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="flex flex-col gap-4">
        {ADD_ONS.map((addon) => {
          const isSelected = selectedAddOns.includes(addon.id);
          return (
            <div
              key={addon.id}
              onClick={() => toggleAddOn(addon.id)}
              className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors hover:border-[#483EFF] md:px-6 md:py-5 ${
                isSelected
                  ? "border-[#483EFF] bg-[#F8F9FF]"
                  : "border-gray-300 bg-white"
              }`}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-[4px] border ${
                    isSelected
                      ? "border-[#483EFF] bg-[#483EFF]"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                    >
                      <path
                        fill="none"
                        stroke="#FFF"
                        strokeWidth="2"
                        d="m1 4 3.433 3.433L10.866 1"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[#02295A]">{addon.title}</h3>
                  <p className="text-[14px] text-gray-400">
                    {addon.description}
                  </p>
                </div>
              </div>
              <span className="text-[14px] text-[#483EFF]">
                +${isYearly ? addon.priceYearly : addon.priceMonthly}/
                {isYearly ? "yr" : "mo"}
              </span>
            </div>
          );
        })}
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
          disabled={!isValid}
          className={`rounded-lg px-6 py-3 font-medium text-white transition-colors ${
            isValid
              ? "bg-[#02295A] hover:bg-blue-700"
              : "cursor-not-allowed bg-[#164A8A]"
          }`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export { AddOnsForm };
