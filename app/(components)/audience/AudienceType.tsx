"use client";
import { Skeleton } from "@/components/ui/skeleton";
import UsersIcon from "@/icon/UsersIcon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { JSX, useEffect, useMemo, useState } from "react";
type TAudienceType = {
  label: string;
  link: string;
  icon?: JSX.Element;
};
const AudienceType = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const website = searchParams.get("website");
  const router = useRouter();

  const loading = false;
  const isActive = (link: string) => {
    if (website !== null) {
      return website === link;
    } else {
      return pathname === link;
    }
  };
  // call api tại đây
  const dummyData = useMemo(() => {
    return [
      {
        label: "All Audience",
        link: "",
        icon: (
          <UsersIcon
            fill={pathname === "/audience" ? "#0A8FDC" : "gray"}
            stroke={pathname === "/audience" ? "#0A8FDC" : "gray"}
          />
        ),
      },
      {
        label: "VIC Agency",
        link: "vic",
      },
      {
        label: "VIC Agency",
        link: "/audience/all-audiences2",
      },
      {
        label: "VIC Agency",
        link: "/audience/all-audiences2",
      },
      {
        label: "VIC Agency",
        link: "/audience/all-audiences2",
      },
    ];
  }, []);

  const [visibleItems, setVisibleItems] = useState<TAudienceType[]>([]);

  const handleNavigate = (slug: string) => {
    const query = {
      website: slug,
    };
    const url = `${pathname}?${new URLSearchParams(query).toString()}`;

    router.push(url);
  };

  useEffect(() => {
    dummyData.forEach((item, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);
      }, index * 300);
    });
  }, [dummyData]);
  return (
    <>
      <div className="bg-white py-4 pr-4 rounded-2xl w-[300px] shadow-md lg:h-fit h-full">
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
              {dummyData.map((item, index) => (
                <div
                  onClick={() => handleNavigate(item.link)}
                  key={index}
                  className={`px-6 cursor-pointer py-[7px] ${
                    isActive(item.link)
                      ? "bg-[#E6F4FB] rounded-e-full"
                      : "text-[#111827]"
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
                              : "border-gray-500"
                          }`}
                        ></div>
                      )}
                    </div>
                    {/*  */}
                    <span
                      className={` text-[14px]  leading-6 ${
                        isActive(item.link)
                          ? "text-[#0A8FDC] font-semibold"
                          : " text-[#111827] font-normal"
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

export default AudienceType;
