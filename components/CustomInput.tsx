/* eslint-disable @typescript-eslint/no-explicit-any */
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

interface CustomInputProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: FieldErrors;
  placeholder?: string;
  type?: string;
  rules?: any;
  defaultValue?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  register,
  name,
  errors,
  type,
  defaultValue,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(defaultValue ? true : false);
  const [hasValue, setHasValue] = useState(defaultValue ? true : false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <label className="relative cursor-pointer">
      <input
        autoFocus={false}
        type={
          type === "password" ? (!showPassword ? "password" : "text") : type
        }
        {...register(name, {
          ...rest.rules,
          onChange: (e) => setHasValue(!!e.target.value),
        })}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`h-[52px] w-[100%] px-6 border-gray-300 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      <span
        className={`bg-white text-gray-500 text-opacity-80 z-10 absolute left-2 px-1 transition duration-200 ${
          isFocused || hasValue
            ? "transform -translate-y-[0.5rem] scale-75 text-sm text-blue-500"
            : "top-[-2px]"
        }`}
      >
        {rest.placeholder}
      </span>
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none text-[#ccc]"
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      )}
    </label>
  );
};

export default CustomInput;
