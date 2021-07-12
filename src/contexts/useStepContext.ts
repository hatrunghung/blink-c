import { createContext, useContext } from 'react';

export interface IStepContext {
  currentStepIndex: number;
}

export const StepContext = createContext<IStepContext | undefined>(undefined);

export const useStepContext = (): IStepContext => {
  const context = useContext(StepContext);

  if (!context) {
    throw new Error(
      'This component must be used within the <Step /> component',
    );
  }

  return context;
};
