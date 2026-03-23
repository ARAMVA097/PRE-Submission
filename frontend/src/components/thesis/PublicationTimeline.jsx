export const PublicationTimeline = ({ items, onSelect, selectedId }) => {
  return (
    <div className="publication-timeline" data-testid="publication-timeline">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item)}
          className={`publication-card ${selectedId === item.id ? "is-active" : ""}`}
          data-testid={`publication-card-${item.id}`}
        >
          <p className="publication-card__status" data-testid={`publication-status-${item.id}`}>
            {item.status}
          </p>
          <h4 className="publication-card__title" data-testid={`publication-title-${item.id}`}>
            {item.title}
          </h4>
          <p className="publication-card__meta" data-testid={`publication-meta-${item.id}`}>
            {item.objective} • {item.venue}
          </p>
        </button>
      ))}
    </div>
  );
};
