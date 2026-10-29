import React from "react";
import { Smartphone, Check, FileText, ShieldCheck } from "lucide-react";

export function DashboardVisual() {
  return (
    <div className="rounded-lg bg-brand-elevated border border-brand-border p-4 font-mono text-xs overflow-hidden select-none">
      <div className="flex items-center justify-between pb-3 border-b border-brand-border mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] text-brand-text font-semibold">OPS-TRIAGE CONSOLE</span>
        </div>
        <span className="text-[10px] text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20">
          LIVE FEED
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-brand-card p-2 rounded border border-brand-border">
          <div className="text-[9px] text-brand-muted">ACTIVE SHIPMENTS</div>
          <div className="text-sm font-bold text-brand-text mt-0.5">142 UNITS</div>
        </div>
        <div className="bg-brand-card p-2 rounded border border-brand-border">
          <div className="text-[9px] text-brand-muted">DISPATCH QUEUE</div>
          <div className="text-sm font-bold text-emerald-500 mt-0.5">3 PENDING</div>
        </div>
        <div className="bg-brand-card p-2 rounded border border-brand-border">
          <div className="text-[9px] text-brand-muted">VARIANCE</div>
          <div className="text-sm font-bold text-brand-cyan mt-0.5">0.02%</div>
        </div>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex items-center justify-between p-1.5 rounded bg-brand-card border border-brand-border">
          <span className="text-brand-text">#TRK-9802 Hub-West</span>
          <span className="text-emerald-500 font-semibold">Verified</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-brand-card border border-brand-border">
          <span className="text-brand-text">#TRK-9803 Central-Fulfillment</span>
          <span className="text-amber-500 font-semibold">In Transit</span>
        </div>
      </div>
    </div>
  );
}

export function PipelineVisual() {
  return (
    <div className="rounded-lg bg-brand-elevated border border-brand-border p-4 font-mono text-xs overflow-hidden select-none">
      <div className="flex items-center justify-between pb-3 border-b border-brand-border mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-cyan" />
          <span className="text-[11px] text-brand-text font-semibold">ROUTING ENGINE</span>
        </div>
        <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          STREAM ACTIVE
        </span>
      </div>

      <div className="flex items-center justify-between py-2 text-[10px]">
        <div className="p-2 rounded bg-brand-card border border-brand-border text-center">
          <div className="text-brand-cyan font-bold">WEBHOOK</div>
          <div className="text-[9px] text-brand-muted">Payload Parse</div>
        </div>
        <span className="text-brand-muted">→</span>
        <div className="p-2 rounded bg-brand-card border border-[#1A2842] text-center">
          <div className="text-brand-cyan font-bold">ENRICH</div>
          <div className="text-[9px] text-brand-muted">Rules Score</div>
        </div>
        <span className="text-brand-muted">→</span>
        <div className="p-2 rounded bg-brand-card border border-emerald-500/40 text-center">
          <div className="text-emerald-500 font-bold">DISPATCH</div>
          <div className="text-[9px] text-brand-muted">CRM & Alert</div>
        </div>
      </div>

      <div className="mt-2 p-2 rounded bg-brand-card border border-brand-border text-[10px] text-brand-muted flex items-center justify-between">
        <span>Worker Pool: 4 active</span>
        <span className="text-emerald-500 font-medium">0 err / 10k ev</span>
      </div>
    </div>
  );
}

export function PortalVisual() {
  return (
    <div className="rounded-lg bg-brand-elevated border border-brand-border p-4 font-mono text-xs overflow-hidden select-none">
      <div className="flex items-center justify-between pb-3 border-b border-brand-border mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-cyan" />
          <span className="text-[11px] text-brand-text font-semibold">CLIENT WORKSPACE</span>
        </div>
        <span className="text-[10px] text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20">
          TENANT ID #84
        </span>
      </div>

      <div className="space-y-2 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded bg-brand-card border border-brand-border">
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-brand-text">Specification_v2.4.pdf</span>
          </div>
          <span className="text-emerald-500 font-semibold">Signed</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded bg-brand-card border border-brand-border">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-brand-text">Role: Billing & Deliverables</span>
          </div>
          <span className="text-brand-muted">Scoped</span>
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between text-[10px] text-brand-muted">
        <span>Audit Trail: Verified</span>
        <span className="text-brand-cyan">Encrypted Session</span>
      </div>
    </div>
  );
}

export function MobileVisual() {
  return (
    <div className="rounded-lg bg-brand-elevated border border-brand-border p-4 font-mono text-xs overflow-hidden select-none">
      <div className="flex items-center justify-between pb-3 border-b border-brand-border mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] text-brand-text font-semibold">FIELD OPS MOBILE SYNC</span>
        </div>
        <span className="text-[10px] text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20">
          OFFLINE CACHED
        </span>
      </div>

      <div className="space-y-2 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded bg-brand-card border border-brand-border">
          <div className="flex items-center gap-2">
            <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-brand-text">Inspection Log #4092</span>
          </div>
          <span className="text-emerald-500 font-semibold">Auto-Synced</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded bg-brand-card border border-brand-border">
          <span className="text-brand-muted">Local SQLite Buffer</span>
          <span className="text-brand-cyan">0 pending sync</span>
        </div>
      </div>
    </div>
  );
}
