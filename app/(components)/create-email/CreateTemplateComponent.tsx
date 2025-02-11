"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LeftIcon from "@/icon/LeftIcon";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import GrapeComponent from "@/app/(components)/grape/GrapeComponent";
import { useQueryGetTemplateById } from "@/api/templates/templatesApi";
import Loading from "@/components/Loading";

import { useQueryGetMasterTemplates } from "@/api/master-templates/masterTemplatesApi";
const formSchema = z.object({
  templateName: z.string().min(1, { message: "Please enter a title" }),
});
const CreateTemplateComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idEdit = searchParams.get("id");
  const [templateHeader, setTemplateHeader] = useState<string>("");
  const [templateFooter, setTemplateFooter] = useState<string>("");
  const { data: dataTemplate, isLoading: isLoadingTemplate } =
    useQueryGetTemplateById(Number(idEdit), Boolean(idEdit));
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      templateName: "",
    },
  });
  const { data: listHeaderFooter, isLoading: isLoadingListHeaderFooter } =
    useQueryGetMasterTemplates({
      page: 1,
      per_page: 99999,
    });

  const templateHeaderList = useMemo(() => {
    if (listHeaderFooter) {
      const tmpHeader = listHeaderFooter.data.filter(
        (item) => item.position === "header"
      );
      return tmpHeader.map((item) => {
        const cleanHtmlString = item.content.replace(/\\n|\\/g, "");

        const content = () => {
          return cleanHtmlString;
        };
        return {
          id: item.id,
          name: item.name,
          content: content,
        };
      });
    }
    return [];
  }, [listHeaderFooter]);
  const templateFooterList = useMemo(() => {
    if (listHeaderFooter) {
      const tmpFooter = listHeaderFooter.data.filter(
        (item) => item.position === "footer"
      );
      return tmpFooter.map((item) => {
        const cleanHtmlString = item.content.replace(/\\n|\\/g, "");

        const content = () => {
          return cleanHtmlString;
        };
        return {
          id: item.id,
          name: item.name,
          content: content,
        };
      });
    }
    return [];
  }, [listHeaderFooter]);
  const { setValue, watch, trigger } = form;
  const watchTemplateName = watch("templateName");
  useEffect(() => {
    if (dataTemplate) {
      setValue("templateName", dataTemplate.name);
    }
  }, [dataTemplate, setValue]);

  const {
    formState: { errors },
  } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const handleBackList = () => {
    router.push("/templates");
  };

  const handleValueChangeHeader = (value: string) => {
    const selectedItem = templateHeaderList.find(
      (item) => String(item.id) === value
    );
    if (selectedItem) {
      setTemplateHeader(selectedItem.content);
    }
  };
  const handleValueChangeFooter = (value: string) => {
    const selectedItem = templateFooterList.find(
      (item) => String(item.id) === value
    );
    if (selectedItem) {
      setTemplateFooter(selectedItem.content);
    }
  };
  return (
    <>
      {(isLoadingTemplate || isLoadingListHeaderFooter) && (
        <div className="flex justify-center items-center w-[100%] h-[calc(100vh-200px)]">
          <Loading />
        </div>
      )}
      {!isLoadingTemplate && !isLoadingListHeaderFooter && (
        <>
          <Button variant={"outline"} onClick={handleBackList}>
            <LeftIcon />
            Back To List
          </Button>
          <div className="mt-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="templateName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Title"
                          className={`${
                            errors.templateName?.message &&
                            "border-red-500 focus-visible:ring-0"
                          } h-12`}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <div className="flex gap-4">
            <Select onValueChange={handleValueChangeHeader}>
              <SelectTrigger className="w-[50%]">
                <SelectValue placeholder="Select template header" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {templateHeaderList.map((item) => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={handleValueChangeFooter}>
              <SelectTrigger className="w-[50%]">
                <SelectValue placeholder="Select template footer" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {templateFooterList.map((item) => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 ">
            <GrapeComponent
              trigger={trigger}
              templateName={watchTemplateName}
              templateContent={dataTemplate?.content}
              idEdit={idEdit}
              imageUrl={dataTemplate?.thumbnail}
              templateHeader={templateHeader}
              templateFooter={templateFooter}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CreateTemplateComponent;
