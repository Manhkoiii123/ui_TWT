import React from "react";
import { convertDate } from "@/lib/utils";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
import { MailerConfig } from "@/types/hostEmail";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import CustomInput from "@/components/CustomInput";
import { FieldValues, useForm } from "react-hook-form";
import CustomSelectAnimation from "@/components/custom-select/CustomSelectAnimation";
const TableHost = () => {
  const columns: ColumnDef<MailerConfig>[] = [
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
  const dummyData = [
    {
      id: 5,
      mailer: "SMTP",
      host: "email-smtp.ap-southeast-2.amazonaws.com",
      port: "587",
      username: "AKIAR5SMLLJCVLERSR7G",
      password: "BIk+rHafSwrtc0xB/BGF+ltCMXcCqmwqqM+P+N/zlf5W",
      encryption: "TLS",
      address: "no-reply@newsletter-tweetworldtravel.com",
      name: "Tweet World Travel",
      created_by: {
        id: 1,
        name: "Andrew",
        email: "nam@tweetworldtravel.com",
        email_verified_at: null,
        created_at: null,
        updated_at: "2025-01-13T03:27:07.000000Z",
        secret_key: "Djzd7hfrVlybNB84BJe3",
        first_name: "Andrew",
        last_name: "Nguyen",
      },
      last_update_by: 1,
      created_at: "2023-10-06T05:39:18.000000Z",
      updated_at: "2023-10-15T04:24:29.000000Z",
      region: null,
      last_updated_by: {
        id: 1,
        name: "Andrew",
        email: "nam@tweetworldtravel.com",
        email_verified_at: null,
        created_at: null,
        updated_at: "2025-01-13T03:27:07.000000Z",
        secret_key: "Djzd7hfrVlybNB84BJe3",
        first_name: "Andrew",
        last_name: "Nguyen",
      },
    },
    {
      id: 2,
      mailer: "SMTP",
      host: "mail.tweetworldtravel.com.au",
      port: "587",
      username: "noreply@tweetworldtravel.com.au",
      password: "Noreply@2019",
      encryption: "TLS",
      address: "noreply@tweetworldtravel.com.au",
      name: "Tweet World Travel",
      created_by: {
        id: 1,
        name: "Andrew",
        email: "nam@tweetworldtravel.com",
        email_verified_at: null,
        created_at: null,
        updated_at: "2025-01-13T03:27:07.000000Z",
        secret_key: "Djzd7hfrVlybNB84BJe3",
        first_name: "Andrew",
        last_name: "Nguyen",
      },
      last_update_by: 1,
      created_at: "2023-09-17T23:52:31.000000Z",
      updated_at: "2023-10-03T02:31:59.000000Z",
      region: null,
      last_updated_by: {
        id: 1,
        name: "Andrew",
        email: "nam@tweetworldtravel.com",
        email_verified_at: null,
        created_at: null,
        updated_at: "2025-01-13T03:27:07.000000Z",
        secret_key: "Djzd7hfrVlybNB84BJe3",
        first_name: "Andrew",
        last_name: "Nguyen",
      },
    },
  ];
  const table = useReactTable({
    data: dummyData ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <ModalCreateNewHostConfig />
      <Table className="font-thin text-[#111827]">
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
                                // setIsOpenView(true);
                                // setHtmlContent(row.original.content);
                              },
                            },
                            {
                              label: "Delete",
                              action: () => {
                                // router.push(
                                //   `/templates/edit?id=${row.original.id}`
                                // );
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
    </>
  );
};

export default TableHost;

export const ModalCreateNewHostConfig = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      host: "",
      port: "",
      username: "",
      password: "",
      encryption: "",
      address: "",
      name: "",
    },
  });
  const smtpOptions = [{ value: "STMP", label: "SMTP" }];
  const encryptionOptions = [
    { value: "TLS", label: "TLS" },
    { value: "SSL", label: "SSL" },
  ];
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="mb-4">
          New Host Config
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px]">
        <DialogHeader>
          <DialogTitle>
            <span>New Host Config</span>
            <Separator className="my-4" />
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <CustomSelectAnimation
            register={register}
            name="mailer"
            placeholder="Select SMTP Server"
            options={smtpOptions}
            errors={errors}
            rules={{ required: "SMTP Server is required" }}
            disabled
            defaultValue="STMP"
          />
          <div>
            <CustomInput
              register={register}
              name="host"
              placeholder="Host*"
              errors={errors}
              rules={{ required: "Host is required" }}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="port"
              placeholder="Port*"
              errors={errors}
              rules={{
                required: "Post is required",
              }}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="username"
              placeholder="Username*"
              errors={errors}
              rules={{
                required: "Username is required",
              }}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="password"
              placeholder="Password"
              errors={errors}
              type="password"
            />
          </div>
          <div>
            <CustomSelectAnimation
              register={register}
              name="encryption"
              placeholder="Encrytion"
              options={encryptionOptions}
              errors={errors}
              rules={{ required: "Please choose encrytion" }}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="address"
              placeholder="Address*"
              errors={errors}
              rules={{
                required: "Address is required",
              }}
            />
          </div>
          <div>
            <CustomInput
              register={register}
              name="name"
              placeholder="Name*"
              errors={errors}
              rules={{
                required: "Name is required",
              }}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
