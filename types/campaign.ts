export interface ICreateCampain {
  title: string;
  id_template: number;
  id_template_body?: number;
  group: string;
  audiences: string[];
  schedule_send_at: string;
  mail_setting_id: number;
  is_manual: boolean;
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
