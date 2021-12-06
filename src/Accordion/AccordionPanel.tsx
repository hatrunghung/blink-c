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
    expandedSection,
    getPanelProps,
    accordionSize,
    borderless,
  } = useAccordionContext();
  const { sectionIndex } = useAccordionSectionContext();

  const isExpanded = expandedSection.includes(sectionIndex);

  return (
    <StyledPanel
      {...getPanelProps({
        ref,
        index: sectionIndex,
        isExpanded,
        borderless,
      })}
    >
      <StyledInnerPanel isExpanded={isExpanded} accordionSize={accordionSize}>
        {props.children}
      </StyledInnerPanel>
    </StyledPanel>
  );
});

AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
