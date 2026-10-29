import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactSubmitStatus } from "@/types/contact";

interface ContactFormSuccessProps {
  status: ContactSubmitStatus;
  onReset: () => void;
}

export function ContactFormSuccess({ status, onReset }: ContactFormSuccessProps) {
  return (
    <div className="p-6 sm:p-8 rounded-xl bg-brand-elevated border border-emerald-500/40 text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-brand-text">Inquiry Received</h3>
      <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
        {status.message}
      </p>

      {status.isSimulated && (
        <div className="mt-4 p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-300 text-xs text-left">
          <strong>Developer Notice:</strong> This endpoint is live and validated your submission on the server. To dispatch live emails to your inbox, configure <code className="font-mono">RESEND_API_KEY</code> in <code className="font-mono">.env.local</code>.
        </div>
      )}

      <div className="pt-4">
        <Button variant="outline" size="sm" onClick={onReset}>
          Submit Another Inquiry
        </Button>
      </div>
    </div>
  );
}

