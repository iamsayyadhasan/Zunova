import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-elevated border border-brand-border flex items-center justify-center text-brand-cyan mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
            Error 404 &bull; Route Not Found
          </span>
          <h1 className="text-3xl font-extrabold text-brand-text tracking-tight">
            Page does not exist
          </h1>
          <p className="text-sm text-brand-muted leading-relaxed">
            The page you are looking for has been moved, removed, or never existed in the Zunova Tech system.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" icon={<Home className="w-4 h-4" />} iconPosition="left">
            Back to Homepage
          </Button>
          <Button href="/services" variant="secondary" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
}

