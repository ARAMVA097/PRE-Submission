import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const triangleNodes = [
  { id: "RO1", title: "RO1: Governance" },
  { id: "RO2", title: "RO2: Stability" },
  { id: "RO3", title: "RO3: Assurance" },
];

const edgeMap = {
  "RO1-RO2": "RO1 → RO2: usage regulation shapes allocation conditions.",
  "RO2-RO3": "RO2 → RO3: stability shapes SLA compliance envelope.",
  "RO3-RO1": "RO3 → RO1/RO2: feedback informs future governance and allocation.",
};

export const ObjectiveTriangle = ({ selectedObjective, setSelectedObjective }) => {
  const [activeEdge, setActiveEdge] = useState("RO1-RO2");

  return (
    <div className="objective-triangle" data-testid="objective-triangle-section">
      <h3 className="subsection-title" data-testid="objective-triangle-title">
        Interactive Objective Triangle
      </h3>

      <div className="triangle-shell" data-testid="objective-triangle-shell">
        {triangleNodes.map((node, idx) => (
          <button
            key={node.id}
            type="button"
            className={`triangle-node triangle-node--${idx + 1} ${
              selectedObjective === node.id ? "is-selected" : ""
            }`}
            onClick={() => setSelectedObjective(node.id)}
            data-testid={`triangle-node-${node.id.toLowerCase()}`}
          >
            {node.title}
          </button>
        ))}

        <Dialog>
          <DialogTrigger asChild>
            <button
              className="triangle-center"
              type="button"
              data-testid="objective-triangle-center-node"
            >
              Sustaining Trust and QoS in shared cloud systems
            </button>
          </DialogTrigger>
          <DialogContent data-testid="objective-center-modal">
            <DialogHeader>
              <DialogTitle data-testid="objective-center-modal-title">
                Integrated Thesis Premise
              </DialogTitle>
              <DialogDescription data-testid="objective-center-modal-description">
                This thesis unifies governance, stability, and assurance to demonstrate that
                trust and QoS are emergent system outcomes.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div className="rotating-ring" />
      </div>

      <div className="edge-controls" data-testid="triangle-edge-controls">
        {Object.keys(edgeMap).map((edge) => (
          <Button
            key={edge}
            variant={activeEdge === edge ? "default" : "outline"}
            onClick={() => setActiveEdge(edge)}
            data-testid={`triangle-edge-${edge.toLowerCase()}`}
          >
            {edge.replace("-", " ↔ ")}
          </Button>
        ))}
      </div>

      <p className="edge-explainer" data-testid="triangle-edge-explanation">
        {edgeMap[activeEdge]}
      </p>
    </div>
  );
};
