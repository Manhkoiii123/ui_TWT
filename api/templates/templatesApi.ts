import apiClient from "@/api/apiClient";
import { TTemplate } from "@/types/template";
import { useMutation, useQuery } from "@tanstack/react-query";

export const templatesApi = {
  getTemplates: async (): Promise<TTemplate[]> => {
    const res = await apiClient.get("/templates");
    return res.data;
  },
  getTemplateById: async (id: number): Promise<TTemplate> => {
    const res = await apiClient.get(`/templates/${id}`);
    return res.data;
  },
  createTemplate: async (data: FormData): Promise<TTemplate> => {
    const res = await apiClient.post("/templates", data);
    return res.data;
  },
  deleteTemplate: async (id: number) => {
    const res = await apiClient.delete(`/templates/${id}`);
    return res;
  },
  editTemplate: async (id: number, data: FormData) => {
    const res = await apiClient.put(`/templates/${id}`, data);
    return res;
  },
};
export const useQueryGetTemplates = () => {
  return useQuery({
    queryKey: ["templates"],
    queryFn: () => templatesApi.getTemplates(),
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
    mutationFn: (data: FormData) => templatesApi.createTemplate(data),
  });
};
export const useMutationDeleteTemplate = () => {
  return useMutation({
    mutationFn: (id: number) => templatesApi.deleteTemplate(id),
  });
};
export const useMutationEditTemplate = () => {
  return useMutation({
    mutationFn: (data: { id: number; data: FormData }) =>
      templatesApi.editTemplate(data.id, data.data),
  });
};
