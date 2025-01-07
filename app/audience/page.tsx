import AudienceMain from "@/app/(components)/audience/AudienceMain";
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
        <AudienceMain />
      </Suspense>
    </div>
  );
};

export default page;
