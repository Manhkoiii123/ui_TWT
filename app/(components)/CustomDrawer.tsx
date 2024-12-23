import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const CustomDrawer = ({
  icon,
  text,
  side = "left",
  children,
}: {
  icon: React.ReactNode;
  text: string;
  side?: "left" | "top" | "bottom" | "right" | null | undefined;
  children?: React.ReactNode;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center justify-center  bg-gray-100 rounded-full text-white p-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>{icon}</TooltipTrigger>
              <TooltipContent>
                <p>{text}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </SheetTrigger>

      <SheetContent className="w-[280px]" side={side}>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default CustomDrawer;
