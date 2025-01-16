/* eslint-disable @typescript-eslint/no-explicit-any */
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { convertDate } from "@/lib/utils";
import { CircleX } from "lucide-react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data?: any;
};
const SheetLogAudience = ({ isOpen, setIsOpen, data }: Props) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="p-8 ">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center justify-between">
              History of {data?.title}
              <CircleX
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <Separator className="my-4" />
          </SheetTitle>
        </SheetHeader>
        <div className="pl-10 flex">
          {data?.logs?.map((item: any, index: number) => (
            <LogItem key={index} item={item} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetLogAudience;
const LogItem = ({ item }: any) => {
  const changeData = JSON.parse(item.event);
  function getChanges(newData: any, oldData: any) {
    const changes = [];

    for (const key in newData) {
      if (newData.hasOwnProperty(key)) {
        const newValue = newData[key];
        const oldValue = oldData[key];

        changes.push({
          key: `"${key}"`,
          newValue: newValue,
          oldValue: oldValue,
        });
      }
    }

    return changes;
  }

  const changesArray = getChanges(changeData.new_data, changeData.old_data);
  return (
    <div className=" w-full flex ">
      <div className="flex-1 flex gap-4">
        <div className="flex flex-col gap-2 justify-start items-end">
          <p className="text-[14px] text-gray-500 font-light">
            {convertDate(item.created_at, true)}
          </p>
          <p className="text-[14px] text-gray-500 font-light">
            Action by{" "}
            <span className="font-semibold text-black">
              {item.user_id.name}
            </span>
          </p>
        </div>
        <div className="h-auto  flex flex-col gap-2 justify-center items-center">
          <div className="w-3 h-3 rounded-full  border-blue-600 border-2 shrink-0" />
          <div className="w-[1px] h-full border border-gray-300" />
        </div>
      </div>
      <div className="xl:flex-[5] flex-[2]">
        <div className="flex flex-col gap-2">
          {changesArray.map((item: any, index: number) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="flex items-start">
                <span className="flex-1 font-medium text-[14px] leading-[1.5] ">
                  Change:
                </span>
                <span className="flex-[11] font-light text-[14px] text-[#0288d1] text-left">
                  {item.key}
                </span>
              </div>
              <div className="flex">
                <span className="flex-1 font-medium text-[14px] leading-[1.5]">
                  From:
                </span>
                <span className="flex-[11] font-light text-[14px] text-red-600">
                  {item.oldValue || `${'""'}`}
                </span>
              </div>
              <div className="flex">
                <span className="flex-1 font-medium text-[14px] leading-[1.5]">
                  To:
                </span>
                <span className="flex-[11] font-light text-[14px] text-green-600">
                  {item.newValue || `${'""'}`}
                </span>
              </div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
