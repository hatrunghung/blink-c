import { createContext, useContext } from 'react';

export interface ISectionContext {
  sectionIndex: number;
  isDisabled?: boolean;
}

export const AccordionSectionContext = createContext<
  ISectionContext | undefined
>(undefined);

export const useAccordionSectionContext = (): ISectionContext => {
  const context = useContext(AccordionSectionContext);

  if (context === undefined) {
    throw new Error(
      'This component must be rendered within a AccordionSection component',
    );
  }

  return context;
};
