"use client";
import React, { useState } from "react";

const Tooltip = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        data-tooltip-target="tooltip-bottom"
        data-tooltip-placement="bottom"
        type="button"
        className=" flex items-center justify-center  bg-gray-100 rounded-full text-white p-3"
      >
        {icon}
      </button>
      {isVisible && (
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-100 text-gray-800 text-sm rounded transition-all duration-300 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="absolute top-[-11%] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-100"></div>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
