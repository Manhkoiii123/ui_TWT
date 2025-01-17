import { columns } from "@/components/custom-table/Columns";
import { TableAudience } from "@/components/custom-table/TableAudience";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EyeIcon from "@/icon/EyeIcon";
import { TAudienceViaTKG } from "@/types/audience";
import { useState } from "react";
type Props = {
  data: TAudienceViaTKG[] | undefined;
};
export function AudienceAllAdience({ data }: Props) {
  const [isSubscribe, setIsSubscribe] = useState("subscribers");
  console.log("🚀 ~ AudienceAllAdience ~ isSubscribe:", isSubscribe);
  const handleSelectSub = (value: string) => {
    setIsSubscribe(value);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-[22px]">
            <EyeIcon width={24} height={24} stroke="#0a8fdc" />
          </div>
          <span className="text-[14px] font-normal leading-[1.5]">
            View all Audience
          </span>
        </div>
      </SheetTrigger>
      <SheetContent className="xl:w-[calc(100%-280px)] w-[80%] p-6">
        <SheetHeader>
          <SheetTitle>All Audience</SheetTitle>
          <Separator />
          <Tabs defaultValue="subscribers" className="w-[100%] pb-4">
            <TabsList className="flex w-full gap-10">
              <TabsTrigger
                onClick={() => handleSelectSub("subscribers")}
                className="py-2"
                value="subscribers"
              >
                SUBSCRIBERS
              </TabsTrigger>
              <TabsTrigger
                onClick={() => handleSelectSub("unsubscribers")}
                className="py-2"
                value="unsubscribers"
              >
                UNSUBSCRIBERS
              </TabsTrigger>
            </TabsList>
            <Separator className="mb-4" />
          </Tabs>
        </SheetHeader>
        <TableAudience columns={columns} data={data} />
      </SheetContent>
    </Sheet>
  );
}
