import apiClient from "@/api/apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";
type UploadImage = {
  url: string;
};
export const uploadApi = {
  uploadImage: async (body: FormData) => {
    const res: UploadImage = await apiClient.post("/upload-file", body);
    return res;
  },
  removeImage: async (file_path: string) => {
    const res = await apiClient.post("remove-file", { file_path });
    return res;
  },
  getImages: async () => {
    const res: string[] = await apiClient.get("/getListViaAwsS3");
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
export const useQueryGetImages = (enabled: boolean) => {
  return useQuery({
    queryKey: ["images"],
    queryFn: () => uploadApi.getImages(),
    enabled,
  });
};
