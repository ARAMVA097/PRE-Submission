import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { GlossaryTooltip } from "@/components/thesis/GlossaryTooltip";
import { glossaryTerms } from "@/data/thesisData";

const modelCards = [
  "Logistic Regression",
  "Random Forest",
  "XGBoost",
  "DNN",
  "Voting Ensemble",
  "Stacking Ensemble",
];

const datasetScores = {
  Alibaba: {
    bestMetric: "SMOTE-Tomek + XGBoost (F2 0.7691, Recall 0.7897)",
    bestProfit: "Cost-sensitive Gradient Boosting with conservative penalty control",
  },
  Google: {
    bestMetric: "Ensemble stacking (F2 0.8991, Recall 0.9148)",
    bestProfit: "Stacking + threshold tuning for penalty-aware warning policy",
  },
};

export const RO3Module = ({ selectedObjective, setSelectedObjective }) => {
  const [dataset, setDataset] = useState("Alibaba");
  const [decisionMode, setDecisionMode] = useState("best metric");
  const [activeModel, setActiveModel] = useState(modelCards[2]);

  const scoreText = useMemo(() => {
    return decisionMode === "best metric"
      ? datasetScores[dataset].bestMetric
      : datasetScores[dataset].bestProfit;
  }, [dataset, decisionMode]);

  return (
    <div
      className={`module module--ro3 ${selectedObjective === "RO3" ? "module-highlight" : ""}`}
      data-testid="ro3-module"
    >
      <p className="section-kicker" data-testid="ro3-kicker">
        RO3 Module — Service Assurance Dimension
      </p>
      <h2 className="section-title" data-testid="ro3-title">
        Predictive trust-maintenance through cross-layer SLA monitoring
      </h2>

      <Tabs defaultValue="problem" className="module-tabs" data-testid="ro3-tabs">
        <TabsList className="module-tabs__list">
          <TabsTrigger value="problem" data-testid="ro3-tab-problem">
            Problem
          </TabsTrigger>
          <TabsTrigger value="foundation" data-testid="ro3-tab-foundation">
            Foundation
          </TabsTrigger>
          <TabsTrigger value="method" data-testid="ro3-tab-method">
            Method
          </TabsTrigger>
          <TabsTrigger value="results" data-testid="ro3-tab-results">
            Results
          </TabsTrigger>
          <TabsTrigger value="economic" data-testid="ro3-tab-economic">
            Economic Utility
          </TabsTrigger>
        </TabsList>

        <TabsContent value="problem" data-testid="ro3-content-problem">
          <p className="module-copy" data-testid="ro3-problem-copy">
            Reactive SLA monitoring is too late for rare but high-impact trust-breaking service
            events.
          </p>
        </TabsContent>

        <TabsContent value="foundation" data-testid="ro3-content-foundation">
          <p className="module-copy" data-testid="ro3-foundation-copy">
            SLA violations are treated as operational trust degradation signals.
            <GlossaryTooltip term="SLA" definition={glossaryTerms.SLA} testId="glossary-sla" />,
            <GlossaryTooltip term="SMOTE" definition={glossaryTerms.SMOTE} testId="glossary-smote" />, and
            <GlossaryTooltip
              term="stacking ensemble"
              definition={glossaryTerms["stacking ensemble"]}
              testId="glossary-stacking"
            />
            are key to this design.
          </p>
        </TabsContent>

        <TabsContent value="method" data-testid="ro3-content-method">
          <div className="packet-pipeline" data-testid="ro3-monitoring-pipeline">
            {[
              "QoS Telemetry",
              "Preprocessing",
              "Class Imbalance Handling",
              "Ensemble Model",
              "Early Warning",
              "SLA Protection",
            ].map((step) => (
              <div className="pipeline-box" key={step} data-testid={`ro3-pipeline-${step.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                {step}
              </div>
            ))}
          </div>

          <div className="model-board" data-testid="ro3-model-comparison-board">
            {modelCards.map((model) => (
              <button
                type="button"
                key={model}
                onMouseEnter={() => setActiveModel(model)}
                className={`model-card ${activeModel === model ? "is-active" : ""}`}
                data-testid={`ro3-model-card-${model.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                {model}
              </button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="results" data-testid="ro3-content-results">
          <div className="mode-toggle" data-testid="ro3-dataset-toggle">
            <Button
              variant={dataset === "Alibaba" ? "default" : "outline"}
              onClick={() => setDataset("Alibaba")}
              data-testid="ro3-dataset-alibaba"
            >
              Alibaba
            </Button>
            <Button
              variant={dataset === "Google" ? "default" : "outline"}
              onClick={() => setDataset("Google")}
              data-testid="ro3-dataset-google"
            >
              Google
            </Button>
          </div>
          <p className="metric-detail" data-testid="ro3-result-card">
            {scoreText}
          </p>
        </TabsContent>

        <TabsContent value="economic" data-testid="ro3-content-economic">
          <div className="mode-toggle" data-testid="ro3-decision-mode-toggle">
            <Button
              variant={decisionMode === "best metric" ? "default" : "outline"}
              onClick={() => setDecisionMode("best metric")}
              data-testid="ro3-mode-best-metric"
            >
              Best metric
            </Button>
            <Button
              variant={decisionMode === "best profit" ? "default" : "outline"}
              onClick={() => setDecisionMode("best profit")}
              data-testid="ro3-mode-best-profit"
            >
              Best profit
            </Button>
          </div>
          <p className="module-copy" data-testid="ro3-economic-copy">
            Metric-optimal predictors are not always profit-optimal under high-penalty SLA
            contracts.
          </p>
        </TabsContent>
      </Tabs>

      <aside className="module-sidebar" data-testid="ro3-why-it-matters">
        <h3>Why RO3 matters to the thesis</h3>
        <p>
          Trust must be maintained through predictive assurance in addition to governance and
          stability controls.
        </p>
        <Button onClick={() => setSelectedObjective("RO3")} data-testid="ro3-highlight-link-button">
          Keep RO3 highlighted
        </Button>
      </aside>
    </div>
  );
};
