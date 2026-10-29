import React from "react";
import { MessageSquareCode, Sliders, Wrench, FileCode2, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function ValueProposition() {
  const values = [
    {
      icon: <Target className="w-5 h-5 text-brand-cyan" />,
      title: "Focus on Real Business Problems",
      description:
        "We prioritize operational bottlenecks and real-world friction. Software is built only when it drives tangible operational clarity or savings.",
    },
    {
      icon: <Sliders className="w-5 h-5 text-brand-cyan" />,
      title: "Purpose-Built Solutions",
      description:
        "Every system is designed around your specific team workflows and business rules, eliminating awkward workarounds in off-the-shelf software.",
    },
    {
      icon: <Wrench className="w-5 h-5 text-brand-cyan" />,
      title: "Practical Technical Decisions",
      description:
        "We choose proven, stable, and well-supported technology stacks designed for dependable uptime rather than chasing transient hype.",
    },
    {
      icon: <FileCode2 className="w-5 h-5 text-brand-cyan" />,
      title: "Maintainable Codebases",
      description:
        "Clean architectures, strong typing, and thorough documentation ensure your internal team or future partners can maintain and scale the code seamlessly.",
    },
    {
      icon: <MessageSquareCode className="w-5 h-5 text-brand-cyan" />,
      title: "Direct & Clear Communication",
      description:
        "Transparent weekly updates, honest trade-off discussions, and no confusing technical jargon at every stage of development.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 border-t border-brand-border relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Engineering Principles"
          title="Practical software built for"
          highlight="enduring business utility"
          description="We work with businesses, startups, and operational teams to create reliable software tools. Our approach is grounded in direct communication, realistic scoping, and long-term maintainability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, idx) => (
            <Card key={idx} variant="interactive" className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-elevated border border-brand-border flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
