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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LeftIcon from "@/icon/LeftIcon";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import GrapeComponent from "@/app/(components)/grape/GrapeComponent";
import Loading from "@/components/Loading";
import { useQueryGetMasterTemplateById } from "@/api/master-templates/masterTemplatesApi";

const formSchema = z.object({
  title: z.string().min(1, { message: "Please enter a title" }),
  position: z.string().min(1, { message: "Please enter a position" }),
});
const CreateEditFooterHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idEdit = searchParams.get("id");
  const { data: dataTemplate, isLoading: isLoadingTemplate } =
    useQueryGetMasterTemplateById(Number(idEdit), Boolean(idEdit));
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      position: "",
    },
  });
  const { setValue, watch, trigger } = form;
  const watchTitle = watch("title");
  const watchPosition = watch("position");
  useEffect(() => {
    if (dataTemplate) {
      setValue("title", dataTemplate.name);
      setValue("position", dataTemplate.position);
    }
  }, [dataTemplate, setValue]);

  const {
    formState: { errors },
  } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const handleBackList = () => {
    router.push("/header-footer");
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
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Title"
                          className={`${
                            errors.title?.message &&
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
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified position" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="header">Header</SelectItem>
                          <SelectItem value="footer">Footer</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>

          <div className="mt-4 ">
            <GrapeComponent
              isCreateFooterHeader
              trigger={trigger}
              templateName={watchTitle}
              templatePosition={watchPosition}
              templateContent={dataTemplate?.content}
              idEdit={idEdit}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CreateEditFooterHeader;
