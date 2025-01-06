"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
import { useEffect, useState } from "react";
import { convertDate } from "@/lib/utils";

type Props = {
  templates: TTemplate[] | undefined;
};
const TableTemplateEmail = ({ templates }: Props) => {
  const [isOpenView, setIsOpenView] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");

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
      cell: (info) => {
        const date = convertDate(info.getValue() as string);
        return date;
      },
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
                          options={[
                            {
                              label: "View",
                              action: () => {
                                setIsOpenView(true);
                                setHtmlContent(row.original.content);

                                console.log("view template");
                              },
                            },
                            {
                              label: "Edit",
                              action: () => {
                                console.log("edit template");
                              },
                            },
                            {
                              label: "Delete",
                              action: () => {
                                console.log("delete template");
                              },
                            },
                            {
                              label: "View History",
                              action: () => {
                                console.log("view history template");
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
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {isOpenView && (
        <ViewTemplate
          isOpen={isOpenView}
          setIsOpen={setIsOpenView}
          htmlContent={htmlContent}
        />
      )}
    </div>
  );
};

export default TableTemplateEmail;
const ViewTemplate = ({
  isOpen,
  htmlContent,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  htmlContent: string;
}) => {
  const [doc, setDoc] = useState<Document>();
  const [styles, setStyles] = useState("");
  useEffect(() => {
    const decodedHtml = JSON.parse('"' + htmlContent + '"');
    const parser = new DOMParser();
    const doc = parser.parseFromString(decodedHtml, "text/html");
    setDoc(doc);

    const styleTags = doc.querySelectorAll("style");
    let styleContent = "";
    styleTags.forEach((tag) => {
      styleContent += tag.innerHTML;
    });

    setStyles(styleContent);
  }, [htmlContent]);
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent className="max-h-[80vh] overflow-x-auto">
        <DialogHeader>
          <DialogTitle className="text-gray-800 font-medium text-[12px] leading-[1.6rem] border-b border-gray-200 pb-[10px]">
            Preview Template
          </DialogTitle>
          <DialogDescription>
            {doc?.body.innerHTML && (
              <>
                <style>{styles}</style>
                <div
                  dangerouslySetInnerHTML={{
                    __html: doc.body.innerHTML,
                  }}
                />
              </>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
