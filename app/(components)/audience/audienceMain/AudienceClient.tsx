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
import { UsersIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const AudienceClient = () => {
  const searchParams = useSearchParams();
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
      {
        queryString: "website",
        label: "All Audience",
        link: "",
        icon: <UsersIcon />,
      },
      ...(audiencesConvert || []),
    ];
  }, [audiencesConvert]);
  const typeToCallVIA = useMemo(() => {
    const query = searchParams.get("website");
    const audienceSelect = audiences?.data.find(
      (item) => item.id === Number(query)
    );
    return audienceSelect?.type;
  }, [audiences?.data, searchParams]);
  const { data: audiencesViaTKG } = useQueryGetAudiencesViaTKG(
    {
      type: typeToCallVIA ? JSON.parse(typeToCallVIA) : [],
      pageNumber: 1,
      pageSize: 99999,
    },
    Boolean(typeToCallVIA)
  );

  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-9 pt-[48px]">
        <LeftLayout
          audiencesData={audiencesData}
          isLoading={isLoadingAudiences}
        />
        <div className="grid xl:grid-cols-2 grid-cols-1  gap-8 w-full">
          <ManageAudience data={audiencesViaTKG?.data} />
          <RecentGrowth />
          <EmailMarketingEngagement />
          <TopLocations />
        </div>
      </div>
    </div>
  );
};

export default AudienceClient;
