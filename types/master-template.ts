import { PaginationLinks, PaginationMeta } from "@/types/template";

export type TMasterTemplate = {
  id: number;
  name: string;
  position: string;
  content: string;
};
export type TMasterTemplateRes = {
  id: number;
  name: string;
  position: string;
  content: string;
  created_at: string;
  updated_at: string;
};
export interface MasterTemplateResponse {
  data: TMasterTemplateRes[];
  links: PaginationLinks;
  meta: PaginationMeta;
}
