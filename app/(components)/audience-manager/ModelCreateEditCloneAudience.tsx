/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomSelectAnimation from "@/components/custom-select/CustomSelectAnimation";
import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  type: "create" | "edit" | "clone";
  data?: any;
};
const ModelCreateEditCloneAudience = ({
  isOpen,
  setIsOpen,
  type,
  data,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({});
  useEffect(() => {
    if (type === "edit" && data) {
      reset({
        title: data?.title,
      });
    }
  }, [data, reset, type]);

  const encryptionOptions = [
    { value: "TLS", label: "TLS" },
    { value: "SSL", label: "SSL" },
  ];
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-[60vh] max-w-[800px] overflow-x-auto">
        <DialogHeader>
          <DialogTitle className="text-gray-800 font-medium text-[12px] leading-[1.6rem] border-b border-gray-200 pb-[10px]">
            {type === "create" && "Audience"} {type === "edit" && "Edit"}
            {type === "clone" && "Clone"}
          </DialogTitle>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 pt-4"
          >
            <div className="flex gap-4">
              <div className="flex-[7]">
                <CustomInput
                  register={register}
                  name="title"
                  placeholder="Title*"
                  errors={errors}
                  rules={{ required: "Title is required" }}
                  defaultValue={data?.title}
                />
              </div>
              <div className="flex-[3]">
                <CustomSelectAnimation
                  register={register}
                  name="mailer"
                  placeholder="Select SMTP Server"
                  options={encryptionOptions}
                  errors={errors}
                  rules={{ required: "SMTP Server is required" }}
                />
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button type="submit">Save </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModelCreateEditCloneAudience;
