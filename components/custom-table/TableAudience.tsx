"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { useEffect, useState } from "react";
// import { Checkbox } from "@/components/ui/checkbox";
// import TrashIcon from "@/icon/TrashIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TAudienceViaTKG } from "@/types/audience";
import CustomSelect from "@/components/custom-select/CustomSelect";
import Loading from "@/components/Loading";
type Props = {
  columns: ColumnDef<TAudienceViaTKG>[];
  data: TAudienceViaTKG[] | undefined;
  page: number;
  limit: number;
  handleChangePage: (page: number) => void;
  handleChangeLimit: (limit: number) => void;
  isLoading?: boolean;
  totalPage?: number;
  total?: number;
  isSub?: string;
};
export function TableAudience({
  columns,
  data,
  handleChangeLimit,
  handleChangePage,
  limit,
  page,
  isLoading,
  totalPage,
  total,
  isSub,
}: Props) {
  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total || 0);
  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  // const [selectedRows, setSelectedRows] = useState<TAudienceViaTKG[]>([]);

  // useEffect(() => {
  //   const selectedData = table
  //     .getSelectedRowModel()
  //     .rows.map((row) => row.original);
  //   setSelectedRows(selectedData);
  // }, [table.getSelectedRowModel().rows]);
  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center w-[100%] h-[calc(100vh-200px)]">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <div className="flex items-center justify-between py-4">
              <div className="flex gap-2 items-center">
                {/* <Checkbox
                  checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                  }
                  onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                  }
                  aria-label="Select all"
                /> */}
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
                {/* {selectedRows.length > 0 && <TrashIcon stroke="#959CA9" />} */}
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="flex items-center space-x-2">
                    <Select
                      value={String(limit)}
                      onValueChange={(value) => {
                        table.setPageSize(Number(value));
                        handleChangeLimit(Number(value));
                      }}
                    >
                      <SelectTrigger className="h-8 w-[70px]">
                        <SelectValue
                          placeholder={table.getState().pagination.pageSize}
                        />
                      </SelectTrigger>
                      <SelectContent side="top">
                        {[1, 10, 20, 30, 40, 50].map((pageSize) => (
                          <SelectItem key={pageSize} value={`${pageSize}`}>
                            {pageSize}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1 text-sm text-muted-foreground">
                    {startItem} - {endItem} of {total}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        handleChangePage(page - 1);
                      }}
                      disabled={page === 1}
                    >
                      <span className="sr-only">Go to previous page</span>
                      <ChevronLeft />
                    </Button>
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        handleChangePage(page + 1);
                      }}
                      disabled={page === totalPage}
                    >
                      <span className="sr-only">Go to next page</span>
                      <ChevronRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                    <TableHead className="text-center w-[25%]">
                      Action
                    </TableHead>
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className="w-full">
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
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
                                label:
                                  isSub === "subscribers"
                                    ? "Unsubscribe"
                                    : "Subscribe",
                                action: () => {},
                              },
                              {
                                label: "View History",
                                action: () => {},
                              },
                            ]}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
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
          </div>
        </>
      )}
    </>
  );
}
