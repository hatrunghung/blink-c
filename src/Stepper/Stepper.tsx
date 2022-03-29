import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { StepperContext } from '../contexts/useStepperContext';
import { StyledStepper } from './styles/StyledStepper';
import Step from './Step';
import StepLabel from './StepLabel';
import StepContent from './StepContent';
import StepTitle from './StepTitle';
import StepDescription from './StepDescription';

export interface IStepperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  activeStep: number;
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'default';
  colorType?: 'primary' | 'basic';
  onChange?: (index: number) => void;
}

const Stepper = forwardRef<HTMLDivElement, IStepperProps>(
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

(Stepper as any).Step = Step;
(Stepper as any).Label = StepLabel;
(Stepper as any).Content = StepContent;
(Stepper as any).Title = StepTitle;
(Stepper as any).Description = StepDescription;

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

export default Stepper as ForwardRefExoticComponent<
  IStepperProps & RefAttributes<HTMLDivElement>
> & {
  Step: typeof Step;
  Label: typeof StepLabel;
  Content: typeof StepContent;
  Title: typeof StepTitle;
  Description: typeof StepDescription;
};
