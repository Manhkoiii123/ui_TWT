import CreateEditFooterHeader from "@/app/(components)/header-footer/CreateEditFooterHeader";
import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const CreateHeaderFooterPage = () => {
  return (
    <div className=" pt-[48px] shadow-sm">
      <Suspense
        fallback={
          <div className="h-screen">
            <Loading />
          </div>
        }
      >
        <div className=" p-4 bg-white">
          <CreateEditFooterHeader />
        </div>
      </Suspense>
    </div>
  );
};

export default CreateHeaderFooterPage;
