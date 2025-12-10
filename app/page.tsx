import { JsonCard } from "@/components/JsonCard";
import { Section } from "@/components/Section";
import { AgentFlow } from "@/components/AgentFlow";
import { StatsCard } from "@/components/StatsCard";
import { runPipeline } from "@/lib/pipeline";

export default function HomePage() {
  const output = runPipeline();

  const questionCategories = output.questions.reduce((acc, q) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <main className="space-y-8">
      {/* Hero Header */}
      <header className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 via-white to-pink-50 p-8 shadow-lg">
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md">
              <svg className="mr-2 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Agentic Automation System
            </span>
          </div>
          <h1 className="mb-3 text-4xl font-bold text-slate-900">
            GlowBoost Content Generation Pipeline
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            A modular multi-agent system that transforms product data into structured, machine-readable content pages.
            Each agent has clear boundaries, reusable logic blocks, and template-driven generation.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-gradient-to-br from-purple-200/50 to-pink-200/50 blur-2xl"></div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatsCard
          label="Total Questions"
          value={output.questions.length}
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatsCard
          label="Categories"
          value={Object.keys(questionCategories).length}
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          }
        />
        <StatsCard
          label="Generated Pages"
          value="3"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
        />
        <StatsCard
          label="Content Blocks"
          value="5+"
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v9a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
            </svg>
          }
        />
      </div>

      {/* Agent Flow Visualization */}
      <Section
        title="Agent Orchestration Flow"
        subtitle="Deterministic pipeline with clear agent boundaries and single responsibilities"
        icon={
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
      >
        <AgentFlow output={output} />
      </Section>

      {/* Parsed Product Model */}
      <Section
        title="Parsed Product Model"
        subtitle="Parser Agent output: normalized internal contract from raw product data"
        icon={
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        }
      >
        <JsonCard data={output.parsedProduct} />
      </Section>

      {/* Generated Questions */}
      <Section
        title={`Generated Questions (${output.questions.length})`}
        subtitle={`Question Agent categorizes across ${Object.keys(questionCategories).length} categories: ${Object.keys(questionCategories).join(", ")}`}
        icon={
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      >
        <div className="mb-4 flex flex-wrap gap-2">
          {Object.entries(questionCategories).map(([category, count]) => (
            <span
              key={category}
              className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800"
            >
              {category}: {count}
            </span>
          ))}
        </div>
        <JsonCard data={output.questions} />
      </Section>

      {/* FAQ Page */}
      <Section
        title="FAQ Page JSON"
        subtitle="Template-driven page with reusable Q&A content blocks"
        icon={
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      >
        <JsonCard data={output.pages.faq} />
      </Section>

      {/* Product Page */}
      <Section
        title="Product Page JSON"
        subtitle="Hero block + highlights + benefits + value messaging via reusable content blocks"
        icon={
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        }
      >
        <JsonCard data={output.pages.product} />
      </Section>

      {/* Comparison Page */}
      <Section
        title="Comparison Page JSON"
        subtitle="GlowBoost vs fictional Product B with ingredient overlap and key differences"
        icon={
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        }
      >
        <JsonCard data={output.pages.comparison} />
      </Section>
    </main>
  );
}

