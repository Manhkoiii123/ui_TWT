"use client";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CustomMultipleSelectProps = {
  placeholder?: string;
  value: { id: number; label: string }[];
  onChange: (value: { id: number; label: string }[]) => void;
  allOptions: { id: number; label: string }[];
};

const CustomMultipleSelect = ({
  placeholder,
  allOptions,
  value: selectedOptions,
  onChange: handleSelect,
}: CustomMultipleSelectProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = allOptions.filter(
    (option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedOptions.some((o) => o.id === option.id)
  );

  const addOption = (option: { id: number; label: string }) => {
    const newSelectOptions = [...selectedOptions, option];
    handleSelect(newSelectOptions);
    setSearchQuery("");
  };

  const removeOption = (option: { id: number; label: string }) => {
    const newSelectOptions = selectedOptions.filter((o) => o.id !== option.id);
    handleSelect(newSelectOptions);
  };

  return (
    <div className="relative w-full py-2" ref={dropdownRef}>
      <div
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="flex flex-wrap items-center gap-2 border rounded-lg pl-2 py-2 cursor-pointer "
      >
        {selectedOptions.map((option) => (
          <div
            key={option.id}
            className="flex items-center bg-[#E6E6E6]  pl-2  rounded-lg text-[12px]"
          >
            <span>{option.label}</span>
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
          className="flex-grow focus:outline-none cursor-pointer placeholder:font-normal "
          placeholder={
            selectedOptions.length === 0
              ? placeholder
                ? placeholder
                : "Select"
              : ""
          }
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        />
        {selectedOptions.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSelect([]);
            }}
            className="pr-2 "
          >
            ✕
          </button>
        )}
        <div className="flex items-center gap-1 pr-2">
          <div className=" w-[1px] h-[20px] border border-[#ccc] "></div>
          <ChevronDownIcon className="text-[#ccc] " />
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-40 overflow-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => {
                  addOption(option);
                  setDropdownOpen(false);
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {option.label}
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
