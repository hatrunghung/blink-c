import { createContext, MutableRefObject, useContext } from 'react';
import { IUseAccordionPropGetters } from '../hooks/useAccordion';

export interface IAccordionContext extends IUseAccordionPropGetters {
  level: number;
  borderless?: boolean;
  size?: 'small' | 'normal';
  currentIndexRef?: MutableRefObject<number>;
  expandedSection?: number[];
}

export const AccordionContext = createContext<IAccordionContext | undefined>(
  undefined,
);

export const useAccordionContext = (): IAccordionContext => {
  const context = useContext(AccordionContext);

  if (context === undefined) {
    throw new Error(
      'You must use the component within <Accordion /> component',
    );
  }

  return context;
};
