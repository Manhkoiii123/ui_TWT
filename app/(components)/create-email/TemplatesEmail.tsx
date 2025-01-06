"use client";
import TableTemplateEmail from "@/app/(components)/create-email/TableTemplateEmail";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/icon/PlusIcon";
import { useRouter } from "next/navigation";
import React from "react";

const TemplatesEmail = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/templates/create");
  };
  return (
    <div className="bg-white p-4 shadow-sm">
      <Button className="bg-primary mb-4" onClick={handleNavigate}>
        Create New <PlusIcon />
      </Button>

      <TableTemplateEmail />
    </div>
  );
};

export default TemplatesEmail;
