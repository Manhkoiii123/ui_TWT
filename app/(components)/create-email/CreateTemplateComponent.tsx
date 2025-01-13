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
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import GrapeComponent from "@/app/(components)/grape/GrapeComponent";
import { useQueryGetTemplateById } from "@/api/templates/templatesApi";
import Loading from "@/components/Loading";
import { fakeTemplateHeader } from "@/app/(components)/grape/content";
const formSchema = z.object({
  templateName: z.string().min(1, { message: "Please enter a title" }),
});
const CreateTemplateComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idEdit = searchParams.get("id");
  const [templateHeader, setTemplateHeader] = useState<string>("");
  console.log("🚀 ~ CreateTemplateComponent ~ templateHeader:", templateHeader);
  const { data: dataTemplate, isLoading: isLoadingTemplate } =
    useQueryGetTemplateById(Number(idEdit), Boolean(idEdit));
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      templateName: "",
    },
  });
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

  const handleValueChange = (value: string) => {
    const selectedItem = fakeTemplateHeader.find((item) => item.name === value);
    if (selectedItem) {
      setTemplateHeader(selectedItem.content);
    }
  };
  return (
    <>
      {isLoadingTemplate && (
        <div className="flex justify-center items-center w-[100%] h-[calc(100vh-200px)]">
          <Loading />
        </div>
      )}
      {!isLoadingTemplate && (
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
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[50%]">
              <SelectValue placeholder="Select template header" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {fakeTemplateHeader.map((item) => (
                  <SelectItem key={item.id} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="mt-4 ">
            <GrapeComponent
              trigger={trigger}
              templateName={watchTemplateName}
              templateContent={dataTemplate?.content}
              idEdit={idEdit}
              imageUrl={dataTemplate?.thumbnail}
              templateHeader={templateHeader}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CreateTemplateComponent;
