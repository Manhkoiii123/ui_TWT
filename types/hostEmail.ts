import { PaginationLinks, PaginationMeta } from "@/types/template";

export type MailerConfig = {
  id: number;
  mailer: string;
  host: string;
  port: string;
  username: string;
  password: string;
  encryption: string;
  address: string;
  name: string;
  created_by: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string | null;
    updated_at: string;
    secret_key: string;
    first_name: string;
    last_name: string;
  };
};
export type TEmailSetting = {
  id: number;
  mailer: string;
  host: string;
  port: string;
  username: string;
  password: string;
  encryption: string;
  address: string;
  name: string;
  region: string;
  created_by: number;
  last_update_by: number;
  created_at: string;
  updated_at: string;
};
export interface TEmailSettingResponse {
  data: TEmailSetting[];
  links: PaginationLinks;
  meta: PaginationMeta;
}
