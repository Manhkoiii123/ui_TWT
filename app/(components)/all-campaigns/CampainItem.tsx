import { useMutationDeleteCampain } from "@/api/campains/campainsApi";
import CustomSelect from "@/components/custom-select/CustomSelect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { DetailCampaign } from "@/types/campaign";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import Swal from "sweetalert2";

const CampainItem = ({ item }: { item: DetailCampaign }) => {
  const [isOpenView, setIsOpenView] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const format = (isoDate: string) => {
    const date = new Date(isoDate);

    const optionsDate: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    const formattedDate = date.toLocaleDateString("en-GB", optionsDate);
    const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

    return `Sent ${formattedDate} - Time: ${formattedTime}`;
  };
  const queryClient = useQueryClient();
  const { mutate: mutateDeleteCampaign } = useMutationDeleteCampain();
  const handleClickDelete = async (id: number, callback: () => void) => {
    Swal.fire({
      title: "Delete this? You can't revert this.",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutateDeleteCampaign(id, {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["campaign"],
            });
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            callback();
          },
          onError: () => {
            Swal.fire("Error!", "Something went wrong.", "error");
          },
        });
      }
    });
  };
  return (
    <>
      <div className="flex gap-5 mt-3 p-3">
        <div className="flex-[2.5]   ">
          <div className="flex flex-col justify-between  gap-4">
            <h4 className="text-[17px] leading-[1.235] text-[#0a8fdc] font-medium line-clamp-2">
              NEWS: {item.title}
            </h4>
            <span className="text-[13.5px] font-normal leading-[1.5] text-[#111827]">
              {item?.created_by?.name} ({item?.created_by?.email})
            </span>
            <span className="text-[13.5px] font-normal leading-[1.5] text-[#111827]">
              {format(item.schedule_send_at)}
            </span>
          </div>
        </div>
        <div className="flex-[2]  flex justify-center ">
          <div className="flex items-center justify-center gap-6">
            <span className="px-5 py-1   rounded-[12px] bg-bluePrimary text-white">
              {item.status_label}
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
                action: () => {
                  setIsOpenView(true);
                  setHtmlContent(item.template_body.body_html);
                },
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
                action: (callback: () => void) =>
                  handleClickDelete(item.id, callback),
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
      {isOpenView && (
        <ViewTemplate
          isOpen={isOpenView}
          setIsOpen={setIsOpenView}
          htmlContent={htmlContent}
        />
      )}
      <Separator />
    </>
  );
};

export default CampainItem;
export const ViewTemplate = ({
  isOpen,
  htmlContent,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  htmlContent: string;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent className="max-h-[80vh] overflow-x-auto">
        <DialogHeader>
          <DialogTitle className="text-gray-800 font-medium text-[12px] leading-[1.6rem] border-b border-gray-200 pb-[10px]">
            Preview Template
          </DialogTitle>
          <DialogDescription>
            <div
              dangerouslySetInnerHTML={{
                __html: htmlContent,
              }}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
