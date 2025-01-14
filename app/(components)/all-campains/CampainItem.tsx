import CustomSelect from "@/components/custom-select/CustomSelect";
import { Separator } from "@/components/ui/separator";
import React from "react";

const CampainItem = () => {
  return (
    <>
      <div className="flex gap-5 mt-3 p-3">
        <div className="flex-[2.5]   ">
          <div className="flex flex-col justify-between  gap-4">
            <h4 className="text-[17px] leading-[1.235] text-[#0a8fdc] font-medium">
              NEWS: Tweet World Travel Becomes a Virtuoso Preferred Supplier
            </h4>
            <span className="text-[13.5px] font-normal leading-[1.5] text-[#111827]">
              All B2B Agency
            </span>
            <span className="text-[13.5px] font-normal leading-[1.5] text-[#111827]">
              Sent Monday, 13/01/2025 - Time: 4:39:00 am
            </span>
          </div>
        </div>
        <div className="flex-[2]  flex justify-center ">
          <div className="flex items-center justify-center gap-6">
            <span className="px-5 py-1   rounded-[12px] bg-bluePrimary text-white">
              Completed
            </span>
            <div className="flex flex-col items-center justify-center gap-4">
              <div>39.59%</div>
              <div className="text-[13.5px] font-normal leading-[1.5] text-[#111827]">
                Opens
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div>0.00%</div>
              <div className="text-[13.5px] font-normal leading-[1.5] text-[#111827]">
                Clicks
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  flex items-center justify-center">
          <CustomSelect
            options={[
              {
                label: "View",
                action: () => {},
              },
              {
                label: "Launch",
                action: () => {},
                disable: true,
              },
              {
                label: "Edit",
                action: () => {},
                disable: true,
              },
              {
                label: "Clone",
                action: () => {},
              },
              {
                label: "Send Demo",
                action: () => {},
                disable: true,
              },
              {
                label: "Delete",
                action: () => {},
              },
              {
                label: "View Report",
                action: () => {},
              },
              {
                label: "View History",
                action: () => {},
              },
            ]}
          />
        </div>
      </div>
      <Separator />
    </>
  );
};

export default CampainItem;
