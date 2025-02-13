import apiClient from "@/api/apiClient";
import { TEmailSettingResponse } from "@/types/hostEmail";
import { useMutation, useQuery } from "@tanstack/react-query";

export type TCreateEmailSetting = {
  mailer: string;
  host: string;
  port: string;
  username: string;
  password: string;
  encryption: string;
  address: string;
  name: string;
  region?: string;
};
export type TEmailTracking = {
  id: number;
  status: number;
  title: string;
};
export const emailSettingApi = {
  create: async (data: TCreateEmailSetting) => {
    const res = await apiClient.post("/mail-settings", data);
    return res;
  },
  get: async (data: {
    page: number;
    per_page?: number;
  }): Promise<TEmailSettingResponse> => {
    const res: TEmailSettingResponse = await apiClient.get("/mail-settings", {
      params: data,
    });
    return res;
  },
  delete: async (id: number) => {
    const res = await apiClient.delete(`/mail-settings/${id}`);
    return res;
  },
  edit: async (id: number, data: TCreateEmailSetting) => {
    const res = await apiClient.put(`/mail-settings/${id}`, data);
    return res;
  },
  emailTracking: async (): Promise<TEmailTracking[]> => {
    const res = await apiClient.get(`/email-tracking `);
    return res.data;
  },
  editEmailTracking: async (id: string, data: { status: number }) => {
    const res = await apiClient.put(`/email-tracking/${id} `, data);
    return res.data;
  },
};
export const useMutationCreateEmailSetting = () => {
  return useMutation({
    mutationFn: (data: TCreateEmailSetting) => emailSettingApi.create(data),
  });
};
export const useQueryGetEmailSetting = (data: {
  page: number;
  per_page?: number;
}) => {
  return useQuery({
    queryKey: ["mail-settings", data.page],
    queryFn: () => emailSettingApi.get(data),
  });
};
export const useMutationDeleteEmailSetting = () => {
  return useMutation({
    mutationFn: (id: number) => emailSettingApi.delete(id),
  });
};
export const useMutationEditEmailSetting = () => {
  return useMutation({
    mutationFn: (data: { id: number; data: TCreateEmailSetting }) =>
      emailSettingApi.edit(data.id, data.data),
  });
};
export const useQueryEmailTracking = () => {
  return useQuery({
    queryKey: ["email-tracking"],
    queryFn: () => emailSettingApi.emailTracking(),
  });
};
export const useMutationEditEmailTracking = () => {
  return useMutation({
    mutationFn: (data: { id: string; data: { status: number } }) =>
      emailSettingApi.editEmailTracking(data.id, data.data),
  });
};
