import React, { forwardRef, HTMLAttributes, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { AccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledAccordionSection } from './styles/StyledAccordionSection';

interface IAccordionSection extends HTMLAttributes<HTMLDivElement> {
  isDisabled?: boolean;
}

export const AccordionSection = forwardRef<HTMLDivElement, IAccordionSection>(
  (props, ref) => {
    const { currentIndexRef } = useAccordionContext();
    const sectionIndexRef = useRef(currentIndexRef.current++);
    const sectionIndex = sectionIndexRef.current;

    const contextValue = useMemo(
      () => ({
        sectionIndex,
        isDisabled: props.isDisabled,
      }),
      [sectionIndex, props.isDisabled],
    );

    return (
      <AccordionSectionContext.Provider value={contextValue}>
        <StyledAccordionSection ref={ref} {...props} />
      </AccordionSectionContext.Provider>
    );
  },
);
AccordionSection.displayName = 'AccordionSection';

AccordionSection.propTypes = {
  isDisabled: PropTypes.bool,
};
