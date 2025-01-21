import apiClient from "@/api/apiClient";
import { TAudienceResponse, TAudienceViaTKGResponse } from "@/types/audience";
import { useMutation, useQuery } from "@tanstack/react-query";
// import qs from "qs";
export type TCreateAudience = {
  title: string;
  type: string[];
};
export const audienceApi = {
  create: async (data: TCreateAudience) => {
    const res = await apiClient.post("/audiences", data);
    return res;
  },
  get: async (data: {
    page: number;
    per_page?: number;
  }): Promise<TAudienceResponse> => {
    const res: TAudienceResponse = await apiClient.get("/audiences", {
      params: data,
    });
    return res;
  },
  edit: async (id: number, data: TCreateAudience) => {
    const res = await apiClient.put(`/audiences/${id}`, data);
    return res;
  },
  delete: async (id: number) => {
    const res = await apiClient.delete(`/audiences/${id}`);
    return res;
  },
  listViaTKG: async (data: {
    pageNumber?: number;
    pageSize?: number;
    type: string[];
    isSubscribeNewsletter?: boolean;
  }): Promise<TAudienceViaTKGResponse> => {
    // const queryString = qs.stringify(data, {
    //   arrayFormat: "brackets",
    //   encodeValuesOnly: true,
    // });
    const res: TAudienceViaTKGResponse = await apiClient.get(
      `/list-audience-via-tkg?pageSize=${data.pageSize}&pageNumber=${data.pageNumber}&type[]=Passenger&hasEmail=true&isSubscribeNewsletter=${data.isSubscribeNewsletter}`
    );
    // const res: TAudienceViaTKGResponse = await apiClient.get(
    //   `/list-audience-via-tkg?${queryString}`
    // );
    return res;
  },
};

export const useMutateCreateAudience = () => {
  return useMutation({
    mutationFn: (data: TCreateAudience) => audienceApi.create(data),
  });
};
export const useQueryGetAudiences = (data: {
  page: number;
  per_page?: number;
}) => {
  return useQuery({
    queryKey: ["audiences", data.page],
    queryFn: () => audienceApi.get(data),
  });
};
export const useMutationEditAudience = () => {
  return useMutation({
    mutationFn: (data: { id: number; data: TCreateAudience }) =>
      audienceApi.edit(data.id, data.data),
  });
};

export const useMutationDeleteAudience = () => {
  return useMutation({
    mutationFn: (id: number) => audienceApi.delete(id),
  });
};
export const useQueryGetAudiencesViaTKG = (
  data: {
    pageNumber?: number;
    pageSize?: number;
    type: string[];
    isSubscribeNewsletter?: boolean;
  },
  enabled?: boolean
) => {
  return useQuery({
    queryKey: [
      "list-audience-via-tkg",
      data.type,
      data.pageNumber,
      data.pageSize,
      data.isSubscribeNewsletter,
    ],
    queryFn: () =>
      audienceApi.listViaTKG({
        pageNumber: data.pageNumber || 1,
        pageSize: data.pageSize || 10,
        type: data.type,
        isSubscribeNewsletter: data.isSubscribeNewsletter,
      }),
    enabled: enabled,
  });
};
