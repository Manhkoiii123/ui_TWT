import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const ButtonCreate = () => {
  return (
    <Button className="hover:bg-[#07649A] bg-[#0A8FDC] text-white mb-8 ml-4">
      Create New
      <Plus className="ml-1" size={16} />
    </Button>
  );
};

export default ButtonCreate;
