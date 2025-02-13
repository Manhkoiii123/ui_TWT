"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Sheet } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import CustomMultipleSelect from "@/components/custom-select/CustomMultipleSelect";
import { Button } from "@/components/ui/button";
import ModalActionTemplate from "@/app/(components)/all-campaigns/ModalActionTemplate";
import { useQueryGetAudiences } from "@/api/audiences/audienceApi";
import { useQueryGetEmailSetting } from "@/api/emailSetting/emailSettingApi";
import { useQueryGetCampaignDetail } from "@/api/campains/campainsApi";
import {
  createCampaignState,
  useCreateCampaignZustand,
} from "@/zustands/createCampaignZustand";

const formSchema = z.object({
  campaignName: z.string().min(1).max(50),
  audience: z
    .array(
      z.object({
        id: z.number(),
        label: z.string(),
      })
    )
    .refine((value) => value.length > 0, {
      message: "Please select at least one audience.",
    }),
  hostEmail: z.string({
    required_error: "Please select a host email.",
  }),
  releaseDate: z.date({
    required_error: "A date of birth is required.",
  }),
});

const CreateCampainComponent = ({ isEdit = false }: { isEdit?: boolean }) => {
  const [campaignId, setCampaignId] = useState<string | null>(null);
  const setIdTemplate = useCreateCampaignZustand(
    (state: createCampaignState) => state.setIdTemplate
  );
  const setTemplateCampaign = useCreateCampaignZustand(
    (state: createCampaignState) => state.setTemplateCampaign
  );
  useEffect(() => {
    setCampaignId(localStorage.getItem("idEditCampaign"));
  }, []);

  const { data: dataCampaignDetail } = useQueryGetCampaignDetail(
    campaignId || "",
    campaignId !== null && isEdit
  );

  const [dataCreate, setDataCreate] = useState<z.infer<
    typeof formSchema
  > | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectAutomation, setSelectAutomation] = useState("");
  const handleSelectAutomation = (value: string) => {
    setSelectAutomation(value);
  };

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleCloseModel = () => {
    setIsSheetOpen(false);
  };

  const { data: audiences } = useQueryGetAudiences({
    page: 1,
    per_page: 99999,
  });
  const { data: emailSetting } = useQueryGetEmailSetting({
    page: 1,
    per_page: 99999,
  });
  const optionsAudience = audiences?.data.map((audience) => ({
    id: audience.id,
    label: audience.title,
  }));
  const optionsEmailSetting = emailSetting?.data.map((email) => ({
    id: email.id,
    label: email.host,
  }));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      audience: [],
    },
  });
  const { reset, setValue } = form;
  useEffect(() => {
    if (dataCampaignDetail && isEdit) {
      setSelectedValue(dataCampaignDetail?.is_manual ? "manual" : "automate");
      setIdTemplate(dataCampaignDetail?.template_body?.id);
      setTemplateCampaign(dataCampaignDetail?.template_body?.body_html);
    }
    if (dataCampaignDetail && isEdit) {
      if (dataCampaignDetail?.schedule_send_at) {
        setValue("releaseDate", new Date(dataCampaignDetail?.schedule_send_at));
      }
      reset({
        campaignName: dataCampaignDetail?.title || "",
        hostEmail: String(dataCampaignDetail?.mail_setting?.id) || "",
        releaseDate: dataCampaignDetail?.schedule_send_at
          ? new Date(dataCampaignDetail?.schedule_send_at)
          : undefined,

        audience:
          dataCampaignDetail?.audiences?.map((a) => ({
            id: a.id,
            label: a.title,
          })) || [],
      });
    }
  }, [
    dataCampaignDetail,
    isEdit,
    reset,
    setIdTemplate,
    setTemplateCampaign,
    setValue,
  ]);
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (Object.keys(form.formState.errors).length === 0) {
      setDataCreate(values);
      setIsSheetOpen(true);
    }
  }
  return (
    <div>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
            <FormField
              control={form.control}
              name="campaignName"
              render={({ field }) => (
                <FormItem>
                  <h2 className="text-[20px] font-medium">
                    Name your campaign
                  </h2>
                  <p className="pt-[10px] text-sm font-normal">
                    Choose a name for your campaign. Don&apos;t worry--this is
                    only for you. Your audience won&apos;t see this name.
                  </p>
                  <FormLabel>
                    <div className="flex items-center justify-between pt-[20px]">
                      <p className="text-[14px] font-medium">Campaign Name</p>
                      <p className="text-[14px] font-thin">Required</p>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="e.g Spring Savings" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <h2 className="text-[20px] font-medium">Choose an audience</h2>
              <p className="pt-[10px] text-sm font-normal">
                Select the audience you want to reach with this campaign.
              </p>
              <FormLabel>
                <FormLabel>
                  <div className="flex items-center justify-between pt-[20px]">
                    <p className={`text-[14px] font-medium `}>Audience</p>
                    <p className={`text-[14px] font-thin `}>Required</p>
                  </div>
                </FormLabel>
                <FormControl>
                  <Controller
                    name="audience"
                    control={form.control}
                    render={({ field }) => (
                      <CustomMultipleSelect
                        placeholder="Choose audience"
                        allOptions={optionsAudience || []}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </FormControl>
              </FormLabel>
              {form.formState.errors.audience && (
                <FormMessage>
                  {form.formState.errors.audience.message}
                </FormMessage>
              )}
            </FormItem>
            <FormField
              control={form.control}
              name="hostEmail"
              render={({ field }) => (
                <FormItem>
                  <h2 className="text-[20px] font-medium">
                    Select host send email
                  </h2>
                  <FormLabel>
                    <div className="flex items-center justify-between pt-[20px]">
                      <p className="text-[14px] font-medium">Host email</p>
                      <p className="text-[14px] font-thin">Required</p>
                    </div>
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="placeholder:text-[#ccc]">
                        <SelectValue
                          placeholder={
                            <span className="text-[#ccc]">
                              Select an option
                            </span>
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {optionsEmailSetting?.map((email) => (
                        <SelectItem key={email.id} value={String(email.id)}>
                          {email.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="releaseDate"
              render={({ field }) => (
                <FormItem>
                  <h2 className="text-[20px] font-medium">
                    Set your timeframe
                  </h2>
                  <p className="pt-[10px] text-sm font-normal">
                    Set the timeframe for your campaign.
                  </p>
                  <FormLabel>
                    <div className="flex items-center justify-between pt-[20px]">
                      <p className="text-[14px] font-medium">Release Date</p>
                      <p className="text-[14px] font-thin">Required</p>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="relative bg-gray-50 border border-gray-300 text-gray-900 overflow-hidden text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="datetime-local"
                      value={
                        field.value
                          ? new Date(
                              field.value.getTime() -
                                field.value.getTimezoneOffset() * 60000
                            )
                              .toISOString()
                              .slice(0, 16)
                          : ""
                      }
                      onChange={(e) => {
                        const date = new Date(e.target.value);
                        field.onChange(date);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <Button type="submit">Next Step</Button>
                {isSheetOpen && (
                  <ModalActionTemplate
                    dataCreate={dataCreate}
                    handleCloseModel={handleCloseModel}
                    selectedValue={selectedValue}
                    handleValueChange={handleValueChange}
                    selectAutomation={selectAutomation}
                    handleSelectAutomation={handleSelectAutomation}
                  />
                )}
              </Sheet>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateCampainComponent;
