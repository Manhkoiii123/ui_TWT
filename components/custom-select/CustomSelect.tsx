/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DownIcon from "@/icon/DownIcon";
import React, { useState } from "react";
type TOption = {
  label: string;
  action: any;
};
const CustomSelect = ({ options }: { options: TOption[] }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const handleOptionSelect = (option: TOption) => {
    option.action();
    setSelectedOption(option.label);
  };
  return (
    <div className="flex items-center">
      <div
        className="rounded-s-full bg-gray-100 px-3 py-2 cursor-pointer border-r-2 border-gray200"
        onClick={() => {
          const option = options.find(
            (option) => option.label === selectedOption
          );
          if (option) {
            option.action();
          }
        }}
      >
        {selectedOption}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-e-full bg-gray-100 px-3 py-2">
            <DownIcon />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.label}
              onClick={() => handleOptionSelect(option)}
              className="cursor-pointer"
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CustomSelect;
