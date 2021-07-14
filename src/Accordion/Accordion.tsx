import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { AccordionContext } from '../contexts/useAccordionContext';
import { useAccordion } from '../hooks/useAccordion';
import { StyledAccordion } from './StyledAccordion';

export interface IAccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  level: number;
  accordionType?: 'basic' | 'borderless' | 'ghost';
  isAnimated?: boolean;
  isExpandable?: boolean;
  children?: ReactNode;
  onChange?: (index: number) => void;
}

export const Accordion: FunctionComponent & HTMLAttributes<HTMLDivElement> = ({
  level,
  accordionType,
  isAnimated = true,
  onChange,
  isExpandable,
  children,
  ...props
}: IAccordionProps) => {
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
      <StyledAccordion {...props}>{children}</StyledAccordion>
    </AccordionContext.Provider>
  );
};

Accordion.displayName = 'Accordion';

Accordion.defaultProps = {
  isAnimated: true,
  accordionType: 'basic',
  onChange: () => undefined,
};
