"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CircleX } from "lucide-react";
import { useState } from "react";
import { useQueryGetTemplates } from "@/api/templates/templatesApi";
import StepOne from "@/app/(components)/all-campaigns/create/StepOne";
import StepTwo from "@/app/(components)/all-campaigns/create/StepTwo";
import {
  createCampaignState,
  useCreateCampaignZustand,
} from "@/zustands/createCampaignZustand";
import PreviewCampaign from "@/app/(components)/all-campaigns/create/PreviewCampaign";
type Props = {
  handleCloseModel: () => void;
};
const ModalActionTemplate = ({ handleCloseModel }: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [stepCreate, setStepCreate] = useState(1);
  const { data: templates, isLoading } = useQueryGetTemplates({ page: 1 });

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  const removeTemplateCampaign = useCreateCampaignZustand(
    (state: createCampaignState) => state.removeTemplateCampaign
  );
  const templateCampaign = useCreateCampaignZustand(
    (state: createCampaignState) => state.templateCampaign
  );
  const handleNext = () => {
    setStepCreate((prev) => prev + 1);
  };
  const handleBack = () => {
    setStepCreate((prev) => prev - 1);
    removeTemplateCampaign();
  };
  const handleBackStepTwo = () => {
    setStepCreate(2);
  };
  return (
    <div>
      <SheetContent className="p-4 w-[90%]">
        <SheetHeader>
          <SheetTitle>
            <div className="flex justify-between mb-2">
              Action Template
              <div className="flex gap-8 items-center">
                <Button variant="default" onClick={() => setStepCreate(3)}>
                  Preview
                </Button>{" "}
                <CircleX
                  className="cursor-pointer text-[#ccc]"
                  onClick={() => handleCloseModel()}
                />
              </div>
            </div>
            <Separator />
          </SheetTitle>
          {stepCreate === 1 && (
            <StepOne
              selectedValue={selectedValue}
              handleValueChange={handleValueChange}
              templates={templates}
              isLoading={isLoading}
              handleNext={handleNext}
            />
          )}
          {stepCreate === 2 && <StepTwo handleBack={handleBack} />}
          {stepCreate === 3 && (
            <PreviewCampaign
              handleBack={handleBackStepTwo}
              htmlContent={templateCampaign}
            />
          )}
        </SheetHeader>
      </SheetContent>
    </div>
  );
};

export default ModalActionTemplate;
