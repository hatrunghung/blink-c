import React, {
  FunctionComponent,
  HTMLAttributes,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { StepperContext } from '../contexts/useStepperContext';
import { StyledStepper } from './StyledStepper';

export interface IStepperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  activeStep: number;
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'default';
  colorType?: 'primary' | 'basic';
  onChange?: (index: number) => void;
}

export const Stepper: FunctionComponent & HTMLAttributes<HTMLDivElement> = ({
  activeStep,
  direction,
  size,
  colorType,
  onChange,
  children,
  ...props
}: IStepperProps) => {
  const currentIndexRef = useRef(0);

  useEffect(() => {
    currentIndexRef.current = 0;
  });

  const value = useMemo(
    () => ({
      direction,
      size,
      colorType,
      status,
      onChange,
      activeStep,
      currentIndexRef,
    }),
    [direction, size, colorType, onChange, activeStep, currentIndexRef],
  );

  return (
    <StepperContext.Provider value={value}>
      <StyledStepper direction={direction} size={size} {...props}>
        {children}
      </StyledStepper>
    </StepperContext.Provider>
  );
};

Stepper.displayName = 'Stepper';

Stepper.defaultProps = {
  direction: 'horizontal',
  size: 'default',
  colorType: 'primary',
};
