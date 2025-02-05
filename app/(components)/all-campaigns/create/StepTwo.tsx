import GrapeComponent from "@/app/(components)/grape/GrapeComponent";
import {
  createCampaignState,
  useCreateCampaignZustand,
} from "@/zustands/createCampaignZustand";
import { usePathname } from "next/navigation";

import React from "react";

type Props = {
  handleBack: () => void;
  is_manual: boolean;
  group: string;
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
const StepTwo = ({ handleBack, dataCreate, is_manual, group }: Props) => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const isCreate = segments[segments.length - 1];

  const handleBackStepOne = () => {
    handleBack();
  };
  const templateCampaign = useCreateCampaignZustand(
    (state: createCampaignState) => state.templateCampaign
  );
  return (
    <div>
      <GrapeComponent
        isEditCampaign={isCreate === "update"}
        isCreateCampaign={isCreate === "create"}
        handleBackStepOne={handleBackStepOne}
        isCreateTemplate={false}
        templateCampaign={templateCampaign}
        dataCreate={dataCreate}
        is_manual={is_manual}
        group={group}
      />
    </div>
  );
};

export default StepTwo;
