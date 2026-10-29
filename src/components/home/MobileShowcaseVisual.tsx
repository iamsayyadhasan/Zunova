import React from "react";
import { Smartphone, Wifi, Battery, ShieldCheck, CheckCircle2, ArrowRightLeft } from "lucide-react";

export function MobileShowcaseVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Ambient device glow with official navy (#1A2842) */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-brand-cyan/20 via-[#1A2842]/40 to-emerald-500/10 rounded-[2.5rem] blur-lg opacity-75 pointer-events-none" />

      {/* Phone chassis */}
      <div className="relative rounded-[2.2rem] border-2 border-brand-border bg-[#070B14] shadow-2xl p-3 overflow-hidden text-brand-text">
        {/* Dynamic Island / Notch */}
        <div className="flex items-center justify-between px-3 pt-1 pb-2 border-b border-white/10 text-[10px] text-brand-muted">
          <span className="font-mono font-semibold text-white">9:41</span>
          <div className="w-16 h-3.5 bg-black rounded-full border border-white/10" />
          <div className="flex items-center gap-1.5">
            <Wifi className="w-2.5 h-2.5 text-white" />
            <Battery className="w-3 h-3 text-emerald-400" />
          </div>
        </div>

        {/* Mobile App Header */}
        <div className="pt-2.5 pb-2 px-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
              <Smartphone className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white leading-none">Zunova Mobile</div>
              <div className="text-[9px] text-brand-muted font-mono">Field Ops Suite</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Synced
          </span>
        </div>

        {/* Operational Workflow Card */}
        <div className="my-2 p-2.5 rounded-xl bg-[#0F172A] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-semibold text-white">Active Dispatch Task</span>
            <span className="text-brand-cyan font-mono text-[9px]">#TSK-842</span>
          </div>
          <div className="text-[10px] text-brand-muted leading-tight">
            Logistics handover verification at North Distribution Hub
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[9px] font-mono">
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5" /> GPS Verified
            </span>
            <span className="text-brand-muted">Latency: 8ms</span>
          </div>
        </div>

        {/* Telemetry / Cross-Device Sync Pill */}
        <div className="p-2 rounded-lg bg-brand-elevated/40 border border-brand-border text-[9px] text-brand-muted flex items-center justify-between font-mono">
          <div className="flex items-center gap-1.5 text-brand-cyan">
            <ArrowRightLeft className="w-2.5 h-2.5" />
            <span>Core API Webhook</span>
          </div>
          <span className="text-white">Auto-Reconcile</span>
        </div>

        {/* Platform Architecture Footer */}
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-brand-muted font-mono px-1">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-2.5 h-2.5 text-brand-cyan" />
            Encrypted RBAC
          </span>
          <span className="text-white">Android & iOS</span>
        </div>
      </div>
    </div>
  );
}

