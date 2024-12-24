import AudienceMain from "@/app/(components)/audience/AudienceMain";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <AudienceMain />
      </Suspense>
    </div>
  );
};

export default page;
