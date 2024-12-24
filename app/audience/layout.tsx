import AudienceType from "@/app/(components)/audience/AudienceType";
import CustomDrawer from "@/app/(components)/CustomDrawer";
import MenuIcon from "@/icon/MenuIcon";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-9">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="xl:block hidden">
            <AudienceType />
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
              <AudienceType />
            </CustomDrawer>
          </div>
        </Suspense>
        {children}
      </div>
    </>
  );
}
