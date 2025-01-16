import EmailSettingClient from "@/app/(components)/settings/email-setting/EmailSettingClient";
import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const EmailSettings = () => {
  return (
    <div className=" pt-[48px] shadow-sm">
      <Suspense
        fallback={
          <div className="h-screen">
            <Loading />
          </div>
        }
      >
        <div className=" p-6 bg-white rounded-2xl ">
          <EmailSettingClient />
        </div>
      </Suspense>
    </div>
  );
};

export default EmailSettings;
