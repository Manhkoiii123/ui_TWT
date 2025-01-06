import apiClient from "@/api/apiClient";
import { TTemplate } from "@/types/template";
import { useQuery } from "@tanstack/react-query";

export const templatesApi = {
  getTemplates: async (): Promise<TTemplate[]> => {
    const res = await apiClient.get("/templates");
    return res.data;
  },
};
export const useQueryGetTemplates = () => {
  return useQuery({
    queryKey: ["templates"],
    queryFn: () => templatesApi.getTemplates(),
  });
};
