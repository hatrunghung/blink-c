import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { useAccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledButtonLabel } from './StyledButtonLabel';

export const AccordionLabel: FunctionComponent &
  ButtonHTMLAttributes<HTMLButtonElement> = props => {
  const {
    expandedSection,
    accordionType,
    getButtonTriggerProps,
  } = useAccordionContext();
  const sectionIndex = useAccordionSectionContext();

  // console.log('sectionIndex in label', sectionIndex);

  const isExpanded = expandedSection === sectionIndex;

  return (
    <StyledButtonLabel
      {...getButtonTriggerProps({
        index: sectionIndex,
        isExpanded,
        accordionType,
      })}
    >
      {props.children}
    </StyledButtonLabel>
  );
};
