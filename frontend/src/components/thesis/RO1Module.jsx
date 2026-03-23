import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExpandablePanel } from "@/components/thesis/ExpandablePanel";
import { GlossaryTooltip } from "@/components/thesis/GlossaryTooltip";
import { MetricCard } from "@/components/thesis/MetricCard";
import { glossaryTerms } from "@/data/thesisData";

const metrics = [
  {
    id: "accuracy",
    title: "Access decision accuracy",
    value: "96.2%",
    description: "Correct allow/deny decisions across protocol-diverse encrypted cloud traces.",
  },
  {
    id: "latency",
    title: "Decision latency",
    value: "0.83 ms",
    description: "Low overhead control feasible for high-throughput multitenant environments.",
  },
  {
    id: "adaptation",
    title: "Policy adaptation success",
    value: "92.7%",
    description: "Dynamic policy adaptation remains stable under varying traffic patterns.",
  },
];

const modelLimits = {
  DAC: "Limited for dynamic multitenant contexts with encrypted and heterogeneous flows.",
  MAC: "Rigid policy logic can reduce flexibility for evolving cloud services.",
  RBAC: "Role explosion increases operational burden at scale.",
  ABAC: "Attribute proliferation and semantic dependence hurt deployment simplicity.",
};

export const RO1Module = ({ selectedObjective, setSelectedObjective }) => {
  const [selectedMetric, setSelectedMetric] = useState(metrics[0]);
  const [selectedModel, setSelectedModel] = useState("DAC");

  return (
    <div
      className={`module module--ro1 ${selectedObjective === "RO1" ? "module-highlight" : ""}`}
      data-testid="ro1-module"
    >
      <p className="section-kicker" data-testid="ro1-kicker">
        RO1 Module — Access Control Dimension
      </p>
      <h2 className="section-title" data-testid="ro1-title">
        BLAC + DFACC protocol-agnostic governance layer
      </h2>

      <Tabs defaultValue="challenge" className="module-tabs" data-testid="ro1-tabs">
        <TabsList className="module-tabs__list">
          <TabsTrigger value="challenge" data-testid="ro1-tab-challenge">
            Challenge
          </TabsTrigger>
          <TabsTrigger value="foundation" data-testid="ro1-tab-foundation">
            Foundation
          </TabsTrigger>
          <TabsTrigger value="method" data-testid="ro1-tab-method">
            Method
          </TabsTrigger>
          <TabsTrigger value="outcomes" data-testid="ro1-tab-outcomes">
            Outcomes
          </TabsTrigger>
          <TabsTrigger value="publications" data-testid="ro1-tab-publications">
            Publications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="challenge" data-testid="ro1-content-challenge">
          <ExpandablePanel
            title="Cloud challenge details"
            value="ro1-challenge-panel"
            testId="ro1-challenge-panel"
          >
            Conventional semantic and identity-dependent models underperform as cloud traffic
            becomes encrypted and heterogeneous.
          </ExpandablePanel>
        </TabsContent>

        <TabsContent value="foundation" data-testid="ro1-content-foundation">
          <p className="module-copy" data-testid="ro1-foundation-copy">
            Move from semantic inspection to structural and behavioral observability at bit level.
            Key terms: <GlossaryTooltip term="DFACC" definition={glossaryTerms.DFACC} testId="glossary-dfacc" />
            , <GlossaryTooltip term="FAR / FRR" definition={glossaryTerms["FAR / FRR"]} testId="glossary-far-frr" />.
          </p>
        </TabsContent>

        <TabsContent value="method" data-testid="ro1-content-method">
          <p className="module-copy" data-testid="ro1-method-copy">
            BLAC uses first-flow bit-level fingerprints and DFACC state transitions for protocol-agnostic
            allow / deny / log decisions.
          </p>

          <div className="packet-pipeline" data-testid="ro1-animated-pipeline">
            {[
              "Incoming Flow",
              "First 64 Bytes",
              "Bit Signature",
              "DFACC",
              "ALLOW / DENY / LOG",
            ].map((step) => (
              <div className="pipeline-box" key={step} data-testid={`ro1-pipeline-step-${step.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                {step}
              </div>
            ))}
          </div>

          <div className="model-limit-grid" data-testid="ro1-model-limit-grid">
            {Object.keys(modelLimits).map((model) => (
              <Button
                key={model}
                variant={selectedModel === model ? "default" : "outline"}
                onClick={() => setSelectedModel(model)}
                data-testid={`ro1-model-button-${model.toLowerCase()}`}
              >
                {model}
              </Button>
            ))}
          </div>
          <p className="model-limit-text" data-testid="ro1-model-insufficiency-text">
            {modelLimits[selectedModel]}
          </p>
        </TabsContent>

        <TabsContent value="outcomes" data-testid="ro1-content-outcomes">
          <div className="metric-grid" data-testid="ro1-metric-grid">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.id}
                title={metric.title}
                value={metric.value}
                description={metric.description}
                isActive={selectedMetric.id === metric.id}
                onClick={() => setSelectedMetric(metric)}
                testId={`ro1-metric-${metric.id}`}
              />
            ))}
          </div>
          <p className="metric-detail" data-testid="ro1-metric-detail">
            {selectedMetric.description}
          </p>
        </TabsContent>

        <TabsContent value="publications" data-testid="ro1-content-publications">
          <ul className="publication-list" data-testid="ro1-publication-list">
            <li data-testid="ro1-publication-iatmsi">IATMSI 2024 — Published</li>
            <li data-testid="ro1-publication-indiacom">INDIACom 2025 — Published</li>
            <li data-testid="ro1-publication-scireports">Scientific Reports — Revision under review</li>
          </ul>
        </TabsContent>
      </Tabs>

      <aside className="module-sidebar" data-testid="ro1-why-it-matters">
        <h3>Why RO1 matters to the thesis</h3>
        <p>
          Secure interaction governance is the first condition for trustworthy cloud service
          operation.
        </p>
        <Button onClick={() => setSelectedObjective("RO1")} data-testid="ro1-highlight-link-button">
          Keep RO1 highlighted
        </Button>
      </aside>
    </div>
  );
};
