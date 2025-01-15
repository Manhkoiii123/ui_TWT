import GrapeComponent from "@/app/(components)/grape/GrapeComponent";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  handleBack: () => void;
};
const StepTwo = ({ handleBack }: Props) => {
  return (
    <div>
      <GrapeComponent isCreateTemplate={false} />
      <div className="flex justify-between">
        <Button onClick={handleBack} variant={"outline"}>
          Previous
        </Button>
        <Button onClick={handleBack}>Save Campain</Button>
      </div>
    </div>
  );
};

export default StepTwo;
