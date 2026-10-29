export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  description: string;
  privacyConsent: boolean;
  website_honeypot: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  service?: string;
  description?: string;
  privacyConsent?: string;
  general?: string;
}

export interface ContactSubmitStatus {
  type: "idle" | "success" | "error";
  message: string;
  isSimulated?: boolean;
}

