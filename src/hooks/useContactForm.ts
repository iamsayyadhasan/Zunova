"use client";

import { useState } from "react";
import { ContactFormData, ContactFormErrors, ContactSubmitStatus } from "@/types/contact";

const INITIAL_FORM_DATA: ContactFormData = {
  fullName: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  description: "",
  privacyConsent: false,
  website_honeypot: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<ContactSubmitStatus>({ type: "idle", message: "" });

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid business email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service category.";
    }

    if (!formData.description.trim() || formData.description.trim().length < 15) {
      newErrors.description = "Please describe your project (minimum 15 characters).";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "You must agree to the privacy notice before submitting.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const resetStatus = () => {
    setStatus({ type: "idle", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit project inquiry.");
      }

      setStatus({
        type: "success",
        message: data.message,
        isSimulated: data.isSimulated,
      });

      setFormData(INITIAL_FORM_DATA);
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setStatus({
        type: "error",
        message: errMsg,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    status,
    handleChange,
    handleSubmit,
    resetStatus,
  };
}

