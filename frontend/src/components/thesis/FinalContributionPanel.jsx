import { thesisMeta } from "@/data/thesisData";

export const FinalContributionPanel = () => {
  return (
    <div className="final-contribution" data-testid="final-contribution-section">
      <p className="section-kicker" data-testid="final-kicker">
        Final Thesis Contribution
      </p>
      <h2 className="section-title" data-testid="final-title">
        Unified doctoral closure
      </h2>

      <div className="synthesis-board" data-testid="final-synthesis-board">
        <article className="synthesis-item" data-testid="synthesis-what-thesis-does">
          <h3>What the thesis does</h3>
          <p>
            Develops a coordinated dimensional framework for Trust and QoS-aware cloud service
            management.
          </p>
        </article>

        <article className="synthesis-item" data-testid="synthesis-what-it-proves">
          <h3>What it proves</h3>
          <p>{thesisMeta.anchor}</p>
        </article>

        <article className="synthesis-item" data-testid="synthesis-why-thesis-level">
          <h3>Why it is thesis-level</h3>
          <p>
            Integrates formal problem derivation, targeted objectives, implemented mechanisms,
            real-world evaluation, and publication-backed outcomes into one coherent contribution.
          </p>
        </article>
      </div>

      <p className="final-cta" data-testid="final-cta">
        Ready for formal submission and examination.
      </p>
    </div>
  );
};
