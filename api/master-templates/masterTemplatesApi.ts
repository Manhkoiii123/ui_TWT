/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/api/apiClient";
import { TMasterTemplate } from "@/types/master-template";
import { useMutation, useQuery } from "@tanstack/react-query";

type TCreateEditMasterTemplate = {
  name: string;
  position: string;
  content: string;
};
export const masterTemplateApis = {
  create: async (data: TCreateEditMasterTemplate): Promise<TMasterTemplate> => {
    const res = await apiClient.post("/master-templates", data);
    return res.data;
  },
  get: async (data: { page: number }): Promise<any> => {
    const res: any = await apiClient.get("/master-templates", {
      params: data,
    });
    return res;
  },
  getMasterTemplateById: async (id: number): Promise<TMasterTemplate> => {
    const res = await apiClient.get(`/master-templates/${id}`);
    return res.data;
  },
  deleteMasterTemplate: async (id: number) => {
    const res = await apiClient.delete(`/master-templates/${id}`);
    return res;
  },
  editMasterTemplate: async (id: number, data: TCreateEditMasterTemplate) => {
    const res = await apiClient.put(`/master-templates/${id}`, data);
    return res;
  },
};
export const useMutationCreateMasterTemplate = () => {
  return useMutation({
    mutationFn: (data: TCreateEditMasterTemplate) =>
      masterTemplateApis.create(data),
  });
};
export const useQueryGetMasterTemplates = (data: { page: number }) => {
  return useQuery({
    queryKey: ["master-templates", data.page],
    queryFn: () => masterTemplateApis.get(data),
  });
};
export const useQueryGetMasterTemplateById = (id: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["master-templates", id],
    queryFn: () => masterTemplateApis.getMasterTemplateById(id),
    enabled,
  });
};
export const useMutationDeleteMasterTemplate = () => {
  return useMutation({
    mutationFn: (id: number) => masterTemplateApis.deleteMasterTemplate(id),
  });
};
export const useMutationEditMasterTemplate = () => {
  return useMutation({
    mutationFn: (data: { id: number; data: TCreateEditMasterTemplate }) =>
      masterTemplateApis.editMasterTemplate(data.id, data.data),
  });
};
