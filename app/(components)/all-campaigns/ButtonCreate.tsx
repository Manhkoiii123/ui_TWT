"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonCreate = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/all-campaigns/create");
  };
  return (
    <Button
      className="hover:bg-[#07649A] bg-[#0A8FDC] text-white mb-8 ml-4"
      onClick={handleClick}
    >
      Create New
      <Plus className="ml-1" size={16} />
    </Button>
  );
};

export default ButtonCreate;
