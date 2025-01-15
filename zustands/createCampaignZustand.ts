import { create } from "zustand";
export type createCampaignState = {
  templateCampaign: string;
  setTemplateCampaign: (value: string) => void;
  removeTemplateCampaign: () => void;
};
export const useCreateCampaignZustand = create<createCampaignState>((set) => ({
  templateCampaign: "",
  setTemplateCampaign: (value: string) => set({ templateCampaign: value }),
  removeTemplateCampaign: () => set({ templateCampaign: "" }),
}));
