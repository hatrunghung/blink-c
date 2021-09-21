import React, {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react';
import { AccordionContext } from '../contexts/useAccordionContext';
import { useAccordion } from '../hooks/useAccordion';
import { StyledAccordion } from './StyledAccordion';
import AccordionSection from './AccordionSection';
import AccordionHeader from './AccordionHeader';
import AccordionLabel from './AccordionLabel';
import AccordionPanel from './AccordionPanel';

export interface IAccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  level: number;
  accordionType?: 'basic' | 'borderless' | 'ghost';
  isExpandable?: boolean;
  onChange?: (index: number) => void;
}

const Accordion = forwardRef<HTMLDivElement, IAccordionProps>(
  (
    {
      level,
      accordionType = 'basic',
      isExpandable = true,
      onChange,
      children,
      ...props
    }: IAccordionProps,
    ref,
  ) => {
    const {
      getHeaderProps,
      getButtonTriggerProps,
      getPanelProps,
      expandedSection,
    } = useAccordion({ onChange, expandable: isExpandable });

    const currentIndexRef = useRef(0);

    useEffect(() => {
      currentIndexRef.current = 0;
    });

    const value = useMemo(
      () => ({
        level,
        accordionType,
        isExpandable,
        currentIndexRef,
        getHeaderProps,
        getButtonTriggerProps,
        getPanelProps,
        expandedSection,
      }),
      [
        level,
        accordionType,
        isExpandable,
        currentIndexRef,
        getHeaderProps,
        getButtonTriggerProps,
        getPanelProps,
        expandedSection,
      ],
    );

    return (
      <AccordionContext.Provider value={value}>
        <StyledAccordion ref={ref} {...props}>
          {children}
        </StyledAccordion>
      </AccordionContext.Provider>
    );
  },
);

(Accordion as any).Section = AccordionSection;
(Accordion as any).Header = AccordionHeader;
(Accordion as any).Label = AccordionLabel;
(Accordion as any).Panel = AccordionPanel;

Accordion.displayName = 'Accordion';

export default Accordion as ForwardRefExoticComponent<
  IAccordionProps & RefAttributes<HTMLDivElement>
> & {
  Section: typeof AccordionSection;
  Header: typeof AccordionHeader;
  Label: typeof AccordionLabel;
  Panel: typeof AccordionPanel;
};
