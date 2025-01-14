"use client";
import React from "react";

import Dropdown from "@/components/custom-dropdown/CustomDropdown";
import Pagination from "@/components/custom-pagination/Pagination";
import { Separator } from "@/components/ui/separator";
import CampainItem from "@/app/(components)/all-campains/CampainItem";
import CustomMultipleSelect from "@/components/custom-select/CustomMultipleSelect";
const CampaignPageClient = () => {
  return (
    <>
      <div className="flex items-center justify-between my-3">
        <div className="flex items-center gap-3">
          <div className="relative w-[250px] flex gap-2 items-center">
            <input
              type="search"
              id="search"
              style={{
                background: "rgb(246, 249, 254)",
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
              }}
              className="block w-full px-4 py-3 text-sm text-gray-900 border  border-gray-300 rounded-full shadow-sm focus:outline-none  focus:ring-0"
              placeholder="Search Audience..."
              required
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
          <Dropdown />
        </div>
        <Pagination
          pageSize={10}
          totalItems={100}
          isShow={true}
          currentPage={1}
          handleChangePage={() => {}}
        />
      </div>

      <Separator />
      <CampainItem />
      <CampainItem />
      <CampainItem />
      <CampainItem />
      <CampainItem />
      <CampainItem />
      <CampainItem />
      <CampainItem />
      <CampainItem />
      <CampainItem />
      <CustomMultipleSelect />
    </>
  );
};

export default CampaignPageClient;
