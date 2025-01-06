import apiClient from "@/api/apiClient";
import { TTemplate } from "@/types/template";
import { useQuery } from "@tanstack/react-query";

export const templatesApi = {
  getTemplates: async (): Promise<TTemplate[]> => {
    const res = await apiClient.get("/templates");
    return res.data;
  },
  getTemplateById: async (id: number): Promise<TTemplate> => {
    const res = await apiClient.get(`/templates/${id}`);
    return res.data;
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
