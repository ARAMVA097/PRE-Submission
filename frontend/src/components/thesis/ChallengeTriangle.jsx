import { useState } from "react";
import { challengeNodes } from "@/data/thesisData";

export const ChallengeTriangle = () => {
  const [selectedNode, setSelectedNode] = useState(challengeNodes[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  return (
    <div className="challenge-triangle" data-testid="challenge-triangle-section">
      <p className="section-kicker" data-testid="challenge-kicker">
        Why This Thesis Exists
      </p>
      <h2 className="section-title" data-testid="challenge-title">
        Three-pressure challenge map
      </h2>

      <div className="challenge-layout">
        <div className="triangle-map" data-testid="challenge-triangle-map">
          {challengeNodes.map((node, idx) => (
            <button
              type="button"
              key={node.id}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              onClick={() => setSelectedNode(node)}
              className={`challenge-node challenge-node--${idx + 1}`}
              data-testid={`challenge-node-${node.id}`}
            >
              {node.title}
              {hoveredNodeId === node.id ? (
                <span className="challenge-node__micro" data-testid={`challenge-micro-${node.id}`}>
                  {node.micro}
                </span>
              ) : null}
            </button>
          ))}

          <div className="challenge-center" data-testid="challenge-center-node">
            <strong>Trust and QoS Degradation</strong>
            <p>
              Shared cloud environments generate interdependent security, performance, and
              assurance challenges.
            </p>
          </div>
          <div className="connector connector--one" />
          <div className="connector connector--two" />
          <div className="connector connector--three" />
        </div>

        <aside className="challenge-detail" data-testid="challenge-side-panel">
          <h3 data-testid="challenge-side-title">{selectedNode.title}</h3>
          <p data-testid="challenge-side-description">{selectedNode.detail}</p>
        </aside>
      </div>
    </div>
  );
};
