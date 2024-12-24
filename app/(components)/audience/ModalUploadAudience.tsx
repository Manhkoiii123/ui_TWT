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

const ModalUploadAudience = () => {
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
              <div className="flex items-center gap-1">
                <span className="text-[#0a8fdc] text-[16px] font-medium">
                  Download Excel Sample
                </span>
                <DownLoadIcon width={24} height={24} stroke="#0a8fdc" />
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center gap-8 mt-6">
          <Button variant={"outline"}>
            <label
              className="flex items-center gap-2 cursor-pointer"
              htmlFor="dropzone-file"
            >
              <UploadIcon width={24} height={24} stroke="#0a8fdc" />
              Upload File
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </Button>
          <ModalAddAudience />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalUploadAudience;
