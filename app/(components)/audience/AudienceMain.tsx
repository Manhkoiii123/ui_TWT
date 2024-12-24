"use client";
import EmailMarketingEngagement from "@/app/(components)/audience/EmailMarketingEngagement";
import ManageAudience from "@/app/(components)/audience/ManageAudience";
import RecentGrowth from "@/app/(components)/audience/RecentGrowth";
import TopLocations from "@/app/(components)/audience/TopLocations";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const AudienceMain = () => {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const website = searchParams.get("website");
  // const router = useRouter();
  return (
    <div className="grid grid-cols-2 gap-8 w-full">
      <ManageAudience />
      <RecentGrowth />
      <EmailMarketingEngagement />
      <TopLocations />
    </div>
  );
};

export default AudienceMain;
