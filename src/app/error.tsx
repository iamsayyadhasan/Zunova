"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime application error caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-red-400">
            System Execution Error
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Something went wrong
          </h1>
          <p className="text-sm text-brand-muted leading-relaxed">
            An unexpected error occurred while executing this component. You can attempt to re-render or return to the main dashboard.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => reset()}
            variant="primary"
            icon={<RefreshCw className="w-4 h-4" />}
            iconPosition="left"
          >
            Retry Execution
          </Button>
          <Button href="/" variant="secondary" icon={<Home className="w-4 h-4" />} iconPosition="left">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

