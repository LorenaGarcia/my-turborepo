import React, { InputHTMLAttributes, forwardRef } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function TextField({ label, error, className = "", ...props }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-blue-950">{label}</label>
        {error && (
          <span className="text-sm font-bold text-red-500">{error}</span>
        )}
      </div>
      <input
        className={`h-12 w-full rounded-lg border px-4 font-medium text-blue-950 placeholder-gray-400 transition-colors focus:outline-none ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-purple-600 hover:border-purple-600"
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export { TextField };
