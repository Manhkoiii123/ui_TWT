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
      <div className="flex justify-between mt-4">
        <Button onClick={handleBack} variant={"outline"}>
          Previous
        </Button>
        <Button>Save Campain</Button>
      </div>
    </div>
  );
};

export default StepTwo;
