import React from "react";
import { CheckCircle2, Activity, Server, Database, Smartphone, ShieldCheck } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Ambient Glow with Official Navy (#1A2842) */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#1A2842]/50 via-brand-cyan/20 to-[#1A2842]/30 rounded-2xl blur-xl opacity-75 pointer-events-none" />

      {/* Main Container Console */}
      <div className="relative rounded-2xl border border-brand-border bg-brand-card shadow-2xl p-4 sm:p-6 overflow-hidden transition-colors">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-brand-border">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-brand-muted pl-2">zunova-system-runtime.v2</span>
          </div>
          <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPERATIONAL MESH ACTIVE</span>
          </div>
        </div>

        {/* Live System Blueprint Diagram (Web, Automation, Mobile) */}
        <div className="py-5">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-muted mb-3 flex items-center justify-between">
            <span>Unified Software Ecosystem</span>
            <span className="text-brand-cyan text-[11px]">Real-Time Sync</span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 items-center">
            {/* Step 1: Web App / Dashboard */}
            <div className="p-3 rounded-xl bg-brand-elevated border border-brand-border flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-lg bg-[#1A2842]/30 border border-[#1A2842]/60 flex items-center justify-center text-brand-cyan mb-2">
                <Server className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-brand-text">Web Console</span>
              <span className="text-[10px] text-brand-muted mt-0.5 font-mono">Next.js Portal</span>
            </div>

            {/* Step 2: Central API & Workflow Engine */}
            <div className="p-3 rounded-xl bg-brand-elevated border border-[#1A2842]/60 shadow-sm flex flex-col items-center text-center relative">
              <div className="w-8 h-8 rounded-lg bg-[#1A2842]/40 border border-[#1A2842] flex items-center justify-center text-brand-cyan mb-2">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-brand-text">Core API & DB</span>
              <span className="text-[10px] text-brand-cyan mt-0.5 font-mono">Unified Storage</span>
            </div>

            {/* Step 3: Mobile Apps (Android & iOS) */}
            <div className="p-3 rounded-xl bg-brand-elevated border border-brand-border flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-2">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-brand-text">Mobile Apps</span>
              <span className="text-[10px] text-brand-muted mt-0.5 font-mono">Android & iOS</span>
            </div>
          </div>
        </div>

        {/* Real-time Telemetry Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
          <div className="bg-brand-elevated p-3 rounded-lg border border-brand-border">
            <div className="text-[11px] text-brand-muted flex items-center gap-1 font-mono">
              <Activity className="w-3 h-3 text-brand-cyan" />
              <span>Sync Latency</span>
            </div>
            <div className="text-lg font-bold text-brand-text mt-1 font-mono">12.4 ms</div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-2.5 h-2.5" />
              <span>Optimal range</span>
            </div>
          </div>

          <div className="bg-brand-elevated p-3 rounded-lg border border-brand-border">
            <div className="text-[11px] text-brand-muted flex items-center gap-1 font-mono">
              <Server className="w-3 h-3 text-brand-cyan" />
              <span>API Uptime</span>
            </div>
            <div className="text-lg font-bold text-brand-text mt-1 font-mono">99.98%</div>
            <div className="text-[10px] text-brand-muted mt-0.5">Zero dropped events</div>
          </div>

          <div className="bg-brand-elevated p-3 rounded-lg border border-brand-border col-span-2 sm:col-span-1">
            <div className="text-[11px] text-brand-muted flex items-center gap-1 font-mono">
              <ShieldCheck className="w-3 h-3 text-brand-cyan" />
              <span>Security RBAC</span>
            </div>
            <div className="text-lg font-bold text-brand-text mt-1 font-mono">Enforced</div>
            <div className="text-[10px] text-brand-cyan mt-0.5">Role permissions</div>
          </div>
        </div>

        {/* Live Event Stream Simulation */}
        <div className="mt-4 p-3 rounded-lg bg-brand-elevated border border-brand-border font-mono text-[11px] text-brand-text space-y-1">
          <div className="flex items-center justify-between text-[10px] text-brand-muted border-b border-brand-border pb-1 mb-1">
            <span>UNIFIED DATA STREAM</span>
            <span className="text-brand-cyan">CROSS-DEVICE SYNC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-cyan">→</span>
            <span className="text-emerald-500 font-semibold">[200 OK]</span>
            <span className="text-brand-text">POST /mobile/telemetry/sync</span>
            <span className="text-brand-muted text-[10px] ml-auto">9ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-muted">→</span>
            <span className="text-brand-cyan font-semibold">[DASHBOARD]</span>
            <span className="text-brand-muted">Refreshed executive view</span>
            <span className="text-brand-muted text-[10px] ml-auto">14ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
