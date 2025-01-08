import apiClient from "@/api/apiClient";
import { useMutation } from "@tanstack/react-query";
type UploadImage = {
  url: string;
};
export const uploadApi = {
  uploadImage: async (body: FormData) => {
    const res: UploadImage = await apiClient.post("/upload-file", body);
    return res;
  },
  removeImage: async (file_path: string) => {
    const res = await apiClient.delete("remove-file", { data: { file_path } });
    return res;
  },
};
export const useMutationUploadImage = () => {
  return useMutation({
    mutationFn: (body: FormData) => uploadApi.uploadImage(body),
  });
};
export const useMutationRemoveImage = () => {
  return useMutation({
    mutationFn: (file_path: string) => uploadApi.removeImage(file_path),
  });
};
