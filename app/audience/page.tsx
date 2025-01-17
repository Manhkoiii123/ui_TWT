import AudienceClient from "@/app/(components)/audience/audienceMain/AudienceClient";
import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="w-full">
      <Suspense
        fallback={
          <div className="h-screen">
            <Loading />
          </div>
        }
      >
        <AudienceClient />
      </Suspense>
    </div>
  );
};

export default page;
