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
