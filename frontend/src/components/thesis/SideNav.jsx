import { thesisMeta } from "@/data/thesisData";

export const SideNav = ({ sections, activeSection, onNavigate }) => {
  return (
    <aside className="side-nav" data-testid="side-nav">
      <div className="side-nav__header" data-testid="side-nav-header">
        <p className="side-nav__eyebrow" data-testid="side-nav-eyebrow">
          Interactive Thesis Map
        </p>
        <h1 className="side-nav__title" data-testid="side-nav-title">
          Trust & QoS
        </h1>
        <p className="side-nav__subtitle" data-testid="side-nav-subtitle">
          {thesisMeta.title}
        </p>
      </div>

      <nav className="side-nav__menu" data-testid="side-nav-menu">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onNavigate(section.id)}
            className={`side-nav__item ${activeSection === section.id ? "is-active" : ""}`}
            data-testid={`side-nav-item-${section.id}`}
          >
            <span className="side-nav__index" data-testid={`side-nav-index-${section.id}`}>
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="side-nav__label" data-testid={`side-nav-label-${section.id}`}>
              {section.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
