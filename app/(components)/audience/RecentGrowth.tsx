import ChartIcon from "@/icon/ChartIcon";
import React from "react";

const RecentGrowth = () => {
  return (
    <div className=" w-[100%] h-auto bg-white p-6  rounded-xl flex flex-col gap-3">
      <div className="flex items-start gap-2">
        <ChartIcon stroke="rgb(27, 77, 118)" width={24} height={24} />
        <h3
          className="font-semibold text-[18px]"
          style={{
            color: "rgb(27, 77, 118)",
          }}
        >
          Recent Growth
        </h3>
      </div>
      <p className="font-light text-[14px] text-[#111827]">
        New contacts added to this audience in the last 30 days.
      </p>
      <div className="flex items-end gap-4 mt-8">
        <div className="flex-[1.5] w-[100%]">
          <div className="flex flex-col gap-2">
            <span className="cursor-pointer text-[#0a8fdc] font-bold text-[30px]">
              1
            </span>
            <div className="flex flex-col gap-1 text-[#111827]">
              <span className="text-[16px] ">New Contacts</span>
              <span className="text-[13px]">
                From November 24, 2024 to December 24, 2024
              </span>
            </div>
          </div>
        </div>
        <div className="flex-[1] flex gap-2  w-[100%]">
          <div className="flex-1 flex flex-col gap-2">
            <span className="cursor-pointer text-[#0a8fdc] font-bold text-[18px]">
              0
            </span>
            <span className="text-[13px]">Subscribed</span>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <span className="cursor-pointer text-[#0a8fdc] font-bold text-[18px]">
              1
            </span>
            <span className="text-[13px]">Non-Subscribed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentGrowth;
