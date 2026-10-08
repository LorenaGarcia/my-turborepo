"use client";

import React from "react";
import { useFormikContext } from "formik";
import { TextField } from "@/components/text-field/text-field";
import { INITIAL_VALUES } from "./step-form.constants";

function StepForm() {
  const formik = useFormikContext<typeof INITIAL_VALUES>();
  const { isValid, touched, errors, handleSubmit, getFieldProps } = formik;

  return (
    <div className="flex flex-1 flex-col px-1 pt-2 md:pl-20 md:pr-16 md:pt-10">
      <h1 className="mb-2 text-3xl font-bold text-[#02295A]">Personal info</h1>
      <p className="mb-6 text-[16px] text-gray-400 md:mb-10">
        Please provide your name, email address, and phone number.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <TextField
          label="Name"
          type="text"
          placeholder="e.g. Stephen King"
          {...getFieldProps("name")}
          error={touched.name && errors.name ? errors.name : undefined}
        />

        <TextField
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          {...getFieldProps("email")}
          error={touched.email && errors.email ? errors.email : undefined}
        />

        <TextField
          label="Phone Number"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          {...getFieldProps("phone")}
          error={touched.phone && errors.phone ? errors.phone : undefined}
        />

        <div className="mt-auto hidden justify-end pb-4 pt-16 md:flex">
          <button
            type="submit"
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
      </form>
    </div>
  );
}

export { StepForm };
