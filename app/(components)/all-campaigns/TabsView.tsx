"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const TabsView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSelectSub = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("view", value);
    router.push(`?${newSearchParams.toString()}`);
  };
  return (
    <>
      <Tabs defaultValue="" className="w-[100%] pb-4 mt-0">
        <TabsList className="flex w-full gap-10 text-[14px] text-[#6b7280]">
          <TabsTrigger
            onClick={() => handleSelectSub("")}
            className="py-2 "
            value=""
          >
            LIST VIEW
          </TabsTrigger>
          <TabsTrigger
            onClick={() => handleSelectSub("calendar")}
            className="py-2"
            value="calendar"
          >
            CALENDAR VIEW
          </TabsTrigger>
        </TabsList>
        <Separator className="mb-4" />
      </Tabs>
    </>
  );
};

export default TabsView;
