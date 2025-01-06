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
import LeftIcon from "@/icon/LeftIcon";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import GrapeComponent from "@/app/(components)/grape/GrapeComponent";
import { useQueryGetTemplateById } from "@/api/templates/templatesApi";
const formSchema = z.object({
  templateName: z.string().min(1, { message: "Please enter a title" }),
});
const CreateTemplateComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idEdit = searchParams.get("id");
  const { data: dataTemplate } = useQueryGetTemplateById(
    Number(idEdit),
    Boolean(idEdit)
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      templateName: "",
    },
  });
  const { setValue } = form;

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
  return (
    <>
      <Button variant={"outline"} onClick={handleBackList}>
        <LeftIcon />
        Back To List
      </Button>
      <div className="mt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
      <div className="mt-4 ">
        <GrapeComponent templateContent={dataTemplate?.content} />
      </div>
    </>
  );
};

export default CreateTemplateComponent;
