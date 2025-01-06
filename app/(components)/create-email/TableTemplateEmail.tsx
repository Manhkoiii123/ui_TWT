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
import CustomSelect from "@/components/custom-select/CustomSelect";
import { TTemplate } from "@/types/template";

type Props = {
  templates: TTemplate[] | undefined;
};
const TableTemplateEmail = ({ templates }: Props) => {
  const columns: ColumnDef<TTemplate>[] = [
    {
      id: "index",
      header: "No",
      cell: (info) => info.row.index + 1,
    },
    {
      accessorKey: "label",
      header: "Title",
    },
    {
      accessorKey: "created_at",
      header: "Created At",
    },
  ];

  // call api
  const table = useReactTable({
    data: templates ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
                          options={["View", "Edit", "Delete", "View History"]}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableTemplateEmail;
