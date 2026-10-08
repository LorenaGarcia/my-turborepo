"use client";

import React from "react";
import { useFormikContext } from "formik";
import { INITIAL_VALUES } from "../step-form/step-form.constants";
import { PLANS } from "./plan-form.constants";

interface PlanFormProps {
  onBack: () => void;
}

function PlanForm({ onBack }: PlanFormProps) {
  const formik = useFormikContext<typeof INITIAL_VALUES>();
  const { values, setFieldValue, isValid, handleSubmit } = formik;
  const selectedPlan = values.plan;
  const isYearly = values.isYearly;

  return (
    <div className="flex flex-1 flex-col px-1 pt-2 md:pl-20 md:pr-16 md:pt-10">
      <h1 className="mb-2 text-3xl font-bold text-[#02295A]">
        Select your plan
      </h1>
      <p className="mb-6 text-[16px] text-gray-400 md:mb-10">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setFieldValue("plan", plan.id)}
            className={`flex flex-1 cursor-pointer items-start gap-3.5 rounded-lg border p-4 text-left transition-colors md:h-[160px] md:w-[138px] md:flex-none md:flex-col md:justify-between md:gap-0 ${
              selectedPlan === plan.id
                ? "border-[#483EFF] bg-[#F8F9FF]"
                : "border-gray-300 bg-white hover:border-[#483EFF]"
            }`}
          >
            <div>{plan.icon}</div>
            <div className="flex flex-col">
              <span className="font-bold text-[#02295A]">{plan.name}</span>
              <span className="text-[14px] text-gray-400">
                ${isYearly ? plan.priceYearly : plan.priceMonthly}/
                {isYearly ? "yr" : "mo"}
              </span>
              <span
                className={`mt-1 text-[12px] text-[#02295A] ${
                  isYearly ? "visible" : "invisible"
                }`}
              >
                2 months free
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-6 rounded-lg bg-[#F8F9FF] py-3">
        <span
          className={`text-[14px] font-bold ${
            !isYearly ? "text-[#02295A]" : "text-gray-400"
          }`}
        >
          Monthly
        </span>
        <button
          type="button"
          onClick={() => setFieldValue("isYearly", !isYearly)}
          className="relative flex h-5 w-10 items-center rounded-full bg-[#02295A] px-1 transition-colors"
        >
          <div
            className={`h-3.5 w-3.5 rounded-full bg-white transition-transform ${
              isYearly ? "translate-x-4.5" : "translate-x-0"
            }`}
          />
        </button>
        <span
          className={`text-[14px] font-bold ${
            isYearly ? "text-[#02295A]" : "text-gray-400"
          }`}
        >
          Yearly
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

export { PlanForm };
