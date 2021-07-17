import React, {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
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

export const Stepper = forwardRef<HTMLDivElement, IStepperProps>(
  (
    { activeStep, direction, size, colorType, onChange, children, ...props },
    ref,
  ) => {
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
        <StyledStepper ref={ref} direction={direction} size={size} {...props}>
          {children}
        </StyledStepper>
      </StepperContext.Provider>
    );
  },
);

Stepper.displayName = 'Stepper';

Stepper.defaultProps = {
  direction: 'horizontal',
  size: 'default',
  colorType: 'primary',
};

Stepper.propTypes = {
  activeStep: PropTypes.number,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'default']),
  colorType: PropTypes.oneOf(['primary', 'basic']),
  onChange: PropTypes.func,
};
