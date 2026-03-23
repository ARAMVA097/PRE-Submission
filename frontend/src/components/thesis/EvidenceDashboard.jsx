import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { DatasetCard } from "@/components/thesis/DatasetCard";
import { PublicationTimeline } from "@/components/thesis/PublicationTimeline";
import { publicationItems } from "@/data/thesisData";

const statuses = ["All", "Published", "Presented", "Accepted", "Under Review", "Revision Under Review"];
const objectives = ["All", "Foundational", "RO1", "RO2", "RO3"];

export const EvidenceDashboard = ({ selectedObjective }) => {
  const [objectiveFilter, setObjectiveFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedPublication, setSelectedPublication] = useState(publicationItems[0]);

  const filteredPubs = useMemo(() => {
    return publicationItems.filter((item) => {
      const objectiveMatch = objectiveFilter === "All" || item.objective === objectiveFilter;
      const statusMatch = statusFilter === "All" || item.status === statusFilter;
      return objectiveMatch && statusMatch;
    });
  }, [objectiveFilter, statusFilter]);

  return (
    <div className="evidence-dashboard" data-testid="evidence-dashboard-section">
      <p className="section-kicker" data-testid="evidence-kicker">
        Evidence Dashboard
      </p>
      <h2 className="section-title" data-testid="evidence-title">
        Research maturity board: Foundational → Developed → Validated → Published / Submitted
      </h2>

      <div className="evidence-grid" data-testid="evidence-grid">
        <article className="evidence-panel" data-testid="evidence-panel-datasets">
          <h3 data-testid="datasets-panel-title">Dataset map</h3>
          <DatasetCard
            objective="RO1"
            dataset="CSE-CIC-IDS2018"
            testId="dataset-card-ro1"
          />
          <DatasetCard
            objective="RO2"
            dataset="Google cluster-usage traces + PlanetLab-style CPU bursts"
            testId="dataset-card-ro2"
          />
          <DatasetCard
            objective="RO3"
            dataset="Google Cluster Trace + Alibaba Cluster"
            testId="dataset-card-ro3"
          />
        </article>

        <article className="evidence-panel" data-testid="evidence-panel-principles">
          <h3 data-testid="principles-panel-title">Evaluation principles</h3>
          <ul className="principle-list">
            <li data-testid="principle-comparative-rigor">Comparative rigor</li>
            <li data-testid="principle-multi-metric">Multi-metric assessment</li>
            <li data-testid="principle-operational-relevance">Operational relevance</li>
          </ul>
          <p className="selected-objective-note" data-testid="evidence-selected-objective-note">
            Active objective highlight: {selectedObjective}
          </p>
        </article>

        <article className="evidence-panel" data-testid="evidence-panel-publications">
          <h3 data-testid="publication-panel-title">Publication and status matrix</h3>

          <div className="filter-row" data-testid="publication-filters-objective">
            {objectives.map((objective) => (
              <Button
                key={objective}
                variant={objectiveFilter === objective ? "default" : "outline"}
                onClick={() => setObjectiveFilter(objective)}
                data-testid={`objective-filter-${objective.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {objective}
              </Button>
            ))}
          </div>

          <div className="filter-row" data-testid="publication-filters-status">
            {statuses.map((status) => (
              <Button
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                onClick={() => setStatusFilter(status)}
                data-testid={`status-filter-${status.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {status}
              </Button>
            ))}
          </div>

          <PublicationTimeline
            items={filteredPubs}
            onSelect={setSelectedPublication}
            selectedId={selectedPublication?.id}
          />

          {selectedPublication ? (
            <div className="publication-role" data-testid="selected-publication-role">
              <h4>{selectedPublication.title}</h4>
              <p>{selectedPublication.role}</p>
            </div>
          ) : null}
        </article>
      </div>
    </div>
  );
};
