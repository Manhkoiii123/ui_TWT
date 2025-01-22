/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { JSX } from "react";
export type TLayoutType = {
  label: string;
  link: string;
  icon?: JSX.Element;
  queryString: string;
};

const LayoutType = ({
  audiencesData,
  isLoading,
}: {
  audiencesData: TLayoutType[] | undefined;
  isLoading: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const website = searchParams.get("website");
  const type = searchParams.get("type");

  const isActive = (link: string) => {
    if (website !== null) {
      return website === link;
    } else if (type !== null) {
      return type === link;
    } else {
      return pathname === link;
    }
  };

  const handleNavigate = (slug: string, queryString: string) => {
    const route = pathname.split("/")[1];
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set(queryString, slug);
    router.push(`/${route}?${newSearchParams.toString()}`);
  };

  return (
    <>
      <div className="bg-white py-4 pr-4 rounded-2xl w-[250px] shadow-md xl:h-fit h-full">
        <div className="flex flex-col gap-1">
          {isLoading ? (
            <>
              {Array(4)
                .fill(0)
                .map(() => (
                  <>
                    <Skeleton className="h-[37px] w-[230px] rounded-e-full" />
                  </>
                ))}
            </>
          ) : (
            <>
              {(audiencesData || []).map((item: any, index: number) => (
                <div
                  onClick={() => handleNavigate(item.link, item.queryString)}
                  key={index}
                  className={`px-6 cursor-pointer py-[7px] hover:bg-[#E6F4FB] hover:rounded-e-full group ${
                    isActive(item.link)
                      ? "bg-[#E6F4FB] rounded-e-full text-[#0A8FDC]"
                      : "text-[#111827] hover:text-[#0A8FDC]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[22px]">
                      {item.icon ? (
                        item.icon
                      ) : (
                        <div
                          className={`w-4 h-4 border-2  rounded-full ${
                            isActive(item.link)
                              ? " border-[#0A8FDC]"
                              : "border-gray-500 group-hover:border-[#0A8FDC]"
                          }`}
                        ></div>
                      )}
                    </div>
                    <span
                      className={` text-[14px]  leading-6 ${
                        isActive(item.link)
                          ? "text-[#0A8FDC] font-semibold"
                          : "  font-normal hover:text-[#0A8FDC]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LayoutType;
