import { Button } from "@/components/ui/button";
import { heroKeywords, thesisMeta } from "@/data/thesisData";

export const HeroSection = ({ onKeywordClick, onEnter }) => {
  return (
    <div className="hero-section" data-testid="hero-section">
      <p className="section-kicker" data-testid="hero-kicker">
        Thesis Identity
      </p>
      <h2 className="section-title" data-testid="hero-title">
        {thesisMeta.title}
      </h2>
      <p className="section-subtitle" data-testid="hero-subline">
        {thesisMeta.subline}
      </p>

      <div className="hero-map" data-testid="hero-thesis-map">
        <div className="hero-map__center" data-testid="hero-map-center-node">
          <p>Integrated Dimensional Thesis</p>
        </div>

        {heroKeywords.map((keyword, index) => (
          <button
            key={keyword}
            type="button"
            onClick={() => onKeywordClick(keyword)}
            className="hero-map__keyword"
            style={{ "--idx": index }}
            data-testid={`hero-keyword-${keyword.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {keyword}
          </button>
        ))}
      </div>

      <p className="anchor-statement" data-testid="hero-anchor-statement">
        {thesisMeta.anchor}
      </p>

      <Button
        onClick={onEnter}
        className="primary-pill"
        data-testid="hero-enter-thesis-map-button"
      >
        Enter Thesis Map
      </Button>
    </div>
  );
};
