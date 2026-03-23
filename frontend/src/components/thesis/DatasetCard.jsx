export const DatasetCard = ({ objective, dataset, testId }) => {
  return (
    <article className="dataset-card" data-testid={testId}>
      <p className="dataset-card__objective" data-testid={`${testId}-objective`}>
        {objective}
      </p>
      <h4 className="dataset-card__name" data-testid={`${testId}-dataset`}>
        {dataset}
      </h4>
    </article>
  );
};
