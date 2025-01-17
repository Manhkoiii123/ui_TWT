import { create } from "zustand";
export type createCampaignState = {
  templateCampaign: string;
  idTemplate: number | null;
  setTemplateCampaign: (value: string) => void;
  removeTemplateCampaign: () => void;
  setIdTemplate: (value: number) => void;
  removeIdTemplate: () => void;
};
export const useCreateCampaignZustand = create<createCampaignState>((set) => ({
  templateCampaign: "",
  idTemplate: null,
  setTemplateCampaign: (value: string) => set({ templateCampaign: value }),
  removeTemplateCampaign: () => set({ templateCampaign: "" }),
  removeIdTemplate: () => set({ idTemplate: null }),
  setIdTemplate: (value: number) => set({ idTemplate: value }),
}));
