import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ExpandablePanel = ({ title, children, value, testId }) => {
  return (
    <div className="expandable-panel" data-testid={testId}>
      <Accordion type="single" collapsible>
        <AccordionItem value={value}>
          <AccordionTrigger data-testid={`${testId}-trigger`}>{title}</AccordionTrigger>
          <AccordionContent data-testid={`${testId}-content`}>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
