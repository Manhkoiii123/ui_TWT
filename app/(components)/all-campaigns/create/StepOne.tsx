import { useQueryEmailTracking } from "@/api/emailSetting/emailSettingApi";
import ModelError from "@/app/(components)/all-campaigns/create/ModelError";
import TableTemplateEmail from "@/app/(components)/create-email/TableTemplateEmail";
import Pagination from "@/components/custom-pagination/Pagination";
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
  handleCloseModel: () => void;
  page: number;
  handleChangePage: (value: number) => void;
};
const StepOne = ({
  handleValueChange,
  isLoading,
  selectedValue,
  templates,
  handleNext,
  selectAutomation,
  handleSelectAutomation,
  handleCloseModel,
  page,
  handleChangePage,
}: Props) => {
  const [isOpenModalError, setIsOpenModalError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const idTemplate = useCreateCampaignZustand(
    (state: createCampaignState) => state.idTemplate
  );
  // const removeIdTemplate = useCreateCampaignZustand(
  //   (state: createCampaignState) => state.removeIdTemplate
  // );

  const handleChangeAutomationOption = (value: string) => {
    handleValueChange(value);
    // removeIdTemplate();
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

  const { data: dataEmailTracking } = useQueryEmailTracking();
  const automations = useMemo(() => {
    // return [
    //   { id: 9, name: "Last Minute Deals with Tweet Tours" },
    //   { id: 8, name: "2-for -1 Deals OVC" },
    //   { id: 7, name: "European River Cruise on sales" },
    //   { id: 6, name: "CroisiEurope New itineraris" },
    //   { id: 5, name: "New Product for Tweet Tours" },
    //   { id: 4, name: "Last Minute Deals" },
    // ];
    const convert = dataEmailTracking?.map((item) => ({
      id: item.id,
      name: item.title,
    }));
    return convert;
  }, [dataEmailTracking]);

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
                {automations?.map((automation) => (
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
              page={page}
            />
            <div>
              <Pagination
                currentPage={page}
                pageSize={
                  Math.ceil((templates?.meta?.total ?? 0) / 10) === 0
                    ? 1
                    : Math.ceil((templates?.meta?.total ?? 0) / 10)
                }
                handleChangePage={handleChangePage}
                className="mt-6"
              />
            </div>
          </div>
        )}
        <div className="flex justify-between my-4">
          <Button onClick={handleCloseModel} variant={"outline"}>
            Previous
          </Button>
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
