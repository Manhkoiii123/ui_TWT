"use client";

import TableHost from "@/app/(components)/settings/email-setting/TableHost";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EmailSettingClient = () => {
  return (
    <div>
      <Tabs defaultValue="" className="w-[100%] pb-4 mt-0">
        <TabsList className="flex w-full gap-10 text-[14px] text-[#6b7280]">
          <TabsTrigger
            // onClick={() => handleSelectSub("")}
            className="py-2 "
            value=""
          >
            HOST CONFIG
          </TabsTrigger>
          <TabsTrigger
            // onClick={() => handleSelectSub("calendar")}
            className="py-2"
            value="calendar"
          >
            EMAIL TRACKING
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <TableHost />
    </div>
  );
};

export default EmailSettingClient;
