import { Separator } from "@/components/ui/separator";
import EmailIcon from "@/icon/EmailIcon";
import SendIcon from "@/icon/SendIcon";
import React from "react";

const EmailMarketingEngagement = () => {
  return (
    <div className=" w-[100%] h-auto bg-white p-6  rounded-xl flex flex-col gap-3">
      <div className="flex items-start gap-2">
        <EmailIcon stroke="rgb(27, 77, 118)" width={24} height={24} />
        <h3
          className="font-semibold text-[18px]"
          style={{
            color: "rgb(27, 77, 118)",
          }}
        >
          Email marketing engagement
        </h3>
      </div>
      <p className="font-light text-[14px] text-[#111827]">
        Your subscribers, broken down by how often they open and click your
        emails
      </p>
      <div className="flex flex-col gap-4 mt-8">
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <>
              <EmailMarketingEngagementItem key={index} percent={index * 33} />
              {index !== 2 && <Separator />}
            </>
          ))}
      </div>
    </div>
  );
};

export default EmailMarketingEngagement;

const EmailMarketingEngagementItem = ({ percent }: { percent?: number }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="text-[20px] text-[#111827] font-bold flex-1">
        {percent}%
      </div>
      <div className="flex flex-col gap-1 flex-[9]">
        <span className="text-[14px] text-[#111827] font-bold">Often</span>
        <p className="font-light text-[14px] text-[#6b7280]">
          Your percentage of subscribers who are highly engaged and often open
          and click your emails.
        </p>
      </div>
      <div className="text-[20px]  font-bold flex-1 cursor-pointer">
        <SendIcon width={24} height={24} stroke="gray" />
      </div>
    </div>
  );
};
