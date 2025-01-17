import { AudienceAllAdience } from "@/app/(components)/audience/AudienceAllAdience";
import ModalUploadAudience from "@/app/(components)/audience/ModalUploadAudience";
import { Separator } from "@/components/ui/separator";
import FolderIcon from "@/icon/FolderIcon";
import UsersIcon from "@/icon/UsersIcon";
import { TAudienceViaTKG } from "@/types/audience";
import React from "react";
type Props = {
  data: TAudienceViaTKG[] | undefined;
};
const ManageAudience = ({ data }: Props) => {
  return (
    <div className=" w-[100%] h-auto bg-white p-6 rounded-xl flex flex-col gap-3">
      <div className="flex items-start gap-2">
        <UsersIcon
          fill="rgb(27, 77, 118)"
          stroke="rgb(27, 77, 118)"
          width={24}
          height={24}
        />
        <h3
          className="font-semibold text-[18px]"
          style={{
            color: "rgb(27, 77, 118)",
          }}
        >
          Manage Audience
        </h3>
      </div>
      <p className="font-light text-[14px] text-[#111827]">
        Your audience has{" "}
        <span className="font-bold cursor-pointer text-[16px] text-[#0a8fdc]">
          7739
        </span>{" "}
        contacts,{" "}
        <span className="font-bold cursor-pointer text-[16px] text-[#0a8fdc]">
          7900
        </span>{" "}
        of these are subscribers.
      </p>
      <div className="flex flex-col gap-2 mt-4">
        <AudienceAllAdience data={data} />
        <Separator className="mt-2" />

        <ModalUploadAudience />
        <Separator className="mt-2" />
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-[22px]">
            <FolderIcon
              width={24}
              height={24}
              stroke="#0a8fdc"
              fill="#0a8fdc"
            />
          </div>
          <span className="text-[14px] font-normal leading-[1.5]">
            Manage Audience
          </span>
        </div>
      </div>
    </div>
  );
};

export default ManageAudience;
