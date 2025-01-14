import apiClient from "@/api/apiClient";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
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
  created_at?: string;
  updated_at?: string;
};
type UploadImageResponse = {
  file: UploadImage;
};
type TListImageResponse = {
  data: TImageRes[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    to: number;
  };
};
const LIMIT = 4;
export const uploadApi = {
  uploadImage: async (body: FormData) => {
    const res: UploadImageResponse = await apiClient.post("/upload-file", body);
    return res.file;
  },
  removeImage: async (id: number) => {
    const res = await apiClient.delete(`remove-file/${id}`);
    return res;
  },
  getImages: async ({ pageParam }: { pageParam: number }) => {
    const res: TListImageResponse = await apiClient.get(
      `/get-list-image?per_page=${pageParam}`
    );
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
    mutationFn: (id: number) => uploadApi.removeImage(id),
  });
};

export const useQueryGetImages = () => {
  const {
    data,
    error,
    fetchNextPage,
    status,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: ({ pageParam = 0 }) => uploadApi.getImages({ pageParam }),
    getNextPageParam: (lastPage: TListImageResponse, allPages) => {
      if (lastPage.meta.to >= lastPage.meta.total) {
        return undefined;
      }
      return (allPages.length + 1) * LIMIT;
    },
    initialPageParam: LIMIT,
  });
  const images = useMemo(() => {
    if (!data) return [];
    return data.pages.reduce((acc: TImageRes[], page) => {
      return [...acc, ...page.data];
    }, []);
  }, [data]);

  return {
    error,
    fetchNextPage,
    status,
    hasNextPage,
    data,
    images,
    isLoading,
    isFetchingNextPage,
    refetch,
  };
};
