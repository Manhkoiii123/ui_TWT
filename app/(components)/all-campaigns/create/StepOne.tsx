import TableTemplateEmail from "@/app/(components)/create-email/TableTemplateEmail";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TemplateResponse } from "@/types/template";
import React from "react";
type Props = {
  selectedValue: string;
  handleValueChange: (value: string) => void;
  templates: TemplateResponse | undefined;
  isLoading: boolean;
  handleNext: () => void;
};
const StepOne = ({
  handleValueChange,
  isLoading,
  selectedValue,
  templates,
  handleNext,
}: Props) => {
  return (
    <div className="ml-4">
      Select automation options
      <RadioGroup
        value={selectedValue}
        onValueChange={handleValueChange}
        className="my-4 flex gap-12"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="automate" id="automate" />
          <Label htmlFor="automate">Automate</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="manual" id="manual" />
          <Label htmlFor="manual">Manual</Label>
        </div>
      </RadioGroup>
      {selectedValue === "automate" && (
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
      {selectedValue !== "" && (
        <div className="my-4">
          <TableTemplateEmail
            isLoading={isLoading}
            templates={templates?.data}
            isPreview={true}
          />
        </div>
      )}
      <div className="flex justify-end my-4">
        <Button type="submit" onClick={handleNext}>
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
