import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DownIcon from "@/icon/DownIcon";
import React, { useState } from "react";

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState("View Report");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  const options = ["View Report", "Unsubscribe", "Edit", "View History"];
  return (
    <div className="flex items-center">
      <div className="rounded-s-full bg-gray-100 px-3 py-1 cursor-pointer border-r-2 border-gray-300">
        {selectedOption}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-e-full bg-gray-100 px-3 py-1">
            <DownIcon />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          {options.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => handleOptionSelect(option)}
              className="cursor-pointer"
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CustomSelect;
