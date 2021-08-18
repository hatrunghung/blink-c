import React, { HTMLAttributes, forwardRef } from 'react';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { useAccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledPanel } from './StyledPanel';

const AccordionPanel = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const {
    accordionType,
    expandedSection,
    getPanelProps,
  } = useAccordionContext();
  const sectionIndex = useAccordionSectionContext();

  const isExpanded = expandedSection.includes(sectionIndex);

  return (
    <StyledPanel
      {...getPanelProps({
        ref,
        index: sectionIndex,
        accordionType,
        isExpanded,
      })}
    >
      {props.children}
    </StyledPanel>
  );
});

AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
