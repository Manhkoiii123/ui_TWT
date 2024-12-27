/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ModalAddAudience from "@/app/(components)/audience/ModalAddAudience";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import DownLoadIcon from "@/icon/DownloadIcon";
import UploadIcon from "@/icon/UploadIcon";
import { useState } from "react";
import * as XLSX from "xlsx";
const ModalUploadAudience = () => {
  const [dataExcel, setDataExcel] = useState<any[]>([]);
  console.log("🚀 ~ ModalUploadAudience ~ dataExcel:", dataExcel);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function () {
        const data = new Uint8Array(reader.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet, {
          header: ["First Name", "Last name", "Website", "Email", "Phone"],
          range: 1,
        });
        if (json && json.length > 0) setDataExcel(json as any[]);
      };
      // setFileName(file.name); // Cập nhật tên file đã chọn
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-[22px]">
            <UploadIcon width={24} height={24} stroke="#0a8fdc" />
          </div>
          <span className="text-[14px] font-normal leading-[1.5]">
            Import/add Audience
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-8 ">
              <span className=" text-[#111827] text-[16px] font-medium">
                Import/Add Audience
              </span>
              <div className="">
                <a
                  onClick={(e) => e.stopPropagation()}
                  href={"/data/template.xlsx"}
                  download={"/data/template.xlsx"}
                  className="flex items-center gap-1"
                >
                  <span className="text-[#0a8fdc] text-[16px] font-medium">
                    Download Excel Sample
                  </span>
                  <DownLoadIcon width={24} height={24} stroke="#0a8fdc" />
                </a>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center gap-8 mt-6">
          <Button variant="outline">
            <label
              className="flex items-center gap-2 cursor-pointer"
              htmlFor="dropzone-file"
            >
              <UploadIcon width={24} height={24} stroke="#0a8fdc" />
              Upload File
            </label>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </Button>
          <ModalAddAudience />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalUploadAudience;
