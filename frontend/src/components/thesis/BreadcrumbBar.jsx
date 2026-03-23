import { Progress } from "@/components/ui/progress";

const breadcrumbStages = ["Challenge", "Gap", "Objective", "Method", "Outcome", "Integration"];

export const BreadcrumbBar = ({ currentSectionLabel, currentStage, progressValue }) => {
  const activeStageIndex = breadcrumbStages.indexOf(currentStage);

  return (
    <header className="breadcrumb-bar" data-testid="breadcrumb-bar">
      <div className="breadcrumb-bar__top">
        <div data-testid="current-section-label">
          <p className="breadcrumb-bar__label">Current Section</p>
          <h2 className="breadcrumb-bar__section">{currentSectionLabel}</h2>
        </div>
        <p className="breadcrumb-bar__progress" data-testid="progress-value-label">
          {Math.round(progressValue)}% complete
        </p>
      </div>

      <div className="mini-breadcrumb" data-testid="mini-breadcrumb">
        {breadcrumbStages.map((stage, idx) => (
          <div key={stage} className="mini-breadcrumb__item" data-testid={`breadcrumb-stage-${stage}`}>
            <span className={idx <= activeStageIndex ? "is-active" : ""}>{stage}</span>
            {idx < breadcrumbStages.length - 1 ? <span className="arrow">→</span> : null}
          </div>
        ))}
      </div>

      <Progress value={progressValue} className="breadcrumb-progress" data-testid="top-progress-bar" />
    </header>
  );
};
