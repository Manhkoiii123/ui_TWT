import apiClient from "@/api/apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";
type UploadImage = {
  created_at: string;
  extension: string;
  height: string;
  id: 6;
  name: string;
  path: string;
  type: string;
  updated_at: string;
  width: string;
};
type TImageRes = {
  id: number;
  type: string;
  path: string;
  width: number;
  name: string;
  height: number;
  created_at: string;
  updated_at: string;
};
type UploadImageResponse = {
  file: UploadImage;
};
export const uploadApi = {
  uploadImage: async (body: FormData) => {
    const res: UploadImageResponse = await apiClient.post("/upload-file", body);
    return res.file;
  },
  removeImage: async (id: number) => {
    const res = await apiClient.delete(`remove-file/${id}`);
    return res;
  },
  getImages: async () => {
    const res = await apiClient.get("/get-list-image");
    return res.data as TImageRes[];
  },
};
export const useMutationUploadImage = () => {
  return useMutation({
    mutationFn: (body: FormData) => uploadApi.uploadImage(body),
  });
};
export const useMutationRemoveImage = () => {
  return useMutation({
    mutationFn: (id: number) => uploadApi.removeImage(id),
  });
};
export const useQueryGetImages = (enabled: boolean) => {
  return useQuery({
    queryKey: ["images"],
    queryFn: () => uploadApi.getImages(),
    enabled,
  });
};
