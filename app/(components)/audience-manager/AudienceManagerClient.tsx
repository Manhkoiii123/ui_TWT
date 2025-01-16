"use client";
import ModelCreateEditCloneAudience from "@/app/(components)/audience-manager/ModelCreateEditCloneAudience";
import ModelViewAudience from "@/app/(components)/audience-manager/ModelViewAudience";
import SheetLogAudience from "@/app/(components)/audience-manager/SheetLogAudience";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagination from "@/components/custom-pagination/Pagination";
import CustomSelect from "@/components/custom-select/CustomSelect";
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
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const AudienceManagerClient = () => {
  const dummydata = useMemo(() => {
    return [
      {
        id: 11,
        title: "New Zealand Agency",
        slug: "newzealandagency",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "New Zealand Agency",
        logs: [
          {
            id: 14,
            user_id: {
              id: 1,
              email: "nam@tweetworldtravel.com",
              name: "Andrew",
            },
            audience_id: 11,
            event:
              '{"new_data": {"description": "To send mail to test"}, "old_data": {"description": null}}',
            created_at: "2023-10-04T04:48:16.000000Z",
            updated_at: "2023-10-04T04:48:16.000000Z",
          },
        ],
      },
      {
        id: 12,
        title: "VIC Agency",
        slug: "vic",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "vic",
        logs: [],
      },
      {
        id: 13,
        title: "QLD Agency",
        slug: "qld",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "qld",
        logs: [],
      },
      {
        id: 14,
        title: "NSW Agency",
        slug: "nsw",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "nws",
        logs: [],
      },
      {
        id: 15,
        title: "WA Agency",
        slug: "wa",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "wa",
        logs: [],
      },
      {
        id: 16,
        title: "TAS Agency",
        slug: "tas",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "wa",
        logs: [],
      },
      {
        id: 17,
        title: "SA Agency",
        slug: "sa",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "wa",
        logs: [],
      },
      {
        id: 18,
        title: "All B2B Agency",
        slug: "b2b",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "wa",
        logs: [],
      },
      {
        id: 19,
        title: "All B2B Supplier",
        slug: "supplier",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "wa",
        logs: [],
      },
      {
        id: 20,
        title: "All B2C Client",
        slug: "b2c",
        created_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        updated_by: {
          id: 1,
          name: "Andrew",
          email: "nam@tweetworldtravel.com",
        },
        created_at: "2024-08-27T02:30:38.000000Z",
        updated_at: "2024-08-27T02:30:38.000000Z",
        description: "wa",
        logs: [],
      },
    ];
  }, []);
  const [isOpenCreateEditClone, setIsOpenCreateEditClone] = useState(false);
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [typeCustomSelect, setTypeCustomSelect] = useState<
    "create" | "edit" | "clone"
  >("create");
  const [isOpenView, setIsOpenView] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState(null);
  const router = useRouter();
  const currentPage = Number(useSearchParams().get("page")) || 1;
  const [page, setPage] = useState(currentPage);

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
    {
      accessorKey: "description",
      header: "Description",
    },
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
    data: dummydata ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
                                action: () => {},
                              },
                              {
                                label: "View History",
                                action: () => {
                                  setIsOpenLog(true);
                                  setSelectedAudience(row.original.logs);
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
            pageSize={Math.ceil((dummydata.length ?? 0) / 10)}
            handleChangePage={handleChangePage}
            className="mt-6"
          />
        </div>
      </div>
      {isOpenCreateEditClone && (
        <ModelCreateEditCloneAudience
          type={typeCustomSelect}
          isOpen={isOpenCreateEditClone}
          setIsOpen={setIsOpenCreateEditClone}
          data={selectedAudience}
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
