import CreateTemplateComponent from "@/app/(components)/create-email/CreateTemplateComponent";
import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const CreateTemplatePage = () => {
  return (
    <div className="bg-white p-4 shadow-sm">
      <Suspense
        fallback={
          <div className="h-screen">
            <Loading />
          </div>
        }
      >
        <CreateTemplateComponent />
      </Suspense>
    </div>
  );
};

export default CreateTemplatePage;
