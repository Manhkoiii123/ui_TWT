/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { JSX, useEffect, useState } from "react";
export type TLayoutType = {
  label: string;
  link: string;
  icon?: JSX.Element;
  queryString: string;
};

const LayoutType = ({ dummyData }: { dummyData: TLayoutType[] }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const website = searchParams.get("website");
  const type = searchParams.get("type");
  const router = useRouter();

  const loading = false;
  const isActive = (link: string) => {
    if (website !== null) {
      return website === link;
    } else if (type !== null) {
      return type === link;
    } else {
      return pathname === link;
    }
  };

  const [visibleItems, setVisibleItems] = useState<TLayoutType[]>([]);

  const handleNavigate = (slug: string, queryString: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set(queryString, slug);
    router.push(`?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    dummyData.forEach((item: any, index: number) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);
      }, index * 300);
    });
  }, [dummyData]);
  return (
    <>
      <div className="bg-white py-4 pr-4 rounded-2xl w-[300px] shadow-md xl:h-fit h-full">
        <div className="flex flex-col gap-1">
          {loading ? (
            <>
              {Array(4)
                .fill(0)
                .map(() => (
                  <>
                    <Skeleton className="h-[37px] w-[250px] rounded-e-full" />
                  </>
                ))}
            </>
          ) : (
            <>
              {dummyData.map((item: any, index: number) => (
                <div
                  onClick={() => handleNavigate(item.link, item.queryString)}
                  key={index}
                  className={`px-6 cursor-pointer py-[7px] hover:bg-[#E6F4FB] hover:rounded-e-full group ${
                    isActive(item.link)
                      ? "bg-[#E6F4FB] rounded-e-full text-[#0A8FDC]"
                      : "text-[#111827] hover:text-[#0A8FDC]"
                  }`}
                  style={{
                    opacity: visibleItems.includes(item) ? 1 : 0,
                    transform: visibleItems.includes(item)
                      ? "translate(0, 0)"
                      : "translate(-30px, -20px)",
                    transition: "opacity 0.5s, transform 0.5s",
                  }}
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
