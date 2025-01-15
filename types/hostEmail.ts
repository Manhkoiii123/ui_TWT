export type MailerConfig = {
  id: number;
  mailer: string;
  host: string;
  port: string;
  username: string;
  password: string;
  encryption: string;
  address: string;
  name: string;
  created_by: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string | null;
    updated_at: string;
    secret_key: string;
    first_name: string;
    last_name: string;
  };
};
