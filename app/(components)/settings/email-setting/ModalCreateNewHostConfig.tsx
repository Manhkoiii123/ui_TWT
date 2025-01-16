import {
  TCreateEmailSetting,
  useMutationCreateEmailSetting,
  useMutationEditEmailSetting,
} from "@/api/emailSetting/emailSettingApi";
import CustomSelectAnimation from "@/components/custom-select/CustomSelectAnimation";
import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { TEmailSetting } from "@/types/hostEmail";
import { Separator } from "@radix-ui/react-separator";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  dataEdit?: TEmailSetting | null;
  handleDeleteDataEdit?: () => void;
};
export const ModalCreateNewHostConfig = ({
  isOpen,
  setIsOpen,
  dataEdit,
  handleDeleteDataEdit,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({});

  useEffect(() => {
    if (dataEdit) {
      reset({
        host: dataEdit.host,
        port: dataEdit.port,
        username: dataEdit.username,
        password: dataEdit.password,
        encryption: dataEdit.encryption,
        address: dataEdit.address,
        name: dataEdit.name,
      });
    } else {
      reset({
        host: "",
        port: "",
        username: "",
        password: "",
        encryption: "",
        address: "",
        name: "",
      });
    }
  }, [dataEdit, reset]);
  const { toast } = useToast();
  const smtpOptions = [{ value: "STMP", label: "SMTP" }];
  const encryptionOptions = [
    { value: "TLS", label: "TLS" },
    { value: "SSL", label: "SSL" },
  ];

  const queryClient = useQueryClient();

  const {
    mutate: mutateCreateEmailSetting,
    isPending: isLoadingCreateEmailSetting,
  } = useMutationCreateEmailSetting();
  const {
    mutate: mutateEditEmailSetting,
    isPending: isLoadingEditEmailSetting,
  } = useMutationEditEmailSetting();
  const onSubmit = (data: FieldValues) => {
    if (dataEdit && handleDeleteDataEdit) {
      mutateEditEmailSetting(
        { id: dataEdit.id, data: data as TCreateEmailSetting },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["mail-settings"],
            });
            setIsOpen(false);
            handleDeleteDataEdit();
            toast({
              title: "Edit Email Setting Successfully",
              variant: "default",
            });
          },
        }
      );
    } else {
      mutateCreateEmailSetting(data as TCreateEmailSetting, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["mail-settings"],
          });
          reset();
          setIsOpen(false);
          toast({
            title: "Create Email Setting Successfully",
            variant: "default",
          });
        },
      });
    }
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(isOpen) => {
        setIsOpen(isOpen);
        if (dataEdit && handleDeleteDataEdit) {
          handleDeleteDataEdit();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant={"outline"} className="mb-4">
          New Host Config
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px]">
        <DialogHeader>
          <DialogTitle>
            <span>{!dataEdit ? "New Host Config" : "Edit Host Config"}</span>
            <Separator className="my-4" />
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <CustomSelectAnimation
            register={register}
            name="mailer"
            placeholder="Select SMTP Server"
            options={smtpOptions}
            errors={errors}
            rules={{ required: "SMTP Server is required" }}
            disabled
            defaultValue="STMP"
          />
          <div>
            <CustomInput
              register={register}
              name="host"
              placeholder="Host*"
              errors={errors}
              rules={{ required: "Host is required" }}
              defaultValue={dataEdit?.host || ""}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="port"
              placeholder="Port*"
              errors={errors}
              rules={{
                required: "Post is required",
              }}
              defaultValue={dataEdit?.port || ""}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="username"
              placeholder="Username*"
              errors={errors}
              rules={{
                required: "Username is required",
              }}
              defaultValue={dataEdit?.username || ""}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="password"
              placeholder="Password"
              errors={errors}
              type="password"
              defaultValue={dataEdit?.password || ""}
            />
          </div>
          <div>
            <CustomSelectAnimation
              register={register}
              name="encryption"
              placeholder="Encrytion"
              options={encryptionOptions}
              errors={errors}
              rules={{ required: "Please choose encrytion" }}
              defaultValue={dataEdit?.encryption || ""}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="address"
              placeholder="Address*"
              errors={errors}
              rules={{
                required: "Address is required",
              }}
              defaultValue={dataEdit?.address || ""}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="name"
              placeholder="Name*"
              errors={errors}
              rules={{
                required: "Name is required",
              }}
              defaultValue={dataEdit?.name || ""}
            />
          </div>
          <div className="flex justify-start gap-4">
            <Button
              disabled={
                isLoadingCreateEmailSetting || isLoadingEditEmailSetting
              }
              type="submit"
            >
              Save changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
