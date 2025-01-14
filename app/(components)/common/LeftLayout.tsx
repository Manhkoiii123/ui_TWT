"use client";
import LayoutType, {
  TLayoutType,
} from "@/app/(components)/audience/LayoutType";
import CustomDrawer from "@/app/(components)/CustomDrawer";
import Loading from "@/components/Loading";
import MenuIcon from "@/icon/MenuIcon";
import React, { Suspense } from "react";

const LeftLayout = ({ dummyData }: { dummyData: TLayoutType[] }) => {
  return (
    <Suspense
      fallback={
        <div className="h-screen">
          <Loading />
        </div>
      }
    >
      <div className="xl:block hidden">
        <LayoutType dummyData={dummyData} />
      </div>
      <div className=" max-xl:flex items-start xl:hidden">
        <CustomDrawer
          width="300px"
          side={"left"}
          icon={
            <div className="flex bg-gray-100 rounded-full text-white">
              <MenuIcon width={30} height={30} stroke="black" />
            </div>
          }
          text="Message"
        >
          <LayoutType dummyData={dummyData} />
        </CustomDrawer>
      </div>
    </Suspense>
  );
};

export default LeftLayout;
