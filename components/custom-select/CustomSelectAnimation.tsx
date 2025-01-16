/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

interface CustomSelectAnimationProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: FieldErrors;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  rules?: any;
}

const CustomSelectAnimation: React.FC<CustomSelectAnimationProps> = ({
  register,
  name,
  errors,
  options,
  placeholder,
  disabled,
  defaultValue,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(defaultValue ? true : false);
  const [hasValue, setHasValue] = useState(defaultValue ? true : false);

  useEffect(() => {
    if (disabled && defaultValue) {
      setHasValue(true);
    }
  }, [disabled, defaultValue]);

  return (
    <label className="relative cursor-pointer">
      <select
        disabled={disabled}
        {...register(name, {
          ...rest.rules,
          onChange: (e) => setHasValue(!!e.target.value),
        })}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        defaultValue={disabled ? defaultValue : ""}
        className={`h-[52px] w-[100%] px-2 border-gray-300 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${
          errors[name] ? "border-red-500" : ""
        }`}
      >
        <option value="" className="hidden" disabled selected></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        className={`bg-white text-gray-500 text-opacity-80 z-10 absolute left-2 px-1 transition duration-200 ${
          isFocused || hasValue
            ? "transform -translate-y-2 -translate-x-3 scale-75 text-sm text-blue-500"
            : "top-[-2px]"
        }`}
      >
        {placeholder}
      </span>
      {/* {errors[name] && (
        <span className="text-red-500 text-sm absolute top-12 left-2">
          {errors[name]?.message?.toString()}
        </span>
      )} */}
    </label>
  );
};

export default CustomSelectAnimation;
