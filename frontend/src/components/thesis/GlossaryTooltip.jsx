import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const GlossaryTooltip = ({ term, definition, testId }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="glossary-term" data-testid={testId}>
            {term}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs" data-testid={`${testId}-content`}>
          {definition}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
