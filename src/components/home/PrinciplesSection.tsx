import React from "react";
import { workingPrinciples } from "@/data/principles";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, FileCheck, RefreshCw, BookOpen } from "lucide-react";

export function PrinciplesSection() {
  const icons = [
    <FileCheck key="1" className="w-5 h-5 text-brand-cyan" />,
    <RefreshCw key="2" className="w-5 h-5 text-brand-cyan" />,
    <ShieldCheck key="3" className="w-5 h-5 text-brand-cyan" />,
    <BookOpen key="4" className="w-5 h-5 text-brand-cyan" />,
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-brand-elevated/20 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Working Principles"
          title="Why businesses choose"
          highlight="to collaborate with us"
          description="Transparent practices designed to eliminate typical agency friction, misalignment, and hidden costs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {workingPrinciples.map((item, idx) => (
            <Card key={item.number} variant="interactive" className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0">
                  {icons[idx]}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-brand-cyan">0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-brand-text">{item.title}</h3>
                  </div>
                  <p className="text-sm font-medium text-brand-cyan mb-2">
                    {item.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
