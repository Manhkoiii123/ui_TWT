"use client";
import { useQueryGetTemplates } from "@/api/templates/templatesApi";
import TableTemplateEmail from "@/app/(components)/create-email/TableTemplateEmail";
import Pagination from "@/components/custom-pagination/Pagination";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/icon/PlusIcon";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";

const TemplatesEmail = () => {
  const router = useRouter();
  const currentPage = Number(useSearchParams().get("page")) || 1;
  const [page, setPage] = useState(currentPage);
  const handleNavigate = () => {
    router.push("/templates/create");
  };
  const handleChangePage = (pageNumber: number) => {
    setPage(pageNumber);
    const pathname = "/templates";
    const query = { page: String(pageNumber) };
    const queryString = new URLSearchParams(query).toString();
    const url = `${pathname}?${queryString}`;
    router.push(url);
  };
  const { data: templates, isLoading } = useQueryGetTemplates({
    page: page,
  });
  return (
    <div className="bg-white p-4 shadow-sm max-h-[calc(100vh-178px)]">
      <Suspense
        fallback={
          <div className="h-screen">
            <Loading />
          </div>
        }
      >
        <Button className="bg-primary mb-4" onClick={handleNavigate}>
          Create New <PlusIcon />
        </Button>
        <TableTemplateEmail templates={templates?.data} isLoading={isLoading} />
        <div>
          <Pagination
            currentPage={page}
            pageSize={
              Math.ceil((templates?.meta?.total ?? 0) / 10) === 0
                ? 1
                : Math.ceil((templates?.meta?.total ?? 0) / 10)
            }
            handleChangePage={handleChangePage}
            className="mt-6"
          />
        </div>
      </Suspense>
    </div>
  );
};

export default TemplatesEmail;


