import ModelError from "@/app/(components)/all-campaigns/create/ModelError";
import TableTemplateEmail from "@/app/(components)/create-email/TableTemplateEmail";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TemplateResponse } from "@/types/template";
import {
  createCampaignState,
  useCreateCampaignZustand,
} from "@/zustands/createCampaignZustand";
import React, { useMemo, useState } from "react";
type Props = {
  selectedValue: string;
  handleValueChange: (value: string) => void;
  templates: TemplateResponse | undefined;
  isLoading: boolean;
  handleNext: () => void;
  selectAutomation: string;
  handleSelectAutomation: (value: string) => void;
};
const StepOne = ({
  handleValueChange,
  isLoading,
  selectedValue,
  templates,
  handleNext,
  selectAutomation,
  handleSelectAutomation,
}: Props) => {
  const [isOpenModalError, setIsOpenModalError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const idTemplate = useCreateCampaignZustand(
    (state: createCampaignState) => state.idTemplate
  );
  const removeIdTemplate = useCreateCampaignZustand(
    (state: createCampaignState) => state.removeIdTemplate
  );
  const handleChangeAutomationOption = (value: string) => {
    handleValueChange(value);
    removeIdTemplate();
  };

  const handleSubmitStepOne = () => {
    if (!selectedValue) {
      setIsOpenModalError(true);
      setMessageError("Please choose options");
    } else if (selectedValue === "automate" && !selectAutomation) {
      setIsOpenModalError(true);
      setMessageError("Please choose automations");
    } else if (!idTemplate || idTemplate === 0) {
      setIsOpenModalError(true);
      setMessageError("Please choose template");
    } else {
      handleNext();
    }
  };
  const fakeAutomations = useMemo(() => {
    return [
      { id: 9, name: "Last Minute Deals with Tweet Tours" },
      { id: 8, name: "2-for -1 Deals OVC" },
      { id: 7, name: "European River Cruise on sales" },
      { id: 6, name: "CroisiEurope New itineraris" },
      { id: 5, name: "New Product for Tweet Tours" },
      { id: 4, name: "Last Minute Deals" },
    ];
  }, []);
  return (
    <>
      <div className="ml-4">
        Select automation options
        <RadioGroup
          value={selectedValue}
          onValueChange={(value) => handleChangeAutomationOption(value)}
          className="my-4 flex gap-12"
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            <RadioGroupItem value="automate" id="automate" />
            <Label className="cursor-pointer" htmlFor="automate">
              Automate
            </Label>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <RadioGroupItem value="manual" id="manual" />
            <Label className="cursor-pointer" htmlFor="manual">
              Manual
            </Label>
          </div>
        </RadioGroup>
        {selectedValue === "automate" && (
          <Select
            onValueChange={handleSelectAutomation}
            value={selectAutomation}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a automation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {fakeAutomations.map((automation) => (
                  <SelectItem key={automation.id} value={automation.name}>
                    {automation.name}
                  </SelectItem>
                ))}
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
          <Button type="submit" onClick={() => handleSubmitStepOne()}>
            Next Step
          </Button>
        </div>
      </div>
      {isOpenModalError && (
        <ModelError
          isOpenModalError={isOpenModalError}
          setIsOpenModalError={setIsOpenModalError}
          messageError={messageError}
        />
      )}
    </>
  );
};

export default StepOne;
