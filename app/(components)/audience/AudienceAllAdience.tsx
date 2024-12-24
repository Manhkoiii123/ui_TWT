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
import { useMemo } from "react";

export function AudienceAllAdience() {
  const dummyDataa = useMemo(() => {
    return [
      {
        id: 24755,
        first_name: "Vivian",
        last_name: "Ta",
        name: "Vivian Ta",
        sub_website: "tweetwholesalesb2b",
        email: "vivian@tweetworldtravel.com",
        phone: "",
        sub_status: "Subscribe",
        unsub_reason: null,
        schema_data: null,
        source: "Agent Portal",
        form: null,
        created_at: "2024-12-13T11:31:31.000000Z",
        updated_at: "2024-12-23T11:31:33.000000Z",
        ip: "127.0.0.1",
        ip_type: "ipv4",
        continent_code: null,
        continent_name: null,
        country_code: null,
        country_name: null,
        region_code: null,
        region_name: null,
        city: null,
        zip: null,
        latitude: "0",
        longitude: "0",
        device: "Unit Test",
        time_zone: null,
        browser: "Unit Test",
        platform: "Unit Test",
        deleted_at: null,
        campaign_id: null,
        unsubscribe_at: null,
        logs: [],
      },
      {
        id: 24754,
        first_name: "Reservation",
        last_name: "Tweet Cruises",
        name: "Reservation Tweet Cruises",
        sub_website: "tweetwholesalesb2b",
        email: "contact@tweetworldtravel.com",
        phone: "111111111111111111",
        sub_status: "Subscribe",
        unsub_reason: null,
        schema_data: null,
        source: "Agent Portal",
        form: null,
        created_at: "2024-11-20T11:30:52.000000Z",
        updated_at: "2024-12-23T11:30:49.000000Z",
        ip: "127.0.0.1",
        ip_type: "ipv4",
        continent_code: null,
        continent_name: null,
        country_code: null,
        country_name: null,
        region_code: null,
        region_name: null,
        city: null,
        zip: null,
        latitude: "0",
        longitude: "0",
        device: "Unit Test",
        time_zone: null,
        browser: "Unit Test",
        platform: "Unit Test",
        deleted_at: null,
        campaign_id: null,
        unsubscribe_at: null,
        logs: [],
      },
      {
        id: 24753,
        first_name: "Natasha",
        last_name: "Jones",
        name: "NatashaJones",
        sub_website: "tweetretailsb2c",
        email: "natasha@mondotravel.co.nz",
        phone: "",
        sub_status: "Subscribe",
        unsub_reason: null,
        schema_data: null,
        source: "Agent Portal",
        form: null,
        created_at: "2024-11-15T11:32:55.000000Z",
        updated_at: "2024-12-23T11:32:52.000000Z",
        ip: "127.0.0.1",
        ip_type: "ipv4",
        continent_code: null,
        continent_name: null,
        country_code: null,
        country_name: null,
        region_code: null,
        region_name: null,
        city: null,
        zip: null,
        latitude: "0",
        longitude: "0",
        device: "Unit Test",
        time_zone: null,
        browser: "Unit Test",
        platform: "Unit Test",
        deleted_at: null,
        campaign_id: null,
        unsubscribe_at: null,
        logs: [],
      },
      {
        id: 24752,
        first_name: "Tayla",
        last_name: "Donovan",
        name: "TaylaDonovan",
        sub_website: "tweetretailsb2c",
        email: "tayla@zt.com.au",
        phone: "",
        sub_status: "Subscribe",
        unsub_reason: null,
        schema_data: null,
        source: "Agent Portal",
        form: null,
        created_at: "2024-11-15T11:32:55.000000Z",
        updated_at: "2024-12-23T11:32:52.000000Z",
        ip: "127.0.0.1",
        ip_type: "ipv4",
        continent_code: null,
        continent_name: null,
        country_code: null,
        country_name: null,
        region_code: null,
        region_name: null,
        city: null,
        zip: null,
        latitude: "0",
        longitude: "0",
        device: "Unit Test",
        time_zone: null,
        browser: "Unit Test",
        platform: "Unit Test",
        deleted_at: null,
        campaign_id: null,
        unsubscribe_at: null,
        logs: [],
      },
    ];
  }, []);
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
              <TabsTrigger className="py-2" value="subscribers">
                SUBSCRIBERS
              </TabsTrigger>
              <TabsTrigger className="py-2" value="unsubscribers">
                UNSUBSCRIBERS
              </TabsTrigger>
            </TabsList>
            <Separator className="mb-4" />
          </Tabs>
        </SheetHeader>
        <TableAudience columns={columns} data={dummyDataa} />
      </SheetContent>
    </Sheet>
  );
}
