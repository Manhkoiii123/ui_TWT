import { useMutationCreateCampain } from "@/api/campains/campainsApi";
import GrapeComponent from "@/app/(components)/grape/GrapeComponent";
import { Button } from "@/components/ui/button";
import {
  createCampaignState,
  useCreateCampaignZustand,
} from "@/zustands/createCampaignZustand";

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
  const idTemplate = useCreateCampaignZustand(
    (state: createCampaignState) => state.idTemplate
  );
  const { mutate: mutateCreateCampain, isPending: isPendingCreate } =
    useMutationCreateCampain();
  const handleSave = () => {
    const convertData = {
      is_manual,
      group,
      mail_setting_id: Number(dataCreate?.hostEmail),
      title: dataCreate!.campaignName,
      audiences: dataCreate!.audience.map((item) => item.label),
      id_template: idTemplate!,
      id_template_body: idTemplate!,
      schedule_send_at: new Date(dataCreate!.releaseDate).toISOString(),
    };
    console.log("convertData", convertData);
    mutateCreateCampain(convertData, {
      onSuccess: () => {
        handleBack();
      },
    });
  };
  const handleBackStepOne = () => {
    handleBack();
  };
  return (
    <div>
      <GrapeComponent isCreateTemplate={false} />
      <div className="flex justify-between mt-4">
        <Button onClick={handleBackStepOne} variant={"outline"}>
          Previous
        </Button>
        <Button disabled={isPendingCreate} onClick={handleSave}>
          Save Campain
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
