"use client";
import {
  useMutationDeleteAudience,
  useQueryGetAudiences,
} from "@/api/audiences/audienceApi";
import ModelCreateEditCloneAudience from "@/app/(components)/audience-manager/ModelCreateEditCloneAudience";
import ModelViewAudience from "@/app/(components)/audience-manager/ModelViewAudience";
import SheetLogAudience from "@/app/(components)/audience-manager/SheetLogAudience";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagination from "@/components/custom-pagination/Pagination";
import CustomSelect from "@/components/custom-select/CustomSelect";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { convertDate } from "@/lib/utils";
import { TAudience } from "@/types/audience";
import { useQueryClient } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const AudienceManagerClient = () => {
  const [isOpenCreateEditClone, setIsOpenCreateEditClone] = useState(false);
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [typeCustomSelect, setTypeCustomSelect] = useState<
    "create" | "edit" | "clone"
  >("create");
  const [isOpenView, setIsOpenView] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState<TAudience | null>(
    null
  );
  const router = useRouter();
  const currentPage = Number(useSearchParams().get("page")) || 1;
  const [page, setPage] = useState(currentPage);

  const { data: audiences, isLoading: isLoadingAudiences } =
    useQueryGetAudiences({
      page: page,
    });
  const { mutate: mutateDeleteAudience } = useMutationDeleteAudience();
  const queryClient = useQueryClient();
  const handleChangePage = (pageNumber: number) => {
    setPage(pageNumber);
    const pathname = "/audience-manager";
    const query = { page: String(pageNumber) };
    const queryString = new URLSearchParams(query).toString();
    const url = `${pathname}?${queryString}`;
    router.push(url);
  };
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
    // {
    //   accessorKey: "description",
    //   header: "Description",
    // },
    {
      accessorKey: "created_by.name",
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
    data: audiences?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
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
        mutateDeleteAudience(id, {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["audiences"],
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
    <div>
      <Button
        className="mb-4"
        onClick={() => {
          setIsOpenCreateEditClone(true);
          setTypeCustomSelect("create");
        }}
      >
        Add Audience
        <Plus />
      </Button>
      {isLoadingAudiences && (
        <div className="flex justify-center items-center w-[100%] h-[calc(100vh-200px)]">
          <Loading />
        </div>
      )}
      {!isLoadingAudiences && (
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
                                  label: "View",
                                  action: () => {
                                    setIsOpenView(true);
                                    setSelectedAudience(row.original);
                                  },
                                },
                                {
                                  label: "Clone",
                                  action: () => {
                                    setIsOpenCreateEditClone(true);
                                    setSelectedAudience(row.original);
                                    setTypeCustomSelect("clone");
                                  },
                                },
                                {
                                  label: "Edit",
                                  action: () => {
                                    setIsOpenCreateEditClone(true);
                                    setSelectedAudience(row.original);
                                    setTypeCustomSelect("edit");
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
                                {
                                  label: "View History",
                                  action: () => {
                                    setIsOpenLog(true);
                                    setSelectedAudience(row.original);
                                  },
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
              pageSize={audiences?.meta?.last_page ?? 0}
              per_page={audiences?.meta?.per_page ?? 0}
              handleChangePage={handleChangePage}
              className="mt-6"
            />
          </div>
        </div>
      )}
      {isOpenCreateEditClone && (
        <ModelCreateEditCloneAudience
          type={typeCustomSelect}
          isOpen={isOpenCreateEditClone}
          setIsOpen={setIsOpenCreateEditClone}
          dataSelect={selectedAudience}
        />
      )}
      {isOpenView && (
        <ModelViewAudience
          isOpen={isOpenView}
          setIsOpen={setIsOpenView}
          data={selectedAudience}
        />
      )}
      {isOpenLog && (
        <SheetLogAudience
          isOpen={isOpenLog}
          setIsOpen={setIsOpenLog}
          data={selectedAudience}
        />
      )}
    </div>
  );
};

export default AudienceManagerClient;
