"use client";
import React, { useState } from "react";
import { convertDate } from "@/lib/utils";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import CustomSelect from "@/components/custom-select/CustomSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TEmailSetting } from "@/types/hostEmail";
import Swal from "sweetalert2";

import {
  useMutationDeleteEmailSetting,
  useQueryGetEmailSetting,
} from "@/api/emailSetting/emailSettingApi";
import { useRouter, useSearchParams } from "next/navigation";
import { ModalCreateNewHostConfig } from "@/app/(components)/settings/email-setting/ModalCreateNewHostConfig";
import Pagination from "@/components/custom-pagination/Pagination";
import { useQueryClient } from "@tanstack/react-query";
const TableHost = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [dataEdit, setDataEdit] = useState<TEmailSetting | null>(null);
  const currentPage = Number(useSearchParams().get("page")) || 1;
  const [page, setPage] = useState(currentPage);
  const handleDeleteDataEdit = () => {
    setDataEdit(null);
  };
  const handleChangePage = (pageNumber: number) => {
    setPage(pageNumber);
    const pathname = "/email-settings";
    const query = { page: String(pageNumber) };
    const queryString = new URLSearchParams(query).toString();
    const url = `${pathname}?${queryString}`;
    router.push(url);
  };
  const { data: emailSetting, isLoading: isLoadingEmailSetting } =
    useQueryGetEmailSetting({
      page: page,
    });
  const { mutate: mutateDelete } = useMutationDeleteEmailSetting();

  const columns: ColumnDef<TEmailSetting>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "host",
      header: "Host",
    },
    {
      accessorKey: "port",
      header: "Port",
    },
    {
      accessorKey: "username",
      header: "Created By",
    },
    {
      accessorKey: "created_at",
      header: "Created On",
      cell: (info) => {
        const date = convertDate(info.getValue() as string);
        return date;
      },
    },
  ];
  const table = useReactTable({
    data: emailSetting?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const queryClient = useQueryClient();

  const handleClickDelete = async (id: number, callback: () => void) => {
    Swal.fire({
      title: "Delete this? You can't revert this.",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutateDelete(id, {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["mail-settings"],
            });
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            callback();
          },
          onError: () => {
            Swal.fire("Error!", "Something went wrong.", "error");
          },
        });
      }
    });
  };

  return (
    <>
      <ModalCreateNewHostConfig
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        dataEdit={dataEdit}
        handleDeleteDataEdit={handleDeleteDataEdit}
      />
      {!isLoadingEmailSetting && (
        <div>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <>
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      </>
                    );
                  })}
                  <TableHead className="text-center w-[25%]">Action</TableHead>
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                <>
                  {table.getRowModel().rows.map((row) => (
                    <>
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                        <TableCell className="w-[25%]">
                          <div className="flex items-center justify-center">
                            <CustomSelect
                              options={[
                                {
                                  label: "Edit",
                                  action: () => {
                                    setIsOpen(true);
                                    setDataEdit(row.original);
                                  },
                                },
                                {
                                  label: "Delete",
                                  action: (callback: () => void) =>
                                    handleClickDelete(
                                      row.original.id,
                                      callback
                                    ),
                                },
                              ]}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
                </>
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div>
            <Pagination
              currentPage={page}
              pageSize={
                Math.ceil((emailSetting?.meta?.total ?? 0) / 10) === 0
                  ? 1
                  : Math.ceil((emailSetting?.meta?.total ?? 0) / 10)
              }
              handleChangePage={handleChangePage}
              className="mt-6"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TableHost;
