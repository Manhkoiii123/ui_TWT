"use client";
import EmailMarketingEngagement from "@/app/(components)/audience/EmailMarketingEngagement";
import ManageAudience from "@/app/(components)/audience/ManageAudience";
import RecentGrowth from "@/app/(components)/audience/RecentGrowth";
import TopLocations from "@/app/(components)/audience/TopLocations";
import React from "react";

const AudienceMain = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1  gap-8 w-full">
      <ManageAudience />
      <RecentGrowth />
      <EmailMarketingEngagement />
      <TopLocations />
    </div>
  );
};

export default AudienceMain;
