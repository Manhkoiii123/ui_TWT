import apiClient from "@/api/apiClient";
import {
  DetailCampaign,
  ICreateCampaignTemplate,
  ICreateCampaignTemplateResponse,
  ICreateCampain,
  ICreateCampainResponse,
  ListCampaignResponse,
} from "@/types/campaign";
import { useMutation, useQuery } from "@tanstack/react-query";

export const campainsApi = {
  create: async (data: ICreateCampain): Promise<ICreateCampainResponse> => {
    const res = await apiClient.post("/campaigns", data);
    return res.data;
  },
  createTemplate: async (
    data: ICreateCampaignTemplate
  ): Promise<ICreateCampaignTemplateResponse> => {
    const res = await apiClient.post("/campaigns/template", data);
    return res.data;
  },
  getCampaignDetail: async (id: string) => {
    const res = await apiClient.get(`/campaigns/${id}`);
    return res.data as DetailCampaign;
  },
  getList: async (data: { page: number }): Promise<ListCampaignResponse> => {
    const res: ListCampaignResponse = await apiClient.get("/campaigns", {
      params: data,
    });
    return res;
  },
  deleteCampaign: async (id: number) => {
    const res = await apiClient.delete(`/campaigns/${id}`);
    return res;
  },
};

export const useMutationCreateCampain = () => {
  return useMutation({
    mutationFn: (data: ICreateCampain) => campainsApi.create(data),
  });
};
export const useMutationCreateTemplateCampaign = () => {
  return useMutation({
    mutationFn: (data: ICreateCampaignTemplate) =>
      campainsApi.createTemplate(data),
  });
};
export const useQueryGetCampaignDetail = (id: string) => {
  return useQuery({
    queryKey: ["campaign", id],
    queryFn: () => campainsApi.getCampaignDetail(id),
  });
};
export const useQueryGetListCampain = (data: { page: number }) => {
  return useQuery({
    queryKey: ["campaign", data.page],
    queryFn: () => campainsApi.getList(data),
  });
};
export const useMutationDeleteCampain = () => {
  return useMutation({
    mutationFn: (id: number) => campainsApi.deleteCampaign(id),
  });
};
