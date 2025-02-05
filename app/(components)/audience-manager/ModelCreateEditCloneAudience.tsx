/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TCreateAudience,
  useMutateCreateAudience,
  useMutationEditAudience,
} from "@/api/audiences/audienceApi";
import CustomMultipleSelect from "@/components/custom-select/CustomMultipleSelect";
import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { TAudience } from "@/types/audience";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  type: "create" | "edit" | "clone";
  dataSelect?: TAudience | null;
};
const ModelCreateEditCloneAudience = ({
  isOpen,
  setIsOpen,
  type,
  dataSelect,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FieldValues>({});
  const queryClient = useQueryClient();
  const encryptionOptions = [
    { label: "Employee", id: "Employee" },
    { label: "Travel Agent", id: "Travel Agent" },
    { label: "Business Partner", id: "Business Partner" },
    { label: "Distributor", id: "Distributor" },
    { label: "Tour Operator", id: "Tour Operator" },
    { label: "Corporate", id: "Corporate" },
    { label: "Supplier", id: "Supplier" },
    { label: "Passenger", id: "Passenger" },
    { label: "Tour Guide", id: "Tour Guide" },
    { label: "Emergency", id: "Emergency" },
    { label: "Client", id: "Client" },
    { label: "Other", id: "Other" },
    { label: "Undefined", id: "Undefined" },
  ];
  const { mutate: mutateCreateAudience, isPending: isPendingCreateAudience } =
    useMutateCreateAudience();
  const { mutate: mutateEditAudience, isPending: isPendingEditAudience } =
    useMutationEditAudience();
  useEffect(() => {
    if (type === "edit" && dataSelect) {
      reset({
        title: dataSelect.title,
        type: JSON.parse(dataSelect.type).map((item: any) => {
          return {
            id: encryptionOptions.find((option) => option.label === item)?.id,
            label: item,
          };
        }),
      });
    }
  }, [dataSelect, reset, type]);

  const { toast } = useToast();

  const onSubmit = (data: FieldValues) => {
    const convertData = {
      title: data.title,
      type: data.type.map((item: { id: number; label: string }) => item.label),
    };

    if (type === "create") {
      mutateCreateAudience(convertData as TCreateAudience, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["audiences"],
          });
          toast({
            title: "Audience created successfully",
            variant: "default",
          });
          setIsOpen(false);
        },
      });
    } else if (type === "edit" && dataSelect) {
      mutateEditAudience(
        {
          id: dataSelect.id,
          data: convertData as TCreateAudience,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["audiences"],
            });
            toast({
              title: "Audience edited successfully",
              variant: "default",
            });
            setIsOpen(false);
          },
        }
      );
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-[60vh] min-h-[400px] max-w-[800px] overflow-x-auto">
        <DialogHeader>
          <DialogTitle className="text-gray-800 font-medium text-[12px] leading-[1.6rem] border-b border-gray-200 pb-[10px]">
            {type === "create" && "Audience"} {type === "edit" && "Edit"}
            {type === "clone" && "Clone"}
          </DialogTitle>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 pt-4"
          >
            <div className="">
              <CustomInput
                register={register}
                name="title"
                placeholder="Title*"
                errors={errors}
                rules={{ required: "Title is required" }}
                defaultValue={dataSelect?.title}
              />
            </div>
            <div className="">
              <Controller
                name="type"
                control={control}
                render={({ field }) => {
                  // const parseData = JSON.parse(dataSelect?.type ?? "[]");
                  // const value = parseData.map((item: any) => ({
                  //   id: encryptionOptions.filter(
                  //     (option) => option.label === item
                  //   )[0]?.id,
                  //   label: item,
                  // }));
                  return (
                    <CustomMultipleSelect
                      placeholder="Choose audience"
                      allOptions={encryptionOptions}
                      value={field.value ?? []}
                      onChange={(value) => field.onChange(value)}
                    />
                  );
                }}
              />
            </div>

            <div className="flex justify-center gap-4">
              <Button
                type="submit"
                disabled={isPendingCreateAudience || isPendingEditAudience}
              >
                Save
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModelCreateEditCloneAudience;
