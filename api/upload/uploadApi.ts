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
};
export const useMutationUploadImage = () => {
  return useMutation({
    mutationFn: (body: FormData) => uploadApi.uploadImage(body),
  });
};
