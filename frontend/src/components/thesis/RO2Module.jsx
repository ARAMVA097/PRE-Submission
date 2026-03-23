import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/thesis/MetricCard";

const ro2Metrics = [
  {
    id: "sla",
    title: "SLA violations",
    value: "4%",
    description: "Violation rate drops below 4% with stability-aware discrepancy minimization.",
  },
  {
    id: "recovery",
    title: "Mean time to recovery",
    value: "6.9 s",
    description: "Fast recovery under bursty workload pressure in simulated stress scenarios.",
  },
  {
    id: "cpu",
    title: "CPU utilization",
    value: "90%",
    description: "High utilization is sustained without sacrificing stability objectives.",
  },
  {
    id: "latency",
    title: "Latency envelope",
    value: "45 ms",
    description: "Latency remains controlled while optimizing discrepancy-aware assignment.",
  },
];

const makeHeatData = (balanced) =>
  Array.from({ length: 20 }, (_, idx) => {
    const row = Math.floor(idx / 5);
    const col = idx % 5;
    const value = balanced ? ((row + col) % 4) + 3 : ((row * col + idx) % 8) + 1;
    return value;
  });

export const RO2Module = ({ selectedObjective, setSelectedObjective }) => {
  const [mode, setMode] = useState("stability-aware");
  const [scrubValue, setScrubValue] = useState(40);
  const [activeMetric, setActiveMetric] = useState(ro2Metrics[0]);

  const beforeHeat = useMemo(() => makeHeatData(false), []);
  const afterHeat = useMemo(() => makeHeatData(true), []);

  return (
    <div
      className={`module module--ro2 ${selectedObjective === "RO2" ? "module-highlight" : ""}`}
      data-testid="ro2-module"
    >
      <p className="section-kicker" data-testid="ro2-kicker">
        RO2 Module — Resource Allocation Dimension
      </p>
      <h2 className="section-title" data-testid="ro2-title">
        Stability-oriented discrepancy minimization with LSBGO
      </h2>

      <Tabs defaultValue="problem" className="module-tabs" data-testid="ro2-tabs">
        <TabsList className="module-tabs__list">
          <TabsTrigger value="problem" data-testid="ro2-tab-problem">
            Problem
          </TabsTrigger>
          <TabsTrigger value="shift" data-testid="ro2-tab-shift">
            Conceptual Shift
          </TabsTrigger>
          <TabsTrigger value="method" data-testid="ro2-tab-method">
            Method
          </TabsTrigger>
          <TabsTrigger value="outcomes" data-testid="ro2-tab-outcomes">
            Outcomes
          </TabsTrigger>
          <TabsTrigger value="publications" data-testid="ro2-tab-publications">
            Publications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="problem" data-testid="ro2-content-problem">
          <p className="module-copy" data-testid="ro2-problem-copy">
            QoS degradation often arises from imbalance, localized overload, and temporal
            discrepancy rather than scarcity alone.
          </p>
        </TabsContent>

        <TabsContent value="shift" data-testid="ro2-content-shift">
          <p className="module-copy" data-testid="ro2-shift-copy">
            Shift from utilization-maximizing allocation to stability-oriented discrepancy
            minimization.
          </p>
          <div className="mode-toggle" data-testid="ro2-mode-toggle">
            <Button
              variant={mode === "utilization-only" ? "default" : "outline"}
              onClick={() => setMode("utilization-only")}
              data-testid="ro2-mode-utilization-only"
            >
              Utilization-only
            </Button>
            <Button
              variant={mode === "stability-aware" ? "default" : "outline"}
              onClick={() => setMode("stability-aware")}
              data-testid="ro2-mode-stability-aware"
            >
              Stability-aware
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="method" data-testid="ro2-content-method">
          <p className="module-copy" data-testid="ro2-method-copy">
            LSBGO combines Latin Square initialization, GA refinement, and discrepancy-aware
            fitness evaluation over Google traces and burst stress scenarios.
          </p>

          <div className="heatmaps" data-testid="ro2-heatmaps">
            <div data-testid="ro2-heatmap-before">
              <h4>Before: Conventional imbalance</h4>
              <div className="heat-grid">
                {beforeHeat.map((v, idx) => (
                  <div key={`b-${idx}`} className="heat-cell" style={{ opacity: v / 10 }} />
                ))}
              </div>
            </div>
            <div data-testid="ro2-heatmap-after">
              <h4>After: LSBGO balanced allocation</h4>
              <div className="heat-grid">
                {afterHeat.map((v, idx) => (
                  <div key={`a-${idx}`} className="heat-cell heat-cell--balanced" style={{ opacity: v / 8 }} />
                ))}
              </div>
            </div>
          </div>

          <div className="latin-grid-wrap" data-testid="ro2-latin-square-animation">
            <p>Latin square slot scrubber: {scrubValue}%</p>
            <input
              type="range"
              min="0"
              max="100"
              value={scrubValue}
              onChange={(event) => setScrubValue(Number(event.target.value))}
              data-testid="ro2-workload-scrubber"
            />
          </div>
        </TabsContent>

        <TabsContent value="outcomes" data-testid="ro2-content-outcomes">
          <div className="metric-grid" data-testid="ro2-metric-grid">
            {ro2Metrics.map((metric) => (
              <MetricCard
                key={metric.id}
                title={metric.title}
                value={metric.value}
                description={metric.description}
                isActive={activeMetric.id === metric.id}
                onClick={() => setActiveMetric(metric)}
                testId={`ro2-metric-${metric.id}`}
              />
            ))}
          </div>
          <p className="metric-detail" data-testid="ro2-metric-detail">
            {activeMetric.description}
          </p>
        </TabsContent>

        <TabsContent value="publications" data-testid="ro2-content-publications">
          <ul className="publication-list" data-testid="ro2-publication-list">
            <li data-testid="ro2-publication-fiam">FIAM-2024 — Presented</li>
            <li data-testid="ro2-publication-ieee-access">IEEE Access 2025 — Published</li>
            <li data-testid="ro2-publication-springer">Springer routing extension — Accepted</li>
          </ul>
        </TabsContent>
      </Tabs>

      <aside className="module-sidebar" data-testid="ro2-why-it-matters">
        <h3>Why RO2 matters to the thesis</h3>
        <p>
          Stable resource sharing is the operational basis for consistent QoS under
          multitenancy.
        </p>
        <Button onClick={() => setSelectedObjective("RO2")} data-testid="ro2-highlight-link-button">
          Keep RO2 highlighted
        </Button>
      </aside>
    </div>
  );
};
