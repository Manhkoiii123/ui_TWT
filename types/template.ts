export type TTemplate = {
  id: number;
  name: string;
  label: string;
  content: string;
  category: string;
  thumbnail: string;
};
export type TTemplateCreate = {
  name: string;
  label: string;
  content: string;
  category: string;
  thumbnail: Blob;
};
interface Template {
  id: number;
  name: string;
  label: string;
  content: string;
  category: string;
  thumbnail: string;
  created_at: string;
}
export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}
export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}
export interface TemplateResponse {
  data: Template[];
  links: PaginationLinks;
  meta: PaginationMeta;
}
