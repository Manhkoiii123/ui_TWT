"use client";
import { useQueryGetTemplates } from "@/api/templates/templatesApi";
import TableTemplateEmail from "@/app/(components)/create-email/TableTemplateEmail";
import Pagination from "@/components/custom-pagination/Pagination";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/icon/PlusIcon";
import { useRouter } from "next/navigation";
import React, { Suspense, useState } from "react";

const TemplatesEmail = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
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
      <Button className="bg-primary mb-4" onClick={handleNavigate}>
        Create New <PlusIcon />
      </Button>
      <Suspense
        fallback={
          <div className="h-screen">
            <Loading />
          </div>
        }
      >
        <TableTemplateEmail templates={templates?.data} isLoading={isLoading} />
      </Suspense>

      <div>
        <Pagination
          currentPage={page}
          pageSize={Math.ceil((templates?.meta?.total ?? 0) / 10)}
          handleChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default TemplatesEmail;
