import { useState } from "react";

const futureDirections = [
  { id: "coordination", label: "Adaptive cross-dimension coordination", extends: "RO1 + RO2 + RO3" },
  { id: "orchestration", label: "Real-time orchestration integration", extends: "RO2 + RO3" },
  { id: "edge", label: "Edge and serverless extension", extends: "RO2" },
  { id: "explainability", label: "Explainability for predictive assurance", extends: "RO3" },
];

export const LimitationsFuturePanel = () => {
  const [selectedFuture, setSelectedFuture] = useState(futureDirections[0]);

  return (
    <div className="limitations-future" data-testid="limitations-future-section">
      <p className="section-kicker" data-testid="limitations-kicker">
        Limitations and Future Research
      </p>
      <h2 className="section-title" data-testid="limitations-title">
        Balanced reflection for thesis-level rigor
      </h2>

      <div className="two-column" data-testid="limitations-two-column-layout">
        <article className="reflective-card" data-testid="limitations-column">
          <h3 data-testid="limitations-column-title">Limitations</h3>
          <ul>
            <li data-testid="limitation-env-diversity">
              Evaluation environments cannot fully represent all production cloud diversity.
            </li>
            <li data-testid="limitation-scope-boundary">
              Focus remains on operational trust/QoS, not legal or regulatory SLA enforcement.
            </li>
            <li data-testid="limitation-co-optimization">
              Deeper adaptive cross-dimension co-optimization remains open.
            </li>
          </ul>
        </article>

        <article className="reflective-card" data-testid="future-column">
          <h3 data-testid="future-column-title">Future directions</h3>
          <div className="future-branches" data-testid="future-branches">
            {futureDirections.map((direction) => (
              <button
                key={direction.id}
                type="button"
                onClick={() => setSelectedFuture(direction)}
                className={`future-branch ${selectedFuture.id === direction.id ? "is-selected" : ""}`}
                data-testid={`future-branch-${direction.id}`}
              >
                {direction.label}
              </button>
            ))}
          </div>
          <p className="future-extension-note" data-testid="future-extension-note">
            Extends: {selectedFuture.extends}
          </p>
        </article>
      </div>
    </div>
  );
};
