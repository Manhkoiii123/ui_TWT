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
  disable?: boolean;
};
const CustomSelect = ({ options }: { options: TOption[] }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].label);
  const handleCallBack = () => setSelectedOption(options[0].label);
  const handleOptionSelect = (option: TOption) => {
    setSelectedOption(option.label);
    option.action(handleCallBack);
  };
  return (
    <div className="flex items-center">
      <div
        className="rounded-s-full bg-gray-100 px-3 py-2 cursor-pointer border-r-2 border-gray200 text-[14px]"
        onClick={() => {
          const option = options.find(
            (option) => option.label === selectedOption
          );
          if (option) {
            option.action(handleCallBack);
          }
        }}
      >
        {selectedOption}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-e-full bg-gray-100 px-3 py-2 cursor-pointer">
            <DownIcon />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 ">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.label}
              onClick={() => !option.disable && handleOptionSelect(option)}
              className={`  ${
                option.disable
                  ? "text-gray-400 cursor-default "
                  : "hover:bg-blue-100 cursor-pointer"
              }`}
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
