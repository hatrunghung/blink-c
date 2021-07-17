import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { useAccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledButtonLabel } from './StyledButtonLabel';

export const AccordionLabel = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const {
    expandedSection,
    accordionType,
    getButtonTriggerProps,
  } = useAccordionContext();
  const sectionIndex = useAccordionSectionContext();

  const isExpanded = expandedSection.includes(sectionIndex);

  return (
    <StyledButtonLabel
      {...getButtonTriggerProps({
        ref,
        index: sectionIndex,
        isExpanded,
        accordionType,
      })}
    >
      {props.children}
    </StyledButtonLabel>
  );
});

AccordionLabel.displayName = 'AccordionLabel';
