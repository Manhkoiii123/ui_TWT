"use client";

import EmailTrackingSetting from "@/app/(components)/settings/email-setting/EmailTrackingSetting";
import TableHost from "@/app/(components)/settings/email-setting/TableHost";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EmailSettingClient = () => {
  return (
    <div>
      <Tabs defaultValue="config" className="w-[100%] pb-4 mt-0">
        <TabsList className="flex w-full gap-10 text-[14px] text-[#6b7280]">
          <TabsTrigger className="py-2 " value="config">
            HOST CONFIG
          </TabsTrigger>
          <TabsTrigger className="py-2" value="email-tracking">
            EMAIL TRACKING
          </TabsTrigger>
        </TabsList>
        <TabsContent className="py-4" value="config">
          <TableHost />
        </TabsContent>
        <TabsContent className="py-4" value="email-tracking">
          <EmailTrackingSetting />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmailSettingClient;
