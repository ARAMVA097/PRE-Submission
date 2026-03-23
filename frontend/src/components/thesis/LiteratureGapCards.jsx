import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExpandablePanel } from "@/components/thesis/ExpandablePanel";
import { literatureStreams } from "@/data/thesisData";

export const LiteratureGapCards = ({ selectedObjective, setSelectedObjective }) => {
  const [viewMode, setViewMode] = useState("literature");

  const selectedStream = useMemo(
    () => literatureStreams.find((stream) => stream.objective === selectedObjective),
    [selectedObjective],
  );

  return (
    <div className="literature-section" data-testid="literature-gap-section">
      <p className="section-kicker" data-testid="literature-kicker">
        Literature and Gap Engine
      </p>
      <h2 className="section-title" data-testid="literature-title">
        Before → Weakness → Gap
      </h2>

      <div className="literature-toggle" data-testid="literature-view-toggle">
        <Button
          variant={viewMode === "literature" ? "default" : "outline"}
          onClick={() => setViewMode("literature")}
          data-testid="literature-toggle-literature"
        >
          Literature view
        </Button>
        <Button
          variant={viewMode === "gap" ? "default" : "outline"}
          onClick={() => setViewMode("gap")}
          data-testid="literature-toggle-gap"
        >
          Gap view
        </Button>
      </div>

      <div className="stream-grid" data-testid="literature-stream-grid">
        {literatureStreams.map((stream) => (
          <article
            key={stream.id}
            className={`stream-card ${selectedObjective === stream.objective ? "is-highlighted" : ""}`}
            onMouseEnter={() => setSelectedObjective(stream.objective)}
            data-testid={`literature-stream-${stream.objective.toLowerCase()}`}
          >
            <p className="stream-card__objective" data-testid={`stream-objective-${stream.objective}`}>
              {stream.objective}
            </p>
            <h3 data-testid={`stream-title-${stream.objective}`}>{stream.title}</h3>

            {viewMode === "literature" ? (
              <>
                <p className="stream-label">Existing focus</p>
                <p data-testid={`stream-tendency-${stream.objective}`}>{stream.tendency}</p>
                <p className="stream-label">Critical weakness</p>
                <p data-testid={`stream-weakness-${stream.objective}`}>{stream.weakness}</p>
                <Button
                  variant="secondary"
                  className="mt-3"
                  onClick={() => setViewMode("gap")}
                  data-testid={`stream-see-gap-${stream.objective}`}
                >
                  See gap
                </Button>
              </>
            ) : (
              <>
                <p className="stream-label">Identified gap</p>
                <p data-testid={`stream-gap-${stream.objective}`}>{stream.gap}</p>
              </>
            )}
          </article>
        ))}
      </div>

      <ExpandablePanel
        title="Foundational SLR and Five-Perspective Taxonomy"
        value="slr"
        testId="slr-expandable-panel"
      >
        <p data-testid="slr-panel-content">
          The thesis problem was derived from a structured survey and taxonomy exercise,
          demonstrating coherent problem selection rather than ad hoc topic assembly.
        </p>
      </ExpandablePanel>

      {selectedStream ? (
        <div className="selected-gap-note" data-testid="selected-gap-note">
          <strong>{selectedStream.objective}</strong> currently highlighted across the thesis map.
        </div>
      ) : null}
    </div>
  );
};
