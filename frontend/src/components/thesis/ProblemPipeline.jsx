import { useState } from "react";
import { Button } from "@/components/ui/button";
import { objectiveCards } from "@/data/thesisData";

const pipelineSteps = [
  "Fragmented literature",
  "Common pattern of disintegration",
  "Core research problem",
  "Three research objectives",
];

export const ProblemPipeline = ({ selectedObjective, setSelectedObjective, onJump }) => {
  const [showObjectives, setShowObjectives] = useState(false);

  return (
    <div className="problem-pipeline" data-testid="problem-pipeline-section">
      <p className="section-kicker" data-testid="problem-pipeline-kicker">
        Core Research Problem and Objective Derivation
      </p>
      <h2 className="section-title" data-testid="problem-pipeline-title">
        Coherent by design, not assembled by publication
      </h2>

      <div className="pipeline-track" data-testid="pipeline-track">
        {pipelineSteps.map((step, idx) => (
          <div key={step} className="pipeline-step" data-testid={`pipeline-step-${idx + 1}`}>
            <p>{step}</p>
            {idx < pipelineSteps.length - 1 ? <span className="pipeline-arrow">→</span> : null}
          </div>
        ))}
      </div>

      <button
        type="button"
        className="core-problem"
        onClick={() => setShowObjectives((prev) => !prev)}
        data-testid="core-research-problem-button"
      >
        <h3>Core problem statement</h3>
        <p>
          How can Trust and Quality of Service be sustained in multi-tenant cloud computing
          environments by jointly addressing Access Control Dimension, Resource Allocation
          stability, and proactive Service Assurance?
        </p>
      </button>

      {showObjectives ? (
        <div className="objective-fan" data-testid="objective-fan-cards">
          {objectiveCards.map((objective) => (
            <article
              key={objective.id}
              className={`objective-card ${selectedObjective === objective.id ? "is-selected" : ""}`}
              data-testid={`objective-card-${objective.id.toLowerCase()}`}
            >
              <h4>{objective.title}</h4>
              <p>{objective.summary}</p>
              <div className="objective-card__actions">
                <Button
                  variant="secondary"
                  onClick={() => setSelectedObjective(objective.id)}
                  data-testid={`objective-highlight-${objective.id.toLowerCase()}`}
                >
                  Highlight objective
                </Button>
                <Button
                  onClick={() => {
                    setSelectedObjective(objective.id);
                    onJump(objective.route);
                  }}
                  data-testid={`objective-scroll-${objective.id.toLowerCase()}`}
                >
                  Open module
                </Button>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
};
