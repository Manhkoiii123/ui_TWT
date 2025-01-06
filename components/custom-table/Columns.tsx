/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import CustomSelect from "@/components/custom-select/CustomSelect";
export type ColumnType = {
  id: number;
  first_name: string;
  last_name: string;
  name: string;
  sub_website: string;
  email: string;
  phone: string | null;
  sub_status: string;
  unsub_reason: string | null;
  schema_data: string | null;
  source: string;
  form: string | null;
  created_at: string;
  updated_at: string;
  ip: string;
  ip_type: string;
  continent_code: string | null;
  continent_name: string | null;
  country_code: string | null;
  country_name: string | null;
  region_code: string | null;
  region_name: string | null;
  city: string | null;
  zip: string | null;
  latitude: string;
  longitude: string;
  device: string;
  time_zone: string | null;
  browser: string;
  platform: string;
  deleted_at: string | null;
  campaign_id: number | null;
  unsubscribe_at: string | null;
  logs: any[];
};

export const columns: ColumnDef<ColumnType>[] = [
  {
    id: "select",

    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "index",
    header: "#",
    cell: (info) => info.row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "source",
    header: "Source",
  },
  {
    id: "actions",
    header: "Action",
    enableHiding: false,
    cell: ({}) => {
      return (
        <CustomSelect
          options={[
            { label: "View Report", action: () => {} },
            { label: "Unsubscribe", action: () => {} },
            { label: "Edit", action: () => {} },
            { label: "View History", action: () => {} },
          ]}
        />
      );
    },
  },
];
