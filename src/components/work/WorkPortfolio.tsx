"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProjectItem } from "@/types";
import { projectsData } from "@/data/projects";
import { DashboardVisual, PipelineVisual, PortalVisual, MobileVisual } from "@/components/work/ProjectVisuals";
import { ArrowRight, X, Info } from "lucide-react";

export function WorkPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Business Dashboards", "Workflow Automation", "Web Applications"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const visualMap = {
    dashboard: <DashboardVisual />,
    pipeline: <PipelineVisual />,
    portal: <PortalVisual />,
    mobile: <MobileVisual />,
  };

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            role="tab"
            aria-selected={selectedCategory === category}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === category
                ? "bg-[#1A2842] text-white border border-[#2E446B]/60 shadow-md shadow-[#1A2842]/30"
                : "bg-brand-elevated text-brand-muted hover:text-brand-text hover:bg-brand-card"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-brand-card rounded-2xl border border-brand-border p-8">
          <p className="text-brand-muted text-sm">No concept projects found in this category.</p>
          <button
            onClick={() => setSelectedCategory("All")}
            className="mt-4 text-xs font-semibold text-brand-cyan hover:underline"
          >
            Reset filter to see all projects
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="interactive"
              className="p-6 sm:p-7 flex flex-col justify-between group animate-in fade-in duration-200"
            >
              <div>
                <div className="mb-6">{visualMap[project.visualPreviewType]}</div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="concept" size="sm">
                    {project.badge}
                  </Badge>
                  <span className="text-[11px] font-mono text-brand-muted">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h2>

                <p className="text-xs text-brand-muted mb-5 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="space-y-3 pt-3 border-t border-brand-border text-xs">
                  <div>
                    <span className="font-semibold text-brand-text block mb-1">
                      Problem Explored:
                    </span>
                    <p className="text-brand-muted leading-relaxed">
                      {project.problemExplored}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-brand-text block mb-1">
                      Proposed Solution:
                    </span>
                    <p className="text-brand-muted leading-relaxed">
                      {project.proposedSolution}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono bg-brand-elevated text-brand-cyan px-2 py-0.5 rounded border border-brand-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between"
                  onClick={() => setActiveModalProject(project)}
                >
                  <span>Explore Architecture Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Architectural Concept Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-brand-card border border-brand-border p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-brand-muted hover:text-brand-text hover:bg-brand-elevated"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Badge variant="concept" size="sm">
                {activeModalProject.badge}
              </Badge>
              <span className="text-xs font-mono text-brand-cyan">
                {activeModalProject.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-brand-text mb-2">
              {activeModalProject.title}
            </h3>

            <p className="text-sm text-brand-muted mb-6">
              {activeModalProject.shortDescription}
            </p>

            <div className="mb-6">{visualMap[activeModalProject.visualPreviewType]}</div>

            <div className="space-y-4 text-xs sm:text-sm text-brand-text">
              <div>
                <strong className="block mb-1">Architecture Overview:</strong>
                <p className="text-brand-muted leading-relaxed">
                  {activeModalProject.architectureOverview}
                </p>
              </div>

              <div>
                <strong className="block mb-2">Key Functional Highlights:</strong>
                <ul className="space-y-1.5 list-disc list-inside text-brand-muted">
                  {activeModalProject.keyFeatures.map((feat, idx) => (
                    <li key={idx}>
                      <span className="text-brand-text/90">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="block mb-2">Technical Implementation Stack:</strong>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-brand-elevated font-mono text-xs text-brand-cyan border border-brand-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-brand-muted flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span>Internal prototype engineered for reference.</span>
              </p>
              <Button href="/contact" size="sm" variant="primary">
                Discuss Similar Architecture
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
