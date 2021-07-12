import React, { HTMLAttributes, FunctionComponent } from 'react';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { useAccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledPanel } from './StyledPanel';

export const AccordionPanel: FunctionComponent &
  HTMLAttributes<HTMLDivElement> = props => {
  const {
    accordionType,
    expandedSection,
    isAnimated,
    getPanelProps,
  } = useAccordionContext();
  const sectionIndex = useAccordionSectionContext();

  const isExpanded = expandedSection === sectionIndex;

  return (
    <StyledPanel
      {...getPanelProps({
        index: sectionIndex,
        accordionType,
        isExpanded,
        isAnimated,
      })}
    >
      {props.children}
    </StyledPanel>
  );
};
