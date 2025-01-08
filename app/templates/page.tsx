import TemplatesEmail from "@/app/(components)/create-email/TemplatesEmail";
import Loading from "@/components/Loading";
import { Suspense } from "react";
const TemplatePage = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen">
          <Loading />
        </div>
      }
    >
      <TemplatesEmail />
    </Suspense>
  );
};

export default TemplatePage;
