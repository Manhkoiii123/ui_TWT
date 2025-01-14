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
      <div className="pt-[48px]">
        <TemplatesEmail />
      </div>
    </Suspense>
  );
};

export default TemplatePage;
