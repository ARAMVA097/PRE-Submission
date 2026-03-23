import { useEffect, useMemo, useState } from "react";

const parseMetricValue = (value) => {
  const numeric = Number.parseFloat(String(value).replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : null;
};

export const MetricCard = ({
  title,
  value,
  description,
  isActive,
  onClick,
  testId,
}) => {
  const target = useMemo(() => parseMetricValue(value), [value]);
  const [display, setDisplay] = useState(target ? 0 : value);

  useEffect(() => {
    if (!target) {
      setDisplay(value);
      return undefined;
    }

    let frame;
    const started = performance.now();
    const duration = 900;

    const tick = (time) => {
      const progress = Math.min((time - started) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const next = target * eased;
      setDisplay(next.toFixed(target % 1 === 0 ? 0 : 2));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, value]);

  const suffix = target ? String(value).replace(/[0-9.]/g, "") : "";

  return (
    <button
      type="button"
      className={`metric-card ${isActive ? "is-active" : ""}`}
      onClick={onClick}
      data-testid={testId}
    >
      <p className="metric-card__title" data-testid={`${testId}-title`}>
        {title}
      </p>
      <p className="metric-card__value" data-testid={`${testId}-value`}>
        {display}
        {suffix}
      </p>
      <p className="metric-card__desc" data-testid={`${testId}-description`}>
        {description}
      </p>
    </button>
  );
};
