import React, {
  forwardRef,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { AccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledAccordionSection } from './StyledAccordionSection';

export interface IAccordionSectionProps {
  children?: ReactNode;
  isDisabled?: boolean;
}

export const AccordionSection: FunctionComponent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { accordionType, currentIndexRef } = useAccordionContext();
  const sectionIndexRef = useRef(currentIndexRef.current++);
  const sectionIndex = sectionIndexRef.current;

  return (
    <AccordionSectionContext.Provider value={sectionIndex}>
      <StyledAccordionSection
        accordionType={accordionType}
        ref={ref}
        {...props}
      />
    </AccordionSectionContext.Provider>
  );
});
AccordionSection.displayName = 'AccordionSection';

AccordionSection.propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
};
