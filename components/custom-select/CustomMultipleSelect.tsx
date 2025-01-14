"use client";
import { useState } from "react";

const CustomMultipleSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const allOptions = [
    "QLD Agency",
    "NSW Agency",
    "WA Agency",
    "New Zealand Agency",
    "VIC Agency",
    "TAS Agency",
    "SA Agency",
    "All B2B Agency",
    "All B2B Supplier",
    "All B2C Client",
  ];

  const filteredOptions = allOptions.filter(
    (option) =>
      option.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedOptions.includes(option)
  );

  const addOption = (option: string) => {
    setSelectedOptions((prev) => [...prev, option]);
    setSearchQuery("");
  };

  const removeOption = (option: string) => {
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };

  return (
    <div className="relative w-full py-2">
      <div
        onClick={() => setDropdownOpen(true)}
        className="flex flex-wrap items-center gap-2 border rounded-lg pl-2 py-2 cursor-pointer"
      >
        {selectedOptions.map((option) => (
          <div
            key={option}
            className="flex items-center bg-[#E6E6E6]  pl-2  rounded-lg text-[12px]"
          >
            <span>{option}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeOption(option);
              }}
              className="ml-1 px-2 py-1 text-[#000] rounded-e-lg hover:text-red-700 hover:bg-red-300 "
            >
              ✕
            </button>
          </div>
        ))}

        <input
          type="text"
          className="flex-grow focus:outline-none cursor-pointer"
          placeholder={selectedOptions.length === 0 ? "Select Audience..." : ""}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setDropdownOpen(true)}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedOptions([]);
          }}
          className="pr-4 "
        >
          ✕
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-40 overflow-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  addOption(option);
                  setDropdownOpen(false);
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomMultipleSelect;
