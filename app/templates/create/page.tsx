import CreateTemplateComponent from "@/app/(components)/create-email/CreateTemplateComponent";
import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const CreateTemplatePage = () => {
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
          <CreateTemplateComponent />
        </div>
      </Suspense>
    </div>
  );
};

export default CreateTemplatePage;
