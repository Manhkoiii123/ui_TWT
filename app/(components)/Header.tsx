"use client";
import { IoMailOutline } from "react-icons/io5";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Sidebar from "@/app/(components)/Sidebar";
import CustomDrawer from "@/app/(components)/CustomDrawer";

const Header = () => {
  return (
    <header className="flex h-[70px] items-center justify-between shadow-sm p-6 bg-white">
      <div className="relative w-[250px] flex gap-2 items-center">
        <div className=" max-xl:block xl:hidden">
          <CustomDrawer
            side={"left"}
            icon={
              <div className="flex items-center justify-center  bg-gray-100 rounded-full text-white">
                <FiMenu size={30} color="#000" />
              </div>
            }
            text="Message"
          >
            <Sidebar />
          </CustomDrawer>
        </div>
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
      <div className="flex items-center space-x-4">
        <CustomDrawer
          side={"right"}
          icon={
            <div className="flex items-center justify-center  bg-gray-100 rounded-full text-white">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FaRegBell size={20} color="#000" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Notification</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          }
          text="Message"
        />
        <CustomDrawer
          side={"right"}
          icon={
            <div className="flex items-center justify-center  bg-gray-100 rounded-full text-white">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IoMailOutline size={20} color="#000" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Message</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          }
          text="Message"
        />

        <div className="flex items-center space-x-2">
          <span>Kevin</span>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
            K
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
