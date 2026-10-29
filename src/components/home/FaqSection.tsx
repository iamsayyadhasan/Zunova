"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homepageFaqs } from "@/data/faq";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(homepageFaqs[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 relative bg-brand-elevated/30 border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Clear answers to"
          highlight="common project questions"
          description="Everything you need to know about our technical services, engagement model, development approach, and project handover."
        />

        <div className="space-y-4">
          {homepageFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-brand-border bg-brand-card overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-base font-semibold text-brand-text">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-cyan" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

