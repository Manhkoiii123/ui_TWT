import AudienceManagerClient from "@/app/(components)/audience-manager/AudienceManagerClient";
import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const AudienceManagerPage = () => {
  return (
    <div className=" pt-[48px] shadow-sm">
      <Suspense
        fallback={
          <div className="h-screen">
            <Loading />
          </div>
        }
      >
        <div className=" p-6 bg-white rounded-2xl">
          <AudienceManagerClient />
        </div>
      </Suspense>
    </div>
  );
};

export default AudienceManagerPage;
