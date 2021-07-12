import { createContext, MutableRefObject, useContext } from 'react';

export interface IStepperContext {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'default';
  colorType?: 'primary' | 'basic';
  currentIndexRef?: MutableRefObject<number>;
  activeStep?: number;
}

export const StepperContext = createContext<IStepperContext | undefined>(
  undefined,
);

export const useStepperContext = (): IStepperContext => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error('You must use the component within <Stepper /> component');
  }

  return context;
};
