import { PaginationLinks, PaginationMeta } from "@/types/template";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ICreateCampain {
  title: string;
  group: string;
  // audiences: string[];
  audiences: number;
  schedule_send_at: string;
  is_manual: boolean;
  mail_setting_id: number;
}
export interface ICreateCampaignTemplate {
  campaign_id: number;
  body_builder: string;
  body_html: string;
}
interface TemplateBody {
  id: number;
  template_code: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface ICreateCampainResponse {
  id: number;
  title: string;
  status: number;
  status_label: string;
  id_template: number;
  template_body: TemplateBody;
  group: string;
  status_send: number;
  archive: number;
  archived_by: number;
  is_manual: boolean;
  audiences: string[];
  schedule_send_at: string;
  mail_setting_id: number;
  job_id: number;
  published_at: string;
  published_by: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}
export interface ICreateCampaignTemplateResponse {
  id: number;
  campaign_id: number;
  body_builder: any;
  body_html: string;
}
export interface DetailCampaign {
  id: number;
  title: string;
  status: number;
  status_label: string;
  template_body: TemplateBodyResponse;
  group: string;
  status_send: number;
  archive: number;
  archived_by: any;
  is_manual: boolean;
  audience: Audience;
  schedule_send_at: string;
  mail_setting: MailSetting;
  job_id: any;
  published_at: any;
  published_by: any;
  created_by: CreatedBy;
  updated_by: any;
  created_at: string;
  updated_at: string;
}

export interface TemplateBodyResponse {
  id: number;
  campaign_id: number;
  body_builder: string;
  body_html: string;
  created_at: string;
  updated_at: string;
}

export interface Audience {
  id: number;
  title: string;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface MailSetting {
  id: number;
  mailer: string;
  address: string;
  name: string;
  region: any;
}

export interface CreatedBy {
  id: number;
  name: string;
  email: string;
}
export interface ListCampaignResponse {
  data: DetailCampaign[];
  links: PaginationLinks;
  meta: PaginationMeta;
}
export interface CampaignEditResponse {
  id: number;
  title: string;
  status: number;
  status_label: string;
  template_body: TemplateBodyEdit;
  group: string;
  status_send: number;
  archive: number;
  archived_by: any;
  is_manual: boolean;
  schedule_send_at: string;
  job_id: any;
  published_at: any;
  created_at: string;
  updated_at: string;
}
export interface TemplateBodyEdit {
  id: number;
  campaign_id: number;
  body_builder: string;
  body_html: string;
  created_at: string;
  updated_at: string;
}
