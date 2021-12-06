import React, { HTMLAttributes, forwardRef } from 'react';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { useAccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledInnerPanel } from './styles/StyledInnerPanel';
import { StyledPanel } from './styles/StyledPanel';

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
      <StyledInnerPanel isExpanded={isExpanded}>
        {props.children}
      </StyledInnerPanel>
    </StyledPanel>
  );
});

AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
