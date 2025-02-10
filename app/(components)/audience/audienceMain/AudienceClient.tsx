"use client";

import {
  useQueryGetAudiences,
  useQueryGetAudiencesViaTKG,
} from "@/api/audiences/audienceApi";
import EmailMarketingEngagement from "@/app/(components)/audience/EmailMarketingEngagement";
import ManageAudience from "@/app/(components)/audience/ManageAudience";
import RecentGrowth from "@/app/(components)/audience/RecentGrowth";
import TopLocations from "@/app/(components)/audience/TopLocations";
import LeftLayout from "@/app/(components)/common/LeftLayout";
import { TableAudience } from "@/components/custom-table/TableAudience";
// import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TAudienceViaTKG } from "@/types/audience";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const AudienceClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const handleChangePage = (page: number) => {
    setPage(page);
  };
  const handleChangeLimit = (limit: number) => {
    setLimit(limit);
  };
  const [isOpenSheetListAudience, setIsOpenSheetListAudience] = useState(false);
  const handleChangeOpenSheetListAudience = (value: boolean) =>
    setIsOpenSheetListAudience(value);
  const [isSubscribe, setIsSubscribe] = useState("subscribers");
  const handleSelectSub = (value: string) => {
    setIsSubscribe(value);
  };
  const { data: audiences, isLoading: isLoadingAudiences } =
    useQueryGetAudiences({
      page: 1,
      per_page: 99999,
    });
  const audiencesConvert = audiences?.data?.map((audience) => ({
    id: audience.id,
    label: audience.title,
    link: String(audience.id),
    queryString: "website",
  }));
  const audiencesData = useMemo(() => {
    return [
      // {
      //   queryString: "website",
      //   label: "All Audience",
      //   link: "",
      //   icon: <UsersIcon />,
      // },
      ...(audiencesConvert || []),
    ];
  }, [audiencesConvert]);
  useEffect(() => {
    if (!searchParams.get("website")) {
      router.push(`/audience?website=${audiencesData[0]?.id}`);
    }
  }, [audiencesData, router, searchParams]);

  const typeToCallVIA = useMemo(() => {
    const query = searchParams.get("website");
    const audienceSelect = audiences?.data.find(
      (item) => item.id === Number(query)
    );
    return audienceSelect?.type;
  }, [audiences?.data, searchParams]);
  const { data: audiencesViaTKG, isLoading: isLoadingAudiencesViaTKG } =
    useQueryGetAudiencesViaTKG(
      {
        type: typeToCallVIA ? JSON.parse(typeToCallVIA) : [],
        pageNumber: page,
        pageSize: limit,
        isSubscribeNewsletter: isSubscribe === "subscribers",
      },
      Boolean(typeToCallVIA && isOpenSheetListAudience)
    );

  const columns: ColumnDef<TAudienceViaTKG>[] = [
    // {
    //   id: "select",
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
    {
      id: "index",
      header: "No",
      cell: (info) => (page - 1) * limit + info.row.index + 1,
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: (info) => {
        return JSON.parse(info.getValue() as string).join(", ");
      },
    },
    {
      accessorKey: "source",
      header: "Source",
    },
  ];

  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-9 pt-[48px]">
        <LeftLayout
          audiencesData={audiencesData}
          isLoading={isLoadingAudiences}
        />
        <div className="grid xl:grid-cols-2 grid-cols-1  gap-8 w-full">
          <ManageAudience
            data={audiencesViaTKG?.data}
            isOpenSheetListAudience={isOpenSheetListAudience}
            handleChangeOpenSheetListAudience={
              handleChangeOpenSheetListAudience
            }
            handleSelectSub={handleSelectSub}
          />
          <RecentGrowth />
          <EmailMarketingEngagement />
          <TopLocations />
        </div>
      </div>
      {isOpenSheetListAudience && (
        <Sheet
          open={isOpenSheetListAudience}
          onOpenChange={handleChangeOpenSheetListAudience}
        >
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
            <TableAudience
              isSub={isSubscribe}
              columns={columns}
              data={audiencesViaTKG?.data}
              isLoading={isLoadingAudiencesViaTKG}
              page={page}
              limit={limit}
              totalPage={audiencesViaTKG?.totalPage}
              total={audiencesViaTKG?.total}
              handleChangePage={handleChangePage}
              handleChangeLimit={handleChangeLimit}
            />
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

export default AudienceClient;
