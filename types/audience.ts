import { PaginationLinks, PaginationMeta } from "@/types/template";

export interface TAudience {
  id: number;
  title: string;
  type: string;
  created_by: {
    id: number;
    name: string;
    email: string;
  };
  updated_by: {
    id: number;
    name: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
}
export interface TAudienceResponse {
  data: TAudience[];
  links: PaginationLinks;
  meta: PaginationMeta;
}
export interface TAudienceViaTKG {
  name: string;
  email: string;
  isSubscribeNewsletter: boolean;
  phone: string;
  createdAt: string;
  source: string;
}
export interface TAudienceViaTKGResponse {
  data: TAudienceViaTKG[];
  page: number;
  total: number;
  totalPage: number;
}
