import React from "react";

const CustomInput = () => {
  return (
    <label className="relative cursor-pointer">
      <input
        type="text"
        placeholder="Input"
        className="h-10 w-96 px-6  text-red-500  border-gray-300 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
      />
      <span className="bg-white text-gray-500 text-opacity-80 z-10 absolute left-2 top-2 px-1 transition duration-200 input-text">
        Input
      </span>
    </label>
  );
};

export default CustomInput;
