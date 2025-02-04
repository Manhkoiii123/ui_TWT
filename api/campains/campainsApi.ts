import apiClient from "@/api/apiClient";
import {
  ICreateCampaignTemplate,
  ICreateCampaignTemplateResponse,
  ICreateCampain,
  ICreateCampainResponse,
} from "@/types/campaign";
import { useMutation } from "@tanstack/react-query";

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
