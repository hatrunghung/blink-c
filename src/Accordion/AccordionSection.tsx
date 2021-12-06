import React, { forwardRef, HTMLAttributes, useRef } from 'react';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { AccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledAccordionSection } from './styles/StyledAccordionSection';

const AccordionSection = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { currentIndexRef } = useAccordionContext();
  const sectionIndexRef = useRef(currentIndexRef.current++);
  const sectionIndex = sectionIndexRef.current;

  return (
    <AccordionSectionContext.Provider value={sectionIndex}>
      <StyledAccordionSection ref={ref} {...props} />
    </AccordionSectionContext.Provider>
  );
});
AccordionSection.displayName = 'AccordionSection';

export default AccordionSection;
