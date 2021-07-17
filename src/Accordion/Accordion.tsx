import React, {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  RefAttributes,
  ForwardRefExoticComponent,
  PropsWithoutRef,
} from 'react';
import { AccordionContext } from '../contexts/useAccordionContext';
import { useAccordion } from '../hooks/useAccordion';
import { StyledAccordion } from './StyledAccordion';
import { AccordionSection } from './AccordionSection';
import { AccordionHeader } from './AccordionHeader';
import { AccordionLabel } from './AccordionLabel';
import { AccordionPanel } from './AccordionPanel';

export interface IAccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  level: number;
  accordionType?: 'basic' | 'borderless' | 'ghost';
  isAnimated?: boolean;
  isExpandable?: boolean;
  onChange?: (index: number) => void;
}

interface IStaticAccordionExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Section: typeof AccordionSection;
  Header: typeof AccordionHeader;
  Label: typeof AccordionLabel;
  Panel: typeof AccordionPanel;
}

export const Accordion = forwardRef<HTMLDivElement & IAccordionProps>(
  (
    {
      level,
      accordionType,
      isAnimated,
      onChange,
      isExpandable,
      children,
      ...props
    },
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
        isAnimated,
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
        isAnimated,
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
) as IStaticAccordionExport<HTMLDivElement, IAccordionProps>;

Accordion.Section = AccordionSection;
Accordion.Header = AccordionHeader;
Accordion.Label = AccordionLabel;
Accordion.Panel = AccordionPanel;

Accordion.displayName = 'Accordion';

Accordion.defaultProps = {
  isAnimated: true,
  accordionType: 'basic',
  isExpandable: true,
  onChange: () => undefined,
};
