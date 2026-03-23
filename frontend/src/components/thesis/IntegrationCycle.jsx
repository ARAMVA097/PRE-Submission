import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const cycleNodes = [
  { id: "authorization", label: "Authorization", dimension: "RO1" },
  { id: "execution", label: "Execution and Allocation", dimension: "RO2" },
  { id: "evaluation", label: "SLA Evaluation", dimension: "RO3" },
  { id: "feedback", label: "Feedback and Adaptation", dimension: "RO1 + RO2" },
];

const modeText = {
  structural:
    "RO1 governs who can interact, RO2 governs distribution stability, and RO3 governs contractual maintenance.",
  functional:
    "Access decisions shape workload patterns, allocation stability shapes SLA feasibility, and SLA outcomes inform future controls.",
};

export const IntegrationCycle = ({ selectedObjective }) => {
  const [mode, setMode] = useState("structural");
  const [activeNode, setActiveNode] = useState(cycleNodes[0]);

  const downstreamEffect = useMemo(() => {
    if (activeNode.dimension.includes("RO3")) {
      return "RO3 feedback re-weights future governance and allocation policies.";
    }
    if (activeNode.dimension.includes("RO2")) {
      return "RO2 stability controls increase SLA feasibility and trust continuity.";
    }
    return "RO1 governance conditions shape safe workload eligibility and execution behavior.";
  }, [activeNode]);

  return (
    <div className="integration-cycle" data-testid="integration-cycle-section">
      <p className="section-kicker" data-testid="integration-kicker">
        Integration Engine
      </p>
      <h2 className="section-title" data-testid="integration-title">
        Closed-loop governance cycle
      </h2>

      <div className="mode-toggle" data-testid="integration-mode-toggle">
        <Button
          variant={mode === "structural" ? "default" : "outline"}
          onClick={() => setMode("structural")}
          data-testid="integration-mode-structural"
        >
          Structural
        </Button>
        <Button
          variant={mode === "functional" ? "default" : "outline"}
          onClick={() => setMode("functional")}
          data-testid="integration-mode-functional"
        >
          Functional
        </Button>
      </div>

      <div className="integration-wheel" data-testid="integration-wheel">
        {cycleNodes.map((node, idx) => (
          <button
            key={node.id}
            type="button"
            className={`integration-node integration-node--${idx + 1} ${
              activeNode.id === node.id ? "is-selected" : ""
            } ${selectedObjective === node.dimension ? "is-linked" : ""}`}
            onClick={() => setActiveNode(node)}
            data-testid={`integration-node-${node.id}`}
          >
            <strong>{node.label}</strong>
            <span>{node.dimension}</span>
          </button>
        ))}
        <div className="integration-halo" />
      </div>

      <div className="integration-copy" data-testid="integration-copy-panel">
        <p data-testid="integration-mode-text">{modeText[mode]}</p>
        <p data-testid="integration-downstream-effect">{downstreamEffect}</p>
        <p className="thesis-signature" data-testid="integration-thesis-signature">
          This thesis is a unified research program, not a collection of independent papers.
        </p>
      </div>
    </div>
  );
};
