import CreateTemplateComponent from "@/app/(components)/create-email/CreateTemplateComponent";
import React, { Suspense } from "react";

const EditTemplatePage = () => {
  return (
    <div className="bg-white p-4 shadow-sm">
      <Suspense fallback={<div>Loading...</div>}>
        <CreateTemplateComponent />
      </Suspense>
    </div>
  );
};

export default EditTemplatePage;
