import HeaderFooterComponent from "@/app/(components)/header-footer/HeaderFooterComponent";
import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const HeaderFooterPage = () => {
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
          <HeaderFooterComponent />
        </div>
      </Suspense>
    </div>
  );
};

export default HeaderFooterPage;
