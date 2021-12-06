import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { useAccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledButtonLabel } from './styles/StyledButtonLabel';

export const AccordionLabel = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const {
    expandedSection,
    accordionSize,
    getButtonTriggerProps,
  } = useAccordionContext();
  const { sectionIndex, isDisabled } = useAccordionSectionContext();

  const isExpanded = expandedSection.includes(sectionIndex);

  return (
    <StyledButtonLabel
      {...getButtonTriggerProps({
        ref,
        index: sectionIndex,
        isExpanded,
        isDisabled,
        accordionSize,
      })}
    >
      {props.children}
    </StyledButtonLabel>
  );
});

AccordionLabel.displayName = 'AccordionLabel';
