import apiClient from "@/api/apiClient";
import { TemplateResponse, TTemplate } from "@/types/template";
import { useMutation, useQuery } from "@tanstack/react-query";
type TCreateEditTemplate = {
  name: string;
  label: string;
  content: string;
  category: string;
  thumbnail?: string;
};
export const templatesApi = {
  getTemplates: async (data: { page: number }): Promise<TemplateResponse> => {
    const res: TemplateResponse = await apiClient.get("/templates", {
      params: data,
    });
    return res;
  },
  getTemplateById: async (id: number): Promise<TTemplate> => {
    const res = await apiClient.get(`/templates/${id}`);
    return res.data;
  },
  createTemplate: async (data: TCreateEditTemplate): Promise<TTemplate> => {
    const res = await apiClient.post("/templates", data);
    return res.data;
  },
  deleteTemplate: async (id: number) => {
    const res = await apiClient.delete(`/templates/${id}`);
    return res;
  },
  editTemplate: async (id: number, data: TCreateEditTemplate) => {
    const res = await apiClient.put(`/templates/${id}`, data);
    return res;
  },
};
export const useQueryGetTemplates = (data: { page: number }) => {
  return useQuery({
    queryKey: ["templates", data.page],
    queryFn: () => templatesApi.getTemplates(data),
  });
};
export const useQueryGetTemplateById = (id: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["templates", id],
    queryFn: () => templatesApi.getTemplateById(id),
    enabled,
  });
};
export const useMutationCreateTemplate = () => {
  return useMutation({
    mutationFn: (data: TCreateEditTemplate) =>
      templatesApi.createTemplate(data),
  });
};
export const useMutationDeleteTemplate = () => {
  return useMutation({
    mutationFn: (id: number) => templatesApi.deleteTemplate(id),
  });
};
export const useMutationEditTemplate = () => {
  return useMutation({
    mutationFn: (data: { id: number; data: TCreateEditTemplate }) =>
      templatesApi.editTemplate(data.id, data.data),
  });
};
