"use client";
import { Separator } from "@/components/ui/separator";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CircleX } from "lucide-react";
import { useState } from "react";
import { useQueryGetTemplates } from "@/api/templates/templatesApi";
import StepOne from "@/app/(components)/all-campaigns/create/StepOne";
import StepTwo from "@/app/(components)/all-campaigns/create/StepTwo";

type Props = {
  handleCloseModel: () => void;
  selectedValue: string;
  handleValueChange: (value: string) => void;
  selectAutomation: string;
  handleSelectAutomation: (value: string) => void;
  dataCreate: {
    campaignName: string;
    audience: {
      id: number;
      label: string;
    }[];
    hostEmail: string;
    releaseDate: Date;
  } | null;
};
const ModalActionTemplate = ({
  handleCloseModel,
  handleSelectAutomation,
  handleValueChange,
  selectAutomation,
  selectedValue,
  dataCreate,
}: Props) => {
  const [stepCreate, setStepCreate] = useState(1);
  const [page, setPage] = useState(1);
  const handleChangePage = (pageNumber: number) => {
    setPage(pageNumber);
  };
  const { data: templates, isLoading } = useQueryGetTemplates({ page });

  const handleNext = () => {
    setStepCreate((prev) => prev + 1);
  };
  const handleBack = () => {
    setStepCreate((prev) => prev - 1);
  };

  return (
    <div>
      <SheetContent className="p-4 w-[90%]">
        <SheetHeader>
          <SheetTitle>
            <div className="flex justify-between mb-2">
              Action Template
              <div className="flex gap-8 items-center">
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
              page={page}
              handleChangePage={handleChangePage}
              selectedValue={selectedValue}
              handleValueChange={handleValueChange}
              templates={templates}
              isLoading={isLoading}
              handleNext={handleNext}
              selectAutomation={selectAutomation}
              handleSelectAutomation={handleSelectAutomation}
              handleCloseModel={handleCloseModel}
            />
          )}
          {stepCreate === 2 && (
            <StepTwo
              handleBack={handleBack}
              dataCreate={dataCreate}
              is_manual={selectedValue === "manual"}
              group={selectAutomation}
            />
          )}
        </SheetHeader>
      </SheetContent>
    </div>
  );
};

export default ModalActionTemplate;
