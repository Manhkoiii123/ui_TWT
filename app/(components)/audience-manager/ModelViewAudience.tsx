/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: any;
};
const ModelViewAudience = ({ isOpen, setIsOpen, data }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-[60vh] max-w-[800px] overflow-x-auto">
        <DialogHeader>
          <DialogTitle className="text-gray-800 font-medium text-[12px] leading-[1.6rem] border-b border-gray-200 pb-[10px]">
            Detail Audience
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-start">
            <span className="flex-1">Title:</span>
            <span className="flex-[3] font-light text-[14px]">
              {data?.title}
            </span>
          </div>
          <div className="flex">
            <span className="flex-1">Slug:</span>
            <span className="flex-[3] font-light text-[14px]">
              {data?.slug}
            </span>
          </div>
          <div className="flex">
            <span className="flex-1">Description:</span>
            <span className="flex-[3] font-light text-[14px]">
              {data?.description}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModelViewAudience;
