import { createContext, useContext } from 'react';

export interface ISectionContext {
  sectionIndex: number;
}

export const AccordionSectionContext = createContext<number | undefined>(
  undefined,
);

export const useAccordionSectionContext = (): number => {
  const context = useContext(AccordionSectionContext);

  if (context === undefined) {
    throw new Error(
      'This component must be rendered within a AccordionSection component',
    );
  }

  return context;
};
