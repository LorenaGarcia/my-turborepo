"use client";

import React from "react";
import { useFormik, FormikProvider } from "formik";
import { Menu } from "./components/menu/menu";
import { StepForm } from "../step-form/step-form";
import { PlanForm } from "../plan-form/plan-form";
import { AddOnsForm } from "../add-ons-form/add-ons-form";
import { Summary } from "../summary/summary";
import { ThankYou } from "../thank-you/thank-you";
import { INITIAL_VALUES } from "../step-form/step-form.constants";
import { getSchema } from "../step-form/step-form.utils";

function Home() {
  const [currentStep, setCurrentStep] = React.useState(1);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: currentStep === 1 ? getSchema() : undefined,
    onSubmit: (values) => {
      if (currentStep < 4) {
        setCurrentStep((prev) => prev + 1);
      } else {
        console.log("Form values:", values);
        setCurrentStep(5);
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <div className="relative flex min-h-screen flex-col font-sans md:items-center md:justify-center md:p-4">
        <div className="md:hidden">
          <Menu currentStep={Math.min(currentStep, 4)} />
        </div>

        <div className="relative z-10 mx-4 -mt-[72px] mb-[100px] flex flex-1 flex-col rounded-xl bg-white px-6 py-8 shadow-md md:mx-auto md:max-w-[940px] md:mt-0 md:mb-0 md:min-h-[600px] md:flex-row md:rounded-2xl md:p-4 md:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] sm:px-24">
          <div className="hidden md:flex">
            <Menu currentStep={Math.min(currentStep, 4)} />
          </div>

          {currentStep === 1 && <StepForm />}
          {currentStep === 2 && <PlanForm onBack={() => setCurrentStep(1)} />}
          {currentStep === 3 && <AddOnsForm onBack={() => setCurrentStep(2)} />}
          {currentStep === 4 && (
            <Summary
              onBack={() => setCurrentStep(3)}
              onChangePlan={() => setCurrentStep(2)}
            />
          )}
          {currentStep === 5 && <ThankYou />}
        </div>

        {currentStep < 5 && (
          <div className="fixed bottom-0 left-0 right-0 z-20 bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden">
            <div className="flex justify-between items-center">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="font-medium text-gray-400 transition-colors hover:text-[#02295A]"
                >
                  Go Back
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={() => formik.handleSubmit()}
                type="button"
                disabled={!formik.isValid}
                className={`rounded-[4px] px-5 py-3 text-[14px] font-medium text-white transition-colors ${
                  formik.isValid
                    ? currentStep === 4
                      ? "bg-[#483EFF] hover:bg-blue-600"
                      : "bg-[#02295A] hover:bg-blue-700"
                    : "cursor-not-allowed bg-[#164A8A]"
                }`}
              >
                {currentStep === 4 ? "Confirm" : "Next Step"}
              </button>
            </div>
          </div>
        )}
      </div>
    </FormikProvider>
  );
}

export { Home };
