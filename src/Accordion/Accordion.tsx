/* eslint-disable react/prop-types */
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
import { StyledAccordion } from './styles/StyledAccordion';
import { AccordionSection } from './AccordionSection';
import AccordionHeader from './AccordionHeader';
import AccordionLabel from './AccordionLabel';
import AccordionPanel from './AccordionPanel';

interface IStaticAccordionExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Section: typeof AccordionSection;
  Header: typeof AccordionHeader;
  Label: typeof AccordionLabel;
  Panel: typeof AccordionPanel;
}

export interface IAccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  level: number;
  isExpandable?: boolean;
  accordionSize?: 'small' | 'normal';
  borderless?: boolean;
  onChange?: (index: number) => void;
}

export const Accordion = forwardRef<HTMLDivElement, IAccordionProps>(
  (
    { isExpandable, onChange, level, accordionSize, borderless, ...props },
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

    const contextValue = useMemo(
      () => ({
        level,
        getHeaderProps,
        getButtonTriggerProps,
        getPanelProps,
        expandedSection,
        currentIndexRef,
        borderless,
        accordionSize,
      }),
      [
        level,
        getHeaderProps,
        getButtonTriggerProps,
        getPanelProps,
        expandedSection,
        currentIndexRef,
        borderless,
        accordionSize,
      ],
    );

    return (
      <AccordionContext.Provider value={contextValue}>
        <StyledAccordion ref={ref} {...props} />
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
  borderless: false,
  isExpandable: false,
  accordionSize: 'normal',
  onChange: () => undefined,
};
